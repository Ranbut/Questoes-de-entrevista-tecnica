/*
Desafio: Não pode ser utilizado funções especiais de Javascript
e deve ser programado como uma função de baixo nível.
*/


/*Retorna o maior o menor e a media*/
function msgTest(n1, n2, n3) {

    if(n1 >= n2 && n1 >= n3){
        console.log("Maior: ", n1);
    }
    if(n2 >= n1 && n2 >= n3){
        console.log("Maior: ", n2);
    }
    if(n3 >= n2 && n3 >= n1){
        console.log("Maior: ", n3);
    }

    console.log("Menor: ", );
    console.log("Media: ", (n1 + n2 + n3) / 3)
}

/*Array, retorna invertido*/
function msgTest(arr) {
    const newArr = [];
    let count = arr.length;

    while (count > 0) {
        newArr.push(arr[count - 1]);
        count--;
    }

    console.log(newArr);
}

/*Exponenciação*/
function msgTest(base, expente) {
    let result = base;

    if (expente !== 0) {
        for (let i = 0; i < expente - 1; i++) {
            result = result * base;
        }
        console.log(result);
    }
    else
        console.log(1)

}