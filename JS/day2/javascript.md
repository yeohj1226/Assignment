- JavaScript의 자료형
    - number : 숫자 자료형으로 정수와 실수를 구별하지 않는 것이 특징
    - string : 문자열 자료형
    - boolean : true / false
    - null : 데이터가 비어있는 값, **[0, false, " "]**과는 다른 의미
    - undefined : 아직 값이 정해지지 않은 상태

- JavaScript의 변수 선언
    - let : 변수를 선언할 때 일반적으로 쓰는 키워드
    - const : 변하지 않는 값을 쓸 때 let 대신 입력하는 키워드

- JavaScript의 연산 방법
    - 더하기(+) : a + b
    - 빼기(-) : a - b
    - 곱하기(*) : a * b
    - 나누기(/) : a / b
    - 나머지 연산(%) : 5 % 3 = 2
    - Math 내장 객체 : 몫 연산자가 따로 없어 Math를 사용하여 나머지를 버리는 내장 객체 이용  \
      -> Math.floor(5 / 3) = 1

- JavaScript의 비교 연산
    - <, >, <=, => 값의 대소비교 : 결과 -> boolean
    - == 값비교(동등 연산자) : 값은 비교해주지만 타입은 비교하지 않음 (10 == "10" 타입이 다르지만 true)
    - === 값 + 타입비교 (일치 연산자) : 값과 타입 전부 비교 (10 === "10" -> false)
    - JavaScript의 타입확인 방법 (typeof) : number, string, object, boolean

- JavaScript의 논리 연산
    - && : and 연산자
    - || : or 연산자
    - ! : not 연산자(부정 연산자)

- JavaScript의 문자열 연산
    - 이어붙이기(+) : "10" + "10" = "1010"
    - 템플릿 리터럴(`백틱과 ${변수명}을 활용한 문자열) : Python의 f-string과 같은 개념
    - number + string 연산을 했을 때 Python과 차이점
      : Python의 경우 10 + "10" -> Error  \
      : JavaScript의 경우 10 + "10" -> "1010" 타입이 다를 경우, 문자열로 취급함

- JavaScript의 조건문
    - if : if (조건문 작성) {}  \
      **[false, 0, "", null, undefined, NaN]** 6개는 falsy로 취급되는 값이고, 6개를 제외한 모든 값은 truthy로 취급함
    - elif : 2개 이상의 조건문이 필요할 때 중간에 작성하는 조건문 -> JS에서는 **else if** 로 작성해야함
    - else : if를 만족하지 않는 나머지 

- JavaScript의 반복문
    - for : 지정된 범위 내에서 반복 실행하는 반복문  \
      for (let num (시작점); (끝지점); (증가량)) {}
    - while : 지정된 범위가 없지만 특정 조건일 때까지 반복 실행하는 반복문

- JavaScript의 배열
    - array 사용법 : [] 리스트에서 인덱스를 사용할 수 있음
    - array의 활용 : 슬라이스 (특정 범위 데이터를 추출하는 방법)

- JavaScript의 객체 자료형
    - object 선언 방법 : 객체 리터럴{}을 사용해 키와 값의 쌍으로 선언
    user = {name: "alex";
            age: 30;
            }
    - object 다루는 방법
        - 속성 읽기: user["name"]
        - 속성 추가하기 : user["email"]
        - 속성 수정하기 : user.name = chris;
        - 속성 제거하기 : delete user.age;
        - 속성이 객체에 존재하는지 확인하기(in) : "name" in user -> 값은 true or false