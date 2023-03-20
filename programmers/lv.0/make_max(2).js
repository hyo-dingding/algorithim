// 최댓값 만들기 (2)

// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해
// 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// -10,000 ≤ numbers의 원소 ≤ 10,000
// 2 ≤ numbers 의 길이 ≤ 100

// 입출력 예
// numbers	result
// [1, 2, -3, 4, -5]	15
// [0, -31, 24, 10, 1, 9]	240
// [10, 20, 30, 5, 5, 20, 5]	600

// 입출력 예 설명

// 입출력 예 #1
// 두 수의 곱중 최댓값은 -3 * -5 = 15 입니다.

// 입출력 예 #2
// 두 수의 곱중 최댓값은 10 * 24 = 240 입니다.

// 입출력 예 #3
// 두 수의 곱중 최댓값은 20 * 30 = 600 입니다.

// [1]
function solution(numbers) {
    let answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] * numbers[j]);
        }
    }
    return Math.max(...answer);
}

solution([1, 2, -3, 4, -5]); //15
solution([0, -31, 24, 10, 1, 9]); //240
solution([10, 20, 30, 5, 5, 20, 5]); //600

// 2중 for문으로 겨우 풀었던 문제..

// [2]
function solution(numbers) {
    let a = numbers.sort((a, b) => a - b);
    console.log(a);
    return Math.max(numbers[0] * numbers[1], numbers[numbers.length - 1] * numbers[numbers.length - 2]);
}

solution([1, 2, -3, 4, -5]); //15
solution([0, -31, 24, 10, 1, 9]); //240
solution([10, 20, 30, 5, 5, 20, 5]); //600

// 처음 나도 sort로 해결을 해보고 싶었는데 음수일 때 최댓값만 구해졌고 시도하다가 포기하고
// 각 매개변수를 곱하여 최댓값을 구해야된다는 생각에 for문으로 다시 변경해서 문제를 해결했다.
// 다른사람의 풀이를 보면서 양수일 때 최댓값을 어떻게 구할 수 있는지 알 수 있었고 적용해서 다시 풀어보았다.
// 정말 알고리즘 고수들이 참 많은것같다.. 고수들을 통해 배울 수 있어서 참 감사하다 :)!!
