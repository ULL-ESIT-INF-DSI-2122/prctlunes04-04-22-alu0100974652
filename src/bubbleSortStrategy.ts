import { Strategy } from './interfaceStrategy';
/**
 * @class BubbleSort para implementar el algoritmo Bubblesort
 */
export class BubbleSort implements Strategy {
    /**
     * Función Execute que toma un array de tipo number
     * @param data 
     */
    execute(data: number[]) {
      for(let i = 0; i < data.length; i++) {
          for(let j = 0; j < data.length - 1; j++) {
  
              if(data[j] > data[j + 1]) {
                  let swap = data[j];
                  data[j] = data[j + 1];
                  data[j + 1] = swap;
              }
          }
      }
    }
  }