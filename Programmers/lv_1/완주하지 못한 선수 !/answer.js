function solution(participant, completion) {
  for (let i = 0; i < participant.length; ++i) {
    const completionPlayerIdx = completion.findIndex(
      (completionPlayer) => completionPlayer === participant[i]
    );
    if (completionPlayerIdx === -1) return participant[i];
    participant[i] = 0;
    completion[completionPlayerIdx] = 0;
  }
  return participant.filter((player) => !!player)[0];
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
