var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(a, b){
 ["b",...a]
}
function destructivelyAddElementToBeginningOfArray(a, b){
   a.unshift(b)
}

function addElementToEndOfArray(a, b){
 [a,..."b"]
}
function destructivelyAddElementToEndOfArray(a, b){
   a.push(b)
}

function accessElementInArray(a, b){
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
