import React, {useState, useCallback} from 'react'

//useCallback
// - 매번 함수를 생성하지 않고, 함수를 기억해두었다가 필요할 때마다 함수를 재사용

export default function UseCallbackEx() {
    const [text, setText] = useState('');

    // [before]
    // text 상태가 업데이트되면 = 컴포넌트 리렌더링 = 코드를 다시 읽음
    // = onChangeText 함수도 다시 생성(js func는 object type. 주소 값이 변경)
    // => 불필요한 작업 (똑같은 함수인데 다시 생성할 이유가 없음) =함수 기억
    // const onChangeText  = (e) => {
    //     setText(e.target.value);
    // };

    // [after]
    // useCallback 훅으로 함수를 기억해서 
    // 컴포넌트가 리렌더링 되어도, 의존성 배열에 있는 값이 바뀌지 않는 한 
    // 기존 함수를 재사용한다.
    const onChangeText  = useCallback((e) => {
        setText(e.target.value);
    }, []);

    return (
        <>
            <h1>UseCallback ex</h1>
            <input type='text' onChange={onChangeText}></input>
            {/* 단축 평가 */}
            <div>작성한 값: {text || "없음"}</div> 
        </>
    )
}
