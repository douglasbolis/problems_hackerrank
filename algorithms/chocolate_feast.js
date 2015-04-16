function processData(input) {
    var lstCase = input.split("\n"), lstAux;
    var res, auxB;

    for (var i = 1; i <= lstCase[0]; i++) {
        lstAux = lstCase[i].split(" ");
        res = parseInt(lstAux[0]/lstAux[1]);

        //TODO terminar a lógica de quantos chocolates Brenno consegue comer (kkkk...).
        if (res >= lstAux[2]) {
            res += parseInt(res/lstAux[2])
        }
        console.log(res);
    }

    /*console.log(input);
    console.log(lstCase);*/
}

var str = "3\n10 2 5\n12 4 4\n6 2 2";

processData(str);
//console.log(processData(lst));