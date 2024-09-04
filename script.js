var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imgDiv = document.querySelector("#image")
main.addEventListener("mousemove",function(e){
    
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        duration:1,
        ease:"back.out",
        
    })
    
})
imgDiv.addEventListener("mouseenter",function(e){
   cursor.innerHTML = "view More";
    gsap.to(cursor,{
       
    
        // ease:"back.out",
        scale:2 ,
        backgroundColor:"#a8a6a6"
    })
    
})

imgDiv.addEventListener("mouseleave",function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1 ,
        backgroundColor:"#fff"
    })
})


