// COMMON HR QUESTIONS

const commonQuestions = [

  "Tell me about yourself",

  "Explain your final year project",

  "What are your strengths?",

  "Why should we hire you?",

  "Where do you see yourself in 5 years?",

  "What are your weaknesses?"

];




// COURSE QUESTIONS

const courseQuestions = {

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

};
// ELEMENTS
const questionText =
  document.getElementById("questionText");

const startBtn =
  document.getElementById("startBtn");

const nextBtn =
  document.getElementById("nextBtn");

const answerBox =
  document.getElementById("answerBox");

const submitBtn =
  document.getElementById("submitBtn");

const submittedAnswer =
  document.getElementById("submittedAnswer");


function askQuestion(){

  const selectedCourse =
    courseSelect.value;

  const technicalQuestions =
    courseQuestions[selectedCourse];



  // COMBINE QUESTIONS

  const allQuestions = [

    ...commonQuestions,

    ...technicalQuestions

  ];



  const randomQuestion =
    allQuestions[
      Math.floor(Math.random()*allQuestions.length)
    ];


  questionText.innerText =
    randomQuestion;

    // CLEAR OLD ANSWER

answerBox.value = "";

submittedAnswer.innerText = "";



  // AI VOICE

  const speech =
    new SpeechSynthesisUtterance(randomQuestion);

  speech.rate = 1;

  speech.pitch = 1;

  speech.volume = 1;

  window.speechSynthesis.speak(speech);

}


// START INTERVIEW
startBtn.addEventListener("click", askQuestion);


// NEXT QUESTION
nextBtn.addEventListener("click", askQuestion);


// SUBMIT ANSWER
submitBtn.addEventListener("click", ()=>{

    const answer =
      answerBox.value;

    // EMPTY CHECK
    if(answer.trim() === ""){

        alert("Please type your answer");

        return;
    }

    // SHOW SUBMITTED ANSWER
    submittedAnswer.innerText =
      answer;

});




// WEBCAM
const webcam =
  document.getElementById("webcam");


// OPEN CAMERA
async function startWebcam(){

    try{

        const stream =
          await navigator.mediaDevices.getUserMedia({
              video:true,
              audio:false
          });

        webcam.srcObject = stream;

    }

    catch(error){

        console.log("Webcam Error:", error);

        alert(
          "Camera access denied or webcam not available"
        );
    }
}


// START CAMERA
startWebcam();




// FAKE EMOTION DETECTION
setInterval(()=>{

  const confidenceData = [

    "Confidence: Excellent 😎",

    "Confidence: Good 🙂",

    "Confidence: Moderate 😐",

    "Confidence: Low 😟"

  ];



  const eyeData = [

    "Eye Contact: Good 👀",

    "Eye Contact: Improve 👀"

  ];



  const postureData = [

    "Posture: Straight 👍",

    "Posture: Slouching ⚠️"

  ];



  const nervousData = [

    "Nervousness: Low 😊",

    "Nervousness: Medium 😐",

    "Nervousness: High 😟"

  ];



  document.getElementById("confidence")
    .innerText =
      confidenceData[Math.floor(Math.random()*confidenceData.length)];


  document.getElementById("eyeContact")
    .innerText =
      eyeData[Math.floor(Math.random()*eyeData.length)];


  document.getElementById("posture")
    .innerText =
      postureData[Math.floor(Math.random()*postureData.length)];


  document.getElementById("nervousness")
    .innerText =
      nervousData[Math.floor(Math.random()*nervousData.length)];


},4000);