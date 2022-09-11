function solution(n, m) {
  let min = (n > m) ? m : n;
  let max = (n > m) ? n : m;
  
  let GCD = 0;
  
  while (min !== 0) {
      let temp = min;
      min = max % min;
      max = temp;
      
      if (!(max % min)) {
          GCD = max;
      }
  }
  
  let LCM = n * m / GCD;
  
  const answer = [GCD, LCM];
  
  return answer;
}