let sitePages = [
  "./learnAboutFlags.html",
  "./game.html",
  "./inTheWild.html"
]
function explore() {
  let rand = Math.floor(Math.random() * sitePages.length);
  let page = sitePages[rand];
  parent.location = page;
}

//This setup() gets run when the games page is loaded
function setup() {
  chooseFlag();
  chooseAnswers(flagGuess);
}

let flagList = [
  './img/FlagAmerica.png',
  './img/AustrianFlag.png',
  './img/BelgianFlag.png',
  './img/FlagEurope.jpg',
  './img/FlagNetherlands.png',
  './img/FrenchFlag.png',
  './img/GermanFlag.png',
  './img/FlagJapan.png',
  './img/FlagKorea.png',
  './img/LiechtensteinFlag.png',
  './img/LuxembourgFlag.png',
  './img/SwissFlag.png'
];
let countries = [
  'USA',
  "Austria",
  "Belgium",
  'Europe',
  "The Netherlands",
  "France",
  "Germany",
  'Japan',
  'Korea',
  "Liechtenstein",
  "Luxembourg",
  "Switzerland"
];
let flagGuess;
let countryNames = [];
let correctAnswer;
let score = 0;
let guesses = 2;
let lives = 10;
let lock = false;

function chooseFlag() {
  /* We choose a random flag from the flagList
  and display it at the #headerFlag position */
  let rand = Math.floor(Math.random() * flagList.length);
  flagGuess = flagList[rand];
  $("#headerFlag").attr('src', flagGuess);
}

function chooseAnswers(flag) {
  switch(flag) {
    case './img/FlagAmerica.png':
      countryNames.push("USA");
      correctAnswer = "USA";
      break;
    case './img/AustrianFlag.png':
      countryNames.push("Austria");
      correctAnswer = "Austria";
      break;
    case './img/BelgianFlag.png':
      countryNames.push("Belgium");
      correctAnswer = "Belgium";
      break;
    case './img/FlagEurope.jpg':
      countryNames.push("Europe");
      correctAnswer = "Europe";
      break;
    case './img/FlagNetherlands.png':
      countryNames.push("Netherlands");
      correctAnswer = "Netherlands";
      break;
    case './img/FrenchFlag.png':
      countryNames.push("France");
      correctAnswer = "France";
      break;
    case './img/GermanFlag.png':
      countryNames.push("Germany");
      correctAnswer = "Germany";
      break;
    case './img/FlagJapan.png':
      countryNames.push("Japan");
      correctAnswer = "Japan";
      break;
    case './img/FlagKorea.png':
      countryNames.push("Korea");
      correctAnswer = "Korea";
      break;
    case './img/LiechtensteinFlag.png':
      countryNames.push("Liechtenstein");
      correctAnswer = "Liechtenstein";
      break;
    case './img/LuxembourgFlag.png':
      countryNames.push("Luxembourg");
      correctAnswer = "Luxembourg";
      break;
    case './img/SwissFlag.png':
      countryNames.push("Switzerland");
      correctAnswer = "Switzerland";
  }

  let ran = Math.floor(Math.random() * countries.length);
  countryNames.push(countries[ran]);
  countries.splice(ran, 1);
  ran = Math.floor(Math.random() * countries.length);
  countryNames.push(countries[ran]);
  countries.splice(ran, 1);
  ran = Math.floor(Math.random() * countries.length);
  countryNames.push(countries[ran]);
  countries.splice(ran, 1);

  countryNames = shuffle(countryNames);

  document.getElementById("A").innerHTML = countryNames[0];
  document.getElementById("B").innerHTML = countryNames[1];
  document.getElementById("C").innerHTML = countryNames[2];
  document.getElementById("D").innerHTML = countryNames[3];
}

function shuffle(array) {
  /* First, variables are declared which will help us later */
  var current = array.length;
  var temp;
  var randIndex;

  /* While loop keeps going untill everything is shuffled */
  while (0 < current) {
    /* First, we select a random element */
    randIndex = Math.floor(Math.random() * current);
    current -= 1;
    /* Then we swap that element with the next unshuffled one; */
    temp = array[current];
    array[current] = array[randIndex];
    array[randIndex] = temp;
  }

  /* Finally, we return the shuffled array */
  return array;
}

