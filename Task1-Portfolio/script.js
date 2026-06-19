const themeBtn = document.getElementById("themeButton");

if(localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀";
} else {
    document.body.classList.remove("dark");
    themeBtn.texContent = "☾";
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (
        document.body.classList.contains("dark")
    ) {
        themeBtn.textContent = "☀";

        localStorage.setItem(
            "theme",
            "dark"
        );
        
    } else {
        themeBtn.textContent = "☾";

        localStorage.setItem(
            "theme",
            "light"
        );
    }
});

const form = document.getElementById("contactForm");
const success = document.getElementById("success");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    success.textContent = "Thank you for contacting me. I will reach out soon.";

    form.reset();
});
