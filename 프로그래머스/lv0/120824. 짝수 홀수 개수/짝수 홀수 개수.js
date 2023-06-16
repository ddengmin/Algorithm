function solution(num_list) {
    var odd = 0;
    var even = 0;
    for (let i = 0; i < num_list.length; i += 1) {
        if (num_list[i] % 2 == 0) {
            even += 1;            
        } else {
            odd += 1;
        }
    } 
    var result = [];
    result.push(even);
    result.push(odd);
    //홀수(odd), 짝수(even)을 각각 push를 이용해 넣어준다.
    return result
}