// 스크롤 이벤트 리스너 등록
window.addEventListener('scroll', function () {
  // 요소가 뷰포트 안에 들어왔는지 체크하여 애니메이션을 주고자 하는 요소 선택
  const elements = document.querySelectorAll('.point');

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight) {
      // 뷰포트 안에 요소가 들어왔을 때 애니메이션을 주는 클래스 추가
      element.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
    }
  });
});
