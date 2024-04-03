function testresult(){

    count=0;
    var q1=document.getElementById('1o2').checked;
    var q2=document.getElementById('2o1').checked;
    if(q1 && q2){
        count=4;
    }
    else if(q1 || q2){
        count=2;
    }
    else{
        count=0;
    }
    alert("You've got "+count+" marks!!!");
    return false;

    // var marks=0

    // // var x = document.getElementsByName("q1").checked.val();
    
    // // var x = document.querySelector("input[name='q1']:checked");
    // // console.log(x)

    
    // x=document.getElementById("1o2").value
    // console.log(x)
    // var radioButtons = document.querySelectorAll("input[name='q1']");
    // var radioValue;
    // radioButtons.forEach(function(radioButton) {
    //     if (radioButton.checked) {
    //         radioValue = radioButton.value;
    //     }
    // });
    
    // if(x == radioValue){
    //     marks = marks + 1
    // }

    // console.log(marks)
    // console.log(document.getElementById("1o2"))
    // alert(marks)
    
}