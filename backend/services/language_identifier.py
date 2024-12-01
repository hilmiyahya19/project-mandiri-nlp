from flask import Blueprint, request, jsonify
from langdetect import detect, detect_langs
import pycountry

# Create a Blueprint for the Language Identifier service
language_identifier_blueprint = Blueprint('language_identifier', __name__)

def get_language_name(code):
    """
    Get the full name of the language from its ISO code.
    """
    try:
        return pycountry.languages.get(alpha_2=code).name
    except AttributeError:
        return code  # If the language name is not found, return the code itself

@language_identifier_blueprint.route('/identify', methods=['POST'])
def identify_language():
    """
    Identify the language of the given text.
    """
    try:
        # Parse JSON data from the request
        data = request.json
        text = data.get("text", "")
        if not text:
            return jsonify({"error": "No text provided"}), 400

        # Detect the primary language
        detected_language = detect(text)

        # Get probabilities of possible languages
        possible_languages = [
            {
                "language": lang.lang,
                "language_name": get_language_name(lang.lang),
                "probability": lang.prob,
            }
            for lang in detect_langs(text)
        ]

        return jsonify({
            "input_text": text,
            "detected_language": detected_language,
            "detected_language_name": get_language_name(detected_language),
            "possible_languages": possible_languages,
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500
