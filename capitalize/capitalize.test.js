import {capFirst} from './capitalizeFirst'

test('capitalize f in first',()=>{
    expect(capFirst("first")).toBe("First");
}); 