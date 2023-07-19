/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let subArray = []
 let anagramGroups = {}
 let finalArray=[]
 for(i=0; i<strs.length; i++){
    let lower = strs[i].toLowerCase()
     let sorted = lower.split("").sort().join("")
   subArray.push(sorted)
   if(!anagramGroups[sorted]){
     anagramGroups[sorted]=[]
   }
   anagramGroups[sorted].push(strs[i])
 }
 
   finalArray= Object.values(anagramGroups)
 
 return finalArray
   
 };