function encontrarIndiceMinimo(arr){
    if(!arr.length)
        return -1;

    return arr.indexOf(Math.min(...arr));
}

console.log(encontrarIndiceMinimo([4, 1, 2, 6, 5]));