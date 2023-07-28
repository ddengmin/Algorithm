function solution(n) {
    let sol = 1;

    for(let i = 1; i <= n; i++){
        sol *= i;
        
        if(sol === n){
            return i;
        }
        
        if(sol > n){
            return i - 1;
        }
    }
}