// Q: 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.
// limits: nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
// nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.

function solution(nums) {
      let result = [];
      let count = 0
      let result2 = []
       let count2 = 0
       for(let i=0; i<nums.length; i++){
           for(let j=1; j<nums.length; j++){
               for(let k=2; k<nums.length; k++){
                   let num = nums[i] + nums[j] + nums[k]
                   if(result.indexOf(num)===-1){
                       result.push(num)
                   }
               }
           }
       }
      for(let h=0;h<result.length; h++){
          for(let g=1; g<=result[h];g++){
              if(result[h] % g === 0){
                  count ++
              }
              else if(count ===2 && result[h]=== g){
                  result2.push(result[h])
              }
      }
      }
      return result2.length;
  }

//solution: 3개의 숫자로 만들 수 있는 모든 숫자 확인 후 그 숫자가 소수인지 확인해서 갯수 출력하기