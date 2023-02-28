document.getElementById("lado1").addEventListener('mouseenter',function(){
	document.getElementById("lado1").style.backgroundColor= "black";
	document.getElementById("lado1").style.color = "white";
	document.getElementById("lado2").style.color = "black";
})

document.getElementById("lado1").addEventListener('mouseleave',function(){
	document.getElementById("lado1").style.backgroundColor= "paleGreen";
	document.getElementById("lado1").style.color = "black";
})

document.getElementById("lado2").addEventListener('mouseleave',function(){
	document.getElementById("lado2").style.backgroundColor= "darkSeaGreen";
	document.getElementById("lado2").style.color = "black";
})

document.getElementById("lado2").addEventListener('mouseenter',function(){
	document.getElementById("lado2").style.backgroundColor= "black";
	document.getElementById("lado2").style.color = "white";
	document.getElementById("lado1").style.color = "black";
})