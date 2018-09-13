// VARIABLE
// ----------------------------------------------
const questions = [];
questions.push("bracket-balance");
questions.push("drawcall-batching");
questions.push("is-kinematic");
questions.push("out-keyword");
questions.push("shuffle");
let questionIndex = -1;

// get refs
const i = document.getElementById("contentFrame");
const quizPageNameTF = document.getElementById("quizPageName");
const submitBtn = document.getElementById("nextBtn");
const questionFolderPath = "/_quiz/question/";

// FUNCTION
// ----------------------------------------------
window.addEventListener('load', function()
{
	init();
});

function init()
{
	initQuiz();

	nextBtn.addEventListener("click", function(e)
	{
		loadRandomQuestion();
	});
}

function initQuiz()
{
// 	initQuizWindow();
	loadRandomQuestion();	
}

/*
function initQuizWindow()
{
	// append
	document.body.appendChild(i);

	// set
	i.width = document.body.scrollWidth;
	i.height = 960;
}
*/

function loadRandomQuestion()
{
	// init vars
	var newIndex = getUniqueRandomIndex(questions.length, questionIndex);
	var question = questions[newIndex];
	var path = questionFolderPath + question;

	// set path
	i.setAttribute("src", path);

	// update label
	// var newName = "> " + question;
	// quizPageNameTF.innerHTML = newName;

	// debug
	// alert("*** LOAD-RAND-PAGE existing: " + questionIndex + " suggested: " + newIndex);

	// update index
	questionIndex = newIndex;
}

function getUniqueRandomIndex(maxIndex, curIndex)
{
	var found = false;
	while(!found)
	{
		var newIndex = Math.floor(Math.random() * maxIndex);
		if(newIndex != curIndex)
		{
			found = true;

			return newIndex;
		}
	}

	return -1;
}