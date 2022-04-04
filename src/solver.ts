/**
 * Clase Solver
 */
export class Solver {

  constructor(private data: number[], private strategy: Strategy) {
  }

  /**
   * A setter is required in order to change the strategy in execution time
   * @param strategy Current strategy applied
   */
  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  /**
   * The context delegates some work to the Strategy object
   */
  logic() {
    this.strategy.execute(this.data);
  }
}

/**
 * Common interface to all Strategy objects. The context uses this
 * interface to work with strategies
 */
export interface Strategy {
  execute(data: number[]): void;
}

/**
 * Some concrete strategy
 */
export class BubbleSort implements Strategy {
  execute(data: number[]) {
    data = data.slice(); // creates a copy of the data

    for(let i = 0; i < data.length; i++) {
        for(let j = 0; j < data.length - 1; j++) {

            if(data[j] > data[j + 1]) {
                let swap = data[j];
                data[j] = data[j + 1];
                data[j + 1] = swap;
            }
        }
    }
    return data;
  }
}
