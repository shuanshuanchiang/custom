var uservalue=[0,0,0,0];
var userpage =0;

var QArray = [
    {
        AnswerAimg:'img/custom/custom_01.png',
        AnswerBimg:'img/custom/custom_01.png',
        Questionstring:'Q1:終於放假了，你會想開啟 \n 什麼樣的休閒模式',
    },
    {
        AnswerAimg:'img/custom/custom_02.png',
        AnswerBimg:'img/custom/custom_02.png',
        Questionstring:'Q2:hana2',
    },
    {
        AnswerAimg:'img/custom/custom_03.png',
        AnswerBimg:'img/custom/custom_03.png',
        Questionstring:'Q3:hana3',
    },
    {
        AnswerAimg:'img/custom/custom_02.png',
        AnswerBimg:'img/custom/custom_02.png',
        Questionstring:'Q4:hana4',
    },
];

var ReArray = [
    {
        result_img:'img/mind/mind_plant_01.png',
        result_tag:'仙人掌科',
        result_tit:'像是<b>芍藥丸</b>一樣的你...',
        result_txt:'坦蕩直率，逆境中創造奇蹟',
        result_say:`你現在是該加油的時候了，放手去做吧！
        不要考慮太多，跌倒了也要馬上站起來，繼續往前走，
        得到的收穫會比你預期的還要意想不到，
        在新的一年努力的挑戰自己，心靈跟身靈都會獲得更多能量喔。
        `,
    },
    {
        result_img:'img/mind/mind_plant_02.png',
        result_tag:'景天科',
        result_tit:'像是<b>藍石蓮</b>一樣的你...',
        result_txt:'玲瓏細緻，優雅並且獨特',
        result_say:`是不是在擔心自己的未來呢？
        不必過份的擔憂，順其自然吧，
        把想做的每一件事情慢慢得一件一件做好，
        專注在當前的事情，享受、珍惜現在的所有，保持著健康的心。
        或許在人生的過程中常常讓人很不安，
        但這也都是每個人成長的過程，
        了解到這個道理就繼續順著生命流動吧！
        `,
    },
    {
        result_img:'img/mind/mind_plant_03.png',
        result_tag:'百合科',
        result_tit:'像是<b>銀月</b>一樣的你...',
        result_txt:'沈靜溫柔，獨自在自己世界裡沈醉',
        result_say:`你現在的狀況有一點點點疲累，需要休息一下或是變換氣氛，
        在這個快節奏的生活中，每天工作是做不完的，
        一直在尋找未來的方向，所以當你累的時候，
        別太強迫自己，好好的休息一下，
        才能有更好的精神去做事，
        可以出去散散心，旅遊、運動，或是好好的大睡一覺。
        `,
    },
    {
        result_img:'img/mind/mind_plant_04.png',
        result_tag:'菊科',
        result_tit:'像是<b>九輪塔</b>一樣的你...',
        result_txt:'純樸率真，暗藏野性的力量',
        result_say:`你現在的心理壯況有一點急躁，
        需要更小心謹慎，做事情不要太匆匆忙忙，
        很容易漏掉或忘記什麼東西，當你平和下來了，
        再急迫的事情也能好好的處理，面對到的困境也能迎刃而解，
        有時候慢一點，能夠看見以往看不見的世界，
        人生也會因此變得更有趣。
        `,
    },

];

let queston = document.getElementById('queston');
let answerA = document.getElementById('answerA');
let answerB = document.getElementById('answerB');
let answerBack = document.getElementById('answerBack');
let reStart = document.getElementById('reStart');

let mind_ques = document.getElementById('mind_ques');
let result = document.getElementById('result');

if(answerA)
answerA.addEventListener('click',function(){
    uservalue[userpage] = 1;
    ++userpage;
    check();
    refreshimg();
},false);

if(answerB)
answerB.addEventListener('click',function(){
    ++userpage;
    check();
    refreshimg();
},false);

if(answerBack)
answerBack.addEventListener('click',function(){
    --userpage;
    uservalue[userpage] =0;
    check();
    refreshimg();
},false);

if(reStart)
reStart.addEventListener('click',function(){
    userpage=0
    for(let i=0;i<4;++i)uservalue[i] =0;
    mind_ques.classList.remove("-nono");
    result.classList.add("-nono");

    refreshimg();
},false);


function refreshimg()
{
    if(userpage==0)
    {
        answerBack.classList.add("-nono");
    }
    else
    {
        answerBack.classList.remove("-nono");
        
    }

    if(userpage == 4)
    {
        let Uvalue=0;
        for(let i=0;i<4;++i)Uvalue+=uservalue[i];
        mind_ques.classList.add("-nono");
        result.classList.remove("-nono");
        alert(Uvalue);

        if(Uvalue==0)++Uvalue;
        
        document.querySelector('.mind_tag').innerText = ReArray[Uvalue-1].result_tag;
        document.getElementById('tit').innerHTML = ReArray[Uvalue-1].result_tit;
        document.querySelector('.mind_title').innerText = ReArray[Uvalue-1].result_txt;
        document.querySelector('.mind_say').innerText = ReArray[Uvalue-1].result_say; 
        document.getElementById('reImg').src = ReArray[Uvalue-1].result_img;     

    }
    else
    {
        queston.innerText = QArray[userpage].Questionstring;
        document.getElementById('AnswerAimg').src = QArray[userpage].AnswerAimg;
        document.getElementById('AnswerBimg').src = QArray[userpage].AnswerBimg;
        mind_ques.classList.remove("-nono");
        result.classList.add("-nono");
        // alert(userpage);
    }
};

function check()
{
    if(userpage>4)userpage =4;
    if(userpage<0)userpage=0;
}