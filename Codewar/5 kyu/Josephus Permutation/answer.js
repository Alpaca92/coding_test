function josephus(items, k) {
  if (!items.length) return [];

  const result = [];
  let idx = (k - 1) % items.length;

  while (items.length) {
    result.push(items[idx]);
    items.splice(idx, 1);
    idx = (idx + k - 1) % items.length;
  }

  return result;
}

/*
examples

<case 1>
items = [1,2,3,4,5,6,7,8,9,10]
k = 1

return = [1,2,3,4,5,6,7,8,9,10]

<case 2>
items = [1,2,3,4,5,6,7,8,9,10]
k = 2

return = [2, 4, 6, 8, 10, 3, 7, 1, 9, 5]

<case 3>
items = ["C","o","d","e","W","a","r","s"]
k = 4

return = ['e', 's', 'W', 'o', 'C', 'd', 'r', 'a']

<case 4>
items = [1,2,3,4,5,6,7]
k = 3

return = [3, 6, 2, 7, 5, 1, 4]

<case 5>
items = []
k = 3

return = []

<+case 6>
items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
k = 40

return = [10, 7, 8, 13, 5, 4, 12, 11, 3, 15, 14, 9, 1, 6, 2]
*/
