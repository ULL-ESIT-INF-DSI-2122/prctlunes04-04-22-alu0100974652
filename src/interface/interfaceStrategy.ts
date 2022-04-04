/**
 * @interface Strategy interfaz para el patrón Strategy
 */
export interface Strategy {
    execute(data: number[]): void;
}