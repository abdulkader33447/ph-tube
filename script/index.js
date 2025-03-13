function removeActiveClass(){
  const activeButtons=document.getElementsByClassName("active");
  for(let btn of activeButtons){
    btn.classList.remove('active')
  }

  console.log(activeButtons)
}

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
    <button id="btn-${cat.category_id}" onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
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
    .then((data) => {
      removeActiveClass()
      document.getElementById('btn-all').classList.add('active');
      displayVideos(data.videos)
    });
}

// -------------load categories------------
const loadCategoryVideos = (id) => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  // console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const clickedButton = document.getElementById(`btn-${id}`);
      removeActiveClass()
      clickedButton.classList.add('active')
      // console.log(clickedButton);
      displayVideos(data.category);
    });
};

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");

  // ----------clear display------
  videoContainer.innerHTML = "";

  if (videos.length == 0) {
    videoContainer.innerHTML = `
  <div
        class="col-span-full flex flex-col justify-center items-center py-14"
      >
        <img src="assets/Icon.png" alt="" />
        <h2 class="text-2xl font-bold">
          Oops!! Sorry, There is no content here
        </h2>
      </div>
  `;
    return;
  }

  videos.forEach((video) => {
    // console.log(video);

    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
    <div class="card  ">
        <figure class="relative">
          <img class="w-full h-[150px] object-cover"
            src="${video.thumbnail}" />
            <span class="text-gray-300 absolute bottom-2 right-2 bg-black px-2 text-sm rounded-lg">${video.others.posted_date}</span>
        </figure>
        <div class="flex gap-4 px-0 py-4">
          <div class="profile">
            <div class="avatar">
              <div class="ring-primary ring-offset-base-100 w-7 rounded-full ring ring-offset-2">
                <img src="${video.authors[0].profile_picture}" />
              </div>
            </div>
          </div>
          <div class="intro">
            <h2 class="text-sm font-semibold">${video.title}</h2>
            
            <p class="text-sm text-gray-400 flex gap-3">${video.authors[0].profile_name}
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
