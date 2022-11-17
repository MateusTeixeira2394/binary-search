
// This algorithm will search the index of the wanted value. If the wanted value won't be found, the algorithm
// will return -1 value
export default function binarySearch(list: number[], wantedValue: number, start: number = 0, end: number = list.length - 1): number {

    let middleIndex: number = Math.floor(((start + end) / 2));

    let middleValue: number = list[middleIndex]

    // If the wanted value is less than first value or more than last value
    // the wanted value is not contained in the list. So, the algorithm
    // will return -1
    if (wantedValue < list[start] || wantedValue > list[end]) {
        return -1
    }

    // If the content of the middle index is equal to the wanted value
    // the method will return the index
    if (wantedValue === middleValue) {
        return middleIndex;
    }

    // If the wanted value is less than middle value it is because the wanted 
    // value is between the first element and the middle element. So the 
    // algorithm will call itself in a recursive way, passing, this time, the 
    // fist element to the start param and the middle index like the end param
    if (wantedValue < middleValue) {
        return binarySearch(list, wantedValue, start, middleIndex);
    }

    // If the wanted value is more than middle value it is because the wanted 
    // value is between the middle element and the last element. So the 
    // algorithm will call itself in a recursive way, passing, this time, the 
    // middle element to the start param and the last element to the end param
    if (wantedValue > middleValue) {
        return binarySearch(list, wantedValue, middleIndex, end);
    }

    return -1

}