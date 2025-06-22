const form = document.querySelector(".login-form");

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const email = ev.currentTarget.elements.email.value;
    const password = ev.currentTarget.elements.email.value;

    if (email === "" || password === "") {
        alert("All form fields must be filled in");
    };

    const user = {
        email,
        password,
    };
    
    console.log(user);
    ev.currentTarget.reset()
});
// не можу зрозуміти чому не працює((
