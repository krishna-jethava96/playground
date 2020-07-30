// const paper={
    //  subject:'Gujarati',
    // chapter:'1 to 5'
// }
// JSON.stringify convert into json string format
// const paperJSON=JSON.stringify(paper)
// console.log(paperJSON)
// JSON.parse convert json string  into an object
// const paperParse=JSON.parse(paperJSON)
// console.log(paperParse.subject)

// challenge time
const fs= require('fs');
// const obj={
    // name:"Andrew",
    // planet:"Earth",
    // age:27
// }
// fs.writeFileSync('object.json',obj) //[object object]
// fs.writeFileSync('object.json',JSON.stringify(obj))
const dataBuffer=fs.readFileSync('object.json')
const dataJSON=dataBuffer.toString() //return json string
const data=JSON.parse(dataJSON) //return json string to object

data.name='krishna'
data.age=24
const objJSON=JSON.stringify(data)
fs.writeFileSync('object.json',objJSON)
console.log(data)