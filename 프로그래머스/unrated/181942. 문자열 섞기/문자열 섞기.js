function solution(str1, str2) {
    var answer = '';
    let str = [...str1];
    
    console.log(str)
    answer = str.map((i, j) => {
        return i + str2[j]
    }).join('')
    
    return answer;
}