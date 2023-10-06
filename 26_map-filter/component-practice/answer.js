import React, {useState} from 'react';

export default function Ex1() {
    const [inputs, setInputs] = useState({
        writer: '',
        title: '',
        search:'', // 검색
    }); // inputs이라는 state 하나로 관리하겠다.
    const { writer, title, search } = inputs;
    const {comments, setComments} = useState([
        {
            writer: '민수',
            title: '안뇽'
        },
        {
            writer: '옥지얌',
            title: '그래도 사랑해~'
        },
    ])

    const [searchType, setSearchType] = useState('writer');
    const [result, setResult] = useState([]);
    // value로 고정되어있는 input의 value를 수정가능하게
    const onChange = (e) => {
        // e.target.name, e.target.value로도 접근 가능
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value, // []은 키값을 name 변수로 하겠다 (없으면 name 자체가 키값이 됨) ex. writer:d
        });
    };
    
    // 작성 버튼 누르면
    const addComment = () => {
        const newComment = {
            writer: writer,
            title: title
        }; // 새로 추가되어야할 정보 (위에서 구조분해할당한 변수)
        setComments([...comments, newComment]); // 기존꺼 플러스 추가될 것 하나
        setInputs({
            ...inputs,
            writer: '',
            title: '' //input 초기화
        });
    };

    //검색 타입 고르기
    const selectSearchType = (e) => {
        setSearchType(e.target.value);
    };

    // 검색 버튼 누르면
    const searchComment = () => {
        const searchResult = comments.filter((cmt) => {
            // cmt: { title: 'xxx', writer:'xxx' }
            if (cmt[searchType].includes(search)){
                // 검색 결과 없다면: null 반환
                return null;
            }
            return cmt;
        });
        setResult(searchResult); // 검색 결과 state 변경
        setInputs({
            ...inputs,
            search:'', // 검색창 초기화
        })
    }

    return (
    <div>
        <form>
            <label htmlFor="writer">작성자:</label>
            <input 
                id="writer" 
                type="text" 
                name="writer" 
                value={writer} 
                onChange={onChange}/>
            <label htmlFor="title">제목:</label>
            <input 
                id="title" 
                type="text" 
                name="title" 
                value={title} 
                onChange={onChange}/>
            <button type="button" onClick={addComment}>작성</button>
        </form>

        <form>
            <select name="type" onChange={selectSearchType}>
            <option value="writer">작성자</option>
            <option value="title">제목</option>
            </select>

            <input 
                type="text" 
                name="search" 
                placeholder="검색어" 
                value={search} 
                onChange={onChange} />
            <button type="button" onClick={searchComment}>검색</button>
        </form>

        <h3>전체 댓글 목록</h3>
        <table border={1} style={{ margin: '30px auto', width: '500px' }}>
            <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
            </tr>
            </thead>
            <tbody>
                {comments.map((cmt, idx) => (
                    <tr key={idx+1}>
                        <td>{idx+1}</td>
                        <td>{cmt.title}</td>
                        <td>{cmt.writer}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        <h3>댓글 검색 결과</h3>
        {result.length > 0 ? (
        <table border={1} style={{ margin: '30px auto', width: '500px' }}>
            <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
            </tr>
            </thead>
            <tbody>
                {result.map((cmt, idx) => (
                    <tr key={idx+1}>
                        <td>{idx+1}</td>
                        <td>{cmt.title}</td>
                        <td>{cmt.writer}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        ) : (
            <div>검색결과가 없습니다.</div>
        )}
    </div>
  );
}