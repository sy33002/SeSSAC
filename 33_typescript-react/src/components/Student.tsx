import React from 'react'

// interface랑 type 둘 다 가능하다!
// interface StudentInfo {
//     name: string;
//     grade: number;
// }

type StudentInfo = {
  name: string;
  grade: number;
  part?: string;
  handleClick: (name: string, grade: number) => void;
}

// FC: functional Component
// React.FC를 사용할 때는 Generic을 이용해서 props 타입을 표현
// const Student : React.FC<StudentInfo> = ({ name, grade }) => {
export default function Student({ name, grade, part, handleClick }: StudentInfo) {
  return (<div>
    <div onClick={() => handleClick(name, grade)}>자기소개_버튼</div>
    <li>이름: {name}</li>
    <li>학년: {grade}</li>
    <li>전공: {part || "자유전공"}</li>
    </div>)
}




