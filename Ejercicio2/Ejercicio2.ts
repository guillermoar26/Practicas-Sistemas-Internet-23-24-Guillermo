export function multiplos(numero: number):number[] {
    if (typeof numero !== "number"){
        throw ("Wrong input type");
    }

    const multiplos:number[] = [];
    for(let num=1; num <= numero; num++) {
        if ((num % 3 === 0)  || (num % 5 === 0)){
            multiplos.push(num);
        }
    }

    return multiplos;
}

console.log(multiplos(15));