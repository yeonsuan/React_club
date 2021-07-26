import React from 'react'; 

const BucketList = (props) => {
    
    
    const my_lists = props.list;

    console.log(props);
    
    return (
        <div className="lists">
            {
                // js의 내장 함수 중 하나인 map입니다. 리스트의 갯수만큼 => 오른쪽 구문을 반복해요. 

                my_lists.map((list, index) => {
                    // 콘솔을 확인해봅시다 :)
                    return (<div className="list-item" key={index}>{list}</div>);
                })
            }
        </div>
    );
}

// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export default BucketList;