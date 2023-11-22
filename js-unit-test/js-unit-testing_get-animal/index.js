export function getAnimal(animal) {

    if(animal === 'cat'){
        return 'I totally love cats!';
    }
    if(animal === typeof 'string' && animal !== 'cat'){
        const animalPluralName = animal + "s";
        return `I like [${animalPluralName}]!`;
    }
    if(!animal){
        return 'I do not like animals at all!';
    }

}
getAnimal();

