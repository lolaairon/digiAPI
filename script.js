// const digiURL = "https://digimon-api.vercel.app/api/digimon/";
// const mostrarDigi = document.getElementById("nombreDigi");
// const btnDigi = document.getElementById("btnDigi");
// const mostrar = document.getElementById("mostrar");

const digiURL = "https://digimon-api.vercel.app/api/digimon/name/";
const mostrarDigi = document.getElementById("nombreDigi");
const btnDigi = document.getElementById("btnDigi");
const btnBorrar = document.getElementById("btnBorrar");
const mostrar = document.getElementById("mostrar");

// btnDigi.addEventListener('click', getDigi);
// btnBorrar.addEventListener('click', borrarDigi );


async function getDigi(){
     new Audio("img/digibay-evolucion-tono-para-celular-digimon-aventure-1.mp3").play();
  
        try {
            
            let resp = await fetch (`${digiURL}${mostrarDigi.value}`);
            console.log(resp);
            let digiJSON = await resp.json();
           

            let allDatas = [];
            let resultado = [];

            // let onlyData = [];

            for ( let datosDigi in digiJSON){
                resultado.push([datosDigi , digiJSON[datosDigi]])
            }; 
            // console.log(`Este es el resultado : ${resultado}`)
            // console.log(`Este es el resultado : ${resultado[0][1].name}`)
            // console.log(`Este es el resultado : ${resultado[0][1].img}`)
            
            
            let imgDigi = document.createElement('img');
            imgDigi.src = `${resultado[0][1].img}`;

            let nameDigi = document.createElement('h1');
                nameDigi.innerText = `Nombre: ${resultado[0][1].name}`;
                            
            let levelDigi = document.createElement('h1');
            levelDigi.innerText = `Nivel: ${resultado[0][1].level}`

 
;

            // allDatas.push(nameDigi,levelDigi,imgDigi);
            // console.log(allDatas)
            let contenedorDigi = document.createElement('div');
                contenedorDigi.append(imgDigi,nameDigi,levelDigi);
                contenedorDigi.classList.add('contenedorDigi');

                allDatas.push(contenedorDigi);
                mostrar.append(...allDatas)


        } catch (error) {
            alert('El digimon no existe')
        }

}




function borrarDigi(){

    
    mostrar.innerHTML ="" ;
 

}
