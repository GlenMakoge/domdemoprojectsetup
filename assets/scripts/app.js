let startButton = document.querySelector("header button");
let cancelButton = document.querySelector('#add-modal .btn--passive');
let AddButton = document.querySelector('.btn--success');
let movieTitle;
let imageUrl;
let movieRating;

const toggleModalHandler = () => {
    const modal = document.querySelector("#add-modal");
    modal.classList.toggle("visible")
    toggleBackdrop();
};

const toggleBackdrop = ()=>{
    console.log('backdrop Ran')
    const backdrop = document.querySelector("#backdrop");
    backdrop.classList.toggle("visible");
}

const cancelModalHandler = ()=>{
    toggleModalHandler();
}

const addMovieHandler = () => {
    console.log('add movie ran');
    movieTitle = document.querySelector("#title");
    imageUrl= document.querySelector("#image-url");
    movieRating = document.querySelector("#rating");
}

startButton.addEventListener("click", toggleModalHandler);
cancelButton.addEventListener("click", cancelModalHandler);
AddButton.addEventListener("click", addMovieHandler);