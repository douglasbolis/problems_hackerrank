function processData(input) {
    var lstCase = input.split("\n"), auxA;

    for (var i = 1; i <= lstCase[0]; i++) {
        if ((lstCase[i]%2)==0) {
            console.log((lstCase[i]/2)*((lstCase[i]/2)));
        }else{
            console.log(parseInt(lstCase[i]/2)*parseInt((lstCase[i]/2)+1));
        }
    }
}

var str = "4\n5\n6\n7\n8";

processData(str);
//console.log(processData(lst));