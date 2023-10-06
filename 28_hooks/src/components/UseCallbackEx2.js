import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export default function UseCallbackEx2({ postId }) {
    const [post, setPost] = useState({});

    // [before]
    // const getPost = async () => {
    //     // 데이터 요청
    //     const res = await axios.get(
    //         `https://jsonplaceholder.typicode.com/posts/${postId}`
    //     );
    //     setPost(res.data);
    // };

    // [after]
    // useCallback 훅으로 메모이제이션 -> 의존성 배열에 있는 postId가 변경되지 않는 함수
    // 컴포넌트는 리렌더링 되지 않음
    // => 필요한 순간에만 api 요청을 날림!
    const getPost = useCallback(async () => {
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        setPost(res.data);
    }, [postId]);


    // useEffect 의존성 배열에 "함수"
    // 컴포넌트가 리렌더링 -> 함수 재생성 (주소값 변경) -> getPost 재호출 : 무한 굴레
    useEffect(() => {
        getPost();
    }, [getPost]); // getPost만 의존성 배열에 포함

    return (
        <>
            <h1>UseCallback ex2</h1>
            {post.id ? post.title : '로딩중....'}
        </>
    )
}
