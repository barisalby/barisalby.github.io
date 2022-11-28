var hi = (name) => {
    console.log(`Hi, ${name}`)
}

var msg = (response) => {
    console.log(`modulu_exports running!, ${response}`)
}

let loc = (__dirname)
let path = (__filename)

var init = function ready() {
    var status = console.log('Running on VSCode!')

    let loader = setInterval(() => {
        console.log('Initializing...')
    }, 1000)

    let hi = (name) => {
        console.log(`Hi, ${name}`)
    }

    let location = (dir, file) => {
        console.log(`Your folder path:, ${__dirname}`)
        console.log(`Your file path:, ${__filename}`)
    }

    setTimeout(() => {
        hi('Barış')
        location()
        clearInterval(loader)
    }, 4000)
}

module.exports = {
    hi,
    msg,
    init,
    loc,
    path,
}