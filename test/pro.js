const util = require('util');


function age(delta, callback) {
    if (delta > 14)
        throw new Error("Can be bigger than 14");

    callback(( delta));
}


// age(15, x => console.log(15));

const p = util.promisify(age);
p(10)
    .then((response) => {
 
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
