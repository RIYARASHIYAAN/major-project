// QUESTION STORAGE

let currentQuestions = [];

let currentIndex = 0;


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


async function askQuestion(){

    const selectedCourse =
      courseSelect.value;


    try{

        // FIRST TIME LOAD QUESTIONS

        if(currentQuestions.length === 0){

            const response =
              await fetch(
                `http://127.0.0.1:5000/api/question?course=${selectedCourse}`
              );


            const data =
              await response.json();


            currentQuestions =
              data.questions;

        }



        // INTERVIEW END

        if(currentIndex >= currentQuestions.length){

            questionText.innerText =
              "Interview Completed Successfully 🎉";


            const speech =
              new SpeechSynthesisUtterance(
                "Interview Completed Successfully"
              );

            window.speechSynthesis.speak(speech);

            return;
        }



        // CURRENT QUESTION

        const question =
          currentQuestions[currentIndex];


        questionText.innerText =
          question;


        // CLEAR OLD ANSWER

        answerBox.value = "";

        submittedAnswer.innerText = "";


        // AI VOICE

        const speech =
          new SpeechSynthesisUtterance(question);

        speech.rate = 1;

        speech.pitch = 1;

        speech.volume = 1;

        window.speechSynthesis.speak(speech);


        // NEXT QUESTION INDEX

        currentIndex++;

    }

    catch(error){

        console.log(error);

        alert("Backend connection error");

    }

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