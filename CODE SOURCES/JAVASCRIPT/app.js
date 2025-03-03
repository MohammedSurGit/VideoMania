/* dom */
const toggleSwitch = document.querySelector('.checkbox');
const HomePage = document.querySelector('#HomePage');
const menuAside = document.querySelector('.MenuAside');
const burgerMenuBtn = document.querySelector('.menu i');



/* Function pour passer en dark mode */
function darkMode(){

    if (localStorage.getItem("darkMode") === "enabled") {
        HomePage.classList.add("dark-mode");
        toggleSwitch.checked = true;
    }
    
    // Ajout d'un écouteur d'événement sur le switch
    toggleSwitch.addEventListener("change", function () {
        HomePage.classList.toggle("dark-mode");
        
        // Sauvegarde de l'état du mode sombre dans le stockage local
        if (HomePage.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });


}

darkMode();


burgerMenuBtn.addEventListener('click', () => {
   menuAside.classList.toggle('hideAside')
})

