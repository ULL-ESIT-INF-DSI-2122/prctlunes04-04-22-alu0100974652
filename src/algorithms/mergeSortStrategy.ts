import { Strategy } from '../interface/interfaceStrategy';
/**
 * @class BubbleSort para implementar el algoritmo Bubblesort
 */
export class MergeSort implements Strategy {
    /**
     * Función Execute que toma un array de tipo number y realiza el algoritmo BubbleSort
     * @param data 
     */
    execute(data: number[]) {
        
      return this.divide(data);
    }

    divide(data: number[]) {
       console.log(`${data}`); 
    }
}