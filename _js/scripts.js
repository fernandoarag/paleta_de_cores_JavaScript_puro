document.getElementById('range_r').oninput = function () {
  var input_text = document.getElementById('text_r');
  var input_range = document.getElementById('range_r');
  preencherInputText(input_text, input_range);
};

document.getElementById('range_g').oninput = function () {
  var input_text = document.getElementById('text_g');
  var input_range = document.getElementById('range_g');
  preencherInputText(input_text, input_range);
};

document.getElementById('range_b').oninput = function () {
  var input_text = document.getElementById('text_b');
  var input_range = document.getElementById('range_b');
  preencherInputText(input_text, input_range);
};

function preencherInputText(input_text, input_range) {
  input_text.value = input_range.value;
  var r = document.getElementById('range_r').value;
  var g = document.getElementById('range_g').value;
  var b = document.getElementById('range_b').value;
  colorirDiv(r, g, b);
}

function colorirDiv(r, g, b) {
  var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
  var imagem = document.getElementById('imagem');
  imagem.style.backgroundColor = rgb;
}
