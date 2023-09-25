
function MyFood(props) {
    return(
        <>
        <h3>제가 좋아하는 음식은 <span>{props.food}</span>입니다.</h3>
        </>
    )
}

MyFood.defaultProps = {
    name: '붕어빵',
}

export default MyFood;