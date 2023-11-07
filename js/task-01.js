const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.getElementsByClassName('item');

console.log(`Number of categories: ${categoryItems.length}`);

for (const categoryItem of categoryItems) {
  const categoryTitle = categoryItem.getElementsByTagName('h2')[0].textContent;
  const categoryElements = categoryItem.getElementsByTagName('li').length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
}
