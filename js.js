//var

//console.log(Requisitos)



function geral(linguagem){
    let requisitos =['Html','Javascript', 'Css', 'Git', 'Bootstrap'] 

    let retorno = {
        atendido=[],
        naoAtendido=[]
    } 

    for (var i=0; i < requisitos.length;i++){
        if(linguagem.includes(requisitos[i])){
            retorno.atendido.push(requisitos[i])
        }
    }

    return retorno
}
console.log()


