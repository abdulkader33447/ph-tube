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
    const categoryDiv=document.createElement('div')
    categoryDiv.innerHTML=`
    <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
    `;
    // append the element
    categoryContainer.append(categoryDiv)
  }
  // console.log(categories);
}
// ------------------load video--------------------
function loadVideo (){
  fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
  .then((Response)=>Response.json())
  .then(data=>displayVideos(data.videos))
}

const displayVideos=(videos)=>{
console.log(videos)
}

categoryContainer();

loadVideo()
