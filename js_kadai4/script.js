// 問1
document.write("■ ■ ■ 問1 ■ ■ ■<br>");

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 5; j++) {
    if ((i + j) % 2 == 0) {
      document.write("★");
    } else {
      document.write("☆");
    }
  }
  document.write("<br>");
}

document.write("<br>"); // 改行用


// 問1 別ver.
document.write("■ ■ ■ 問1 別ver. ■ ■ ■<br>");

function displayStars() {
  let result = "";
  let stars1 = "★☆★☆★";
  let stars2 = "☆★☆★☆";

  for (var i = 0; i < 5; i++) {
    result += (i % 2 == 0 ? stars1 : stars2) + "<br>";
  }

  return result;
}

document.write(displayStars());

document.write("<br>"); // 改行用


// 問2
document.write("■ ■ ■ 問2 ■ ■ ■<br>");

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 5; j++) {
    if (i == j) {
      document.write("☆");
    } else {
      document.write("★");
    }
  }
  document.write("<br>");
}

document.write("<br>"); // 改行用

// 問3
document.write("■ ■ ■ 問3 ■ ■ ■<br>");

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < i + 1; j++) {
    if (i == j) {
      document.write("☆");
    } else {
      document.write("★");
    }
  }
  document.write("<br>");
}
