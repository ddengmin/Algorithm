function solution(my_string) {
    let array = my_string.split("").filter(e => e === "u" ? "" : e === "a" ? "" : e === "e"? "" : e === "o" ? "": e === "i" ? "": e);
    return array.join("");
    //블로그 답안 참고
}