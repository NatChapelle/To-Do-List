const form = document.querySelector("form");
// console.log(form);

// ajouter un element
form.addEventListener('submit', (e)=> {
    //on empêche le submit auto
e.preventDefault();
//on recupère la valeur de l'input
// console.log(inputfield.value);

//on envoie la valeur dans ul- ` sans ecraser les items ulterieurs
list.innerHTML +=`<li>${inputfield.value}</li>`;
//on remet l'input à 0 
inputfield.value = "";
});
    
list.addEventListener("click", (e) => {
    if(e.target.classList.contains("checked")){
        // /:supprimer au click
        // e.target.remove();
        e.target.remove();
    } else {
        // injecter classlist checked config css
        e.target.classList.add("checked");

    };

});