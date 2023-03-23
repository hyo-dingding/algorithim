// 외계행성의 나이

// 문제 설명
// 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다.
// 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다.
// a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다.
// 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// age는 자연수입니다.
// age ≤ 1,000
// PROGRAMMERS-962 행성은 알파벳 소문자만 사용합니다.

// 입출력 예
// age	result
// 23	"cd"
// 51	"fb"
// 100	"baa"

// 입출력 예 설명

// 입출력 예 #1
// age가 23이므로 "cd"를 return합니다.

// 입출력 예 #2
// age가 51이므로 "fb"를 return합니다.

// 입출력 예 #3
// age가 100이므로 "baa"를 return합니다.

// [1] 나의 풀이
// -> 나의 의도 : index에 맞는 알파벳을 구하는 방식으로 접근하려 했다.

// (1) ufo962 라는 변수에 배열로된 문자열 알파벳을 정의한다.
// (2) ages 라는 변수에 age를 배열 문자열로 변경한다.(for문 돌리기 위함)
// (3) for문을 ages의 length 미만까지 돌리고 index라는 변수에 문자열이였던 ages를 숫자로 변경해서 넣어준다.
// (4) answer라는 문자열 변수에 ufo962[index] 알파벳 값을 넣어준다.

function solution(age) {
    let ufo962 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let ages = String(age).split("");

    let answer = "";

    for (let i = 0; i < ages.length; i++) {
        let index = Number(ages[i]);
        answer += ufo962[index];
    }
    return answer;
}

solution(23); //"cd"
solution(51); //"fb"
solution(100); //"baa"

// [2] 다른사람 풀이 적용(1)

// 내가 몰랐던 사실!
// 나는 ufo962[index]의 index값을 구해야하는거라 숫자로 변경해주었는데 []에 들어가는것이 숫자만 가능한 줄 알았다.
// 문자열도 가능한 줄 이제 알게되었다...!!

// 그래서 내가 푼 풀이와 비교해보면 age를 string 까지만 만들어주고
// ufo962[index에 맞는 알파벳만 가져올 수 있도록] 만들어주었다.

function solution(age) {
    let ufo962 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let ages = age.toString();

    let answer = "";

    for (let i = 0; i < ages.length; i++) {
        answer += ufo962[ages[i]];
    }
    return answer;
}

solution(23); //"cd"
solution(51); //"fb"
solution(100); //"baa"

// [3] 다른사람 풀이적용(2)

// map을 이용한 풀이이다. map은 배열에서만 사용가능하다.
// map은 잘 안써봤는데 많이 사용해봐야겠다.

function solution(age) {
    return age
        .toString()
        .split("")
        .map((el) => "abcdefghij"[el])
        .join("");
}
solution(23); //"cd"
solution(51); //"fb"
solution(100); //"baa"
