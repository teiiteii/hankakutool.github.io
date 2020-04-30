//function parameterToInput(parameters)
//{
//  Object.keys(parameters).forEach(id=>$("#" + id + "").val(parameters[id]))
//}

const parameterToInput = ({input_id, input_value})=>{
	if(input_id == "op_select")
	{
	const nums = input_value.split(",").map(Number)
	$('#op_select').select2().val(nums)
     return	
	}
	$("#" + input_id + "").val(input_value)
}

function inputToUrlParameter()
{
  var parameter = "?"
  $(".js_url_parameter").each((index, element)=>{
    if($(element).val() == "")
    {
       return
    }
    if(index >= 1)
    {
      parameter += "&"
    }
    parameter += $(element).attr("id") + "=" + $(element).val()
  })
  return parameter
}

function valExchange(a, b)
{
  const temp = a.val()
  a.val(b.val())
  b.val(temp)
}