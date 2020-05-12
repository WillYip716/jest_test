
function analyze(arr){
    let holder = arr;
    let minimum = Math.min(...holder);
    let av = holder.reduce((previous, current) => current += previous)/holder.length;
    let maxi = Math.max(...holder);

    return {average:av,min:minimum,max:maxi,length:holder.length};
}

export {analyze}


