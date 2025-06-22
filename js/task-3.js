const input = document.querySelector("input");
const nameOutput = document.querySelector("span");

input.addEventListener("input", (event) => {
    nameOutput.textContent = event.currentTarget.value.trim();
    if (event.currentTarget.value.trim() === "") {
        nameOutput.textContent = "Anonymous";
    };
});