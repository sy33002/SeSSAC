#include <stdio.h>

int main() {
  int num = 10;
  int* ptr = &num; // 포인터 ptr은 num 변수의 주소를 가리킵니다.

  printf("num의 값: %d\n", num); // 출력: num의 값: 10
  printf("ptr이 가리키는 값: %d\n", *ptr); // 출력: ptr이 가리키는 값: 10
  printf("num의 메모리 주소: %p\n", &num); // 출력: num의 메모리 주소
  printf("ptr의 값(즉, num의 메모리 주소): %p\n", ptr); // 출력: ptr의 값(즉, num의 메모리 주소)

  return 0;
}