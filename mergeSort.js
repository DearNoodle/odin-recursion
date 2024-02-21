
function mergeSort (list) {
    if (list.length === 1) {
        return list
    }

    let middle = Math.floor(list.length/2);
    let leftList = list.slice(0, middle);
    let rightList = list.slice(middle);

    let sortedLeftList = mergeSort(leftList);
    let sortedRightList = mergeSort(rightList);

    let mergeList = [];
    let mergeListLength = sortedRightList.length + sortedLeftList.length;
    for (let i = 0; i < mergeListLength; i++) {
        
        if (sortedLeftList[0] < sortedRightList[0]) {
            mergeList.push(sortedLeftList.shift());
        } else if (sortedRightList.length === 0) {
            mergeList.push(sortedLeftList.shift());
        } else {
            mergeList.push(sortedRightList.shift());
        }
    }
    return mergeList;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));