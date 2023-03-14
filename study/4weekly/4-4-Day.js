// 2016년
// 문제 설명
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
// 입출력 예
// a	b	result
// 5	24	"TUE"

// +0 = 1월 1일  : 금
// +1 = 1월 2일  : 토
// +3 = 1월 3일  : 일
// +4 = 1월 4일  : 월
// +5 = 1월 5일  : 화
// +6 = 1월 6일  : 수
// +7 = 1월 7일  : 목
// 7개요일이 순환함. 기준점을 잡고 몇이 흘렀는지 계산해보자.
// +14 = 금
// +22 = 토
// const arr =["금","토", "일", "월", "화", "수", "목"]
// const idx = 14 %7
// arr[idx]

// [1]

function solution(a, b) {
    const month = {
        1: 31,
        2: 29,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31,
    };
    const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

    let answer = 0;
    for (let i = 1; i < a; i++) {
        // console.log(i,month[i])
        answer += month[i];
        // console.log(answer)
    }
    answer += b - 1;
    // console.log(answer)
    answer = week[answer % 7];
    // console.log(answer)
    return answer;
}

solution(5, 24); //"TUE"

// [2]
const month = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
};
const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
function solution(a, b) {
    let answer = new Array(a).fill(1).reduce((acc, cur, idx) => {
        // console.log(acc,cur,idx)
        const monthnum = cur + idx;
        // console.log(monthnum)
        return acc + (monthnum !== a ? month[monthnum] : b - 1);
    }, 0);
    // console.log(answer%7)

    return week[answer % 7];
}

solution(5, 24); //"TUE"

// [3]
// const date = new Date(`2016-06-24`)
// const date = new Date(2016,5,24)  //일요일일 경우 숫자 0을 반환
// date
// date.getDate()
// date.getFullYear()
// date.getMonth()+1
// date.getDay()
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function solution(a, b) {
    const day = new Date(2016, a - 1, b).getDay();

    console.log(day);
    return week[day];
}

solution(5, 24); //"TUE"

// [4]
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function solution(a, b) {
    let answer = new Date(`2016 ${a} ${b}`);

    return String(answer).slice(0, 3).toUpperCase();
}

solution(5, 24); //"TUE"
