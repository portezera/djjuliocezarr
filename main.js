alert("bolsozaro")
function tocaSomPom(){
    document.querySelector('#Som_tecla_pom').play();
}
document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap(){
    document.querySelector('#Som_tecla_Clap').play();
}
document.querySelector('.tecla_Clap').onclick = tocaSomClap;