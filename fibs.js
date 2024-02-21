function fibs (num) {
    let array = [];
    for (let i = 0; i < num; i++) {
        if (i <= 1) {
            array.push(i);
        } else {
            array.push(array[array.length-1]+array[array.length-2]);
        }
    }
    return array
}

console.log(fibs(8));

function fibsRec (num) {
    if (num < 2) {
        return num
    } 
    return fibsRec(num-1) + fibsRec(num-2)
}

function fibsRecList (num) {
    let array = [];
    for (let i = 0; i < num; i++) {
         array.push(fibsRec(i));
    }
    return array
}

console.log(fibsRecList(8))



