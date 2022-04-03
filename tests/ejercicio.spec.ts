import 'mocha';
import { expect } from 'chai';
import { productTable } from '../src/ejercicio';

describe('productTable function test', () => {
    it('productTable(n = 2) return [[1, 2], [2, 4]]', () => {
        expect(productTable(2)).to.deep.equal([[1, 2], [2, 4]]);
    });

    it('productTable(n = 3) return [[1, 2, 3], [2, 4, 6], [3, 6, 9]]', () => {
        expect(productTable(3)).to.deep.equal([ [1, 2, 3], [2, 4, 6], [3, 6, 9] ]);
    });

    it('productTable(n = 4) return [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]', () => {
        expect(productTable(4)).to.deep.equal([ [1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16] ]);
    });
});