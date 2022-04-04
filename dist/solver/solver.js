"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solver = void 0;
/**
 * Clase Solver
 */
class Solver {
    constructor(data, strategy) {
        this.data = data;
        this.strategy = strategy;
    }
    /**
     * Setter del patrón
     * @param strategy Algoritmo a aplicar
     */
    setStrategy(strategy) {
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
exports.Solver = Solver;
//# sourceMappingURL=solver.js.map