function isCorrect(ele) {
  /* First we check if the game is locked */
  if (!lock) {

    /* Remove all borders showing previous answers */
    $(event.currentTarget).siblings().removeClass('correct');
    $(event.currentTarget).siblings().removeClass('wrong');

    /* Next, we will execute a switch statement which finds which
       button was pressed. After that has been found it looks in
       the countryNames array to see if that button holds the name
       with the correctAnswer.
       If so: Lock the game and add the guesses leftover to score
       If not: Keep playing and subtract one from score */
    switch (ele.id) {
      case "A":
        if (countryNames[0] === correctAnswer) {
          $(event.currentTarget).addClass('correct');
          lock = true;
          score += guesses;
        } else {
          $(event.currentTarget).addClass('wrong');
          score -= 1;
          lives -= 1;
          guesses -= 1;
        }
        break;
      case "B":
        if (countryNames[1] === correctAnswer) {
          $(event.currentTarget).addClass('correct');
          lock = true;
          score += guesses;
        } else {
          $(event.currentTarget).addClass('wrong');
          score -= 1;
          lives -= 1;
          guesses -= 1;
        }
        break;
      case "C":
        if (countryNames[2] === correctAnswer) {
          $(event.currentTarget).addClass('correct');
          lock = true;
          score += guesses;
        } else {
          $(event.currentTarget).addClass('wrong');
          score -= 1;
          lives -= 1;
          guesses -= 1;
        }
        break;
      case "D":
        if (countryNames[3] === correctAnswer) {
          $(event.currentTarget).addClass('correct');
          lock = true;
          score += guesses;
        } else {
          $(event.currentTarget).addClass('wrong');
          score -= 1;
          lives -= 1;
          guesses -= 1;
        }
        break;
      }


      /* Check if this was the last guess
         If so: Lock the game and give all buttons the correct
         border (meaning one button gets set to .correct and the
         rest gets set to .wrong), revealing the correct answer */
      if (guesses == 0 || lives == 0) {
        lock = true;
        $(event.currentTarget).siblings().addClass('wrong');
        switch (correctAnswer){
          case countryNames[0]:
            $("#A").removeClass('wrong');
            $("#A").addClass('correct');
            break;
          case countryNames[1]:
            $("#B").removeClass('wrong');
            $("#B").addClass('correct');
            break;
          case countryNames[2]:
            $("#C").removeClass('wrong');
            $("#C").addClass('correct');
            break;
          case countryNames[3]:
            $("#D").removeClass('wrong');
            $("#D").addClass('correct');
        }
      }

      /* Update the score and guesses */
      document.getElementById("score1").innerHTML = "Score:<br>" + score;
      document.getElementById("guess1").innerHTML = "Lives:<br>" + lives;
      document.getElementById("score2").innerHTML = "Score:<br>" + score;
      document.getElementById("guess2").innerHTML = "Lives:<br>" + lives;
    }
}

/* This is the reset function for the "NEXT" button
   it allows users to play more than once and keep track of
   their score */
function randomize() {
  if (!lock) {
    lives -= 1;
    document.getElementById("guess1").innerHTML = "Lives:<br>" + lives;
    document.getElementById("guess2").innerHTML = "Lives:<br>" + lives;
  }
  if (lives > 0) {

    /* First, all borders are removed from the buttons to clear the styling */
    $(event.currentTarget).siblings().children().removeClass('correct');
    $(event.currentTarget).siblings().children().removeClass('wrong');

    /* Then, the arrays countries and countryNames are reset */
    countries = [
      'USA',
      "Austria",
      "Belgium",
      'Europe',
      "The Netherlands",
      "France",
      "Germany",
      'Japan',
      'Korea',
      "Liechtenstein",
      "Luxembourg",
      "Switzerland"
    ];
    countryNames = [];

    /* guesses and lock are also reset to default values
       note that score does not get reset, as we want to keep counting
       the score */
     guesses = 2;
    lock = false;

    /* finally we run the startup again */
    setup();
  }
}
