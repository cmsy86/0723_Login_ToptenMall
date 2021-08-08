$(function(){

    //멀티탭 구현
    $("div#multiTabArea>div").click(function(){
        $("div#multiTabArea>div").removeClass("selected");
        $(this).addClass("selected");
    });
    //멀티탭 구현

});