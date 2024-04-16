const questionObj = 
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Three',
      options: ['Two', 'Three', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    };

// destructring the questionObj Object. 
    const {
      correctAnswer, options, question
    } = questionObj;

    let score =0; 

// fetching the question element from the HTML document and attaching the text content for it to be visible on the screen
    const questionElement  = document.getElementById('question');
    questionElement.textContent = question;

// fetching the options element from the HTML document
    const optionsElement = document.getElementById('options');

// fetching the options element from the HTML document
    const scoreElement = document.getElementById('score');

// calling the function and storing the shuffled array in a constant. 
    const shuffledoptions = shuffledOptions(options);

//Iterating through each option
    shuffledoptions.forEach((opt) => {

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
        questionElement.textContent = 'Quiz completed';
        optionsElement.textContent='';
      })

    })

//function to shuffle options
function shuffledOptions(options){
  for(let i=options.length-1; i>=0 ; i--){
    const j=Math.floor(Math.random() * options.length);
    [options[i], options[j]] = [options[j], options[i]];
  }

  return options;
}
