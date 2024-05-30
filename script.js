
document.addEventListener('DOMContentLoaded', (event) =>{
    const toggleBtn = document.getElementById("darkModeToggle");
    const currTheme = localStorage.getItem("theme");
    if(currTheme == "dark"){
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "Light Mode";
    }

    toggleBtn.addEventListener("click", () =>{
        document.body.classList.toggle("dark-mode");
        let theme = "light";
        if(document.body.classList.contains("dark-mode")){
            theme = "dark";
            toggleBtn.textContent = "Light Mode";
        } else {
            toggleBtn.textContent = "Dark Mode";
        }
        localStorage.setItem("theme", theme)
    })
})