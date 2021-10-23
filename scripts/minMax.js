const minMax = (type) => {
  var value = document.getElementById("input").value.toString();
  var list = value.split(" ");
  var reversed = "";
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  let sum = 0,
    avg = 0;

  if (event.key == "Enter") {
    for (let index = list.length - 1; index > -1; index--) {
      let number = parseInt(list[index]);
      reversed += number + ", ";
      if (number < min) min = number;
      if (number > max) max = number;
      sum += number;
    }

    avg = sum / list.length;

    document.getElementById("min").innerHTML = min;
    document.getElementById("max").innerHTML = max;
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("avg").innerHTML = avg;

    console.log(reversed);
    document.getElementById("reverse").innerHTML = reversed;
  }
};
