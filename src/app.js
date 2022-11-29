var dropdown = document.querySelectorAll('.dropdown')
var darkMode = document.querySelectorAll('.toggleDark')
var html = document.documentElement
var dtGet = localStorage.getItem('darkToggler')
document.addEventListener('DOMContentLoaded', function () {
    if (dtGet === 'true') {
        html.classList.add('dark')
    } else {
        html.classList.remove('dark')
    }
})

dropdown.forEach((elem, set = 0) => {
    elem.addEventListener('click', function () {
        if (set == 0) {
            elem.classList.toggle('active');
            console.log('added')
            setTimeout(() => {
                set = 1
                console.log(set)
            }, 10)
        }
    })

    html.addEventListener('click', function () {
        if (set == 1) {
            elem.classList.remove('active')
            set = 0
            console.log('act')
        } else {
            console.error()
        }
    })
});

function toggleDark() {
    if (localStorage.getItem('darkToggler') === 'false') {
        html.classList.add('dark')
        localStorage.setItem('darkToggler', 'true')
    } else {
        html.classList.remove('dark')
        localStorage.setItem('darkToggler', 'false')
    }
}
