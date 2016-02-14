(function (quizArray, qpp, reslink) {
  var ent
  var perPage = 0
  var n1 = 109
  var n2 = 13
  var reslink = ''
  var qsParm = []
  function qs () {
    var query = window.location.search.substring(1)
    var parms = query.split('&')
    for (var i = 0; i < parms.length; i++) {
      var pos = parms[i].indexOf('=')
      if (pos > 0) {
        var key = parms[i].substring(0, pos)
        var val = parms[i].substring(pos + 1)
        qsParm[key] = val
      }
    }
  }
  qsParm['qnum'] = 0
  qsParm['cor'] = 0
  qsParm['fin'] = 0
  qs()
  var qnum = qsParm['qnum']
  var cor = qsParm['cor']
  cor = cor % n1
  function loadQuiz () {
    if (qnum >= quizArray.length) displayResult()
    else {
      displayQuiz(ent = document.getElementById('quiz1'), qnum++)
      for (var j = 2; j <= qpp; j++) {
        if ((ent = document.getElementById('quiz' + j)) && qnum < quizArray.length) displayQuiz(ent, qnum++)
      }
      var newB = document.createElement('button')
      newB.style.styleFloat = 'right'
      newB.style.cssFloat = 'right'
      newB.onclick = function () {
        nextPage(qnum)
        return false
      }
      var newTb = document.createTextNode('Next >>')
      newB.appendChild(newTb)
      ent.appendChild(newB)
    }
  }
  function displayQuiz (ent, qnum) {
    perPage++
    var qna = quizArray[qnum].split('~')
    var newF = document.createElement('form')
    var newDq = document.createElement('div')
    newDq.className = 'question'
    newDq.appendChild(document.createTextNode(Number(qnum + 1) + ': ' + qna[2]))
    newF.appendChild(newDq)
    newDq = document.createElement('div')
    newDq.className = 'answers'
    for (var i = 3; qna[i] != null && qna[i] !== ''; i++) {
      var newDa = document.createElement('label')
      newDa.htmlFor = 'a' + qnum + i
      /* @cc_on @if (@_jscript) var newR = document.createElement("<input name='a"+qnum+"'>"); @else */
      var newR = document.createElement('input')
      newR.name = 'a' + qnum
      /* @end @*/
      newR.type = 'radio'
      newR.id = 'a' + qnum + i
      newR.value = i
      newDa.appendChild(newR)
      newDa.appendChild(document.createTextNode(' ' + qna[i] + ' '))
      newDq.appendChild(newDa)
    }
    newF.appendChild(newDq)
    document.getElementById('quiz' + perPage).appendChild(newF)
  }
  function displayResult () {
    var newP = document.createElement('p')
    newP.style.textAlign = 'center'
    var newB = document.createElement('b')
    newB.appendChild(document.createTextNode('Congratulations.'))
    newB.appendChild(document.createElement('br'))
    newB.appendChild(document.createTextNode(' You have completed the quiz.'))
    newP.appendChild(newB)
    newP.appendChild(document.createElement('br'))
    newP.appendChild(document.createElement('br'))
    newP.appendChild(document.createTextNode('You answered ' + cor + ' of the ' + qnum + ' questions correctly.'))
    if (reslink !== '') {
      newP.appendChild(document.createElement('br'))
      var newA = document.createElement('a')
      newA.href = reslink + '?cor=' + cor + '&qnum=' + qnum
      newA.appendChild(document.createTextNode('Find Out More'))
      newP.appendChild(newA)
    }
    document.getElementById('quiz1').appendChild(newP)
    var newC = document.createElement('button')
    newC.style.styleFloat = 'right'
    newC.onclick = function () {
      cor = 0
      nextPage(0)
      return false
    }
    newC.appendChild(document.createTextNode('Try Again'))
    document.getElementById('quiz1').appendChild(newC)
  }
  function checkAnswer (e, b, g, q) {
    var a = -1
    var x = (b%n2) + 2
    for (var i = 3; document.getElementById(e + i); i++) {
      if (document.getElementById(e + i).checked) {
        a = i - 3
      }
    }
    var c = (g % x)
    return a === c ? 1 : 0
  }
  function nextPage (qnum) {
    for (var i = qnum-perPage; i < qnum; i++) {
      var qna = quizArray[i].split('~')
      cor += checkAnswer('a' + i, qna[1], qna[0], i)
    }
    var thispage = self.location.href
    var www = thispage.lastIndexOf('?')
    if (www !== -1) thispage = thispage.substr(0, www)
    var p = Math.floor((Math.random() * 8) + 2)
    var m = (p * n1) + cor
    var nxt = thispage + '?qnum=' + qnum + '&cor=' + m
    if (qnum >= quizArray.length) nxt += '&fin=1'; top.location.href = nxt
  }
  loadQuiz()
}
)
(quizArray, qpp, reslink)
