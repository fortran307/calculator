const calcInput = document.querySelector('input')
let str = ''

function press(key){
    str += key 
    calcInput.value = str
}

function clearInput(){
    str = ''
    calcInput.value = str
}

function result(){
    document.querySelector('input').value= eval(str)
    str = ''
}