function mergeSortedArray(array1, array2) {
   let mergedArray = [];
   let array1Item = array1[0];
   let array2Item = array2[0];
   console.log(array1Item, array2Item)

   let i = 1;
   let j = 1;

   if(array1.length === 0) {
        return array2;
   }
   if(array2.length === 0) {
        return array1;
   }

   while(array1Item || array2Item) {
    //console.log(array1Item, array2Item)
        if(!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
   }   
   return mergedArray;
}

let mergedArray = mergeSortedArray([1,3,6,10], [3,6,8,9])

console.log("mergedArray==================>32", mergedArray)