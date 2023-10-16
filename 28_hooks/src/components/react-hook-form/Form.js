import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
    const { 
        register, // input할당, value 변경 감지
        handleSubmit,  // form submit 시 호출
        formState : { errors }, // 폼 상태 객체
        watch, // 특정 폼 필드의 값을 실시간으로 사용
    } = useForm(); 

    // handleSubmit(funcA[, funcB]): 두 개의 함수를 받음
    // - funcA: 필수, 유효할 때 실행
    // - funcB: 선택, 유효하지 않을 때 실행
    const onValid = (data)=> { 
        console.log('onValid: ', data)
    };
    const onInvalid = (data)=> { 
        console.log('oninValid: ', data)
    };

    // console.log('watch', watch('username')); // onChange처럼 실시간 감지
  return (
    <div>
        <h1>react-hook-form 라이브버리 데모</h1>
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
            <input type='text' placeholder='username'
            // register(input의 name, 옵션)
            {...register('username', {
                required:'이름을 입력해주세요',
                minLength: {message:'이름은 최소 2글자 이상임ㅋ', value:2}
            })} 
            ></input>
            {errors.username?.message}
            <br />
            <input type='email' placeholder='email' {...register('email', {
                required:'이메일을 입력해주세요',
                validate:{
                    useGmail: (v) => v.includes('gmail.com') || 'gmail로만 가입 가능합니다.'
                }
            })} ></input>
            {errors.email?.message}
            <br />
            {/* validation(유효성검사)을 안 걸고 싶은 경우 */}
            <input type="text" placeholder='password' {...register('password', {
                validate: {message:'이름을 입력해주세요'}
            })}></input>
            <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
