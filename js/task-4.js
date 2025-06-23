const form = document.querySelector(".login-form");

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const email = ev.currentTarget.elements.email.value.trim();
    const password = ev.currentTarget.elements.password.value.trim();

    if (email === "" || password === "") {
        alert("All form fields must be filled in");
        return;
    };

    const user = {
        email,
        password,
    };
    
    console.log(user);
    ev.currentTarget.reset()
});
