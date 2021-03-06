'use strict';

//Greeting upon visiting the webpage. This function is not called here in js file but on the html page in order to have the page load before being prompted
// eslint-disable-next-line no-unused-vars
function welcome() {
  var newUser = prompt('Hello new user, What is your name?');
  alert('Welcome '+ newUser + ' to the About Me page of Joseph Zabaleta.');
}

//All questions combined into a single function invoked through a button in html
// eslint-disable-next-line no-unused-vars
function quiz() {
  var countCorrect = 0;
  var y = 'Correct!';
  var n = 'Wrong!';

  //Questions 1-5 yes or no answer function
  function question(problem, answer) {
    var q = prompt(problem).toLowerCase();
    if (q === 'yes' || q === 'no') {
      if (q === answer) {
        alert(y);
        countCorrect++;
      } else {
        alert(n);
      }
    } else {
      prompt('Please enter a yes or no.');
    }
  }
  //Question 6 Number guess function
  function questionGuess (problemG, correctNumber) {
    var guess = prompt(problemG);
    for (var counter1 = 0; counter1 < 4; counter1++) {
      guess = Number(guess);
      var correct = correctNumber;
      if (isNaN(guess)) {
        // eslint-disable-next-line no-redeclare
        var guess = prompt('Invalid input please enter a valid between 1 and 5.');
      } else if (guess === correct){
        // eslint-disable-next-line no-redeclare
        var guess = prompt('You are correct!');
        countCorrect++;
        break;
      } else if (guess > 4) {
        // eslint-disable-next-line no-redeclare
        var guess = prompt('Your number is too high. Please try again.');
      } else if (guess < 4) {
        // eslint-disable-next-line no-redeclare
        var guess = prompt('Your number is too low. Please try again.');
      }
    }
  }

  //Question 7 Multiple Anwswer function
  function questionM(problemM, attempts) {
    var colorAnswers = ['red', 'yellow', 'blue'];
    // var attempts= 6;
    loop1: for (attempts; attempts > 0; attempts--) {
      var primary = prompt(problemM);

      for (var i = 0; i < colorAnswers.length; i++) {
        primary = primary.toLowerCase();
        if ( primary === colorAnswers[i]) {
          alert(y);
          countCorrect++;
          break loop1;
        }
      }
      alert(n);
    }
  }

  //Invokation of all seven questions with parameters set
  question('Is the Author older than 30 years of age', 'no'); // QUESTION 1
  question('Is the Authors name Joseph?', 'yes'); // QUESTION 2
  question('Is the author from Seattle?', 'no'); // QUESTION 3
  question('Has Joseph worked at Home Depot?', 'yes'); // QUESTION 4
  question('Does Joseph want to learn to fly a kite?', 'yes'); // QUESTION 5
  questionGuess('Guess a number between 1 and 5', 4); // QUESTION 6
  questionM('What is a primary color?', 3); //QUESTION 7

  //Final score alert
  alert('Your final score '+ countCorrect + ' out of 7 questions.');

  //Thank you alert
  alert('Thank you for answering all the questions');
}
