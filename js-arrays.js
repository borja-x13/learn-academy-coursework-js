// var groceryList = ["chips", "dip", "cookies"]
// console.log(groceryList)


// // Write the code that will add "soda" to the end of the original array.

// groceryList.push("soda")
// console.log(groceryList)



// // Write the code that will add "granola" to the end of array without altering the original array.

// let newGroceryList = groceryList.concat(['granola'])
// console.log(newGroceryList)
// console.log(groceryList)


// // Write the code that will return a subset of the array containing only "chips" and "dip".

// let slicedGroceryList = groceryList.slice(0,2)
// console.log(slicedGroceryList)



// // Write the code that will add "beans" to the "chips" and "dip" array.

// slicedGroceryList.push("beans")
// console.log(slicedGroceryList)

// var numbers = [2, 4, 6, 8, 10]

// Write the code that will add the number 0 to the beginning of the array.

// numbers.unshift(0)
// console.log("unshift to add 0 to the be at the beginning ofr hte array:", numbers)

// Write the code that will add the number 12 to the end of the array.

// numbers.push(12)
// console.log("push 12 to end of the array:", numbers)

// Write the code that will remove the first number from the array.

// let shiftTest = numbers.shift()
// console.log("removing the first number from the array (original array):", numbers)
// console.log( shiftTest)

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)

// let newNumbers = [0].concat(numbers)
// console.log(newNumbers)
// console.log(numbers)


// var characters = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the characters array together into a string.
// console.log(characters.join(""))

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
// var charsReversed = characters.reverse()
// console.log(charsReversed)

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
// console.log(charsReversed.join("*"))

// Write the code that brings all the letters in the charsReversed array together into a string without separators.
// console.log(charsReversed.join(""))

//  two arrays consisting of three first names of your cohort members in each.
// let cohortMembers = ["Brandon", "Felix", "Borja"]
// let cohortMembers2 = ["Valeria", "Jose", "Spencer"]

// Write the code that sorts the names in alphabetical order.
// cohortMembers.sort()
// console.log(cohortMembers)

// cohortMembers2.sort()
// console.log(cohortMembers2)

// Write the code that sorts the names in reverse alphabetical order.
// cohortMembers.reverse()
// cohortMembers2.reverse()
// console.log(cohortMembers, cohortMembers2)

// Write the code that sorts all the names in alphabetical order in a single array.
// let combinedCohort = cohortMembers.concat(cohortMembers2)
// console.log(combinedCohort.sort())

// Consider the variables:

// var numbers = [42, 221, 71, 7, 18, 87]
// var oddIndexes = []

// Write the code that logs the values from the numbers array that are at odd indexes.

// for (let i = 0; i < numbers.length; i++){
//     if (i % 2 !== 0) {
//         console.log("odd index, printing value:", numbers[i])
//     }
// }

// Write the code that adds the values from odd indexes into the oddIndexes array.

// for (let i = 0; i < numbers.length; i++){
//     if (i % 2 !== 0) {
//         oddIndexes.push(numbers[i])
//     }
// }
// console.log("Odd Indexes Array: ", oddIndexes)
