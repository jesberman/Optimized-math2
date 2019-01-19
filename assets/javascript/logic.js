function counting () {
    newArray =[];

    document.getElementById("main").innerHTML = newArray;
    var i;
    var statement = [];
    
    for (i=1; i < 101; i++){
        var text;
        var space = " ";
        if ((i % 3 === 0) && (i % 2 === 0) ) {
            text = " is divisible by 2 and 3";
            statement.push(space+i+text);
        }
        else if (i % 3 === 0) {
            text = " is divisible by 3";
            statement.push(space+i+text);
        }
         else if (i % 2 === 0) {
            text = " is even";
            statement.push(space+i+text);
        }
        else if (i % 2 !== 0) {
            text = " is odd";
            statement.push(space+i+text);
        }
        console.log(i+text);
        document.getElementById("main").innerHTML = statement;
    }
}
counting();
