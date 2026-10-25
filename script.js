function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.querySelectorAll(".code_example").forEach(function (btn) {
  var tip = btn.querySelector(".tooltiptext");

  btn.addEventListener("click", function () {
    navigator.clipboard.writeText(btn.value).then(function () {
      tip.textContent = "Copied: " + btn.value;
    });
  });

  btn.addEventListener("mouseout", function () {
    tip.textContent = "Click to copy";
  });
});