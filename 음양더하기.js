// Q:어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
// 제한사항 : absolutes의 길이는 1 이상 1,000 이하입니다.
//absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
//signs의 길이는 absolutes의 길이와 같습니다.
//signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

function solution(absolutes, signs) {
    let result = []
    for(let i=0; i<signs.length; i++){
        if(!signs[i]){
            absolutes[i] = Number(`-`+absolutes[i])
        }
    }
    return absolutes.reduce((acc,cur)=>
                            acc+cur, 0)
}

//solution: sign의 i번째 인덱스가 false 인 경우만 찾아내서 음수 처리 해준 뒤 합계를 구한다