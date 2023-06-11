//using for loop
function sumAll(n, m) {
  var sum = 0;
  for (var i = n; i <= m; i++) {
    sum += i;
  }
  return sum;
}

var sum = sumAll(1, 100);
console.log(sum);

//using while loop
function Sumall(a, b) {
  var sums = 0;
  i = 1;
  while (i <= b) {
    sums += i;
    i++;
  }
  return sums;
}

var sums = Sumall(1, 100);
console.log(sums);
