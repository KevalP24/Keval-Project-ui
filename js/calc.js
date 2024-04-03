function calc(){
    var x = document.getElementById("maths").value;
    var y = document.getElementById("english").value;
    var z = document.getElementById("science").value;
    
    var maths = Number(x);
    var english = Number(y);
    var science = Number(z);

    var sum=maths+english+science;
    document.getElementById('marks').innerHTML = sum;
    
    var per=sum/3;
    var perc=per.toFixed(2);
    document.getElementById('taka').innerHTML = perc+'%';
}