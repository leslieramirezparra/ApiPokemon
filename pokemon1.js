const pokemonContainer=document.querySelector(".pokemon-container");
const getUrl=new URLSearchParams(window.location.search)
let id=getUrl.get('id')
const url='https://pokeapi.co/api/v2/pokemon/'

function traerPokemon(){
fetch(`${url}${id}/`)
.then(res=>res.json())
.then(data=>{
        crearPokemon(data);
        console.log(data)
    });
}
function crearPokemon(pokemon){
  
    const img=document.createElement('img');
    img.src=pokemon.sprites.front_default;

    const h2=document.createElement('h2');
    h2.textContent=pokemon.name;

    const div=document.createElement('div');

    div.appendChild(img);
    div.appendChild(h2);

    pokemonContainer.appendChild(div);

    let ul=document.createElement("ul");

    let li1=document.createElement("li")
    let li1texto=document.createTextNode("Experiencia:");
    li1.appendChild(li1texto);

    let li2=document.createElement("li")
    let li2texto=document.createTextNode(pokemon.base_experience);
    li2.appendChild(li2texto);

    let li3=document.createElement("li")
    let li3texto=document.createTextNode("Estado Hp:");
    li3.appendChild(li3texto);

    let li4=document.createElement("li")
    let li4texto=document.createTextNode(pokemon.stats[0].base_stat);
    li4.appendChild(li4texto);

    let li5=document.createElement("li")
    let li5texto=document.createTextNode("Estado Attack:");
    li5.appendChild(li5texto);

    let li6=document.createElement("li")
    let li6texto=document.createTextNode(pokemon.stats[1].base_stat);
    li6.appendChild(li6texto);

    let li7=document.createElement("li")
    let li7texto=document.createTextNode("Estado Defense:");
    li7.appendChild(li7texto);

    let li8=document.createElement("li")
    let li8texto=document.createTextNode(pokemon.stats[2].base_stat);
    li8.appendChild(li8texto);

    let li9=document.createElement("li")
    let li9texto=document.createTextNode("Estado Speed:");
    li9.appendChild(li9texto);

    let li10=document.createElement("li")
    let li10texto=document.createTextNode(pokemon.stats[5].base_stat);
    li10.appendChild(li10texto);
    
    
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    ul.appendChild(li6);
    ul.appendChild(li7);
    ul.appendChild(li8);
    ul.appendChild(li9);
    ul.appendChild(li10);


    pokemonContainer.appendChild(ul);

}
traerPokemon();