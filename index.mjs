import { getData } from "./service.mjs";
import Ingredients from "./ingredient.mjs";
import Cauldron from "./cauldron.mjs";

const execute = async () => {
    try
    {
       const data = await getData();
       
       //Creamos los ingredientes 
       const ingredients = Ingredients.load(data);
       showIngredients(ingredients.ingredients);

       const cauldron = new Cauldron(ingredients.ingredients)
    }
    catch (error){
        console.log(error.message)
    }
}

execute();


// ECHARLE UN OJO A LA FUNCION!!
function showIngredients(ingredients){

    ingredients.forEach(ingredient => {

        for(let atribute in ingredient){

            if(atribute === `effects`){

                let effectString = ``;
                ingredient[atribute].forEach(effect => { effectString += ` ${effect.name},` })
                
                console.log(`${atribute}:${effectString}`)
            }
            
            else
            console.log(`${atribute}: ${ingredient[atribute]}`)
        }
    });
}


// REGLAS 

// Si dos ingredientes tienen Efectos iguales la pocion sera exitosa:
    // Efecto positivo - el resultado sera una pocion (POTION)
    // Efecto negativo - el resultado sera un veneno (POISON)

// En caso contrario, la pocion saldra - FALLIDA y devolveremos un objeto de la clase:
// FailedPotion.


// Comentario prueba 