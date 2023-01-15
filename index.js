const form = document.querySelector("form");
// console.log(form);

//stocker les elements /storage part:
function storageItems() {
    window.localStorage.todoList = list.innerHTML;
    //list innerhtml  envoyé dans localstorage sous nom .todoList
};

function getTodos() {
    if (window.localStorage.todoList) { 
        list.innerHTML = window.localStorage.todoList;
        // recupere les données
    } else {
        list.innerHTML = `<li>oio</li>`;
 }
};
   
  //jouer la fonction
  window.addEventListener("load", getTodos);
getTodos();


// ajouter un element
form.addEventListener('submit', (e)=> {
        //on empêche le submit auto
e.preventDefault();
       //recupère la valeur de l'input
      // console.log(inputfield.value);

      //envoie la valeur dans ul- ` sans ecraser les items ulterieurs
list.innerHTML +=`<li>${inputfield.value}</li>`;
     //on remet l'input à 0 
inputfield.value = "";
    // on stocke ladonnée dasn local storage via fonction
storageItems();
});


//supprimer un element
    
list.addEventListener("click", (e) => {
    if(e.target.classList.contains("checked")){
        // /:supprimer au click
        // e.target.remove();
        e.target.remove();
    } else {
        // injecter classlist checked config css
        e.target.classList.add("checked");
    }
        // on stocke ladonnée dasn local storage via fonction
storageItems();

});
