import 'mocha';
import {expect} from 'chai';
import { PrimeNumber } from '../src/ejercicio';

describe('Pruebas para la clase PrimeNumber', () => {

    const primeNumberN = PrimeNumber.getPrimeNumber();

    it('Se implementa el método para n números', () => {
        primeNumberN.setNNumbers(10);
        expect(primeNumberN.getItems()).to.deep.eq([2,3,5,7]);
        primeNumberN.resetItems();
        primeNumberN.setNNumbers(3);
        expect(primeNumberN.getItems()).to.deep.eq([2,3]);
    });

    const primeNumberNM = PrimeNumber.getPrimeNumber();
    it('Se implementa el método desde n hasta m números', () => {
        primeNumberNM.resetItems();
        primeNumberNM.setNMNumbers(5,10);
        expect(primeNumberNM.getItems()).to.deep.eq([5,7]);
    });

});