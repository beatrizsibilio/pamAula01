// This is a JavaScript file

$(document).on('click','#somar', function(){
  var valor1 = $('#valor1').val();
  var valor2 = $('#valor2').val();

  var resultado = parseFloat(valor1) + parseFloat(valor2);

  $('#resultado').val(resultado);
});

$(document).on('click','#subtrair', function(){
  var valor1 = $('#valor1').val();
  var valor2 = $('#valor2').val();

  var resultado = parseFloat(valor1) - parseFloat(valor2);

  $('#resultado').val(resultado);
});

$(document).on('click','#multiplicar', function(){
  var valor1 = $('#valor1').val();
  var valor2 = $('#valor2').val();

  var resultado = parseFloat(valor1) * parseFloat(valor2);

  $('#resultado').val(resultado);
});

$(document).on('click','#dividir', function(){
  var valor1 = $('#valor1').val();
  var valor2 = $('#valor2').val();

  var resultado = parseFloat(valor1) / parseFloat(valor2);

  $('#resultado').val(resultado);
});

$(document).on('click','#exponenciacao', function(){
  var valor1 = $('#valor1').val();
  var valor2 = $('#valor2').val();

  var resultado = Math.pow(valor1,valor2);

  $('#resultado').val(resultado);
});

/*$(document).ready(function() {
  $("#subtrair").click(function(event) {
    console.log("click")
    var valor1 = $('#valor1').val();
    var valor2 = $('#valor2').val();
*/