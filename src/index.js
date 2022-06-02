const init = () => {
    // Grab the Form element and store it into variable
  const inputForm = document.querySelector('form');
  //add even listener to the variable that has our form
  inputForm.addEventListener('submit', e => {
      //prevent the default action caused by a submit button click
    e.preventDefault();
    //targeting the attribute that holds the value of what is entered
    const input = document.querySelector('input#searchByID');

    console.log(input.value)
    //Once input values are captured, we fetch a list of movies based on input value
    
    fetch(`http://localhost:3000/movies/${input.value}`)

    // Takes the response from the server and turns them into an object
    .then(resp => resp.json())
    // Takes the data stored, and returns the information regarding the input ID 
    .then(data => {
        //takes the title and summary html tags 
     const title = document.querySelector('section#movieDetails h4');
    const summary = document.querySelector('section#movieDetails p');
        // Then changes the elements' values depending on if a match is found
    title.innerText = data.title;
    summary.innerText = data.summary;
    });
    });
}

document.addEventListener('DOMContentLoaded', init);