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

const micBtn =
  document.getElementById("micBtn");

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

// SPEECH TO TEXT

const SpeechRecognition =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition;


const recognition =
  new SpeechRecognition();


recognition.continuous = true;

recognition.lang = "en-US";

recognition.interimResults = true;



// START SPEAKING

micBtn.addEventListener("click", ()=>{

    recognition.start();

});



// GET SPEECH RESULT

// GET SPEECH RESULT

recognition.onresult = (event)=>{

    let currentTranscript = "";

    for(

        let i = event.resultIndex;

        i < event.results.length;

        i++

    ){

        currentTranscript +=
          event.results[i][0].transcript + " ";
    }


    // ONLY CURRENT ANSWER

    answerBox.value =
      currentTranscript;

};


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

// LOAD AI MODELS - Wait for face-api to be available

function loadModels() {
  if (typeof faceapi === 'undefined') {
    setTimeout(loadModels, 100);
    return;
  }

  // LOAD AI MODELS

async function loadModels(){

    await faceapi.nets.tinyFaceDetector.loadFromUri('models');

    await faceapi.nets.faceExpressionNet.loadFromUri('models');

    console.log("AI Models Loaded");

    startEmotionDetection();
}

loadModels();
}

loadModels();




// REAL-TIME EMOTION DETECTION

function startEmotionDetection(){

    webcam.addEventListener("play", ()=>{

        console.log("Emotion Detection Started");

        setInterval(async ()=>{

            const detections =
              await faceapi.detectSingleFace(

                  webcam,

                  new faceapi.TinyFaceDetectorOptions()

              ).withFaceExpressions();


            console.log(detections);
            if(detections){

                const expressions =
                  detections.expressions;


                let maxValue = 0;

                let emotion = "neutral";


                for(let key in expressions){

                    if(expressions[key] > maxValue){

                        maxValue = expressions[key];

                        emotion = key;
                    }
                }



                document.getElementById("confidence")
                  .innerText =
                    "Emotion: " + emotion;



                // FEEDBACK

                if(emotion === "happy"){

                    document.getElementById("eyeContact")
                      .innerText =
                        "Eye Contact: Good 👀";


                    document.getElementById("nervousness")
                      .innerText =
                        "Confidence: High 😎";


                    document.getElementById("posture")
                      .innerText =
                        "Posture: Professional 👍";
                }

                else if(emotion === "sad"){

                    document.getElementById("eyeContact")
                      .innerText =
                        "Improve Eye Contact 👀";


                    document.getElementById("nervousness")
                      .innerText =
                        "Confidence: Low 😟";


                    document.getElementById("posture")
                      .innerText =
                        "Sit Straight 👍";
                }

                else{

                    document.getElementById("eyeContact")
                      .innerText =
                        "Eye Contact: Average 👀";


                    document.getElementById("nervousness")
                      .innerText =
                        "Confidence: Moderate 😐";


                    document.getElementById("posture")
                      .innerText =
                        "Posture: Normal 👍";
                }

            }

        },1500);

    });

}