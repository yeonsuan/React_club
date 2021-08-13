# 210804 회고


## 리액트 클럽 (공부 정리) 👨‍💻

### EventListener 정복! 
- 수업 목표 : Event Listener를 등록해서 사용하는 순서를 깨우치자(클래스형 컴포넌트에서 Event listener 구독하는 방법)
    - 먼저 ref를 잡는다.(돔에 접근해야하니까)
    - 뭘 해줄건지 함수 생성 ex) mouseover 이벤트
    - componentDidMount에서 등록해주기
    - component가 사라질 때 쓸 데 없는 Eventlistener를 남기지 않기 위해 ComponentWillUnMount에서 구독해지하기

- Event Listener
    - 사용자가 어떤 행동(이벤트)을 하는지 지켜보다 알려주는 것
    ex) 마우스 클릭, 터치, 마우스 오버, 키보드 누름 등등

- addEventListener 쓰기 전에?(파라미터 준비물)
    - 어떤 이벤트에 걸거야?
    - 어떤 행동을 해줄거야?(함수)
    
- 컴포넌트가 죽는다 : 돔 객체도 없어지는 것
so, 컴포넌트 사라지기 전에는 Event Listener 구독 해제하기(ComponentWillUnMount에서!)

### 라우팅 (페이지를 돌아다닌다 구분한다 나눈다)
- Single Page Application(SPA 방식) : 서버에서 주는 html이 1개인 어플리케이션  
=> 사용성때문에! 다시 입력할 필요가 없는 것!!!!!! 편리.

### 리액트에서 라우팅 처리하기
- react-route-dom 설치


## 느낀점 🙆‍♀️
- 어제 조금..? 일찍 잤더니 아침에 집중이 너무너무 잘됐다!!!!! 
오늘은 지선이가 피곤했다. 오후엔 나가서 2주차 과제 건드릴 예정..미리 회고올립니다~
내일은 더 열심히 할거당 리액 뿌셔~!