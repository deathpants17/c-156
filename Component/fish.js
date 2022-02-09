AFRAME .registerComponent("moving-fish",{
    init:function(){
        for(var i=1;i<=20;i++){
            var id=`fish${i}`
            var posX=Math.random()*3000+(-1000);
            var posY=Math.random()*2+(-1);
            var posZ=Math.random()*3000+(-1000);
            var position={x:posX,y:posY,z:posZ}
            this.movingFish(id,position)
        }
    },
    movingFish:function(id,position){
        var islandEl=document.querySelector("#island")
        var fishEl=document.createElement("a-entity")
        fishEl.setAttribute("id",id)
        fishEl.setAttribute("position",position)
        fishEl.setAttribute("gltf-model","./jellyFish/scene.gltf")
        fishEl.setAttribute("scale",{x:100,y:100,z:100})
        fishEl.setAttribute("animation-mixer",{})
        fishEl.setAttribute("static-body",{shape:"sphere",sphereRadius:2})
        fishEl.setAttribute("game-play",{elementId:`#${id}`})
        islandEl.appendChild(fishEl)
    }
})