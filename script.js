// Add event listener to the search form
document.querySelector('#search-deals form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  // Get the selected deal category
  const dealCategory = document.querySelector('#deal-category').value;
  // Redirect to the search results page with the selected category
  window.location.href = `search-deals.php?category=${dealCategory}`;
});
