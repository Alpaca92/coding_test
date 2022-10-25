function solution(participant, completion) {
  const hash = {};

  participant.forEach((player, i) => {
    hash[player] = hash[player] === undefined ? 1 : hash[player] + 1;
    if (completion[i] !== undefined)
      hash[completion[i]] =
        hash[completion[i]] === undefined ? -1 : hash[completion[i]] - 1;
  });

  return Object.entries(hash).filter(([_, counter]) => counter === 1)[0][0];
}

/*
examples

<case 1>
participant = ["leo", "kiki", "eden"]
completion = ["eden", "kiki"]

return = "leo"

<case 2>
participant = ["marina", "josipa", "nikola", "vinko", "filipa"]
completion = ["josipa", "filipa", "marina", "nikola"]

return = "vinko"

<case 3>
participant = ["mislav", "stanko", "mislav", "ana"]
completion = ["stanko", "ana", "mislav"]

return = "mislav"
*/
