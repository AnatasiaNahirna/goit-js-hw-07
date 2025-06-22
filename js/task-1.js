const allCategories = document.querySelectorAll(".item");; 

console.log(`Number of categories: ${allCategories.length}`);


allCategories.forEach((el) => {
    const titles = el.querySelector("h2");
    const elements = el.querySelector("ul");
    const elementsLength = elements.querySelectorAll("li").length;
    console.log(`Category: ${titles.textContent}`);
    console.log(`Elements: ${elementsLength}`);
});