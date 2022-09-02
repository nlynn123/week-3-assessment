const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')


let faveColor = () => {
    alert ("My favorite color is green!")
} 

let favePlace = () => {
    alert ("My favorite place is the kitchen. Ocean is a close second.")
} 

let faveRitual = () => {
    alert ("Yelling 'Country roads, take me home to the place I belooooong' and hearing 'WEST VIRGINIA' from somewhere in my house")
} 

colorBtn.addEventListener('click', faveColor)
placeBtn.addEventListener('click', favePlace)
ritualBtn.addEventListener('click', faveRitual)