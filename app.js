$(document).ready(function(){
    $(".brandName").click(function(){
        $(".nav li").slideToggle("slow");
    });
});

$(document).ready(function(){
    $(".nav").on("click", "a", function(event){
        event.preventDefault();
        var id = $(this).attr("href"),
        top = $(id).offset().top;
        $("body,html").animate({scrollTop: top}, 1000);
    });
});

