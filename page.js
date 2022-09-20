let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 111;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  console.log(endValue);
  let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue
        if (startValue == endValue) {
            clearInterval(counter)
        }
  },duration);
});

function search_domain() {
  let input = document.getElementById("searchbardomain").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("names");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}

function search_book() {
  let input = document.getElementById("searchbarbook").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("bname");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}