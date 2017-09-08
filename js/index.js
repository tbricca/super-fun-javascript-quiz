var userScore = 0;
var questionNum = 0;

var allQuestions = [];

	allQuestions[0] = {
	    question: "Who jams out to I Want to Break Free By Queen?",
	    choices: ["Beth", "Matt", "Elena"],
	    correctAnswer: 2
	};
	allQuestions[1] = {
	    question: "________ listens to Black Friday by Kendrick Lamar on their way to class.",
	    choices: ["Liz", "Evan", "Chase"],
	    correctAnswer: 1
	};
	allQuestions[2] = {
	    question: "When _____ wakes up she/he blares Eye of the Tiger to get themselves ready for the day.",
	    choices: ["Liz", "AJ", "Kevin"],
	    correctAnswer: 0
};


document.getElementById("question").textContent = allQuestions[0].question;

document.getElementById("choice0").textContent = allQuestions[0].choices[0];

document.getElementById("choice1").textContent = allQuestions[0].choices[1];

document.getElementById("choice2").textContent = allQuestions[0].choices[2];


// When button is clicked, update score, hide current question, and next question comes up.
// Trying to add jQuery pluggin to fade in, but not working yet.
//If I include slow withing fadeIn() it breaks the game?
  $("#next").click(function() {
  	$("allQuestions").fadeIn();

  // Check if User answered question.
  // If yes, update score. If no, do not wait for answer.
  if($("form input[name=answer]:checked").val() == allQuestions[questionNum].correctAnswer) {
    userScore++;
  }
  
  // If last question, hide form & show score 
    if (questionNum == (allQuestions.length - 1)) {
    document.getElementsByTagName("form")[0].style.display = "none";
      
    document.getElementById("question").textContent ="You got " + userScore + " out of 3.";
    }
  
    questionNum++;
  
  // Get next question
    document.getElementById("question").textContent = allQuestions[questionNum].question;

    document.getElementById("choice0").textContent = allQuestions[questionNum].choices[0];

    document.getElementById("choice1").textContent = allQuestions[questionNum].choices[1];

    document.getElementById("choice2").textContent = allQuestions[questionNum].choices[2];
	});





