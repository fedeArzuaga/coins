function isTheLastElement( array, index ) {
    return array.indexOf(array[index]) == (array.length - 1);
}

module.exports = {
    isTheLastElement
}