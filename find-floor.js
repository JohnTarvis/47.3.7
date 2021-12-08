function findFloor(arr,n) {
    let count = 0;
    let highest = -Infinity;
    while(count < arr.length){
        count++;
        if(arr[count] < n && arr[count] > highest){
            highest = arr[count];
        }
    }
    return highest;

}

module.exports = findFloor