
# 1. CSS 란?
Cascading Style Sheets의 약자로, HTML 요소의 모양과 배치를 꾸며주는 스타일 시트 언어를 의미한다.

- Internal CSS : &lt;head&gt; 태그 내부에 &lt;style&gt;태그를 생성하여 스타일을 작성하는 방식이다. 
    - &lt;style&gt;  \
            div {text-align: center;}. \
            header {font-size: x-large; font-weight: bold;}  \
            main {font-size: medium;}  \
            footer {font-size: xx-small;}  \
            &lt;/style&gt;

- Inline CSS : HTML 태그 내부에 이어서 style을 작성하여 모양을 꾸미는 방식이다.
    - &lt;p style="font-size: x-large; font-weight: bold;"&gt;Inline&lt;/p&gt;

- External CSS : 스타일 코드를 별도의 .css 파일을 분리해서 관리하고 link 태그를 통해 연결하는 방식이다.
    - &lt;link rel="stylesheet" href="./style.css"&gt;

## 2. CSS Selector (선택자)
- 어떤 HTML 요소에 스타일을 적용할지 지정하는 규칙을 말한다.  \
    - 전체 선택자(*) : 문서 내 모든 요소 선택  \
    - 태그 선택자(div , header, main 등): 특정 태그 이름을 가진 모든 요소 선택  \
    - 클래스 선택자(.class): 특정 클래스 속성값을 가진 요소 선택  \
    - ID 선택자(#id): 특정 id 속성값을 가진 요소 선택
- 결합자 셀렉터
    - 자손 선택자 : div p   -> div 안에 있는 모든 p (깊이 상관없음)
    - 자식 선택자 : div > p -> div의 바로 아래 자식 p만
    - 인접한 형제 : div + p -> div 바로 다음에 오는 p 하나
    - 일반적 형제 : div ~ p -> div 뒤에 오는 모든 형제 p
- :hover -> 하이퍼링크와 같이 마우스를 요소 위에 올렸을 때 상태일 때를 선택하는 셀렉터

## 3. Style 속성
    a. text 
        font-size : 글씨의 크기 지정
        font-weight : 글씨의 굵기 지정
        text-align : 글씨 정렬 방향 지정(가운데, 왼쪽, 오른쪽)
    b. box model
        margin : 박스의 테두리 밖 여백
        padding : 박스의 테두리와 content 사이의 여백
        border : 박스의 테두리
        content : 글씨가 쓰여지는 영역
        width : 박스의 너비, 지정해주지 않으면 기본적으로 한 줄 전체를 너비로 갖는다.
        height : 박스의 높이, 지정해주지 않으면 font-size와 동일한 높이를 갖는다.
        box-sizing : 박스 크기를 계산하는 기준
    c. Block-level 요소 : 박스가 가로 한 줄을 전체 차지, 자동 줄바꿈이 되는 요소
        - div, header, main, footer, p 등과 같은 태그
    d. Inline 요소 : 박스가 content만큼 차지, 자동 줄바꿈이 되지 않음
        - a, span, strong 등과 같은 태그