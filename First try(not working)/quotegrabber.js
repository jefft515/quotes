var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject(){
	var xmlHttp;

	if(window.XMLHttpRequest){
		xmlHttp = new XMLHttpRequest(); //For modern browsers
	} else{
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP"); //For old IE browsers
	}

	return xmlHttp;
}

function process() {
	if(xmlHttp){
		try{
			xmlHttp.open("GET", "data.txt", true);
			xmlHttp.onreadystatechange = handleServerResponse;
			xmlHttp.send(null);
		}catch(e){
			console.log( e.string() );
		}
	}
}

function handleServerResponse(){
	theD = document.getElementById('theD');
	if(xmlHttp.readyState==1){
		theD.innerHTML += "Status 1: server connection established <br/>";
	} else if(xmlHttp.readyState==2){
		theD.innerHTML += "Status 2: request received <br/>";
	} else if(xmlHttp.readyState==3) {
		theD.innerHTML += "Status 3: processing request <br/>";
	} else if(xmlHttp.readyState==4) {

		if(xmlHttp.status==200){
			try{
				text = xmlHttp.ResponseText;
				theD.innerHTML += "Status 4: request in finished and response is ready";
				theD.innerHTML += text;
			}catch(e){
				console.log( e.toString() );
			}
		}else{
			console.log( xmlHttp.statusText );
		}
	}
}