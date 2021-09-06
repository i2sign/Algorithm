//Q: 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
//limits:행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

function solution(arr1, arr2) {
      // let answer = []
      let final = []
      for(let i=0; i<arr1.length;i++){
            let answer = []
            for(let j=0; j<arr1[i].length; j++){
                  answer.push((Number(arr1[i][j])+ Number(arr2[i][j])))
            }
            final.push(answer)
      }
      return final;
}

//solutions: 배열을 순회하면서 동일한 위치의 숫자를 더해줘야 하는데, 숫자를 더한 다음에 배열을 만들어서 push를 해야 하기 때문에 push할 배열을 1차 반복문 안에 만들어주기