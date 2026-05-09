import random

questions = [

    "Tell me about yourself",

    "Explain your project",

    "What are your strengths?",

    "What is Artificial Intelligence?",

    "Explain DBMS"

]


def get_question():

    return {
        "question":
        random.choice(questions)
    }