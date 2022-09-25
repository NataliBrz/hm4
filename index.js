function enter() {
    let sum = 0;

    for (; ;) {

        let value = +prompt("Введите число", '');
        if (!value) break;
        sum += value;

        /*if (a > b) {
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }*/

        console.log(value)

    }
    alert('Сумма: ' + sum);
}

function array1() {
    array = ['js', 'css', 'html'];
    alert(array[0]);
}

function array2() {
    array = [0, 1, false, 2, undefined, '', 3, null];
    arrfil = array.filter(el => el == Number(el));
    alert(arrfil)
}

function array3() {
    arr = [[1, 2], [1, 2, 3], [1, 2, 3, 4]]
    arr.forEach(items, index)
    function () {
        let z = arr.length;
        if z > 3;
        alert(index)
    }

}



