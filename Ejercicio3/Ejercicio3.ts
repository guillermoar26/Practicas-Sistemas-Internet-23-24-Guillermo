export function ordernarStrings(array:Array<string>): string[]{
    const arrayOrdenado:string[] = array.sort(); 
    const palabra: string[] = arrayOrdenado[0].split('');
    return palabra;   
}

const arr: string[] = ["aab","aac","bbb","aaa"];
const arr1modificado: string[] = ordernarStrings(arr);
console.log(arr1modificado);