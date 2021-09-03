# 210903 리덕스 복습하기

## 리덕스
1. 첫번째 모듈 만들기
    - src 아래 redux 폴더, 그 안에 modules 폴더
    - 모듈창 안에 Action, initialState, Action Creator, Reducer, Store 만들기(다 묶어서, 덕스구조) => 리덕스 모듈 완성!
    - 다음 store 만들기

2. Store 만들기
    - 한 프로젝트 안에 스토어 하나만!!
    - 강의에선 하나로 뭉쳐진 리듀서 이름을 rootReducer라고지음
    -  먼저, 필요한것들 import 하기 => rootReducer 만들기(리듀서가 여러개일 경우 합쳐줘야하니까 - 스토어에는 리듀서 하나밖에 못들어감) => combineReducers로 리듀서 합쳐주기 => 합쳐서 스토어 만듬

## 리덕스를 사용하고 싶으면.. => 컴포넌트 연결해!!
- index.js 에 import {Provider} from "react-redux"
- BrowserRouter를 Provider로 감싸주기
- import 스토어 가져오기.. configStore
- => <Provider store={store}> 프로바이더 안에 store 넣기