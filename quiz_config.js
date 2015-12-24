// defining null array variables for questions, choices, answers, response.
// Use [] instead of new Array()

var questions = []
var choices = []
var answers = []
var response = []

// To add more questions, just follow the format below.
// Question 1 value string is assigned to question[0] in javascript vector convention
// new null Array() is assigned to choices[0] which is in the first position in the array structure
// choices[a][b] through 2D array variable assigned string values through [b] = 0-->3 being the 4 responses, answers[0] assigned the correct array variable
// the rest questions bank follow same format

// Below DB created in MongoLab as documents

questions[0] = '1) JavaScript is ...'
choices[0] = []
choices[0][0] = 'the same as Java'
choices[0][1] = 'kind of like Java'
choices[0][2] = 'different than Java'
choices[0][3] = 'ther written part of Java'
answers[0] = choices[0][2]

questions[1] = '2) JavaScript is ...'
choices[1] = []
choices[1][0] = 'subjective'
choices[1][1] = 'objective'
choices[1][2] = 'evil'
choices[1][3] = 'object based'
answers[1] = choices[1][3]

questions[2] = '3) To comment out a line in JavaScript ...'
choices[2] = []
choices[2][0] = 'Precede it with two forward slashes, i.e. //'
choices[2][1] = 'Precede it with an asterisk and a forward slash, i.e. */'
choices[2][2] = 'Precede it with an asterisk, i.e. *'
choices[2][3] = "Precede it with a forward slash and an asterisk, i.e. '/*'"
answers[2] = choices[2][0]

questions[3] = '4) JavaScript can only run on Windows'
choices[3] = []
choices[3][0] = 'True'
choices[3][1] = 'False'
answers[3] = choices[3][1]

questions[4] = '5) Semicolons are optional at the end of a JavaScript statement.'
choices[4] = []
choices[4][0] = 'True'
choices[4][1] = 'False'
answers[4] = choices[4][0]

questions[5] = '6) The four basic data types are:'
choices[5] = []
choices[5][0] = 'strings, numbers, BooBoos, and nulls'
choices[5][1] = 'strings, text, Booleans, and nulls'
choices[5][2] = 'strings, numbers, Booleans, and nulls'
choices[5][3] = 'strings, numbers, Booleans, and zeros'
answers[5] = choices[5][2]

questions[6] = '7) What is the opposite of father?'
choices[6] = []
choices[6][0] = 'molder'
choices[6][1] = 'mother'
choices[6][2] = 'fatherer'
choices[6][3] = 'more'
answers[6] = choices[6][1]

questions[7] = '8) What is the opposite of mother?'
choices[7] = []
choices[7][0] = 'father'
choices[7][1] = 'rather'
choices[7][2] = 'blabble'
choices[7][3] = 'gargle'
answers[7] = choices[7][0]

// response for getting 100%
response[0] = 'Excellent, top marks!'
// response for getting 90% or more
response[1] = 'Excellent, try again to get 100%!'
// response for getting 70% or more
response[2] = 'Well done, that is a good score, can you do better?'
// response for getting over 50%
response[3] = 'Nice one, you got more than half of the questions right, can you do better?'
// response for getting 40% or more
response[4] = 'You got some questions right, you can do better!'
// response for getting 20% or more
response[5] = 'You did not do too well, why not try again?'
// response for getting 10% or more
response[6] = 'That was pretty poor!  Try again to improve!'
// response for getting 9% or less
response[7] = 'Oh dear, I think you need to go back to school (or try again)!'
