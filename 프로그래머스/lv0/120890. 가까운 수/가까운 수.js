function solution(array, n) {
    let sortArr = array.sort()
    let arr = sortArr.map(x=>Math.abs(x-n))
    return sortArr[arr.indexOf(Math.min(...arr))];
}

console.log(solution([3, 28,12],20))//28
console.log(solution([10, 11, 12],13))//12