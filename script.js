//Crie uma função chamada positions, esta função deverá receber como argumento 3 parâmetros; firstPlace, secondPlace, lastPlace X
//criar um array composto por 3 parametros (a posição em que o parametro é inserido é considerado a posição) X
//daniel tem ponto extras sempre subira uma posição a menos que ele seja o primeiro 
//Após realizar deverá imprimir no console o resultado. modelo: 1ª - Colocado "nomeDoCompetidor". Queremos saber a posição de todos os 3 primeiros colocados.
//Daniel had always climbed one position on the podium. If he was the first, he would not have climbed at all.
let arr = ["Rafael", "Manoel" ,"Daniel"];
function positions(firstPlace, secondPlace, lastPlace) {
    if (lastPlace == "Daniel") {
        console.log (`1ª - Colocado ${firstPlace}`,`2ª - Colocado ${lastPlace}`,`3ª - Colocado ${secondPlace}`);
    } 
    if (secondPlace == "Daniel") {
        console.log (`1ª - Colocado ${secondPlace}`,`2ª - Colocado ${firstPlace}`,`3ª - Colocado ${lastPlace}`);
    }
    }
console.log(positions(arr[0], arr[1], arr[2]))