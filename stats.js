const os = require('os');
setInterval(() => {
    //NodeJs -> "require & export" 
    const {freemem, totalmem} = os
    //destructuring form above, with this u can get the variable with no repetition of lines, just using the
    //same method's name on variable's name 
    const total = parseInt(totalmem() / 1024 / 1024)
    const mem = parseInt(freemem() / 1024 / 1024)
    const percents = (mem / total) * 100
    const usage = 100 - percents
    const stats = {
        free: `${mem}MB`,
        total: `${total}MB`,
        usage: `${usage.toFixed(2)}%`
    }    
    console.clear()
    console
    console.table(stats)
}, 1000)
//To execute, Ctrl + J, type -> node filename.js