$(document).ready(function(){
    arrContentofSlide=["content-pr-game-1","content-pr-game-2","content-pr-game-3","content-pr-game-4","content-pr-game-5"]
    $(".carousel").on('slid.bs.carousel',function(){ //sự kiện khi slide của carouse thay đổi
        $(".content-pr-game").css("display","none");
        indexofSlide=(''+$('#carouselExampleFade .active').index('#carouselExampleFade .carousel-item')); //lấy vị trí của slide hiện tại
        
        $("#"+arrContentofSlide[indexofSlide]).css("display","block");
    });

    /* sự kiện cho khung hỗ trợ */
    $("#thanhhotro_close").bind("click",function(){
        console.log("OK");
        $(".hotro").addClass('hidehotro');
        $("#thanhhotro_form").removeClass('hidehotro');
        $("#thanhhotro_form").addClass("unhidehotro");
    })
    $(".closehotro").bind("click",function(){
        $(".hotro").addClass('hidehotro');
        $(".hotro").removeClass('unhidehotro');
        $("#thanhhotro_close").removeClass('hidehotro');
        $("#thanhhotro_close").css("display","flex")
    })
    $("#xacnhanhotro").bind("click",function(){
        $(".hotro").addClass('hidehotro');
        $(".hotro").removeClass('unhidehotro');
        $("#thanhhotro_chat").removeClass('hidehotro');
        $("#thanhhotro_chat").css("display","block");
    })
    $("#backform").bind("click",function(){
        $(".hotro").addClass('hidehotro');
        $(".hotro").removeClass('unhidehotro');
        $("#thanhhotro_form").removeClass('hidehotro');
        $("#thanhhotro_form").addClass("unhidehotro");
    })
    /* kết thúc sự kiện cho khung hỗ trợ */


    /* Khi click vào một tấm hình nhỏ */
    $(".mini-image-chitiet div").bind("click",function(){
        $(".mini-image-chitiet div").css("border","none");
        $(this).css("border","3px solid #0078F2");
        var newhinh=$(this).find("img").attr("src");
        $("#big-image-chitiet").attr("src",newhinh);
    })
    $(".nganhang").bind("click",function(){
        $(".nganhang").css("border","1px solid transparent");
        $(this).css("border","1px solid #F35D08");
    })
    
    $("#nganhang").bind("click",function(){
        $(".thanhtoan").addClass("thanhtoan_hide_important");
        $("#chonnganhang").removeClass("thanhtoan_hide_important");
        $("#chonnganhang").css("display","flex");
    })
    $("#vidientu").bind("click",function(){
      
        $(".thanhtoan").addClass("thanhtoan_hide_important");
        $("#chonvidientu").removeClass("thanhtoan_hide_important");
        $("#chonvidientu").css("display","flex");
    })
    $("#thequocte").bind("click",function(){
      
        $(".thanhtoan").addClass("thanhtoan_hide_important");
      
    })
    $("#thegarena").bind("click",function(){
      
        $(".thanhtoan").addClass("thanhtoan_hide_important");
       
    })
});
