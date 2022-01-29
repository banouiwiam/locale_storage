afficher();
document.getElementsByClassName("butt")[0].children[0].addEventListener("click",ajouter)
function ajouter(){
    var voiture= document.getElementsByClassName("add-text")[0].textContent.trim();
    if(voiture!=""){
        window.localStorage.setItem(indice_suivant(),voiture)
    document.getElementsByClassName("add-text")[0].textContent=""
    }
}
function indice_suivant(){
    return window.localStorage.length+1;
}
function afficher(){
    var tbody =document.getElementsByClassName("table")[0].children[1]
    for (let i = 1; i <= localStorage.length; i++) {
         tbody.innerHTML+="<tr><td>"+i+"</td><td>"+localStorage.getItem(i)+"</td><td><i onclick='sup(this)' class='fas fa-trash-alt'></i></td></tr>"
        }
}
function sup(el){
   var x= el.parentElement.parentElement.children[0].textContent
   if(confirm("ok?")){
    localStorage.removeItem(x);
    window.location.href=""
}     
}