function solution(s) {
  var answer = true;
  var s_array = [...s];
  const p_array = s_array.filter((v) => v === "p" || v === "P");
  const y_array = s_array.filter((v) => v === "y" || v === "Y");

  if (p_array.length != y_array.length) answer = false;

  return answer;
}
