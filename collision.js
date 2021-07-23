AFRAME.registerComponent('gameplay',{
    schema:{
        elementId:{type:'string',default:'#ring1'}
    },
    isCollided:function(elementId){
        const element = document.querySelector(elementId)
        element.addEventListener('collide',e =>{
            if(elementId.includes('#coin')){
                element.setAttribute('visible',false);
                console.log('ring collision')
            }
            else if(elementId.includes('#fish')){
                console.log('fish collision')
            }
        })
    },
    update:function(){
        this.isCollided(this.data.elementId)
    }
})