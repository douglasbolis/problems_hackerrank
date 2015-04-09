function processData(input) {
    var temPar = false,
        achou = false,
        i = 0,
        mat = input.split('\n'),
        lst = mat[1].split(' ');



    while ((i < mat[0]) && (!achou)) {
        temPar = false;
        achou = false;

        for (var j = 0; j < lst.length; j++) {
            if (i != j) {
                if (lst[i] == lst[j]) {
                    temPar = true
                }
            }
        }
        if (!temPar) {
            achou = true
        }
        i++
    }
    return lst[i-1]
}

var lst = "1\n1";

console.log(processData(lst));