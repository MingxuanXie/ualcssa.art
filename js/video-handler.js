AFRAME.registerComponent('video-handler',{
   init: function(){
    let el = this.el;
    let vid = this.el.components.material.material.map.image;
   //  vid.pause();
    el.addEventListener('mouseenter',function(){
      vid.play();
      vid.muted = false;
    });
    el.addEventListener('mouseleave',function(){
      //  vid.pause();
      vid.muted = true;
    });
   }
 });