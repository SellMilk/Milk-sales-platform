$(function(){

    var $option =$(".seller-header .seller-option");
    var $option_content=$(".seller-header .seller-option-content");
    $option.click(function(){
        $option_content.css("display","block").hover(function(){
            $option_content.css("display","none");
        });
    });

    var $menu = $(".seller-milk .seller-main-menu li");
    $menu.click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        var index =  $menu.index(this);
        $(".seller-milk .seller-sub-menu")
            .eq(index).addClass("selected").siblings().removeClass("selected");
    });

    var $type = $(".seller-milk-details-type li");
    $type.click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        var index =  $type.index(this);
        $(".seller-milk-details-content ul")
            .eq(index).addClass("selected").siblings().removeClass("selected");
    });

    var $add=$(".seller-milk-details-content .milk-add");
    $add.click(function(){
        $(".seller-footer .seller-footer-cart .full").css("display","block");
        $(".seller-footer .seller-footer-cart .money").html("Y 2.00").css("color","red");
        $(".seller-footer .settlement").html("去结算").css("background","green")
    });
});