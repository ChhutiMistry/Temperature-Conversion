function Cconvert(valNum) {
   valNum = parseFloat(valNum);
   document.getElementById("outputF1").innerHTML=(valNum*1.8)+32;
   document.getElementById("outputK1").innerHTML=valNum+273.15;
}

function Fconvert(valNum) {
   valNum = parseFloat(valNum);
   document.getElementById("outputC2").innerHTML=(valNum-32)/1.8;
   document.getElementById("outputK2").innerHTML=((valNum-32)/1.8)+273.15;
}

function Kconvert(valNum) {
   valNum = parseFloat(valNum);
   document.getElementById("outputC3").innerHTML=valNum-273.15;
   document.getElementById("outputF3").innerHTML=((valNum-273.15)*1.8)+32;
}