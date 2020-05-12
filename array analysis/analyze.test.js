import {analyze} from './arrAnalyze'

test('analyzer test',()=>{
    expect(analyze([5,3,2,5,10]).average).toBe(5);
    expect(analyze([5,3,2,5,10]).max).toBe(10);
    expect(analyze([5,3,2,5,10])).toEqual({average:5,min:2,max:10,length:5});
}); 