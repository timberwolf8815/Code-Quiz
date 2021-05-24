

(function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }

    var i = 30;
  function timer(){
      if (--i < 0) return;
      setTimeout(function(){
          document.getElementsByTagName('h2')[0].innerHTML = i + ' secs';
          timer();
      }, 1000);
    }

    function Player(myName, myScore) {
        this.name = myName;        
        this.score = myScore;
    }

    // Create new players
    player1 = new Player("Deb", 6);
    player2 = new Player("Mom", 6);
    player3 = new Player("Kris", 6); 
    Players = [player1, player2, player3];

    function displayLeaderboard() {
        let theExport = ""; 
        Players.sort((aPlayer, bPlayer) => aPlayer.score - bPlayer.score);
        Players.forEach((player) => theExport += '<tr><td>' + player.name + '</td><td>' + player.score + '</td></tr>');
        document.getElementById("thingy").innerHTML = theExport; 
    }

    displayLeaderboard(); 
  

    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const startButton = document.getElementById('start');
    const myQuestions = [
      {
        question: "how do you call a function named 'myfunction'?",
        answers: {
          a: "myFunction()",
          b: "call function myFunction()",
          c: "call myFunction()"
        },
        correctAnswer: "a"
      },
      {
        question: "Is javascrip case sensitve?",
        answers: {
          a: "NO",
          b: "YES"         
        },
        correctAnswer: "b"
      },
      {
        question: "how do you round the number 7.25 to nearest interger?",
        answers: {
          a: "rnd(7.25)",
          b: "math.round(7.25)",
          c: "math.rnd (7.25)",
          d: "round(7.25)"
        },
        correctAnswer: "b"
      },
      {
        question: "How do you find the number with the highest value of x and y?",
        answers: {
          a: "Math.max(x,y)",
          b: "top(x,y)",
          c: "Math.ceil(x,y)"
        },
        correctAnswer: "a"
      },
      {
        question: "How do you write 'hello World' in a alert box'?",
        answers: {
          a: "alert('Hello World');",
          b: "alertBox('Hello World');",
          c: "msg('Hello World');"
        },
        correctAnswer: "a"
      },
      {
        question: "How do you write an IF statement in JavaScript?",
        answers: {
          a: "if (i==5)",
          b: "if i==5 then",
          c: "if i=5",
          d: "if i=5 then"
        },
        correctAnswer: "a"
      },
    ];
  
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
    startButton.addEventListener("click", timer);
  })();

  

