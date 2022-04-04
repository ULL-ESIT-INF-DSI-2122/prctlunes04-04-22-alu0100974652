"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSort = void 0;
/**
 * @class BubbleSort para implementar el algoritmo Bubblesort
 */
class BubbleSort {
    /**
     * Función Execute que toma un array de tipo number y realiza el algoritmo BubbleSort
     * @param data array desordenado tipo numbers
     */
    execute(data) {
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data.length - 1; j++) {
                if (data[j] > data[j + 1]) {
                    let swap = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = swap;
                }
            }
        }
    }
}
exports.BubbleSort = BubbleSort;
//# sourceMappingURL=bubbleSortStrategy.js.map