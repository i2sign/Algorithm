//Q:두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
//limits:1 ≤ left ≤ right ≤ 1,000

function solution(left, right) {
      let result = [];
      let answer = 0;
      for(let i=left; i<=right; i++){
            if(Number.isInteger(Math.sqrt(i))){
                  result.push(Number(-i))
      }
            else{
                  result.push(i)
      }
      }
      return answer = result.reduce((acc,cur) => {
      acc+cur
      },0)
  }

//solution : 약수의 개수가 홀수인건 제곱수이다. 제곱수인지 여부 확인해서 음수처리 한 후 모두 더하기