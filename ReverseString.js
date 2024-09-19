//Reverse a string 

//Method 1

function reverse(str) {
    let t0 = performance.now();
    if(!str || str.length < 2 || typeof str !== 'string') {
         return 'No operation needed'
    } 
    const newStr =  str.split('').reverse().join('')
    let t1 = performance.now();
    console.log("Call to find Nemo took 63 " + (t1 - t0) + ' miliseconds')
    return newStr;
 }
 
 const res = reverse("Unlike in traditional web hosting, where you spin up servers, configure them and then deploy your code, in serverless applications, you don't manage any servers! Instead, you only provide your code and define when it should get executed. Done!")
 //console.log("res====+>", res)
 
 function reverse2(str) {
     let t0 = performance.now();
     if(!str || str.length < 2 || typeof str !== 'string') {
         return 'No operation needed'
     }
     const backwords = [];
     const totalItems = str.length - 1;
     for(let i = totalItems; i >= 0; i--) {
         backwords.push(str[i]);
     }
     let t1 = performance.now();
     console.log("Call to find Nemo took 81 " + (t1 - t0) + ' miliseconds')
     return backwords.join('');
 }
 
 let revStr = reverse2("Unlike in traditional web hosting, where you spin up servers, configure them and then deploy your code, in serverless applications, you don't manage any servers! Instead, you only provide your code and define when it should get executed. Done!")
 //console.log("revStr========>", revStr)
 
 
 function reverse3(str) {
     let t0 = performance.now();
     if(!str || str.length < 2 || typeof str !== 'string') {
          return 'No operation needed'
     } 
     const newStr =  [...str].reverse().join('')
     let t1 = performance.now();
     console.log("Call to find Nemo took 96 " + (t1 - t0) + ' miliseconds')
     return newStr;
 }
 
 let revStr3 = reverse3("Unlike in traditional web hosting, where you spin up servers, configure them and then deploy your code, in serverless applications, you don't manage any servers! Instead, you only provide your code and define when it should get executed. Done!")
 //console.log("revStr3=====================>101", revStr3)