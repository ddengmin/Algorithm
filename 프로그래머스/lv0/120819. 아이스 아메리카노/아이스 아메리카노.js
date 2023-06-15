function solution(money) {
    //마실수 있는 잔수와 잔돈을 고려해야함
    let answer = [];
    answer.push(parseInt(money / 5500))
    answer.push(money % 5500)

    return answer
}