function solution(participant, completion) {
  const participantObj = {};
  const completionObj = {};

  participant.forEach((person) => {
    if (!(person in participantObj)) {
      participantObj[person] = 1;
    } else {
      participantObj[person]++;
    }
  });

  completion.forEach((person) => {
    if (!(person in completionObj)) {
      completionObj[person] = 1;
    } else {
      completionObj[person]++;
    }
  });

  for (const key in participantObj) {
    if (participantObj[key] !== completionObj[key]) return key;
  }
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
