function pow() {
    var x, y, result;

    x = document.getElementById("f1n1").value;
    y = document.getElementById("f1n2").value;

    x = parseInt(x);
    y = parseInt(y);
    result = x;

    for (var i = 1; i < y; i++) {
        result *= x;
    }

    document.getElementById("resultf1").innerHTML = result;
}

function gcd() {
    var x, y, result;
    x = document.getElementById("f2n1").value;
    y = document.getElementById("f2n2").value;

    x = parseInt(x);
    y = parseInt(y);

    while (x != y) {
        if (x > y) {
            x = x - y;
        } else {
            y = y - x;
        }
    }
    result = x;
    document.getElementById("resultf2").innerHTML = result;
}

function minDigit() {
    var x,
        min = 10,
        result;
    var r = "";
    var array = new Array();

    x = document.getElementById("f3n1").value;
    array = x.split(r);

    for (i = 0; i < array.length; i++) {
        if (min > parseInt(array[i])) {
            min = array[i];
        }
    }
    result = min;

    document.getElementById("resultf3").innerHTML = result;
}

function pluralizeRecords() {
    var x, result;
    var array = new Array();

    x = document.getElementById("f4n1").value;
    array = x.split("");

    var length = array.length;
    var number = array[length - 1];
    var number2 = array[length - 2];

    if ((number >= 5 && number <= 9) || number == 0 || number2 == 1) {
        result = "В результате выполнения запроса было найдено " + x + " записей";
    } else if (number >= 2 && number <= 4) {
        result = "В результате выполнения запроса было найдено " + x + " записи";
    } else {
        result = "В результате выполнения запроса была найдена " + x + " запись";
    }

    document.getElementById("resultf4").innerHTML = result;
}

function fibb() {
    var x, result;
    var fib1 = 1,
        fib2 = 1,
        i = 0;

    x = document.getElementById("f5n1").value;
    x = parseInt(x);
    if (x > 0 && x <= 1000) {
        while (i < x - 2) {
            let sum = fib1 + fib2;
            fib1 = fib2;
            fib2 = sum;
            i++;
        }
        result = fib2;
    } else {
        result = "Error";
    }

    document.getElementById("resultf5").innerHTML = result;
}