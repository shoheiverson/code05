function isEvenNumber(a){
    var b=a%2;
    return b==0;
}

function isAcceptableNumber(a){
    var b=a%2;
    var c=a%3;
    return !(b==0||c==0);
}

function isMultipleOf5(a){
    var b=a%5;
    if(b==0){return 1;}
    else{return 0;}
}

function divideBy2(a){
    var b=a%2
    if(b==0){return a/2}
    else{return (a+1)/2}
}
