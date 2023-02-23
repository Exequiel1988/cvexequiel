var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
else{
    menu.style.display = "none";
    menu_visible = false;
}
}

let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let html= document.getElementById("html");
crearBarra(html);
let android = document.getElementById("android");
crearBarra(android);
let word = document.getElementById("word");
crearBarra(word);
let canva = document.getElementById("canva");
crearBarra(canva);
let paint = document.getElementById("paint");
crearBarra(paint);
let picsart = document.getElementById("picsart");
crearBarra(picsart);

let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 3, 1, intervalHtml);
        },100);
        const intervalandroid = setInterval(function(){
            pintarBarra(android, 15, 2, intervalandroid);
        },100);
        const intervalword = setInterval(function(){
            pintarBarra(word, 14, 3, intervalword);
        },100);
        const intervalcanva = setInterval(function(){
            pintarBarra(canva, 16, 4, intervalcanva);
        },100);
        const intervalpaint = setInterval(function(){
            pintarBarra(paint, 13, 5, intervalpaint);
        },100);
        const intervalpicsart = setInterval(function(){
            pintarBarra(picsart, 10, 0, intervalpicsart);
        },100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "green";
    }else{
        clearInterval(interval)
    }
}

window.onscroll = function(){
    efectoHabilidades();
}