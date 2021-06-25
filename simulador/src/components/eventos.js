alert("alskdfj");
var id1 = document.getElementById(01);
var id2 = document.getElementById(02);
var id3 = document.getElementById(03);
var id4 = document.getElementById(04);
var id5 = document.getElementById(05);

var name1 = document.getElementsByName('perguntas1');
var name2 = document.getElementsByName('perguntas2');
var name3 = document.getElementsByName('perguntas3');
var name4 = document.getElementsByName('perguntas4');
var name5 = document.getElementsByName('perguntas5');


function verificar (){
    if (name1 == 'perguntas1' && id1.checked){
        alert("respoda");
    }
}
