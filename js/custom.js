
var buybox = 0;
var isback = true;

//商品區的宣告
let plants = document.querySelectorAll('.pp li');
let decorations = document.querySelectorAll('.dd li');
let pots = document.querySelectorAll('.bb li');

//客製區的宣告
let plant1 = document.querySelector('#custom_01');
let plant2 = document.querySelector('#custom_02');
let plant3 = document.querySelector('#custom_03');
let dec1 = document.querySelector('#decoration');
var pot1 = document.querySelector('#pot');

var PlantArray = [
    {
        obj : plant1,
        pos : 0,
        id : "custom_01",
        zindex : 0,
        imgindex : 1,
    },
    {
        obj : plant2,
        pos : 0,
        id : "custom_02",
        zindex : 1,
        imgindex : 2,
    },
    {
        obj : plant3,
        pos : 0,
        id : "custom_03",
        zindex : 2,
        imgindex : 3,
    },
    {
        obj : dec1,
        pos : 0,
        id : "decoration",
        zindex : 3,
        imgindex : 0,
    },
];

clearset();
//清空旋轉宣告
let turn180 = document.querySelector('.turn180');
turn180.addEventListener('click',function(){
    rotateplant();
},false);
let delet = document.querySelector('#delet');
delet.addEventListener('click',function(){
    clearset();
},false);

for( let i=0 ; i<plants.length ;i++){
    plants[i].addEventListener('click',function(){
        // alert(document.getElementById('custom_01').src);
        if(buybox==0)
        {
            plant1.src = `img/custom/custom_0${i+1}.png`;
            PlantArray[0].imgindex = i+1;
        }
        else if(buybox==1)
        {
            plant2.src = `img/custom/custom_0${i+1}.png`;
            PlantArray[1].imgindex = i+1;
        }
        else if(buybox==2)
        {
            plant3.src =`img/custom/custom_0${i+1}.png`;
            PlantArray[2].imgindex = i+1;
        }
    },false);
};

for( let i=0 ; i<decorations.length ;i++){

    decorations[i].addEventListener('click',function(){
        if(isback)
        {
            dec1.src = `img/custom/dec_0${i+1}_s.png`;
        }
        else
        {
            dec1.src = `img/custom/dec_0${i+1}_b.png`;
        }
        PlantArray[3].imgindex = i+1;
       setorder(3);
       buybox =3;
    },false);
   
};

for( let i=0 ; i<pots.length ;i++){
    pots[i].addEventListener('click',function(){
        pot1.src = `img/custom/pot_0${i+1}.png`;
    },false);
   
};


//客製區的圖層判斷
for(let i =0;i<PlantArray.length;++i)
{
    PlantArray[i].obj.addEventListener('mousedown',function(){
        setorder(i);
        buybox=i;
    },false);
};
/*
plant1.addEventListener('mousedown',function(){
    buybox=0;
    setorder(0);
},false);

plant2.addEventListener('mousedown',function(){
    buybox=1;
    setorder(1);
},false);

plant3.addEventListener('mousedown',function(){
    buybox=2;
    setorder(2);
},false);

decoration.addEventListener('mousedown',function(){
    buybox=3;
    setorder(3);
},false);*/

plant1.addEventListener('mouseup',function(){
    var ob = document.getElementById("custom_01");
    let tt = ob.style.left;
    let yy = parseInt(tt.slice(0,-2),10);
    PlantArray[0].pos = yy;
   
},false);

plant2.addEventListener('mouseup',function(){
    var ob = document.getElementById("custom_02");
    let tt = ob.style.left;
    let yy = parseInt(tt.slice(0,-2),10);
    PlantArray[1].pos = yy;
   
},false);

plant3.addEventListener('mouseup',function(){
    var ob = document.getElementById("custom_03");
    let tt = ob.style.left;
    let yy = parseInt(tt.slice(0,-2),10);
    PlantArray[2].pos = yy;
    
},false);

dec1.addEventListener('mouseup',function(){
    var ob = document.getElementById("decoration");
    let tt = ob.style.left;
    let yy = parseInt(tt.slice(0,-2),10);
    PlantArray[3].pos = yy;
    
},false);

