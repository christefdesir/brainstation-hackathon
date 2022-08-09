const imgTag = document.querySelectorAll('.gallery__photo');


let photoArray = [];

// ---------------------------------------------------
function displayPhotos(photos) {
  for (let i =0; i < 9; i++){
    photoArray.push(photos[i]);
    imgTag[i].setAttribute('src', photoArray[i].urls.small);
  }
}

// -------------------------------------------------


// -------------------Page Load--------------------------------
axios
.get('https://api.unsplash.com/search/photos?page=1&query=flowers&client_id=wVJd5EvVhdQElq_DuqfrNar5hAqVTbeIVnqPj1p994c')
.then(response => {
    
    console.log(response);

    displayPhotos(response.data.results);


})

// ---------------------search query-------------------------------------
const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const searchQuery = event.target.query.value;
  console.log(searchQuery);

  axios
  .get(`https://api.unsplash.com/search/photos?page=1&query=${searchQuery}&client_id=wVJd5EvVhdQElq_DuqfrNar5hAqVTbeIVnqPj1p994c`)
  .then(response => {
      photoArray = [];
      displayPhotos(response.data.results);
      console.log(response.data.results);
  })
  .catch((error)=> {
    console.log(error);
  })
})
 


// ------------------------random button---------------------------

const randomButton = document.querySelector('.button');

randomButton.addEventListener('click', ()=> {
    photoArray = [];
    for (let i = 0; i < 9; i++){
      axios.get('https://api.unsplash.com/photos/random?client_id=wVJd5EvVhdQElq_DuqfrNar5hAqVTbeIVnqPj1p994c')
      .then(response => {
         console.log(response.data.urls);
        //  photoArray.push(response.data.urls);

         imgTag[i].setAttribute('src', response.data.urls.small);





      })
    }
    // displayPhotos(photoArray);
})