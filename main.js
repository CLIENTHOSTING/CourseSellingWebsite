const input = document.querySelector('.main-input')
const searchBtn = document.querySelector('.search-button')
const bookList = document.querySelectorAll('.book')
let bookClassList = []

for (let i = 0; i < bookList.length;i ++){
    bookClassList.push(bookList[i].classList[1])
}



function Search() {
    searchBtn.addEventListener('click',(event) => {
        let inputValue = input.value
        if (inputValue) {
            console.log(inputValue)
        }  
    })
    
}

Search()