import 'mocha';
import { expect } from 'chai';
import { Solver } from '../src/solver';
import { BubbleSort } from '../src/bubbleSortStrategy';

describe('BubbleSort function test', () => {
    
    const mySolver = new Solver([4,9,5,8,10], new BubbleSort());
    it('Se soluciona un array con el BubbleSort', () => {
        mySolver.logic();
        expect(mySolver.getData()).to.deep.eq([4,5,8,9,10]);
    });

    const mySolver2 = new Solver([1,2,5,4], new BubbleSort());
    it('Se soluciona un array2 con el BubbleSort', () => {
        mySolver2.logic();
        expect(mySolver2.getData()).to.deep.eq([1,2,4,5]);
    });

    const mySolver3 = new Solver([2,1], new BubbleSort());
    it('Se soluciona un array3 con el BubbleSort', () => {
        mySolver3.logic();
        expect(mySolver3.getData()).to.deep.eq([1,2]);
    });

    const mySolver4 = new Solver([1], new BubbleSort());
    it('Se soluciona un array4 con el BubbleSort', () => {
        mySolver4.logic();
        expect(mySolver4.getData()).to.deep.eq([1]);
    });
});