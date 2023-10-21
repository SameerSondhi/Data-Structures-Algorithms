function reverse(string){
    // add whatever parameters you deem necessary - good luck!
  if(string.length<=1){
    return string
  }
  let firstChar = string[0]
  let restOfString = string.slice(1)

  return reverse(restOfString)+firstChar
}

console.log(reverse('awesome')) // 'emosewa'
