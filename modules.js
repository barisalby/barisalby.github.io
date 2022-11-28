let run = require('./test')
let os = require('os')
let fs = require('fs')

// run.hi('Barış')
// run.msg('Enjoy it :)')

// run.init()

var newDir = './output'
var newFile = + "'text.html', 'UTF-8'"

if (!fs.existsSync(newDir)) {
    fs.mkdir(newDir, (err) => {
        if (err) {
            throw (err.name, err.message)
        } else {
            console.log(newDir + " " + "has been created on" + " " + run.loc)
        }
    })
} else {
    throw (err.name, err.message)
}

///

if (!fs.existsSync(newFile) && (newFile.(__dirname) == newDir)) {
    fs.writeFile(newFile, (err) => {
        if (err) {
            throw (err.name, err.message)
        } else {
            console.log(newFile + " " + "has been created on" + " " + run.path)
        }
    })
} else {
    throw (err.name, err.message)
}

