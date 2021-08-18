# 210818 TIL

## 리액트 클럽
### 공부 중 CSS
- css에 transition : 어떤 속성이 변했을 때에 몇 초동안 그 변화를 일으킬지, 애니메이션 효과를 주는 것!
- 스크롤바 움직이기 : window.scrollTo()
- window.scrollTo() 괄호 안에는 파라미터로 X좌표, Y좌표가 들어간다
    - behavior : 스크롤을 좀 더 스무스하게 움직여주는 역할 제공

### overflow
- 속성이 효력을 갖기 위해선 height, max-height를 설정해야한다.
- overflow : hidden => 스크롤 제공안되고 넘치는 부분은 없애주는 것
- overflow : scroll => 스크롤 제공

### box-sizing
- 박스의 크기를 어떤 것을 기준으로 계산할지 정하는거
- EX) content-box : 콘텐트 영역 기준
- EX) border-box : 테두리를 기준으로 크기 정함
- EX) initial : 기본값
- EX) inherit : 부모요소의 속성값 물려받음

### WEB
- 웹은 클라이언트, 서버라는 두가지로 나뉨 => 서로 응답하고 요청하며 굴러감
=> 웹은 응답과 요청으로 굴러간다

- 서버리스 : 서버를 신경 쓸 필요 없다.

### Firebase란?
- 서버리스 서비스 중 하나

### 데이터 방식 두가지
- SQL 방식 : 데이터 저장을 엑셀처럼 하는 것
- NoSQL 방식(딕셔너리) : 유연하고 확장 가능하다.

###  Fire Store 설정
1. 생성된 프로젝트 클릭
2. Cloud Firestore 추가
3. 데이터베이스 만들기 클릭
4. 보안 규칙 설정
5. Cloud FireStore 위치 설정

### 비동기 작업
한줄한줄 읽으면 힘드니까 일단 정보 보내고 나 다음줄부터 읽을게!라는 의미
응답값 받으면 그때 다시 내가 작업할게!
EX) 동기작업은 한줄한줄 읽는거, 
EX) get().then() 비동기 작업끝나면 then 그래서 뭐를 해!라는 의미.