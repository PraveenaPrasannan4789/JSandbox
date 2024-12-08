
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const getReversedCode=(data)=>{
    const reversedData= String(data).split('').reverse();
    if(reversedData.length == 1 && reversedData[0]==='0'){
        return 0;
    }
    else{
        for (let i=0;i<reversedData.length;i++){
            if(Number(reversedData[i])==9){
                reversedData[i] = 0;
            }
            else{
                 reversedData[i]=Number( reversedData[i])+1;
            }
        }
     let final=reversedData.join("");
     return final;
    }
     
}

///console.log(getReversedCode(900));
console.log(removeDuplicateFromArray([2,4,5,5,6,7]));

function removeDuplicateFromArray (arr){
const uni=[];
for(let i=0;i<arr.length;i++){
    if(uni.indexOf(arr[i])=== -1){
        uni.push(arr[i]);
    }
}
return uni;
}