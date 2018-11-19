function change() {
  if (document.getElementById("inputs").classList.contains("inputs")) {
    document.getElementById("inputs").classList.toggle("inputs2");
  } else {
    document.getElementById("inputs").classList.toggle("inputs");
  }
}
function angle() {
  var hora = $("#input1").val();
  var minuto = $("#input2").val();
  var h = 30,
    m = 5.5;
  if (hora == "" || minuto == "") {
    alert("One or more fields are empty");
    text();
    bannerNone();
  } else {
    if (hora > 0 && hora < 13) {
      if (minuto < 60 && minuto > -1) {
        var a = h * hora;
        var b = m * minuto;
        var x = b - a;
        textMod();

        if (x < 0) {
          x *= -1;
        }
        document.getElementById("result1").value = x + "\u00B0";
        bannerNone();
      } else {
        banner();
        text();
      }
    } else {
      banner();
      text();
    }
  }
}

function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}
function text() {
  document.getElementById("aHours").innerHTML = " hours";
  document.getElementById("aMinutes").innerHTML = " minutes";
  document.getElementById("aHours").style.color = "#787878";
  document.getElementById("aMinutes").style.color = "#787878";
  document.getElementById("result1").value = "0\u00B0";
  var str = document.getElementById("nameResult").innerHTML;
  var att = str.replace("Att", "Add");
  att = att.replace("with", "and");
  att = att.replace("there's an angle of:", "to get an angle.");
  document.getElementById("nameResult").innerHTML = att;
}
function textMod() {
  var hora = $("#input1").val();
  var minuto = $("#input2").val();
  if (hora == 1) {
    document.getElementById("aHours").innerHTML = hora + " Hour";
  } else {
    document.getElementById("aHours").innerHTML = hora + " Hours";
  }
  if (minuto == 1) {
    document.getElementById("aMinutes").innerHTML = minuto + " Minute";
  } else {
    document.getElementById("aMinutes").innerHTML = minuto + " Minutes";
  }
  document.getElementById("aHours").style.color = "#46b02c";
  document.getElementById("aMinutes").style.color = "#46b02c";
  var str = document.getElementById("nameResult").innerHTML;
  var att = str.replace("Add", "At");
  att = att.replace("and", "with");
  att = att.replace("to get an angle.", "there's an angle of:");
  document.getElementById("nameResult").innerHTML = att;
}
function banner() {
  if (document.getElementById("inputs").classList.contains("inputs")) {
    document.getElementById("inputs").style.marginTop = "20px";
    document.getElementById("banner").style.display = "flex";
  } else {
    document.getElementById("inputs2").style.marginTop = "20px";
    document.getElementById("banner").style.display = "flex";
  }
}
function bannerNone() {
  if (document.getElementById("banner").style.display == "flex") {
    if (document.getElementById("inputs").classList.contains("inputs")) {
      document.getElementById("inputs").style.marginTop = "40px";
      document.getElementById("banner").style.display = "none";
    } else {
      document.getElementById("inputs2").style.marginTop = "40px";
      document.getElementById("banner").style.display = "none";
    }
  }
}
