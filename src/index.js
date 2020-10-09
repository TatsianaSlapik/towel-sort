// You should implement your task here.
module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length == 0) {
        return [];
    } else {

        matrix.forEach((item, i, arr) =>
            i % 2 !== 0 && item.reverse());
        arr = matrix.reduce((sum, current) => sum.concat(current));
        return arr;
    }

}