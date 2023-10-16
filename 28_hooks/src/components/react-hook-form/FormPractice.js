import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormPractice() {
    const { 
        register, // input할당, value 변경 감지
        handleSubmit,  // form submit 시 호출
        formState : { errors }, // 폼 상태 객체
        watch, // 특정 폼 필드의 값을 실시간으로 사용
    } = useForm(); 

    const onValid = (data)=> { 
        console.log('onValid: ', data)
    };
  return (
    <div>
        <h1>react-hook-form 연습</h1>
        <form onSubmit={handleSubmit(onValid)}>
            <input type='text' name='username' placeholder='이름' {...register('username', {
                required: '이름은 필수 항목입니다.'
            })}></input>
            {errors.username?.message}
            <br />
            <input type='number' name='age' placeholder='나이' 
                {...register('age', {
                    validate: {validateAge: (age) => age > 0 || '0 이상의 숫자만 입력 가능합니다.'}
            })}></input>
            {errors.age?.message}
            <br />
            <button type='submit'>제출</button>
        </form>
    </div>
  )
}
