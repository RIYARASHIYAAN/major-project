from flask import Blueprint

from controllers.emotion_controller import get_emotion

emotion_bp = Blueprint(
    "emotion_bp",
    __name__
)

@emotion_bp.route("/api/emotion")
def emotion():

    return get_emotion()