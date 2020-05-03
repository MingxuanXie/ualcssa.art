AFRAME.registerComponent('video-handler-11',{
   init: function(){
    let el = this.el;
   //  let vid = this.el.components.material.material.map.image;
    let vid11 = document.querySelector("#Miss_Loss");
    // vid.pause();
    el.addEventListener('mouseenter',function(){
      vid11.play();
      vid11.muted = false;
    });
    el.addEventListener('mouseleave',function(){
      //  vid.pause();
      vid11.muted = true;
    });
   }
 });