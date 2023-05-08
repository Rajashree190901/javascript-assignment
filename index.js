const categories = ["Action", "Drama", "Horror"];
const categoriesElement = document.getElementById("categories");

// Generate the category filters
categoriesElement.innerHTML = `
  <div class="categories-box">
    <h2>Categories</h2>
    <ul>
      <li><a href="#" data-category="all">All</a></li>
      ${categories.map(category => `
        <li><a href="#" data-category="${category}">${category}</a></li>
      `).join("")}
    </ul>
  </div>
`;

// Add event listener to the category filters
categoriesElement.addEventListener("click", event => {
  if (event.target.dataset.category) {
    const category = event.target.dataset.category;
    // Filter the movies based on the selected category
    // and display the results
  }
});
