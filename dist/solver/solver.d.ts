import { Strategy } from '../interface/interfaceStrategy';
/**
 * Clase Solver
 */
export declare class Solver {
    private data;
    private strategy;
    constructor(data: number[], strategy: Strategy);
    /**
     * Setter del patrón
     * @param strategy Algoritmo a aplicar
     */
    setStrategy(strategy: Strategy): void;
    /**
     * Delega el trabajo
     */
    logic(): void;
    /**
     * Obtiene el array tipo number Getter
     */
    getData(): number[];
}
