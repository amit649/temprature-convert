function convert(){
    var x=document.getElementById("inno").value;
    var y=document.getElementsByTagName("select")[0].value;
    if(x==""){
        alert("please enter a number");
    }
    else{
        if(y=="Fahrenheit"){
            var c=(parseFloat(x)-32)*(5/9);
            var k=parseFloat(c)+273.15;
            document.getElementById("outbox").innerHTML=c+' '+"°C";
            document.getElementById("outbox1").innerHTML=k+' '+"°K";
            //document.write(c);
        }
        else if(y=="Celsius"){
            var f=(parseFloat(x)*(9/5))+32;
            var ke=parseFloat(x)+273.15;
            document.getElementById("outbox").innerHTML=f+' '+"°F";
            document.getElementById("outbox1").innerHTML=ke+' '+"°K";

        }
        else if(y=="Kelvin"){
            var ce=parseFloat(x)-273.15;
            var fa=((parseFloat(x)-273.15)*(9/5))+32;
            document.getElementById("outbox").innerHTML=ce+' '+"°C";
            document.getElementById("outbox1").innerHTML=fa+' '+"°F";
        }
    }
    
}
function oncl(){
    document.getElementById("outbox").innerHTML="";
    document.getElementById("outbox1").innerHTML="";
}