
const initialState = {
    money: 0,
  };

  // reducer 정의: 변화를 일으키는 함수
  const moneyReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
      case 'DEPOSIT':
        return { money: state.money + parseInt(payload) };
      case 'WITHDRAWAL':
        return { money: state.money - parseInt(payload) };
      default:
        return state;
    }
  };

  export default moneyReducer;