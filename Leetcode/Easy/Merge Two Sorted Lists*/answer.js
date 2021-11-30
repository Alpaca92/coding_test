var mergeTwoLists = function (l1, l2) {
  const arr = [];

  for (i = 0; ; i += 2) {
    if (l1.val) {
      arr[i] = l1.val;
      l1 = l1.next;
    }
    if (l2.val) {
      arr[i + 1] = l2.val;
      l2 = l2.next;
    }

    if (!l1 && !l2) break;
  }

  return arr.sort((a, b) => a - b);
};

/*
examples

<case 1>
l1 = [1,2,4]
l2 = [1,3,4]

return = [1,1,2,3,4,4]

<case 2>
l1 = []
l2 = []

return = []

<case 3>
l1 = []
l2 = [0]

return = [0]
*/

/*
pseudo code

제약 사항으로 sort등의 함수를 쓸 수 없게 되어있음
this.val = this[0], this.next = this.slice(1)로 구성되어 있음

ListNode에 대한 이해가 없어서 아직 못풀겠음
*/
