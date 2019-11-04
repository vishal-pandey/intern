window.onload = ()=>{


	document.querySelector(".send_button").onclick = ()=>{
		var query = document.querySelector(".query").value
		console.log(query)
		
		var xhttp = new XMLHttpRequest()
		xhttp.open('GET',  "http://127.0.0.1:5000/"+query);
		xhttp.onreadystatechange = ()=>{
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				console.log(JSON.parse(xhttp.responseText));
				content = JSON.parse(xhttp.responseText);
				console.log(content)
				var data = content.data
				for (var x of data){
					console.log(x.t)
					console.log(x.a)
					let row = '<tr><td>'+x.t+'</td>'+'<td>'+x.a+'</td>'+'<td>'+x.a+'</td></tr>';
					document.querySelector('table').insertAdjacentHTML('beforeend', row);
				}
			}
		}
		xhttp.send()
	}
}