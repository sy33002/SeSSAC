function Result({setValue, setFruit, setBackcolor, setStrcolor}) {
  console.log("setFruit >>", setFruit);
  return (
    <div style={{ display: "block" }}>
      <img src={`${setFruit}.png`} width={100} height={100} />

      <div
        style={{
          padding: "10px",
          marginTop: "10px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        글자글자
      </div>
    </div>
  );
}

export default Result;
