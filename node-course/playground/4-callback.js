//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

setTimeout(()=>{
    console.log('2 seconds done')
},2000)

const add = (n1,n2,callback) => {
    setTimeout(()=>{
        const sum = n1+n2;
        callback(sum)
    },2000)
    
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})