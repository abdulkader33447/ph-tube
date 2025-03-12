// ----------------load category------------
function categoryContainer() {
  // 1 fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    // 2 convert promise to json
    .then((res) => res.json())
    //  3 send data to display
    .then((data) => displayCategories(data.categories));
}
function displayCategories(categories) {
  //  get the container
  const categoryContainer = document.getElementById("category-container");
  // loop operation on Array of object
  for (let cat of categories) {
    // console.log(cat);
    // create element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
    `;
    // append the element
    categoryContainer.append(categoryDiv);
  }
  // console.log(categories);
}
// ------------------load video--------------------
function loadVideo() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((Response) => Response.json())
    .then((data) => displayVideos(data.videos));
}

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");
  videos.forEach((video) => {
    console.log(video);

    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
    <div class="card  shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    `;
    videoContainer.append(videoCard);
  });
};

categoryContainer();

loadVideo();
