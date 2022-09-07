
// {/* <div class="container">
// <!-- <div class="card">
//     <img src="" />
//  </div> --> 
// </div> */}

// // fetch("https://api.pexels.com/v1/search?query=people", {
// //   headers: {
// //     Authorization: '563492ad6f9170000100000183d0e0c8cced43af8b10aa4391e5752b'
// //   }
// // })

// //   .then(response => response.json())
// //   .then(result => console.log(result))
// //   .catch(err => console.log(err))


// const token = "https://api.cal.com/v1/?apiKey=cal_live_9c07def4dac49df388dfe742dfcf6209";
// const bookingAPI = "http://localhost:3002/v1/event-types";

// const booking = document.querySelector("#booking");
// let eventType;
// function getEventType(images) {
//    images.map(image => {
//      cardTag = `<div class="card">
//               <img src=${image.src.large} />
//          </div>`;
//      booking.innerHTML += cardTag;
//    })
// }
// fetch("http://localhost:3002/v1/event-types",{
//   headers: {
//     Authorization: "https://api.cal.com/v1/?apiKey=cal_live_9c07def4dac49df388dfe742dfcf6209"
//   }
// })
//    .then(resp => {
//      return resp.json()
//    })
//    .then(data => {
//      getEventType(data.photos);
//    })








// const container = document.querySelector("#container");
// let cardTag;
// function getHairPhotos(images) {
//    images.map(image => {
//      cardTag = `<div class="card">
//               <img src=${image.src.large} />
//               <p class="like">Like! <span class="like-glyph">&#x2661;</span></p>
//          </div>`;
//      container.innerHTML += cardTag;
//    })
// }
// fetch("https://api.pexels.com/v1/search?query=barbershop",{
//   headers: {
//     Authorization: "563492ad6f9170000100000183d0e0c8cced43af8b10aa4391e5752b"
//   }
// })
//    .then(resp => {
//      return resp.json()
//    })
//    .then(data => {
//      getHairPhotos(data.photos);
//    })


//    const hairDye = document.querySelector("#hair-dye");
// let dyeTag;
// function getPhotos(images) {
//    images.map(image => {
//      dyeTag = `<div class="card">
//               <img src=${image.src.large} />
//               <p class="like">Like! <span class="like-glyph">&#x2661;</span></p>
//          </div>`;
//      hairDye.innerHTML += dyeTag;
//    })
// }
// fetch("https://api.pexels.com/v1/search?query=hairdye",{
//   headers: {
//     Authorization: "563492ad6f9170000100000183d0e0c8cced43af8b10aa4391e5752b"
//   }
// })
//    .then(resp => {
//      return resp.json()
//    })
//    .then(data => {
//      getPhotos(data.photos);
//    })



//    let EMPTY_HEART = '♡'
//    let FULL_HEART = '♥'

//    const errMessage = document.querySelector(".hidden");
//    const emptyHeart  = document.querySelectorAll(".like-glyph");
   
//    emptyHeart.forEach((like) => {
//      like.addEventListener("click", (e) => {
//        if (like.innerHTML == EMPTY_HEART) {
//          like.innerHTML = FULL_HEART;
//          like.className = "activated-heart";
//        } else if (like.innerText == FULL_HEART) {
//          like.innerHTML = EMPTY_HEART;
//        }
//      });
//    });



// const commentsAPI = "https://jsonplaceholder.typicode.com/comments?postId=1";
// const customerName= document.querySelector(".customer-name");
// const customerReview = document.querySelector(".customer-review")

// fetch(commentsAPI)
// .then((res) => res.json())
// .then(renderReviews)

// function renderReviews(data) {
//   customerName.textContent = data.name;
//   customerReview.textContent = data.body;
// }

// function postComments(comments) {
//     commentsList.innerHTML = "";
//     comments.forEach(postComment);
// }
// function postComment(comment) {
//     const li = document.createElement("li");
//     li.textContent = comment.content;
//     commentsList.append(li);
// }

// function addComment(event) {
//     event.preventDefault();
//     const commentText = event.target.comment.value;
//     postComment({content: commentText});
//  event.target.reset();
// }

// document.getElementById("comment-form").addEventListener("submit", addComment)

function renderOneReview(review) {
  let card = document.createElement('div')
  card.className = 'card'
  card.innerHTML = `
  <h3>My Name is ${review.name}</h3>
  <p>${review.body}
  `
  document.querySelector(".review-card").appendChild(card)
}


function renderAllReviews() {
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then((response) => response.json())
  .then((comments) => comments.forEach(review => renderOneReview(review)));
}

function init() {
  renderAllReviews()
}
init()

  // function showComments(data) {
  //   data.body
  // }

  // const customerReview = document.querySelector(".customer-review")
  // customerReview.innerHTML = json.body;