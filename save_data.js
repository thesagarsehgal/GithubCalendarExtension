function saveID(){
	var gitid=document.getElementById('gitid');
	chrome.storage.sync.set({'gitid': gitid.value},function(){
		document.getElementById("gitimage").src="http://ghchart.rshah.org/"+gitid.value;
		document.getElementById("gitname").innerHTML="@"+gitid.value;		
	});
}

document.addEventListener('DOMContentLoaded', function() {
	
	chrome.storage.sync.get(['gitid'], function(result) {
		document.getElementById('gitid').value=result.gitid;
		saveID();
	});

  	document.getElementById("gitid").addEventListener('keypress', function (e) {
    	var key = e.which || e.keyCode;
	    if (key === 13) { // 13 is enter
	      saveID();
	    }
	});
});
