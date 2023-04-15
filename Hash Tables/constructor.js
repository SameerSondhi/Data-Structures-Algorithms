class HashTable {
    constructor(size=7){
        this.dataMap = new Array(size)
    }

   //Method to be called ONLY by other methods
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            //Every letter has a numerical value; 23 because it is a prime number (can be any prime number)
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }

    printTable() {
        for (let i = 0; i < this.dataMap.length; i++) {
            console.log(i, ": ", this.dataMap[i]);
        }
    }

}



function test() {
    let myHashTable = new HashTable();
    myHashTable.printTable();  
}


test();

    
    /*
        EXPECTED OUTPUT:
        ----------------
        0 :  undefined
        1 :  undefined
        2 :  undefined
        3 :  undefined
        4 :  undefined
        5 :  undefined
        6 :  undefined

    */