from flask import Flask
from flask_cors import CORS

from routes.interview_routes import interview_bp
from routes.emotion_routes import emotion_bp

app = Flask(__name__)

CORS(app)

# ROUTES
app.register_blueprint(interview_bp)
app.register_blueprint(emotion_bp)


@app.route("/")
def home():

    return {
        "message":"Backend Running Successfully"
    }


if __name__ == "__main__":

    app.run(debug=True)