AFRAME.registerComponent("click-to-rotate",{
schema : {
  target : { type : "selector"},
  rotation : {type : "string"}
},
init : function(){
	this.el.addEventListener("mouseenter",function(){
            var animation = document.createElement("a-animation");
            animation.setAttribute("attribute","rotation");
            animation.setAttribute("to",this.data.rotation);
            animation.setAttribute("dur","1000");
            animation.setAttribute("repeat","0");
            this.data.target.appendChild(animation);
	}.bind(this));
}
});