module.exports = function solveEquation(equation) {
  var data = equation.split(' ');
  var a = +data[0];
  var b = +data[4];
  if(data[3] == '-') b *= -1;
  var c = +data[8];
  if(data[7] == '-') c *= -1;

  var absC = Math.abs(c);
  var product = c / a;

  for(var i = 1; i <= Math.sqrt(absC); i++)
  {
      if(c % i !== 0) continue;
      if(product % i !== 0) continue;
      var j = product / i;
      if(j + i == -b / a) {
          if(i < product / i) return [i, product / i];
          return [product / i, i];
      }
      var k = -product/ i;
      if(k - i == -b / a) {
          if(-i < -product / i) return [-i, -product / i];
          return [-product / i, -i];
      }
  }
}