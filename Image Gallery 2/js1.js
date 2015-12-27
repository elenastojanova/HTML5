function imgFunc() {
	var bigImage = document.getElementById("bigImage");
	var smallImageHolder = document.getElementById("smallImageHolder")

	smallImageHolder.addEventListener("click",function(event){
		if (event.target.tagName == "IMG"){
			bigImage.src = event.target.src;
		}

	},false);


}

window.addEventListener("load",imgFunc,false)