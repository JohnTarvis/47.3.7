function findRotationCount(arr,n) {
    let count = 1;
    while(arr[count - 1] < arr[count]){
        count++;
    }
    return count;
}

module.exports = findRotationCount