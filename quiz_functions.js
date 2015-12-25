// set user answers to a new null array variable, number of questions answered variable to 0
var useranswers = []
var answered = 0
var questions = []
var i
var j
var pc
var choices
var answers
var response
var alertMsg
var correct
var incorrect
var confirm
var alert
var questionCount

// function renderQuiz() called in index.html rendered as a display of mcq with button response
function renderQuiz () {
  // use for loop iterate through questions() array data bank and render display of radio buttons and response pending click responses
  for (i = 0; i < questions.length; i++) {
    // display on console starting i=0, for questions, display questions[0] and set initial blank.gif for initial null result status
    document.writeln('<p class="question">' + questions[i] + ' <span id="result_' + i + '"><img src="image/blank.gif" style="border:0" alt="" /></span></p>')
    // use for loop iterate through display radio buttons and number of choices, iteration restricted by choices[i], the number of iterations same as questions[]
    // display radio buttons set answer varaiables onclick
    for (j = 0; j < choices[i].length; j++) {
      document.writeln('<input type="radio" name="answer_' + i + '" value="' + choices[i][j] + '" id="answer_' + i + '_' + j + '" class="question_' + i + '" onclick="submitAnswer(' + i + ', this, \'question_' + i + '\', \'label_' + i + '_' + j + '\')" /><label id="label_' + i + '_' + j + '" for="answer_' + i + '_' + j + '"> ' + choices[i][j] + '</label><br />')
    }
  }
  // display button show score, on click run function showScore().  Display button Reset Quiz, onclick run function resetQuiz(true)
  document.writeln('<p><input type="submit" value="Show Score" onclick="showScore()" /> <input type="submit" value="Reset Quiz" onclick="resetQuiz(true)" /></p><p style="display:none"><img src="image/correct.gif" style="border:0" alt="Correct!" /><img src="image/incorrect.gif" style="border:0" alt="Incorrect!" /></p>')
}
// end of function renderQuiz()

// function resetQuiz() on prompt reset quiz to blank and start accepting responses
function resetQuiz (showConfirm) {
  if (showConfirm) {
    if (!confirm('Are you sure you want to reset your answers and start from the beginning?')) {
      return false
    }
    document.location = document.location
  }
}
// end of resetQuiz()

// function submitAnswer() assigns object value to useranswers[], set bold, call functions disableQuestion(),showResult() and accumulate answered variable
function submitAnswer (questionId, obj, classId, labelId) {
  useranswers[questionId] = obj.value
  document.getElementById(labelId).style.fontWeight = 'bold'
  disableQuestion(classId)
  showResult(questionId)
  answered++
}
// end of function submitAnswer()

// function showResult() display relevant gif on click
function showResult (questionId) {
  if (answers[questionId] === useranswers[questionId]) {
    document.getElementById('result_' + questionId).innerHTML = '<img src="image/correct.gif" style="border:0" alt="Correct!" />'
  } else {
    document.getElementById('result_' + questionId).innerHTML = '<img src="image/incorrect.gif" style="border:0" alt="Incorrect!" />'
  }
}
// end of function showresult()

// function showScore() display score on click and alert results
function showScore () {
  if (answered !== answers.length) {
    alert('You have not answered all of the questions yet!')
    return false
  }
  questionCount = answers.length
  correct = 0
  incorrect = 0
  for (i = 0; i < questionCount; i++) {
    if (useranswers[i] === answers[i]) {
      correct++
    } else {
      incorrect++
    }
  }
  pc = Math.round((correct / questionCount) * 100)
  alertMsg = 'You scored ' + correct + ' out of ' + questionCount + '\n\n'
  alertMsg += 'You correctly answered ' + pc + '% of the questions! \n\n'
  if (pc === 100) {
    alertMsg += response[0]
  } else if (pc >= 90) {
    alertMsg += response[1]
  } else if (pc >= 70) {
    alertMsg += response[2]
  } else if (pc > 50) {
    alertMsg += response[3]
  } else if (pc >= 40) {
    alertMsg += response[4]
  } else if (pc >= 20) {
    alertMsg += response[5]
  } else if (pc >= 10) {
    alertMsg += response[6]
  } else {
    alertMsg += response[7]
  }
  if (pc < 100) {
    if (confirm(alertMsg)) {
      resetQuiz(false)
    } else {}
    return false
  } else {
    alert(alertMsg)
  }
}
// end of function showScore()

// function disableQuestion() disallow further click after showing gif result
function disableQuestion (classId) {
  var alltags = document.all ? document.all : document.getElementsByTagName('*')
  for (i = 0; i < alltags.length; i++) {
    if (alltags[i].className === classId) {
      alltags[i].disabled = true
    }
  }
}
// end of disableQuestion()
