const multiply=function(a){
    return function(b){
        if(!b){
            return a;
        }
        return multiply(a*b);
    //     return function(c){
    //         return a*b*c;
    //     };
    // }
}
}
console.log(multiply(1)(2)(3)(7)());

// arr = [1, 4, 6, 7, 3, 9], target = 15
// [1,3,4,6,7,9]

// {
//     14:0,
//     11:1,
//     9:2,
//     8:3,
//     12:4,
//     6:5

// }
// let arr = ["green", "blue", "grey", "red", "green", "red", "green"]
// let obj={};
// let max=0;
// let color;
// arr.forEach((item)=>!obj[item]?obj[item]=1 : obj[item]++)

// for(let item in obj){
//     if(obj[item]>max){
//         color=item;
//         max=obj[item]
//     }
// }

async function abc() { return 10 }
// async function c(){
//     let a=await abc();
//     console.log(a)
// };
console.log(abc())
abc().then((data)=>{console.log(data)})