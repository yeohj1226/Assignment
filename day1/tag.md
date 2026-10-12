# Tag
- br: break / 줄바꿈할 때 쓰는 태그
- hr: horizontal line / 영역을 나눌 때 쓰는 태그
- p: paragraph / 본문의 단락(문단)을 작성할 때 쓰는 태그
- ul: unordered list / 순서에 상관없을 때 태그 (기호로 나열되는 목록)
- ol: ordered list / 순서가 있을 때 태그 (숫자로 나열되는 목록)
- li: list item / 리스트를 구성하는 각각의 항목
- label: 어떤 입력창에 붙는 라벨인지 써주는 태그 (id값을 for에 작성하면 됨)
- input: 사용자로부터 입력 받는 입력창을 만들 때 사용하는 태그
- button: 사용자가 클릭해서 어떤 행위를 실행하게 만드는 버튼 태그
- img: html 문서에 이미지를 삽입할 때 사용하는 태그
- head: 브라우저가 웹페이지를 띄우기 위해 읽는 설정 및 정보 공간
- body: 사용자가 실제로 보게 되는 화면 본문 공간
- div: 여러 태그들을 하나로 묶어서 하나의 구역으로 나누는 태그
- a: 하이퍼링크를 달아줄 때 쓰는 태그

# Attribute
1. id : identity / 태그마다 id를 부여할 수 있다. 단 중복은 불가
    중복해서 id를 부여한다면 앞서 작성한 id값은 무시됨!
2. class : 여러 태그에 중복 O 
    여러 태그에 하나의 class를 부여할 수 있고, 하나의 태그에 여러개의 class를 부여할 수 있음
3. ordered list (ol)
    - type : ordered list를 생성할 때 type 속성을 부여하여 숫자"1" or 로마문자"i"와 같이 정할 수 있음
    - start : ordered list에서 숫자로 순서를 매길 때, "0" or "-1"값을 설정하여 시작번호를 지정할 수 있음
4. link
    - href : 하이퍼링크로 연결되는 주소를 입력하는 속성값
5. form
    - action : form의 최종 목적지, 데이터가 전송될 주소를 입력함
6. form&lt;input&gt; 
    - type : search, email, password 등과 같이 타입마다 방식이 다르게 입력될 수 있도록 지정
    - placeholder : 입력창에 예시를 나타내는 속성
    - name : 서버에 어떤 값을 입력할 건지 이름을 붙이는 속성값
7. image
    - src : 이미지의 주소를 입력하는 속성값
    - alt : 이미지가 정상적으로 보이지 않을 때, 이미지를 설명하는 짧은 설명글을 입력하는 속성값

# Semantic
- Semantic : HTML 코드를 작성할 때 태그에 '의미(Semantic)'를 부여하여 구조를 명확하게 나누자는 개념
- div 태그 : 여러 태그를 하나로 묶어주는 구역을 나누는 태그를 의미함.  \
    하지만 여러 개의 구역을 나누기 위해 div를 여러 반복하여 생성할 수 있지만 어떤 div로 나누었는지 구분하는 것이 어렵다는 단점이 있음.  \
            -> 이러한 것을 semantic하지 않은 tag라고 함.
- semantic : 여러 태그를 하나로 묶어줄 때 header, main, footer 태그로 구역을 나눠주게 되면,  \
             어떤 태그들을 묶어둔 것인지 파악할 수 있다는 장점이 있음.