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
    <div class="card  ">
        <figure class="relative">
          <img class="w-full h-[150px] object-cover"
            src="${video.thumbnail}" />
            <span class="text-gray-300 absolute bottom-2 right-2 bg-black px-2 text-sm rounded-lg">${video.others.posted_date}</span>
        </figure>
        <div class="flex gap-3 px-0 py-4">
          <div class="profile">
            <div class="avatar">
              <div class="ring-primary ring-offset-base-100 w-7 rounded-full ring ring-offset-2">
                <img src="${video.authors[0].profile_picture}" />
              </div>
            </div>
          </div>
          <div class="intro">
            <h2 class="text-sm font-semibold">${video.title}</h2>
            
            <p class="text-sm text-gray-400 flex gap3">${video.authors[0].profile_name}
              <img class="w-5 h-5" src="assets/verified.png" alt="">
            </p>
            <p class="text-sm text-gray-400">${video.others.views}</p>
          </div>
        </div>
      </div>
    `;
    videoContainer.append(videoCard);
  });
};

categoryContainer();

loadVideo();
