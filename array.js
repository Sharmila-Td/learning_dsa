// --> Array linear data structure
// --> In javaScript, Its a collection of different data 
// --> Contiguous memory location

const Basket = [ "Apples", "Salad", "Towel" ] 
console.log(Basket)

// Accessing elements
console.log(Basket[0]) // Apples
console.log(Basket[1]) // Salad
console.log(Basket[2]) // Towel
console.log(Basket[3]) // undefined , because there is nothing in index 3

// Length property
console.log(Basket.length) //3

// update elements
Basket[3] = "Plate";
console.log(Basket) //[ 'Apples', 'Salad', 'Towel', 'Plate' ]

// Adding element in front of the array
Basket.unshift("Brush")
console.log(Basket) // [ 'Brush', 'Apples', 'Salad', 'Towel', 'Plate' ]

// Adding element in last position of the array
Basket.push("Spoon")
console.log(Basket) // [ 'Brush', 'Apples', 'Salad', 'Towel', 'Plate', 'Spoon' ]

// Removing element in front of the array
Basket.shift()
console.log(Basket) // [ 'Apples', 'Salad', 'Towel', 'Plate', 'Spoon' ]


// Removing element in last position of the array
Basket.pop()
console.log(Basket) // [ 'Apples', 'Salad', 'Towel', 'Plate' ]

// Traversing
for(let i=0; i < Basket.length; i++){
    console.log(Basket[i])
}

// Insert
Basket.splice(2,0,'Karshief')
console.log(Basket) // [ 'Apples', 'Salad', 'Karshief', 'Towel', 'Plate' ]

// Delete
Basket.splice(0,1)
console.log(Basket) // [ 'Salad', 'Karshief', 'Towel', 'Plate' ]