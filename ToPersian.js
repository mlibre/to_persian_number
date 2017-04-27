function ToPersian(str)
{
    return str.replace(/\d/g, function (d) { 
    	return String.fromCharCode(1776 + parseInt(d));
	});
}
