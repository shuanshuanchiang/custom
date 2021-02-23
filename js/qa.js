$(document).ready(function() {
    $(".qa_wrapper").click(function(){
        $(this).find("img").slideUp(700);
        $(".qaBg_wrapper").slideDown(700);
    })
    $(".question h2").click(function(){
        $(this).parent().find('p').slideToggle();
        $(this).parent().siblings().find('p').slideUp();    
    })
    $(".btn").click(function(){
        $(".answer").show();      
    })
    $("input").keypress(function(e){
        if(e.which == 13){
            $(".answer").show();
            // alert('aaaa')      
        }
       
    })
    $(".cancel").click(function(){
        $(".qaBg_wrapper").slideUp(700);  
        $(".qa_wrapper img").slideDown(700);     
    })

})
//vue
var app =new Vue({
    el:"#app",
    data:{
        message:'why did you so late?',
    },
    methods:{
        
    }
})