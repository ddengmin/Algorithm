function solution(my_string) {
    const regex = /^[0-9]+$/;
    //정규식을 사용
    let ans = [];
    
    for(let i = 0; i < my_string.length; i++){
        if(regex.test(my_string[i])){
            ans.push(Number(my_string[i]));
        }
    }
    //my_string의 문자가 0 ~ 9까지의 숫자에 해당하는지 체크, 맞다면 push
    
    return ans.sort((a,b) => a - b);
    //오름차순 정렬
}