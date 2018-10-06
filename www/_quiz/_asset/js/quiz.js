// VARIABLE
// ----------------------------------------------
const IS_LIVE = true;

const questions = [];
questions.push("bracket-balance");
questions.push("drawcall-batching");
questions.push("factorial");
questions.push("fib-series");
questions.push("fib-value");
questions.push("is-kinematic");
questions.push("out-keyword");
questions.push("shuffle");
let questionIndex = -1;

// get refs
const i = document.getElementById("contentFrame");
const quizPageNameTF = document.getElementById("quizPageName");
const submitBtn = document.getElementById("nextBtn");

// set target
/* 
TODO - find way to exlude literal mention of "notes" dir below,
as server was calling an inccorrect url without this literal hack...
*/
const QUESTION_DIR_LOCAL = "/_quiz/question/";
const QUESTION_DIR_REMOTE = "/notes/_quiz/question/";
const questionFolderPath = IS_LIVE ? QUESTION_DIR_REMOTE : QUESTION_DIR_LOCAL;

// FUNCTION
// ----------------------------------------------
window.addEventListener('load', function()
{
	init();
});

function init()
{
	loadRandomQuestion();

	nextBtn.addEventListener("click", function(e)
	{
		loadRandomQuestion();
	});
}

function loadRandomQuestion()
{
	// init vars
	var newIndex = getUniqueRandomIndex(questions.length, questionIndex);
	var question = questions[newIndex];
	var path = questionFolderPath + question + "/index.html";

	// set path
	i.setAttribute("src", path);

	// update label
	// var newName = "> " + question;
	// quizPageNameTF.innerHTML = newName;

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