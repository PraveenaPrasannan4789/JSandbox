const obj= [{
    key:"sample1",
    data:"data1"
},{
    key:'sample1',
    data:'data1',
},
{
    key:'sample3',
    data:'data3',
},
{
    key:'sample3',
    data:'data3',
}]

//output 
const objOutput={
    "sample1":[
        {
            key:"sample1",
            data:"data1"
        },{
            key:'sample1',
            data:'data1',
        }
    ],
    "sample3":[{
        key:'sample3',
        data:'data3',
    },
    {
        key:'sample3',
        data:'data3',
    }]
}

const out= {};
obj.forEach((data)=>{
    if(out[data.key]){
out[data.key].push(data);
    }
    else{
        out[data.key]=[data];
    }
})
console.log('outtt',out)