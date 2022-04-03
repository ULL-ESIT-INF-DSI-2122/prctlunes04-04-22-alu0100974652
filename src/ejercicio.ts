/**
 * Genera las tablas de multiplicar de un numero n
 * @param n Parámetro numérico para generar las tablas del mismo
 * @returns Retorna una variable arrays de arrays con las distintas tablas de multiplicar
 */

export function productTable(n: number): number[][]
{
    if(n <= 0)
    {
        return [[-1]];
    } else {
        let arrayAux: number[] = [];
        let myArray: number[][] = [[]];
        for(let i: number = 0; i < n; i++)
        {
            for(let j: number = 1; j <= n; j++)
            {
                arrayAux.push(j * (i+1));
            }

            myArray[i] = arrayAux;
            arrayAux = [];
        }        
        return myArray;
    }
}