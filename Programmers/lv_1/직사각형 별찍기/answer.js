process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const [n, m] = data.split(" ");

  for (let i = 0; i < +m; ++i) {
    console.log("*".repeat(+n));
  }
});
