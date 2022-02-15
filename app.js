let button = document.createElement("button");
button.textContent = "Sing!";
document.body.appendChild(button);
let friends = ["Ted", "Ned", "Bob", "Eli", "Dan"];

button.addEventListener("click", function () {
  // let div2 = document.createElement('div');
  // div2.className = 'friends';
  // let h3Two = document.createElement('h3');
  // let h3text2 = document.createTextNode('Ned')
  // h3.appendChild(h3text)
  // div2.appendChild(h3Two);
  // document.body.appendChild(div2)

  // let div3 = document.createElement('div');
  // div3.className = 'friends';
  // let h3 = document.createElement('h3');
  // let h3text = document.createTextNode('Bob')
  // h3.appendChild(h3text)
  // div3.appendChild(h3);
  // document.body.appendChild(div3)

  // let div4 = document.createElement('div');
  // div4.className = 'friends';
  // let h3 = document.createElement('h3');
  // let h3text = document.createTextNode('Eli')
  // h3.appendChild(h3text)
  // div4.appendChild(h3);
  // document.body.appendChild(div4)

  // let div5 = document.createElement('div');
  // div5.className = 'friends';
  // let h3 = document.createElement('h3');
  // let h3text = document.createTextNode('Dan')
  // h3.appendChild(h3text)
  // div5.appendChild(h3);
  // document.body.appendChild(div5)

  for (let i = 0; i < friends.length; i++) {
  
    let div = document.createElement("div");
    div.className = "friends";
    let h3 = document.createElement("h3");
    h3.textContent = friends[i];
    // let h3One = document.createElement('h3');
    // let h3text1 = document.createTextNode('Ted')
    // h3.appendChild(h3text)
    div.appendChild(h3);
    document.body.appendChild(div);

    let num = 99;
    while (num >= 1) {
      let paragraph = document.createElement("p");

      if (num === 2) {
        paragraph.textContent =
          num +
          "lines of code in the file," +
          num +
          "lines of code;" +
          friends[i] +
          " strikes one out, clears it all out," +
          (num - 1) +
          "lines of code in the file";
      } else if (num === 1) {
        paragraph.textContent =
          num +
          "line of code in the file," +
          num +
          "line of code;" +
          friends[i] +
          " strikes one out, clears it all out," +
          (num - 1) +
          "line of code in the file";
      } else {
        paragraph.textContent =
          num +
          "lines of code in the file," +
          num +
          "lines of code; " +
          friends[i] +
          " strikes one out, clears it all out," +
          (num - 1) +
          "lines of code in the file";
      }
      num--;
      div.appendChild(paragraph);
    }
  }
});
