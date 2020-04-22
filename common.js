function getUrlParameters()
{
  var ans = []
  const parameter_url = location.search.substring(1)
       ,parameters = parameter_url.split("&")
  if(parameter_url == "")
  { 
     return ans
  }
  parameters.forEach((p)=>
  {
     const parameter = p.split("=")
	      ,input_id = decodeURIComponent(parameter[0])
	      ,input_value = decodeURIComponent(parameter[1])
	 ans.push({input_id,input_value})
  })
  return ans
}

function isUndefined(a) {return (a === void 0)}