function solution(my_string) {
    var answer = '';
    answer = my_string.split('').reverse().join('');
    return answer;
}

//split() 메서드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.

//reverse() 메서드는 배열의 순서를 반전합니다. 첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 됩니다.

//join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.