function rotateplant()
{
    let ww = document.querySelector('.custom_draw_plant');
    let ttt = ww.offsetWidth+"px";
    let yy = parseInt(ttt.slice(0,-2),10);
    let areacenter = yy/2;

    isback = (!isback);
   //console.log(ww.offsetwidth);

    for(let i=0;i<PlantArray.length;++i)
    {
        let rotatepos=0;
        let ob = document.getElementById(PlantArray[i].id);
        let centerpoint = ob.clientWidth/2;
        let num = PlantArray[i].pos + centerpoint;
       // console.log(num);
        if(num<areacenter)
        {
            let move = areacenter - num;
            rotatepos = PlantArray[i].pos + move+move;
            if(rotatepos>yy-ob.clientWidth)rotatepos=yy-ob.clientWidth;
        }
        else if(num>areacenter)
        {
            let move = num - areacenter;
            rotatepos = PlantArray[i].pos - move-move;
            if(rotatepos<0)rotatepos=0;
        }

        if(PlantArray[i].imgindex>0){
            ob.style.left = rotatepos + "px";
            PlantArray[i].pos=rotatepos;    
        }


        num = 3-PlantArray[i].zindex;
        if(num<0)num=0;
        ob.style.zIndex = num;
        PlantArray[i].zindex = num;
    }

    if(isback)
    {
        if(PlantArray[3].imgindex>0)
        dec1.src = `img/custom/dec_0${PlantArray[3].imgindex}_s.png`;
    }
    else
    {
        if(PlantArray[3].imgindex>0)
        dec1.src = `img/custom/dec_0${PlantArray[3].imgindex}_b.png`;
    }
};

function clearset()
{
    plant1.src ="img/custom/custom_01.png";
    PlantArray[0].imgindex = 1;
    plant2.src ="img/custom/custom_02.png";
    PlantArray[1].imgindex = 2;
    plant3.src ="img/custom/custom_03.png";
    PlantArray[2].imgindex = 1;
    dec1.src = "";
    PlantArray[3].imgindex = 0;
    pot1.src = `img/custom/pot_01.png`;

    let ww = document.querySelector('.custom_draw_plant');
    let ttt = ww.offsetWidth+"px";
    let yy = parseInt(ttt.slice(0,-2),10);
    let areacenter = yy/2;

    let ob = document.getElementById(PlantArray[0].id);
    let centerpoint = ob.clientWidth/2;
    let num = (areacenter-centerpoint)*0.9;

    plant1.style.left = "0px";
    PlantArray[0].pos = 0;
    plant1.style.zIndex = 0;
    PlantArray[0].zindex =0;

    plant2.style.left = num +"px";
    PlantArray[1].pos = num;
    plant2.style.zIndex = 1;
    PlantArray[1].zindex =1;

    plant3.style.left = yy-ob.clientWidth +"px";
    PlantArray[2].pos = yy-ob.clientWidth;
    plant3.style.zIndex = 2;
    PlantArray[2].zindex =2;

    dec1.style.left = "0px";
    PlantArray[3].pos = 0;
    dec1.style.zIndex = 3;
    PlantArray[3].zindex =3;

    isback=true;

};

function setorder(target=0)
{
    if(buybox!=target)
    {
        for(let i=0;i<PlantArray.length;++i)
        {
            if(i == target)
            {
                PlantArray[i].zindex = 3;
            }
            else
            {
                PlantArray[i].zindex --;
                if(PlantArray[i].zindex<0)PlantArray[i].zindex=0;
            }
            PlantArray[i].obj.style.zIndex = PlantArray[i].zindex;
        }
    }
};

/* -------------------------- tweenmax ---------------------------------*/

var controller = new ScrollMagic.Controller();
var bubblebtnn = document.querySelector(".bubble_btnn");

var tl = new TimelineMax();
tl.to('.custom_paw img', 2 ,{
    y : 500,  
    // rotation : -30 
}).addLabel("upup")
.to('.custom_paw img', 1.5 ,{
    y : 420,
},"upup")
.to('.custom_draw', 1.5 ,{
    y : -70,
},"upup").addLabel("nono")
.to('.custom_price', 1 ,{
    opacity : 0,
},"nono").to('.bubble_btnn', 1 ,{
    opacity : 0,
},"nono").to('.custom_btn', 1 ,{
    opacity : 0,
},"nono")
.to('.custom_block3', 1 ,{
    opacity: 0,
    display:"none",
},"nono")
.to('.custom_block7', 1 ,{ //置中動畫開始
    margin: "0 auto",
    ease: Power1.easeOut
     //left: '30%',
 })
 .to('.custom_gift_bottom', 1 ,{
   left: 0,  
}).to('.custom_draw', 1 ,{
    y : 40,
    zIndex : 1,
 }).to('.custom_paw img', 1 ,{
    y : -600,
    ease: Bounce.easeOut,
    
},).to('.custom_gift_top', .5 ,{
    top : 0, 
},).to('.custom_gift_ribbon', .5 ,{
    top : -140, 
},);

tl.stop();
bubblebtnn.addEventListener('click', function(){
    tl.play();
},false);







