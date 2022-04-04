import 'mocha';
import { expect } from 'chai';
import { Solver } from '../src/solver';
import { BubbleSort } from '../src/bubbleSortStrategy';

describe('BubbleSort function test', () => {
    
    const mySolver = new Solver([4,9,5,8,10,0], new BubbleSort());
    it('Se soluciona un array con el BubbleSort', () => {
        mySolver.logic();
        expect(mySolver.getData()).to.deep.eq([0,4,5,8,9,10]);
    });
});