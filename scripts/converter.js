var convert = () => {
  var lbsToKgs = 0.45359;
  var kgsTolbs = 2.20462;

  if (document.getElementById("convert").value == "1") {
    document.getElementById("result").innerHTML =
      document.getElementById("convert-input").value * lbsToKgs + " Kilograms";
  } else if (document.getElementById("convert").value == "2") {
    document.getElementById("result").innerHTML =
      document.getElementById("convert-input").value * kgsTolbs + " Pounds";
  } else {
    document.getElementById("result").innerHTML = "0";
  }
};

var handleKey = () => {
  if (event.key == "Enter") {
    document.getElementById("go-button").click();
  }
};
