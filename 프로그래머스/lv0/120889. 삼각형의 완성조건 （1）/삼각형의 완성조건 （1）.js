function solution(sides) {
    var answer = 0;
    sides.sort(function(a, b)  {
        return a - b;
    });
    
    for(let i=0; i<sides.length; i++){
        if(sides[2] >= sides[0] + sides[1]){
            answer = 2;
        } else {
            answer = 1;
        }
    }
    return answer;
}