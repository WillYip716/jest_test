
function reverse(str){
    let holder = str.split("");
    holder = holder.reverse();
    return holder.join("");
}

export {reverse}