function categoryContainer() {
  // 1 fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
  // 2 convert promise to json
    .then((res) => res.json())
    //  3 send data to display
    .then((data) => displayCategories(data.categories));
}
function displayCategories(categories){
  //  get the container
  const categoryContainer=document.getElementById('category-container');
  // loop operation on Array of object
  for(let cat of categories){
    console.log(cat)
  }
  console.log(categories)
}

categoryContainer();

console.log('hello');