import random

def get_emotion():

    confidence = [

        "Excellent",

        "Good",

        "Moderate",

        "Low"
    ]


    eye_contact = [

        "Good",

        "Improve"
    ]


    posture = [

        "Straight",

        "Slouching"
    ]


    return {

        "confidence":
        random.choice(confidence),

        "eye_contact":
        random.choice(eye_contact),

        "posture":
        random.choice(posture)
    }