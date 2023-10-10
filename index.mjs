const getAllPotions = async () => {
    return fetch('https://raw.githubusercontent.com/zsiciarz/skyrim-alchemy-toolbox/master/data/ingredients.json')
    .then(response => response.json())
}



const fetchAsyncPotions = async() => {
    try {
        const getPotions = await getAllPotions()
        console.log(getPotions);
    } catch (error){
        console.log(error.message)
    }
}

fetchAsyncPotions();



