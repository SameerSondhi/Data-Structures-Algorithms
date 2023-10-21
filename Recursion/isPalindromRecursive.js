function isPalindrome(string){
    let isPal = false
  // add whatever parameters you deem necessary - good luck!
  function reverse(string){
  // add whatever parameters you deem necessary - good luck!
    if(string.length<=1){
    return string
  }
  let firstChar = string[0]
  let restOfString = string.slice(1)

  return reverse(restOfString)+firstChar
  
}
if(string === reverse(string)){
    isPal = true
}else{
    isPal = false
}
return isPal
  
}