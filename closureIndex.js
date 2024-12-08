const someFn=(name)=>{
    const secret='secret';
    console.log('heree')
    const n= name;
   function read(){
        console.log('the secret is', secret, n);
    }
    return {read};
}

 const a =someFn('ammu');
 const b= someFn('kannan');

 a.read();
 b.read();