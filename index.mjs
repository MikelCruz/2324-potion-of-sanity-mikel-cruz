import { getData } from "./service.mjs";
import Ingredients from "./ingredients.mjs";
import Cauldron from "./cauldron.mjs";

const execute = async () => {
    try{
        const data = await getData();

        //Creación de ingredientes
        const ingredients = Ingredients.load(data);
        showIngredients(ingredients.ingredients);

        //Creación de cauldron
        const cauldron = new Cauldron(ingredients);

        //Crear Pociones
        
        console.log(`Potions`)
        console.log(`-------------------------------`)

        const potion1 = cauldron.createPotion("Bear Claws", "Bee");
        showPotion(potion1);

        const potion2 = cauldron.createPotion("Chicken's Egg", "Chaurus Eggs")
        showPotion(potion2);

        const potion3 = cauldron.createPotion("Chaurus Eggs", "Bleeding Crown")
        showPotion(potion3);

        const potion4 = cauldron.createPotion("Nightshade", "Ectoplasm")
        showPotion(potion4);

    }catch(error){
        console.log(error);
    }
}

execute();

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
        console.log("===================================")
    });
}


function showPotion(potion){

    for(let atribute in potion){

        if(atribute != `name`){

            console.log(`${atribute}:    ${potion[atribute]}`)
        }else{
            console.log(`${potion[atribute]}`)
        }
    }
    console.log(`-------------------------------`)
}


// REGLAS 

// Si dos ingredientes tienen Efectos iguales la pocion sera exitosa:
    // Efecto positivo - el resultado sera una pocion (POTION)
    // Efecto negativo - el resultado sera un veneno (POISON)

// En caso contrario, la pocion saldra - FALLIDA y devolveremos un objeto de la clase:
// FailedPotion.


// Comentario prueba 