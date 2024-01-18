const input = document.querySelector('.main-input')
const searchBtn = document.querySelector('.search-button')
const bookList = document.querySelectorAll('.book')

function Search() {
    searchBtn.addEventListener('click',(event) => {
        let inputValue = input.value
        if (inputValue) {
            bookList.forEach(book => {
                book.classList.forEach(className => {
                    if(className.toLowerCase().search(String(inputValue).toLowerCase().replace(' ','')) == 0){
                        book.classList.add('show')
                    } else {
                        book.classList.add('hide')
                    }
                })
            })
        }  else {
            bookList.forEach(book => {
                book.classList.forEach(className => {
                    if(className == 'show' || className == 'hide') {
                        book.classList.remove('show')
                        book.classList.remove('hide')
                    }
                })
            })
        }
    })
    
}

Search()