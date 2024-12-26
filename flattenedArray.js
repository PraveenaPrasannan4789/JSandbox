const arrayToFlat = [1,2, 3,[6,7,8],{},[2,5],9,0,1,3];
//res [1,2, 3,6,7,8,{},2,5,9,0,1,3];
const newArray =[];
const flattenArray=(arrayToFlat)=>{
    for(let i =0;i<arrayToFlat.length;i++){
        if(Array.isArray(arrayToFlat[i])){
            flattenArray(arrayToFlat[i]);
        }
        else{
            newArray.push(arrayToFlat[i])
        }
    }
    return newArray;
}

console.log(flattenArray(arrayToFlat))