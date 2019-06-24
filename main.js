const myButton = document.querySelector('.button')
const myButton1 = document.querySelector('.button1')
const myclass = document.querySelector('.main')

myButton.addEventListener('click', function(){
    myclass.classList.toggle('mount')
})
myButton1.addEventListener('click', function(){
    myclass.classList.toggle('mount1')
})