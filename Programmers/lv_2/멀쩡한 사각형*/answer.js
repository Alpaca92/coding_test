function solution(w, h) {
  var answer = 1;
  return answer;
}

/*
examples

<case 1>
w = 8
h = 12

result = 80
*/

/*
pseudo code

8 * 12 인 직사각형은 비율이 2 : 3 이다
따라서 2 * 3인 직사각형들의 집합으로 (가로 4개, 세로 4개로 총 16개) 2 * 3에서 못쓰는 직사각형을 구하는 법을 찾아 이 중 가운데로 배열되는 것들을 구하면 된다
(하지만, 5 * 13 같은 소수 * 소수인 경우에는 작은 사각형으로 쪼갤 수 없음)


*/
