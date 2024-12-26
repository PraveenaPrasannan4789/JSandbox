const checkData = {};


const memoizeOne=(fn)=>{
    console.log('inside memoizeOne')
    function check(...args){
        console.log(args);
        let checkKey=args.join('_');
        if(checkData[checkKey]){
            console.log('getting from cache')
            return checkData[checkKey]
        }
        else{
            console.log('Not found in cache')
            const res= fn(...args);
            checkData[checkKey]= res;
            return res;
        }

    }
    return check;
}

const add = (a,b)=>{
    const c= a+b;
    console.log('inside add fn', a,b)
    return c;
}

const memoizeAdd= memoizeOne(add);
console.log(memoizeAdd(3, 4))
console.log(memoizeAdd(3, 4))
console.log(memoizeAdd(3, 4))

