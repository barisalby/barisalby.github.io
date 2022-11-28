var dropdown = document.querySelectorAll('.dropdown')
var darkMode = document.querySelectorAll('.toggleDark')
var body = document.body
var html = document.documentElement

dropdown.forEach((elem, set = 0) => {
    elem.addEventListener('click', function () {
        if (set == 0) {
            elem.classList.toggle('active');
            console.log('added')
            setTimeout(() => {
                set = 1
            }, 10)
        }
    })

    body.addEventListener('click', function () {
        if (elem.classList.contains('active') && set == 1) {
            elem.classList.remove('active')
            console.log('removed')
            set = 0
        }
    })
});

set = 0

darkMode.forEach((elem) => {
    elem.addEventListener('click', function () {
        if (set == 1) {
            html.classList.add('dark')
            set = 0
        } if (set == 0) {
            html.classList.remove('dark')
            set = 1
        }
        localStorage.setItem(darkMode, set)
    })
})
