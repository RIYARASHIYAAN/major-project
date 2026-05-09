import random

# COMMON HR QUESTIONS

common_questions = [

    "Tell me about yourself",

    "Explain your final year project",

    "What are your strengths?",

    "Why should we hire you?",

    "Where do you see yourself in 5 years?"

]



# COURSE QUESTIONS

course_questions = {

    "AI/ML":[

        "What is Machine Learning?",

        "Difference between AI and ML?",

        "Explain Neural Networks",

        "What is Deep Learning?",

        "Explain supervised learning"

    ],


    "Web Development":[

        "What is HTML?",

        "Difference between CSS and Bootstrap?",

        "Explain JavaScript",

        "What is Responsive Design?",

        "What is React?"

    ],


    "Data Science":[

        "What is Data Science?",

        "Explain Data Analysis",

        "What is Pandas?",

        "Explain NumPy",

        "What is Data Visualization?"

    ],


    "Cyber Security":[

        "What is Cyber Security?",

        "Explain Firewall",

        "What is Ethical Hacking?",

        "Explain Phishing",

        "What is Network Security?"

    ]

}



def get_question(course):

    technical_questions = course_questions.get(course, [])

    all_questions = common_questions + technical_questions

    return {
        "questions": all_questions
    }