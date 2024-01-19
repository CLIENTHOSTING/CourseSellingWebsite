const button = document.querySelector('.submit')
const codeContainer = document.querySelector('#bookCode').value
let listOfBooks = {
    
}

function openBook(){
    button.addEventListener('click',function() {
        console.log(codeContainer)
    })
}

openBook()