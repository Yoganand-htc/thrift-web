function createXHR()
{
   try { return new XMLHttpRequest(); } catch(e) {}
   try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); } catch (e) {}
   try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); } catch (e) {}
   try { return new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) {}
   try { return new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) {}
 
   return null;
}
 
function sendRequest(param)
{
	var url = 'http://localhost:8080/thrift-web/rest/javasensor/postJSON';
    var xhr = createXHR();
    if (xhr)
    {
    	xhr.open("POST", url);
    	xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    	xhr.onreadystatechange = function(){handleResponse(xhr);};
    	xhr.send(JSON.stringify(param));
    }
}
 
function handleResponse(xhr)
{
    if (xhr.readyState == 4  && xhr.status == 200)
    {
      // Request successful, read the response
      var resp = xhr.responseText;
      document.getElementById("output").innerHTML = resp;   
    }
}

function postMessage() {
	console.log("triggering event..");
	var ce = new CaliperEvent();
    ce.event = "Caliper Event";
    ce.data = "Hello World";
    sendRequest(ce);
}