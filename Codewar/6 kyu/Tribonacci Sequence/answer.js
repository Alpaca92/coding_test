function tribonacci(signature, n) {
  if (n <= 3) {
    return signature.slice(0, n);
  }

  for (let i = 3; i < n; i++) {
    signature[i] = signature[i - 3] + signature[i - 2] + signature[i - 1];
  }

  return signature;
}

/*
examples

<case 1>
signature = [1,1,1]
n = 10

return = [1,1,1,3,5,9,17,31,57,105]

<case 2>
signature = [0,0,1]
n = 10

return = [0,0,1,1,2,4,7,13,24,44]

<case 3>
signature = [0,1,1]
n = 10

return = [0,1,1,2,4,7,13,24,44,81]

<case 4>
signature = [1,0,0]
n = 10

return = [1,0,0,1,1,2,4,7,13,24]

<case 5>
signature = [0,0,0]
n = 10

return = [0,0,0,0,0,0,0,0,0,0]

<case 6>
signature = [1,2,3]
n = 10

return = [1,2,3,6,11,20,37,68,125,230]

<case 7>
signature = [3,2,1]
n = 10

return = [3,2,1,6,9,16,31,56,103,190]

<case 8>
signature = [1,1,1]
n = 1

return = [1]

<case 9>
signature = [300,200,100]
n = 0

return = []

<case 10>
signature = [0.5,0.5,0.5]
n = 30

return = [
  0.5, 0.5, 0.5, 1.5, 2.5, 4.5, 8.5, 15.5, 28.5, 52.5, 96.5, 177.5, 326.5,
  600.5, 1104.5, 2031.5, 3736.5, 6872.5, 12640.5, 23249.5, 42762.5, 78652.5,
  144664.5, 266079.5, 489396.5, 900140.5, 1655616.5, 3045153.5, 5600910.5,
  10301680.5,
];
*/
