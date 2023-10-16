import { getData } from "./service.mjs";
import Ingredients from "./ingredient.mjs";

const execute = async () => {
    try
    {
       const data = await getData();
       
       //Creamos los ingredientes 
       const ingredients = Ingredients.load(data);
    }
    catch (error){
        console.log(error.message)
    }
}




// const getAllPotions = async () => {
//     return fetch('https://raw.githubusercontent.com/zsiciarz/skyrim-alchemy-toolbox/master/data/ingredients.json')
//     .then(response => response.json())
// }



// const fetchAsyncPotions = async() => {
//     try {
//         const getPotions = await getAllPotions()
//         console.log(getPotions);
//     } catch (error){
//         console.log(error.message)
//     }
// }

// fetchAsyncPotions();


// REGLAS 

// Si dos ingredientes tienen Efectos iguales la pocion sera exitosa:
    // Efecto positivo - el resultado sera una pocion (POTION)
    // Efecto negativo - el resultado sera un veneno (POISON)

// En caso contrario, la pocion saldra - FALLIDA y devolveremos un objeto de la clase:
// FailedPotion.


// Comentario prueba 