var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
 ["element",...array]
}
function destructivelyAddElementToBeginningOfArray(array, element){
   a.unshift(b)
}

function addElementToEndOfArray(array, element){
 [a,..."b"]
}
function destructivelyAddElementToEndOfArray(array, element){
   a.push(b)
}

function accessElementInArray(array, element){
 console.log(a[b])
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift()
  return a
}
function removeElementFromBeginningOfArray(a){
a.slice(0)
return a
}

function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop()
  return a
}

function removeElementFromEndOfArray(a){
a.slice(0,a.length-1)
return a
}
