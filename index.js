const aplicacion=document.querySelector('.container')
let i=0;
function getCharacters(done){
    const results=fetch("https://pokeapi.co/api/v2/pokemon/");
    results
        .then(response=> response.json())
        .then(data=>{
            done(data)
        });
}

getCharacters(data=>{
    console.log(data)
    data.results.forEach(personaje=>{
        if (i<=20){
        i++;
        const  p=document.createElement('p')
        p.setAttribute('id',i)
        p.innerHTML=personaje.name
        p.addEventListener('click',function(){
            window.location.href=`./pokemon1.html?id=${p.id}`
        })
        aplicacion.appendChild(p)
        }
    
    });
});

function loguear(){
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;

    if(user=="pepe" && pass=="12345678")
    {
        window.location="pokemon1.html";
    }
    else{
        alert("Datos Incorrectos");
    }
}
loguear();