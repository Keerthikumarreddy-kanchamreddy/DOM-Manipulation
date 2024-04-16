const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];

    let score =0; 
    let currentQuestion =0; //to keep track of questions

// fetching the question element from the HTML document
    const questionElement  = document.getElementById('question');

// fetching the options element from the HTML document
    const optionsElement = document.getElementById('options');

// fetching the options element from the HTML document
    const scoreElement = document.getElementById('score');

    function showQuestion(){

    // destructring the Object. 
      let{correctAnswer, options, question} = quesJSON[currentQuestion];

    // setting question text content
        questionElement.textContent = question;

    // calling the function and storing the shuffled array in a constant. 
        const shuffledOptions = shuffleOptions(options);
    
    //Iterating through each option
        shuffledOptions.forEach((opt) => {
    
    //creating button for each option and assigning the text present in the options array
          const optionButton  = document.createElement('button');
          optionButton.textContent =  opt
          optionsElement.appendChild(optionButton);
    
    //adding an event listener for the buttons to update the score based on user choice
          optionButton.addEventListener('click', () => {
    
            if(opt === correctAnswer){
              score++;
            }else{
              score = score-0.25;
            }
    
    //displaying the score after user picks a choice 
            scoreElement.textContent = `Score : ${score}`;
            nextQuestion();  //calling the function to display next question
          });
    
        });

    }

// function to display the next question
function nextQuestion(){
  currentQuestion++;  // increasing the question count
  optionsElement.textContent='';  //setting the text content of options for next question as empty
  if(currentQuestion >= quesJSON.length){  //condition to check the last question in the JSON
    questionElement.textContent = 'Quiz completed';
  }else{
    showQuestion();  //displaying the next question 
  }
}


//function to shuffle options
function shuffleOptions(options){
  for(let i=options.length-1; i>=0 ; i--){
    const j=Math.floor(Math.random() * i+1);
    [options[i], options[j]] = [options[j], options[i]];  // swapping the options in the array
  }

  return options;  //returning the shuffled options array
}

showQuestion();