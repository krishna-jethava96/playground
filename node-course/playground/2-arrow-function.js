// const square=function(n){
//     return n*n
// }

// const square = (n) => {
//     return n*n
// }

// const square =(n) => n*n
// console.log(square(10))
const event={
    title:'BirthDay Party',
    guestList:['krishna','kapil','jethava'],
    printGuestList :function() {
        console.log('Guest List for ' + this.title)
        this.guestList.forEach((guest) => {
                console.log(guest + ' is come for ' + this.title)
        } )
    }
}

event.printGuestList()