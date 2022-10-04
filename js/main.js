let btnContacto = document.getElementById("btnContacto");
let contContacto = document.getElementById("contacto");

let btnLibrary = document.getElementById("btnLibrary");
let contLibrary = document.getElementById("library");

btnLibrary.addEventListener("click", function() {
    btnLibrary.style.textDecoration = "underline";
    btnContacto.style.textDecoration = "none";

    contContacto.style.display = "none";
    contLibrary.style.display = "grid";
});

btnContacto.addEventListener("click", function() {
    btnContacto.style.textDecoration = "underline";
    btnLibrary.style.textDecoration = "none";

    contContacto.style.display = "flex";
    contLibrary.style.display = "none";

    console.log("contacto muestra:")
    console.log(btnContacto)
    console.log(contContacto)
});

// "./thank-you-page.html"

// function red() { 
//     location.href = "./thank-you-page.html"; 
// }

// addEventListener('submit', (event) => { 
//     event.preventDefault();
//     location.href = "./thank-you-page.html"; 
// });