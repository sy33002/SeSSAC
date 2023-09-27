function Input({setValue}) {
  const inputChange = (e) => {
    const changedInput = e.target.value;
    setValue(changedInput);
  }
  return (
    <>
      내용 :{" "}
      <input
        type="text"
        onChange={inputChange}
        placeholder="내용을 입력하세요."
      />
    </>
  );
}

export default Input;
