var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
 ["element",...array]
}
function destructivelyAddElementToBeginningOfArray(array, element){
   array.unshift(element)
}

function addElementToEndOfArray(array, element){
 [array,..."element"]
}
function destructivelyAddElementToEndOfArray(array, element){
   array.push(element)
}

function accessElementInArray(array, element){
 console.log(array[element])
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array){
array.slice(0)
return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
array.slice(0,array.length-1)
return array
}
