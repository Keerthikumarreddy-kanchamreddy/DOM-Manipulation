const questionObj = 
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Three',
      options: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    };

// destructring the questionObj Object. 
    const {
      correctAnswer, options, question
    } = questionObj;

// fetching the question element from the HTML document and attaching the text content for it to be visible on the screen
    const questionElement  = document.getElementById('question');
    questionElement.textContent = question;
