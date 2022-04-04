import { Strategy } from '../interface/interfaceStrategy';
/**
 * Clase Solver
 */
export class Solver {

  constructor(private data: number[], private strategy: Strategy) {
  }

  /**
   * Setter del patrón 
   * @param strategy Algoritmo a aplicar
   */
  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  /**
   * Delega el trabajo
   */
  logic() {
    this.strategy.execute(this.data);
  }

  /**
   * Obtiene el array tipo number Getter
   */
  getData() {
    return this.data;
  }
}

