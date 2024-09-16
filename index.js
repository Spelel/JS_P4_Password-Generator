const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
    "S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
    "o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", 
    "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let butonEl = document.getElementById("button-el")
let textEl1 = document.getElementById("text-el1")
let textEl2 = document.getElementById("text-el2")


// Function to get 15 random items from an array
function getRandomItems(arr, numItems) {
    const result = [];
    const usedIndices = new Set();

    while (result.length < numItems) {
        const randomIndex = Math.floor(Math.random() * arr.length);

        // Check if index is already used, if not add to result
        if (!usedIndices.has(randomIndex)) {
            result.push(arr[randomIndex]);
            usedIndices.add(randomIndex);
        }
    }

    return result.join('');
}

// const randomString = getRandomItems(characters, 15);

function genPass() {
    const randomString = getRandomItems(characters, 15);
    const randomString2 = getRandomItems(characters, 15);
    textEl1.textContent = randomString
    textEl2.textContent = randomString2
}

// const randomString = getRandomItems(characters, 15);
// console.log(randomString);
// textEl1.textContent = randomString