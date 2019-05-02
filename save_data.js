// function to update the github id and save it in the storage
function saveID(){
	
	var gitid=document.getElementById('gitid');

	// storing the github id in the storage of extension 
	chrome.storage.sync.set({'gitid': gitid.value},function(){
		document.getElementById("gitimage").src="http://ghchart.rshah.org/"+gitid.value;
		document.getElementById("gitname").innerHTML="@"+gitid.value;		
	});
}

document.addEventListener('DOMContentLoaded', function() {
	
	// retrieving the saved github-id
	chrome.storage.sync.get(['gitid'], function(result) {
		document.getElementById('gitid').value=result.gitid;
		saveID();
	});

	// adding event listener on pressing Enter Key
  	document.getElementById("gitid").addEventListener('keypress', function (e) {
    	var key = e.which || e.keyCode;
	    if (key === 13) { // 13 is enter
	      saveID();
	    }
	});
});
