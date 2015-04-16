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

var lst = "10\n6877550\n9740081\n2091018\n5938116\n1969577\n4023883\n3130903\n1327048\n339650\n310570";

processData(lst);
//console.log(processData(lst));