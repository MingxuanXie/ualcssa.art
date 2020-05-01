AFRAME.registerComponent('video-handler',{
    init: functon(){
     let el = this.el;
     let vid = document.querySelector("#03");
     vid.pause();
     el.addEventListener('mouseenter',function(){
        vid.play();
     });
     el.addEventListener('mouseleave',function(){
        vid.pause();
     });
    }
  });