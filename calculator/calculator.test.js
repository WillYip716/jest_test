import {add,subtract,multiply,divide} from './calculator.js'

test('2 + 3 = 5',()=>{
    expect(add(2,3)).toBe(5);
});

test('2 - 3 = -1',()=>{
    expect(subtract(2,3)).toBe(-1);
});


test('2 * 3 = 6',()=>{
    expect(multiply(2,3)).toBe(6);
});

test('3 / 3 = 1',()=>{
    expect(divide(3,3)).toBe(1);
});