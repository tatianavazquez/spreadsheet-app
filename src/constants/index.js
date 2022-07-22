import { letters } from './alphabet.js'
import { numbers } from './numbers.js';

let references = [];



const combinations = () => {
    // numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15... 30]
    // letters = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    /* references= [A1, A2, A3, A4, A5, A6, A7... B1, B2, B3, B4, B5, ... L5, L6, L7, L8, L9..]
    */
    for(let i = 0; i < numbers.length; i++){
        
        for(let j = 1; j < letters.length; j++){
            let combination = letters[j] + numbers[i];
            references.push(combination);           
        }  
    }
    return references
}

combinations();


export {
    letters,
    numbers,
    references
};