const fs = require('fs')
const path = require('path')
const { argv } = require('process')

const file = argv[2]
const sourceFile = path.join(`/home/thoma/Documents/myprojects/threeJs/three.js/build/${file}`)
const destionationFile = path.join(`./${file}`)

fs.copyFile(sourceFile,destionationFile,(err)=>{
    if (err) throw(err)
    console.log('file copied')
})