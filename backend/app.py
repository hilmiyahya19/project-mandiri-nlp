from flask import Flask
from flask_cors import CORS
from services.language_identifier import language_identifier_blueprint

app = Flask(__name__)
CORS(app)

# Register Blueprints
app.register_blueprint(language_identifier_blueprint, url_prefix='/identify_language')

@app.route('/')
def home():
    return "Flask API is running. Available endpoints: /identify_language"

if __name__ == '__main__':
    app.run(debug=True)
