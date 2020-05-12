
function capFirst(str){
    let holder = str.split("");
    holder[0] = holder[0].toUpperCase();
    return holder.join("");
}

export {capFirst}