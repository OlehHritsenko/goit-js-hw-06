const listWithId = document.querySelector('#categories');
const arrayCategories = [...listWithId.children];
console.log(`Number of categories: ${arrayCategories.length}`);

arrayCategories.forEach((category) => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
})