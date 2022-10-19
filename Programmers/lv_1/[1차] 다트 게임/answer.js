function getScore(dart) {
  const areas = {
    S: 1,
    D: 2,
    T: 3,
  };

  const prizes = {
    "*": 2,
    "#": -1,
  };

  const [[score], [area], [prize]] = [
    dart.match(/\d{1,2}/),
    dart.match(/[S|D|T]/),
    dart.match(/[*|#]/),
  ];

  
}

function solution(dartResult) {
  const regex = /\d{1,2}\w[\*|#]?/g;
  return dartResult.match(regex).reduce(
    (acc, dart) => getScore(dart),

    0
  );
}
