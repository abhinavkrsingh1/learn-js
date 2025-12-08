// let name = '    abhinav kumar     ';
// var name2 = 'vicky kumar';
// const name3 = 'vipul kumar';


// for(let i = 0;i<name.length;i++){
//     console.log(name[i]);
// }

// console.log(name.trim().length);
// let name4 = name.trim();

// console.log(name)
// console.log(name4)

// console.log(name2.toUpperCase())
// console.log(name2.toLowerCase())

// let arr = name3.split(" ");
// console.log(arr);


let str = "hello world"     //olleh dlrow

// let str1 = str.split("");
// console.log(str1)
// let str2 = [];
// for(let i = str1.length-1;i>=0;i--){
//     str2.push(str1[i]);
// }
// console.log(str2.join(''))
let str2 = str.split(" ");
console.log(str2)
let str3 = [];
for(let i = 0;i<=str2.length-1;i++){
    let temp = str2[i].split('');
    temp.push(" ")
    for(let j = temp.length-1;j>=0;j--){
        str3.push(temp[j]);
    }
}

console.log(str3.join('').trim())

// comment added to check the pushed code in github
const promise1=new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Done")
        })
})
promise1.then(()=>console.log("First promise created"))