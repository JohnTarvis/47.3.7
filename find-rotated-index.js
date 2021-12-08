function findRotatedIndex(arr,n) {
    let count = 0;
    while(arr[count] != n && count < arr.length){
        count++;
    } 
    if(arr[count] == arr.length - 1 && arr[count] != n){
        return -1
    }
    return count;
}

module.exports = findRotatedIndex