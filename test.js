const underLine = (string) => {
   return string + '\n' + '_'.repeat(string.length);
}
undefined
> const separate = (string) => {
 return str.split(".").join(".\n")
}
undefined
> const concatenate = (string) => {
string.slice(-2) + string[0] + string[1]
}
undefined
> const concatenate = (string) => {
return string.slice(-2) + string[0] + string[1]
}
undefined
> const endsWith = (string) => {
 return string.filter((string) => string.endsWith('at'));
}
undefined
> const rotate = (array) => {
 return array.unshift(array.pop())
}
undefined
> const rotate = (array) => {
 array.unshift(array.pop())
return array;}
undefined
> const splitEvenOdd = (arr) => {
 arr.reduce((init,number) => {
  const index = (number & 1) === 0 ? 0 : 1;
  init[index].push(number);
  return init;
},[[],[]])
}
undefined
> const repeatFirst = (arr) => {
 arr.unshift(arr[0]);
 return arr;
}
undefined
> const removeMiddle = (array) => {
  const middleElement = Math.floor((arr.length - 1) / 2);
  return arr.toSpliced(middleElement,((arr.length & 1) === 0 ? 2 : 1))
}
undefined
> const removeMiddle = (array) => {
  const middleElement = Math.floor((array.length - 1) / 2);
  return array.toSpliced(middleElement,((array.length & 1) === 0 ? 2 : 1))
}
undefined
> const uniqueConcat = (array1,array2) => {
const uniqueElement = array2.filter((element) => !array1.includes(element))
return arr1.concat(uniqueElement)
}
