function validation(){
    var name = document.getElementById("name").value;
    var location = document.getElementById("location").value;
    
    if(name==""){
        alert("enter your name");
        frm1.name.focus();
        return false;
    }
    else if(location==""){
        alert("enter your location");
        frm1.location.focus();
        return false;
    }
    else{
        alert("hello "+name+" from "+location);
    }
    
}