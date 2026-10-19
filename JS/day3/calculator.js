// id가 display인 태그를 display 변수로 선언하여 DOM에 접근하여 제어할 수 있게 만듦
const display = document.querySelector("#display");
let currentFormula = "";    // 빈칸으로 두기
let isPowerOn = true;       // 전원 켜기
let isCalculated = false;   // 계산하지 않았음

// 초기 상태 설정
window.onload = function () {
    // on-off 클래스 이름을 가진 태그에 접근할 수 있게 onOffBtn으로 변수 선언
    const onOffBtn = document.querySelector('.on-off');
    // 'on'이라는 클래스를 달아주는 작업
    onOffBtn.classList.add('on');
};

function togglePower() {
    // 전원 반전 (true면 false, false면 true)
    isPowerOn = !isPowerOn;
    // on-off 제외한 모든 버튼
    const buttons = document.querySelectorAll('button:not(.on-off)');
    // on-off 버튼을 따로 변수 선언
    const onOffBtn = document.querySelector('.on-off');

    // true일 때,
    if (isPowerOn) {
        // 화면에 0이 보이고, 배경색은 #222로, 'on' 클래스임
        display.value = "0";
        display.style.backgroundColor = "#222";
        onOffBtn.classList.add('on');
        buttons.forEach(btn => btn.disabled = false);
    } else {        // false일 때,
        display.value = "";
        display.style.backgroundColor = "#111";
        onOffBtn.classList.remove('on');
        buttons.forEach(btn => btn.disabled = true);
        currentFormula = "";
        isCalculated = false;
    }
}

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// power on = false면 return x -> undefined
function appendNumber(number) {
    if (!isPowerOn) return;

    // 계산한 상태에서 숫자를 새로 누르면 새로 시작!
    if (isCalculated) {
        display.value = "";
        currentFormula = "";
        isCalculated = false;
    }

    // 값을 0 또는 Error 또는 DivBy0가 된 경우, 기존 거는 지우고 새로 입력하는 숫자를 넣겠다는 의미
    if (display.value === "0" || display.value === "Error" || display.value === "DivBy0") {
        display.value = number;
        currentFormula = number;
    } else {                    // 유효한 숫자를 입력한 상태면 숫자를 지우지 않고 이어서 숫자를 입력하겠다.
        display.value += number;
        currentFormula += number;
    }
}

function appendOperator(operator) {
    // 두가지 조건문에 해당해서는 종료하겠다
    if (!isPowerOn) return;
    if (display.value === "Error" || display.value === "DivBy0") return;

    // 계산 직후 연산자를 누르면 결과값에 이어서 계산
    if (isCalculated) {
        isCalculated = false;
    }

    // 수식이 비어있으면 0부터 시작하게 처리
    if (currentFormula === "") {
        currentFormula = "0";
    }

    // 마지막 입력이 공백이면 연산자가 이미 있는 것으로 교체
    if (currentFormula.endsWith(" ")) {
        currentFormula = currentFormula.slice(0, -3);
    }

    // 연산자 앞 뒤로 공백을 한 칸씩 추가
    currentFormula += " " + operator + " ";
    // 연산자가 포함된 새로 만들어진 수식을 계산기 입력창에 보여주겠다는 의미
    display.value = currentFormula;
}

function clearDisplay() {
    if (!isPowerOn) return;
    display.value = "0";
    currentFormula = "";
    isCalculated = false;
}

function calculate(formula) {
    // 공백 제거
    const tokens = formula.trim().split(/\s+/);
    //연산식의 길이가 3개 미만이거나 홀수가 아닌 경우 '에러' 반환
    if (tokens.length < 3 || tokens.length % 2 === 0) {
        return "Error";
    }

    //  1단계: 곱셈과 나눗셈 먼저 처리
    const intermediateTokens = [];
    let i = 0;
    while (i < tokens.length) {
        const token = tokens[i];
        if (token === "*" || token === "/") {
            const left = Number(intermediateTokens.pop());
            const operator = token;
            const right = Number(tokens[i + 1]);

            if (isNaN(left) || isNaN(right)) return "Error";

            let res;
            if (operator === "*") {
                res = multiply(left, right);
            } else {
                if (right === 0) return "DivBy0";
                res = divide(left, right);
            }
            intermediateTokens.push(res);
            i += 2;
        } else {
            intermediateTokens.push(token);
            i++;
        }
    }

    // 2단계: 덧셈과 뺄셈 처리
    let result = Number(intermediateTokens[0]);
    if (isNaN(result)) return "Error";

    for (let j = 1; j < intermediateTokens.length; j += 2) {
        const operator = intermediateTokens[j];
        const nextValue = Number(intermediateTokens[j + 1]);

        if (isNaN(nextValue)) return "Error";

        if (operator === "+") {
            result = add(result, nextValue);
        } else if (operator === "-") {
            result = substract(result, nextValue);
        } else {
            return "Error";
        }
    }
    return result;
}

function performCalculate() {
    // power가 false거나 formula가 false면 return 기본값 반환 (종료)
    if (!isPowerOn || !currentFormula) return;

    // 연산자로 끝나는 경우 마지막 연산자 제거 후 게산
    if (currentFormula.endsWith(" ")) {
        currentFormula = currentFormula.trim();
    }

    const result = calculate(currentFormula);
    display.value = result;
    isCalculated = true;

    if (result === "Error" || result === "DivBy0") {
        currentFormula = "";
    } else {
        currentFormula = result.toString();
    }
}