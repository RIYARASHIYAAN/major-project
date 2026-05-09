const questions = [

  "Tell me about yourself",

  "Explain your final year project",

  "What are your strengths?",

  "Why should we hire you?",

  "What is Artificial Intelligence?",

  "Explain DBMS",

  "What is Machine Learning?",

  "Explain your role in the project"

];


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


// ASK QUESTION FUNCTION
function askQuestion(){

  // RANDOM QUESTION
  const randomQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  // SHOW QUESTION
  questionText.innerText =
    randomQuestion;

  // CLEAR PREVIOUS ANSWER
  answerBox.value = "";

  // CLEAR PREVIOUS SUBMITTED ANSWER
  submittedAnswer.innerText =
    "No answer submitted";

  // VOICE OUTPUT
  const speech =
    new SpeechSynthesisUtterance(randomQuestion);

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