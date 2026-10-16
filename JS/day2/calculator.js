// 더하기
function add(n1, n2) {
    return n1 + n2;
};

// 빼기
function subtract(n1, n2) {
    return n1 - n2;
};

// 나누기
function divide(n1, n2) {
    return n1 / n2;
};

// 곱하기
function multiply(n1, n2) {
    return n1 * n2;
};

// 입력창 함수 정의
function inputFormula() {
    return prompt("계산식을 입력하세요.(예: 1 + 1 * 4)");
}

// 계산하는 함수 정의
function calculate(formula) {
    // trim()은 앞뒤 공백을 제거해주는 메서드
    const tokens = formula.trim().split(/\s+/);
    // 조건문: 입력값의 길이가 3 이하거나 입력값의 길이가 2로 나눈 나머지가 0(즉 짝수일 때) 이면 return값 반환하기
    if (tokens.length < 3 || tokens.length % 2 === 0) {
        return "잘못된 계산식이 입력되었습니다.";
    };

    // 1. 곱셈과 나눗셈 먼저 처리하기
    const intermediateTokens = [];
    let i = 0;
    // while문: i가 tokens의 길이보다 작으면 계속해서 실행
    while (i < tokens.length) {
        const token = tokens[i];
        // 조건문: token이 * 이거나 / 일 경우,
        if (token === "*" || token === "/") {
            // 연산자의 왼쪽 숫자를 가져오는데 마지막 i를 가져오겠다는 의미
            const left = Number(intermediateTokens.pop());
            // 오퍼레이터는 * 또는 /
            const operator = token;
            // 오른쪽 숫자는 i + 1 위치의 숫자
            const right = Number(tokens[i + 1]);

            // 왼쪽이나 오른쪽에 숫자가 아니라면 return 값을 반환하기 
            if (isNaN(left) || isNaN(right)) return "잘못된 숫자가 입력되었습니다.";

            let res;    // res라는 변수를 선언
            if (operator === "*") {     // 연산자가 '*'라면
                res = multiply(left, right);    // 곱하기 계산 함수를 res로 변수 선언
            } else {    // 아니면 
                // 오른쪽이 0 숫자면 return값을 반환
                if (right === 0) return "0으로 나눌 수 없습니다.";
                // 나누기 함수를 res 변수로 선언하기
                res = divide(left, right);
            }
            intermediateTokens.push(res);   // res에 결과를 저장하기
            i += 2; // 연산자와 오른쪽 피연산자(숫자)를 건너뜀
        } else {    // 연산자가 '*' 나 '/' 가 아닐 경우, 
            intermediateTokens.push(token);
            i++;    // i + 1하겠다
        }
    }
    // 2. 덧셈과 뺄셈 처리하기
    let result = Number(intermediateTokens[0]);
    // 조건문: result가 숫자가 아니라면 return값을 반환
    if (isNaN(result)) return "잘못된 숫자가 입력되었습니다.";

    // 반복문: j=1 인덱스를 1부터 시작하겠다는 말이고, j가 배열보다 작을 때까지 반복하겠다, 그리고 j는 2개씩 건너 뛰겠다는 의미
    for (let j = 1; j < intermediateTokens.length; j += 2) {
        const operator = intermediateTokens[j];
        const nextValue = Number(intermediateTokens[j + 1]);

        if (isNaN(nextValue)) return "잘못된 숫자가 입력되었습니다.";

        if (operator === "+") {
            result = add(result, nextValue);
        } else if (operator === "-") {
            result = subtract(result, nextValue);
        } else {
            return `예외 발생: ${operator}`;
        }
    }
    return result;
};

function start(formula) {
    let input = formula;

    // 인자가 없으면(!로 표현) prompt로 물어봄
    if (!input) {
        input = inputFormula();
    }

    if (!input) {
        console.log("계산식을 입력해주세요.")
        return;
    }

    const result = calculate(input);
    if (typeof result === "string") {   // 결과가 문자열이면 에러발생 출력, 아니면 결과 출력
        console.log(`에러발생: ${result}`);
    } else {
        console.log(`결과: ${result}`);
    }
};