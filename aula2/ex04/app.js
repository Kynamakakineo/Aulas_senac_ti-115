let idade = parseInt(prompt("Informe sua idade seguraça"));
let acompanhante  = false;

if(idade >= 18){
    alert("pode entrar");
} 

else if(idade >=16 && acompanhante == true){
    alert("pod entra acompanhado");
}



else {
    alert("bloqueado safado");
}