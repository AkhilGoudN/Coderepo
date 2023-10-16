function descendingOrder(arr) {
    return arr.sort(function(a, b) {
        return b - a;
    });
}

const values = [5, 2, 9, 1, 5, 6];
const sortedDescending = descendingOrder(values);
console.log(sortedDescending);
