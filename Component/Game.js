AFRAME .registerComponent("game-play",{
    schema:{
        elementId:{type:"string",default:"#ring1"}
    },
    update:function(){
        this.isCollided(this.data.elementId)
    },
    isCollided:function(elementId){
        const element=document.querySelector(elementId)
        element.addEventListener("collide",e=>{
            if(elementId.includes("#fish")){
                element.setAttribute("visible",false)
                this.update()
            }
            else{
                this.gameOver()
            }
        })
    },
    updateTarget:function(){
        var element=docment.querySelector("#targets")
        var count=element.getAttribute("text").value
        var currentTargets=parseInt(count)
        element.setAttribute("text",{value:currentTargets})
    },
    updateScore:function(){
        var element=document.querySelector()
        var count=element.getAttribute()
        var currentScore=parseInt(count)
        currentScore+=50
        element.setAttribute("text",{value:currentScore})
    },
    gameOver:function(){
        var element=document.querySelector("#game_over_text")
        var childEl=document.querySelector("#child-model")
        element.setAttribute("visible",true)
        childEl.setAttribute("dynamic-body",{mass:1})
    }
})