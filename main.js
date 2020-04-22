$(document).ready( function()
{

  $("<datalist>", {id:"fighter_datalist"}).appendTo( "body" )
  fighters.forEach(f=>$('#fighter_datalist').append($('<option>').html(f.hiragana).val(f.name)))

  $('#attack').append($('<list>').val("fighter_datalist"))
  const urlParameters = getUrlParameters()
  urlParameters.forEach(p=>parameterToInput(p))

  $("input").change(function() {
    run()
  });
  run()
})
