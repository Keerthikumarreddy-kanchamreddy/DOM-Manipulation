//Complete this JS file to render the post1 on the screen with all the specified tags.
let post1 ={
    id: 1, 
    author: 'John',
    content: 'My first Post!', 
    likes: 10, 
    comments: ['Great post!', 'Nice photo!'], 
    image: 'image.jpg'
};

function renderPosts() {

    //destructring the comments from post1 for easy access.
    let {comments} = post1;

    //accessing the posts container by using Id
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    //Creating a div container inside the postsContainer div to hold the contents of a post
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    //creating a heading tag and assigning the post1 object-author as the inner Text of heading
    const authorElement = document.createElement('h3');
    authorElement.textContent = post1.author;

    //creating a image element and assigning the post1 object-image as the source of image tag
    const imageElement = document.createElement('img');
    imageElement.src = post1.image;
    imageElement.alt = 'Post Image';

    //creating a p tag and assigning the post1 object-content as the inner Text of paragraph
    const contentElement = document.createElement('p');
    contentElement.textContent = post1.content;

    //creating a like button
    const likeButton = document.createElement('button');
    likeButton.textContent = 'Like';

    //adding event listener to the like button
    likeButton.addEventListener('click', ()=>{
        likePost();
    })

    //creating a input text box with some placeholder content
    const commentBox = document.createElement('input');
    commentBox.type = "text";
    commentBox.placeholder = "Write a comment...";

    //creating a comment button
    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comment';

    //adding event listener to the comment button
    commentButton.addEventListener('click', () =>{
        addComment(commentBox.value);
        commentBox.value = '';
    }, {once:true}); 

    //creating a footer div to display the number of likes and comments for the post by accessing from the post1 object.
    const footerElement  = document.createElement('div');
    footerElement.classList.add('post-footer');
    footerElement.textContent = `Likes: ${post1.likes} Comments: ${post1.comments.length}`;

    //creating a comments container to display all the comments of a post
    const commentsContainer  = document.createElement('div');
    commentsContainer.classList.add('comments-container');
    commentsContainer.style.display = 'none';

    //accessing all the comments from the post1 object and append each of them to the comments container.
    for(let i=0; i<comments.length; i++){
    const comment = document.createElement('p');
    comment.textContent = comments[i];
    commentsContainer.append(comment);
    }

    //event listener to display all the comments if not displayed and viceversa.
    footerElement.addEventListener('click', ()=>{
    if (commentsContainer.style.display === 'none') {
    commentsContainer.style.display = 'block';
    } else {
    commentsContainer.style.display = 'none';
    }
    });

    //appending all the created elements to the respective containers. 
    postsContainer.appendChild(postElement);
    postElement.appendChild(authorElement);
    postElement.appendChild(imageElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(likeButton);
    postElement.appendChild(commentBox);
    postElement.appendChild(commentButton);
    postElement.appendChild(footerElement);
    postElement.appendChild(commentsContainer);

}

function likePost(){
    post1.likes++;
    renderPosts();
    const button = document.querySelectorAll('.like-button');
    button.style.backgroundColor = 'red';
}

function addComment(comment){
    post1.comments.push(comment);
    renderPosts();
}

renderPosts();