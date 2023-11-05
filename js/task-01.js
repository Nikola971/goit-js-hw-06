const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.getElementsByTagName("li");

console.log(`Number of categories: ${categoryItems.length}`);

Array.from(categoryItems).forEach((categoryItem) => {
  const categoryNameElement = categoryItem.getElementsByTagName("h2")[0];
  const categoryName = categoryNameElement.textContent;
  const categoryElements = categoryItem.getElementsByTagName("ul")[0].getElementsByTagName("li");

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});
