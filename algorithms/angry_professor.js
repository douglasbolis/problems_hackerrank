function processData(input) {
    var dados = input.split("\n"),
        casos = [],
        alunos = [],
        aux, cont = 0;

    for (var i = 0; i < dados[0]; i++) {
        aux = (i * 2) + 1;
        casos = dados[aux].split(" ");
        alunos = dados[aux + 1].split(" ");
        cont = 0;

        for (var j = 0; j < casos[0]; j++) {
            if (alunos[j] <= 0) {
                cont++;
            }
        }

        if (casos[1] <= cont) {
            console.log("NO");
        }else{
            console.log("YES");
        }
    }
}

var lst = "5\n4 3\n-1 -3 4 2\n4 2\n0 -1 2 1\n6 3\n5 0 -1 -3 4 2\n10 4\n0 1 2 1 0 1 2 1 5 5\n9 3\n-1 -3 4 2 -1 3 4 2 0";

processData(lst);
//console.log(processData(lst));