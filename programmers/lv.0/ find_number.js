// 숫자 찾기

// 문제 설명
// 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가
// 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < num < 1,000,000
// 0 ≤ k < 10
// num에 k가 여러 개 있으면 가장 처음 나타나는 자리를 return 합니다.

// 입출력 예
// num	k	result
// 29183	1	3
// 232443	4	4
// 123456	7	-1

// 입출력 예 설명

// 입출력 예 #1
// 29183에서 1은 3번째에 있습니다.

// 입출력 예 #2
// 232443에서 4는 4번째에 처음 등장합니다.

// 입출력 예 #3
// 123456에 7은 없으므로 -1을 return 합니다.

// [1]

// 정말 지저분한 나의풀이..
// (1) num 숫자 -> 배열의 문자열로 변경
// (2) for문을 통해 num을 돌면서 k문자열과 같은것이 있으면 answer에 i+1넣기
// (3) 만약 같은것이 여러개 있을 경우 break를 통해 첫번째로 찾은 것의 i+1 만 answer에 넣기
// (4) 같은것이 없을 경우는 answer에 그대로 0이 반환되기 때문에 삼향연산자를 통해
//     같은것이 없을 경우 -1, 같은것이 있을 경우 index가 반환되도록 만들었다.

function solution(num, k) {
    let a = String(num).split("");
    let answer = 0;

    for (let i = 0; i <= a.length; i++) {
        if (String(k) === a[i]) {
            answer += i + 1;
            break;
        }
    }

    return answer === 0 ? -1 : answer;
}

solution(29183, 1); //	3
solution(232443, 4); //	4
solution(123456, 7); //-1

// [2]

// 다른사람 풀이를 통해 적용해서 풀어보았다.

// 왜 indexOf() 쓸 생각을 못했는지..
// 문자열에 대해선 indexOf()는 주어진 값과 일치하는 첫 번째 인덱스를 반환하고 일치하는 값이 없으면 -1을 반환하게된다.

// 적용해보면!
// (1) num을 toString()이용해 문자열로 만들어주고 k값과 일치하는 인덱스를 answer에 넣기
//     우리가 필요한 값은 index 값이 아닌 length 값이 필요하기 때문에
// (2) 삼항연산자를 통해 answer가 -1 이면 그대로 -1 반환 : 아닐 경우 index값 반환하기 때문에 +1한 값을 반환한다.

// 이렇게 깔끔하고 가독성 좋게 풀이를 하게 되었다.

function solution(num, k) {
    let answer = num.toString().indexOf(k);
    return answer === -1 ? -1 : answer + 1;
}

solution(29183, 1); //	3
solution(232443, 4); //	4
solution(123456, 7); //-1
