// 369게임

// 문제 설명
// 머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며
// 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다.
// 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를
// return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ order ≤ 1,000,000

// 입출력 예
// order	result
// 3	1
// 29423	2
// 304     1   -> 테스트 케이스가 추가 되어서 계속 실패를 해서 임의로 추가함

// 입출력 예 설명

// 입출력 예 #1
// 3은 3이 1개 있으므로 1을 출력합니다.

// 입출력 예 #2
// 29423은 3이 1개, 9가 1개 있으므로 2를 출력합니다.

// [1] 내가 푼 풀이

// 정말 지저분 너저분....
// 추가된 테스트 코드에서 0이 있는 경우도 있다고해서
// 304 을 추가하니 3의 나머지가 0인 경우까지 포함이 되서 추가로 for문을 하나 더 써주게 되었다.

function solution(order) {
    let a = order.toString().split("");
    let answer = [];
    let wow = [];
    for (let i = 0; i < a.length; i++) {
        if (Number(a[i]) % 3 === 0) {
            answer.push(Number(a[i]));
        }
    }
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] !== 0) {
            wow.push(answer[i]);
        }
    }
    return wow.length;
}
solution(3); //1
solution(29423); //2
solution(304); //0

// [2] 다른사람 풀이 적용

// 한줄에 끝나는 코드.... 순간 현타가 왔었다. 하하;;
// split()에 정규표현식도 사용가능한지 이제 얄게됬기 때문이다..

// 알고리즘을 풀면서 배움도 늘어가고
// 역시 알고리즘은 꾸준함 밖에 없는것같다!!
// 꾸준하게 풀자🔥

function solution(order) {
    return order.toString().split(/[369]/).length - 1;
}
solution(3); //1
solution(29423); //2
solution(304); //1
