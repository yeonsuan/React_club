# 210902 리덕스 복습하기

## 리덕스 Basic
- 상태(데이터 관리하는 것) => 리덕스란 컴포넌트의 데이터를 관리하는 방법

- 리덕스 패키지 설치하기 : yarn add redux react-redux

- 리액트와 리덕스는 완전 별개의 패키지라는 것

- 전역 상태 관리 : 전역으로 저장해둔걸 아무데서나 참조하겠다!!!

## 리덕스 기본 용어들
#### State
리덕스에서 저장하고 있는 데이터. 상태값. 딕셔너리 형태로 보관

#### Action
상태 변화시킬 때 발생하는 어떤 것

#### ActionCreator
액션 만들어 주는 거!! 액션 생성 함수, 함수처럼 생김

#### Reducer
리덕스에 저장된 상태를 변경시켜주는 함수!!
데이터 바꾸고 싶을 때 ActionCreator 생성, 액션 반환 되면서 reducer가 현재상태의 액션을 받는다. => 데이터를 변경시킴

#### Store
프로젝트에 리덕스 적용하기 위해서 만드는 거,
데이터를 볼 수있게 해주는 친구. 

#### Dispatch
스토어 안에서 쓰는 내장 함수 , 액션을 발생 시킬 때 쓴다.

## 리덕스의 3가지 특징
#### Store은 하나만 쓴다. 단일 스토어 규칙~
#### Store의 데이터는 액션을 발생시켜서 변경해야한다.
데이터불변성유지
#### 어떤 요청이 와도 리듀서는 같은 동작을 해야함.
외부 파라미터에 의존하면 안됨. 파라미터가 같으면 항상 같은 파라미터를 반환한다.