from flask import Blueprint, request

from controllers.interview_controller import get_question


interview_bp = Blueprint(
    "interview_bp",
    __name__
)


@interview_bp.route("/api/question")

def question():

    course = request.args.get("course")

    return get_question(course)