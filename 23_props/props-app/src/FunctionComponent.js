import PropTypes from 'prop-types';

export default function FunctionComponent(props) {
    const student='김지형';
    const {name} = props;
    return (
        <div>
            <h1>Hi! {student}!</h1>
        <p>여기는 FunctionComponent</p>
        <p>새로운 컴포넌트의 이름은 <b>{name}</b></p>
        </div>
    )
}
// name값을 지정하지 않을 때 기본으로 나타날 name 변수
FunctionComponent.defaultProps = {
    name: '기본 이름',
}

FunctionComponent.propTypes = {
    name: PropTypes.string,
}