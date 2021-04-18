let i = document.getElementById("para");

function change() {
  let R1 = document.getElementById("redBorder").value;
  let G1 = document.getElementById("greenBorder").value;
  let B1 = document.getElementById("blueBorder").value;
  let BW = document.getElementById("width").value;

  i.style.border = BW + "px solid rgb(" + R1 + ", " + G1 + ", " + B1 + ")"

  let R2 = document.getElementById("redBG").value;
  let G2 = document.getElementById("greenBG").value;
  let B2 = document.getElementById("blueBG").value;

  i.style.backgroundColor = "rgb(" + R2 + ", " + G2 + ", " + B2 + ")";

}
