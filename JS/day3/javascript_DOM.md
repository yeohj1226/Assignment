- DOM(Document Object Model)이란?  \
    : 웹 브라우저가 HTML 문서를 JavaScript가 제어할 수 있도록 만든 객체 구조 

- Selector(선택자)로 DOM 요소 가져오기
    - document.getElementById : id 선택자를 DOM 요소를 가져올 때
    - document.querySelectorAll(선택자) : 조건에 일치하는 모든 요소
    - document.querySelector(선택자) : 조건에 일치하는 첫번째 요소 하나 
        - document.querySelector("#name") -> id가 name인 태그를 DOM 요소로 가져오겠다
        - document.querySelector(".page") -> class가 page인 태그를 DOM 요소로 가져오겠다

- Event란?  \
    : 웹 페이지에서 발생하는 모든 동작이나 상태 변화

- EventListener(이벤트 리스너)
    - EventListener(이벤트 리스너)란?  \
        : 특정 요소에 특정 이벤트가 발생하면 지정한 함수가 실행
    - EventListener(이벤트 리스너)를 사용하는 목적, 이유
        - 사용자의 행동을 감지해서 상호작용을 구현
        - 정적인 페이지를 동적인 웹 어플리케이션으로 변화
        - 화면(UI)과 로직을 동적으로 제어
    - EventListener(이벤트 리스너) 정의하기
        - 대상요소.addEventListener("이벤트", 함수);  \
            -> btn.addEventListener("click", function()) {console.log('버튼이 클릭되었습니다.');}
    - EventListener(이벤트 리스너) 응용
        - btn.addEventListener('click', function() {}) : 클릭했을 때 지정 함수 실행
        - input.addEventListener('input', function() {}) : 입력창에 값이 바뀌었을 때 지정 함수 실행
        - page.addEventListener('scroll', function() {}) : 스크롤했을 때 지정 함수 실행

- 마우스 감지란?
    - CSS에서 hover와 같은 개념
    - 마우스 감지 사용 예시
    - span.addEventListener("mouseover", function() {}) : span 태그 요소에 마우스를 올렸을 때 지정 함수를 실행하겠다
    - span.addEventListener("mouseout", function() {}) : span 태그 요소에 마우스를 내리면 지정 함수를 실행하겠다

- 화살표 함수란?  \
    : 짧고 간결하게 함수를 정의하기 위한 문법
    - 화살표 함수 사용 예시
    (기본) btn.addEventListener("click", function buttonAlert() {alert("버튼이 클릭됨")})  \
    (화살표 함수) btn.addEventListener("click", () => alert("버튼이 클릭됨"))