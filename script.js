document.onkeydown = (e)=>{
    if(e.code == "KeyW"){
        document.getElementById("ball1").style.top = "18vh";
    } 
    if(e.code == "KeyA"){
        document.getElementById("ball1").style.left = "18vw";
    }
    if(e.code == "KeyD"){
        document.getElementById("ball1").style.left = "80vw";
    } 
    if(e.code == "KeyS"){
        document.getElementById("ball1").style.top = "80vh";
    } 
    if(e.code == "ArrowUp"){
        document.getElementById("ball2").style.top = "18vh";
    } 
    if(e.code == "ArrowLeft"){
        document.getElementById("ball2").style.left = "18vw";
    } 
    if(e.code == "ArrowRight"){
        document.getElementById("ball2").style.left = "80vw";
    } 
    if(e.code == "ArrowDown"){
        document.getElementById("ball2").style.top = "80vh";
    }
}

setInterval(()=>{
    bx = Math.floor(55*Math.random()+18);
    by = Math.floor(55*Math.random()+18);

    Xdis = bx+"vw";
    Ydis = by+"vh";

    document.getElementById("ball").style.display = "block";
    document.getElementById("ball").style.top = Ydis;
    document.getElementById("ball").style.left = Xdis;
    
},3000)

points1 = 0;
points2 = 0;

setInterval(()=>{

    b = document.getElementById("ball")
    b1 = document.getElementById("ball1")
    b2 = document.getElementById("ball2")


    // distance between the balls 
    bl = parseInt(window.getComputedStyle(b,null).getPropertyValue("left"));
    br = parseInt(window.getComputedStyle(b,null).getPropertyValue("right"));
    bt = parseInt(window.getComputedStyle(b,null).getPropertyValue("top"));
    bb = parseInt(window.getComputedStyle(b,null).getPropertyValue("bottom"));

    bl1 = parseInt(window.getComputedStyle(b1,null).getPropertyValue("left"));
    br1 = parseInt(window.getComputedStyle(b1,null).getPropertyValue("right"));
    bt1 = parseInt(window.getComputedStyle(b1,null).getPropertyValue("top"));
    bb1 = parseInt(window.getComputedStyle(b1,null).getPropertyValue("bottom"));

    bl2 = parseInt(window.getComputedStyle(b2,null).getPropertyValue("left"));
    br2 = parseInt(window.getComputedStyle(b2,null).getPropertyValue("right"));
    bt2 = parseInt(window.getComputedStyle(b2,null).getPropertyValue("top"));
    bb2 = parseInt(window.getComputedStyle(b2,null).getPropertyValue("bottom"));


    // touch the ball conditon for ball 2
    if(bt>bt2 && bt - bt2 < 100 && bl<bl2 && bl2 - bl < 100){
        if( b.style.display != "none"){
        points2++;
        b.style.display = "none";
        }
    }
    if(bt>bt2 && bt - bt2 < 100 && bl>bl2 && bl - bl2 < 60){
        if( b.style.display != "none"){
        points2++;
        b.style.display = "none";
        }
    }
    if(bt<bt2 && bt2 - bt < 60 && bl<bl2 && bl2 - bl < 100){
        if( b.style.display != "none"){
        points2++;
        b.style.display = "none";
        }
    }
    if(bt<bt2 && bt2 - bt < 60 && bl>bl2 && bl - bl2 < 60){
        if( b.style.display != "none"){
        points2++;
        b.style.display = "none";
        }
    }

    // touch the ball condition for ball 1
    if(bt>bt1 && bt - bt1 < 100 && bl<bl1 && bl1 - bl < 100){
        if( b.style.display != "none"){
        points1++;
        b.style.display = "none";
        }
    }
    if(bt>bt1 && bt - bt1 < 100 && bl>bl1 && bl - bl1 < 60){
        if( b.style.display != "none"){
        points1++;
        b.style.display = "none";
        }
    }
    if(bt<bt1 && bt1 - bt < 60 && bl<bl1 && bl1 - bl < 100){
        if( b.style.display != "none"){
        points1++;
        b.style.display = "none";
        }
    }
    if(bt<bt1 && bt1 - bt < 60 && bl>bl1 && bl - bl1 < 60){
        if( b.style.display != "none"){
        points1++;
        b.style.display = "none";
        }
    }

    document.getElementById("score1").innerHTML = "Blue Points: "+points1;
    document.getElementById("score2").innerHTML = "Red Points: "+points2;

},20)