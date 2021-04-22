var figureNumber;
var word;
var guessedLetters;

function start() {
  figureNumber = 1;
  guessedLetters = 0;
  updateFigure();
  word = $('#word').val();
  $('#lettersOfWord').empty();
  showAlphabet();
  lettersOfWord();
}

function showAlphabet() {
  $('#alphabet').empty();
  $('#alphabet').append(`
    <div id = "buttons" class="btn-toolbar text-center well" role="toolbar">
      <div class="btn-group mr-2" role="group">
        <button id = "bt-q" type="button" class="btn btn-secondary btn-space btn-lg" value = "q" onclick = "verifyLetter(this);">Q</button>
        <button id = "bt-w" type="button" class="btn btn-secondary btn-space btn-lg" value = "w" onclick = "verifyLetter(this);">W</button>
        <button id = "bt-e" type="button" class="btn btn-secondary btn-space btn-lg" value = "e" onclick = "verifyLetter(this);">E</button>
        <button id = "bt-r" type="button" class="btn btn-secondary btn-space btn-lg" value = "r" onclick = "verifyLetter(this);">R</button>
        <button id = "bt-t" type="button" class="btn btn-secondary btn-space btn-lg" value = "t" onclick = "verifyLetter(this);">T</button>
        <button id = "bt-y" type="button" class="btn btn-secondary btn-space btn-lg" value = "y" onclick = "verifyLetter(this);">Y</button>
        <button id = "bt-u" type="button" class="btn btn-secondary btn-space btn-lg" value = "u" onclick = "verifyLetter(this);">U</button>
        <button id = "bt-i" type="button" class="btn btn-secondary btn-space btn-lg" value = "i" onclick = "verifyLetter(this);">I</button>
        <button id = "bt-o" type="button" class="btn btn-secondary btn-space btn-lg" value = "o" onclick = "verifyLetter(this);">O</button>
        <button id = "bt-p" type="button" class="btn btn-secondary btn-space btn-lg" value = "p" onclick = "verifyLetter(this);">P</button>
      </div>
    </div>
    <div id = "buttons" class="btn-toolbar text-center well" role="toolbar">
      <div class="btn-group mr-2" role="group">
        <button id = "bt-a" type="button" class="btn btn-secondary btn-space btn-lg" value = "a" onclick = "verifyLetter(this);">A</button>
        <button id = "bt-s" type="button" class="btn btn-secondary btn-space btn-lg" value = "s" onclick = "verifyLetter(this);">S</button>
        <button id = "bt-d" type="button" class="btn btn-secondary btn-space btn-lg" value = "d" onclick = "verifyLetter(this);">D</button>
        <button id = "bt-f" type="button" class="btn btn-secondary btn-space btn-lg" value = "f" onclick = "verifyLetter(this);">F</button>
        <button id = "bt-g" type="button" class="btn btn-secondary btn-space btn-lg" value = "g" onclick = "verifyLetter(this);">G</button>
        <button id = "bt-h" type="button" class="btn btn-secondary btn-space btn-lg" value = "h" onclick = "verifyLetter(this);">H</button>
        <button id = "bt-j" type="button" class="btn btn-secondary btn-space btn-lg" value = "j" onclick = "verifyLetter(this);">J</button>
        <button id = "bt-k" type="button" class="btn btn-secondary btn-space btn-lg" value = "k" onclick = "verifyLetter(this);">K</button>
        <button id = "bt-l" type="button" class="btn btn-secondary btn-space btn-lg" value = "l" onclick = "verifyLetter(this);">L</button>
      </div>
    </div>
    <div id = "buttons" class="btn-toolbar text-center well" role="toolbar">
      <div class="btn-group mr-2" role="group">
        <button id = "bt-z" type="button" class="btn btn-secondary btn-space btn-lg" value = "z" onclick = "verifyLetter(this);">Z</button>
        <button id = "bt-x" type="button" class="btn btn-secondary btn-space btn-lg" value = "x" onclick = "verifyLetter(this);">X</button>
        <button id = "bt-c" type="button" class="btn btn-secondary btn-space btn-lg" value = "c" onclick = "verifyLetter(this);">C</button>
        <button id = "bt-v" type="button" class="btn btn-secondary btn-space btn-lg" value = "v" onclick = "verifyLetter(this);">V</button>
        <button id = "bt-b" type="button" class="btn btn-secondary btn-space btn-lg" value = "b" onclick = "verifyLetter(this);">B</button>
        <button id = "bt-n" type="button" class="btn btn-secondary btn-space btn-lg" value = "n" onclick = "verifyLetter(this);">N</button>
        <button id = "bt-m" type="button" class="btn btn-secondary btn-space btn-lg" value = "m" onclick = "verifyLetter(this);">M</button>
      </div>
    </div>
  `);
}

function updateFigure() {
  $('#figure').empty();
  $('#figure').append(`
      <img width="500" height="600" src="figure/`+ figureNumber + `.jpg">
    `)
  if (figureNumber < 10) {
    ++figureNumber;
  } else {
    $('#alphabet').empty();
    $('#figure').append(`
      <iframe src="https://giphy.com/embed/xT0xeyk3bg0amMtF6g" width="480" height="480" frameBorder="0"></iframe></p>
    `);
  }
}

function verifyLetter(letter) {
  var length = word.length;
  var i = 0;
  var name = document.getElementById("bt-" + letter.value);
  var verify = 0;
  while(i < length) {
    var letterName = document.getElementById("letter" + i + letter.value);
    if (word[i] == letter.value) {
      name.className = "btn btn-success btn-space btn-lg";
      name.onclick = "";
      verify = 1;
      letterName.textContent = letter.value + " ";
      ++guessedLetters;
      if (guessedLetters == word.length) {
        $('#figure').empty();
        $('#alphabet').empty();
        $('#figure').append(`
          <img width="500" height="600" src="figure/won.jpg">
        `)
        $('#alphabet').append(`
          <h1 align = "center" style="color: green; font-size: 75px;">You won!</h1>
        `)
      }
    } else if (i == length - 1 && verify == 0) {
      name.className = "btn btn-danger btn-space btn-lg";
      name.onclick = "";
      updateFigure();
    }
    ++i;
  }
}

function lettersOfWord() {
  var i = 0;
  while (i < word.length) {
    var lt = word[i];
    $('#lettersOfWord').append(`
      <p id = "letter` + i + lt + `" style="font-size: 100px;">_&nbsp;</p>
    `)
    ++i;
  }
}

function onlyAlphabets(e, t) {
  try {
      if (window.event) {
          var charCode = window.event.keyCode;
      } else if (e) {
          var charCode = e.which;
      } else {
        return true;
      }
      if (charCode >= 97 && charCode <= 122)
          return true;
      else
          return false;
  }
  catch (err) {}
}
