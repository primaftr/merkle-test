const rows = 5;
const cols = 5;

[...Array(rows)].forEach((_, i) => {
  const row = [...Array(cols)].map((_, j) => (i + 1) * (j + 1));
  console.log(row.join(" "));
});
