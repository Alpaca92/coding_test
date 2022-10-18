function getFailureRates(N, stages) {
  const failureRates = [];
  let acc = 0;

  for (let i = 1; i <= N; ++i) {
    const reachedUsers = stages.filter((stage) => stage === i).length;
    const failureRate = reachedUsers / (stages.length - acc);
    acc += reachedUsers;

    failureRates.push({ stage: i, failureRate });
  }

  return failureRates;
}

function solution(N, stages) {
  return getFailureRates(N, stages)
    .sort(({ failureRate: rate1 }, { failureRate: rate2 }) => rate2 - rate1)
    .map((failureRate) => failureRate.stage);
}