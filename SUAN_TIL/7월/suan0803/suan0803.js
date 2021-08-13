class App extends React.Component {
    constructor(props) {
      super(props);
     
      this.state = { //state 초기 설정 방법
        list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
      };
      this.text = React.createRef(); //ref 선언하는 방법. 외워. 연수안.
    }
  
    componentDidMount(){ 
        //컴포넌트 마운트 직후 호출됨
        //외부에서 데이터 불러오기 좋음. 네트 워크 요청 보내기 좋은 위치!
      console.log(this.text);
    }
  
    addBucketList = () => {
      let list = this.state.list; //state안에 list넣어서 불러올수있음
      const new_item = this.text.current.value;
      this.setState({list: [...list, new_item]}); 
    }
  
    render() {
      
      return (
        <div className="App">
          <Container>
            <Title>내 버킷리스트</Title>
            <Line />
            
            <BucketList list={this.state.list} />
          </Container>
          <Input>
            <input type="text" ref={this.text} />
            <button onClick={this.addBucketList}>추가하기</button>
          </Input>
        </div>
      );
    }
  }