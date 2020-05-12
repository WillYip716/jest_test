import {caesarCipher} from './cipher'

test('ceaser cipher test', ()=>{
    expect(caesarCipher("HELLO",1)).toBe("IFMMP");
    expect(caesarCipher("HELLO",2)).toBe("JGNNQ");
});