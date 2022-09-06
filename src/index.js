
{/* <div class="container">
<!-- <div class="card">
    <img src="" />
 </div> --> 
</div> */}

// fetch("https://api.pexels.com/v1/search?query=people", {
//   headers: {
//     Authorization: '563492ad6f9170000100000183d0e0c8cced43af8b10aa4391e5752b'
//   }
// })

//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(err => console.log(err))

const container = document.querySelector(".container");
let cardTag;
function getHairPhotos(images) {
   images.map(image => {
     cardTag = `<div class="card">
              <img src=${image.src.large} />
         </div>`;
     container.innerHTML += cardTag;
   })
}
fetch("https://api.pexels.com/v1/search?query=barbershop",{
  headers: {
    Authorization: "563492ad6f9170000100000183d0e0c8cced43af8b10aa4391e5752b"
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
     getHairPhotos(data.photos);
   })


   const hairDye = document.querySelector("#hair-dye");
let dyeTag;
function getPhotos(images) {
   images.map(image => {
     dyeTag = `<div class="card">
              <img src=${image.src.large} />
         </div>`;
     hairDye.innerHTML += dyeTag;
   })
}
fetch("https://api.pexels.com/v1/search?query=hairdye",{
  headers: {
    Authorization: "563492ad6f9170000100000183d0e0c8cced43af8b10aa4391e5752b"
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
     getPhotos(data.photos);
   })