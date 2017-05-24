$(function(){

    var $option =$(".merchant-header .merchant-option");
    var $option_content=$(".merchant-header .merchant-option-content");
    $option.click(function(){
        $option_content.css("display","block").hover(function(){
            $option_content.css("display","none");
        });
    });

    var $menu = $(".merchant-milk .merchant-main-menu li");
    $menu.click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        var index =  $menu.index(this);
        $(".merchant-milk .merchant-sub-menu")
            .eq(index).addClass("selected").siblings().removeClass("selected");
    });

    var $type = $(".merchant-milk-details-type li");
    $type.click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        var index =  $type.index(this);
        $(".merchant-milk-details-content ul")
            .eq(index).addClass("selected").siblings().removeClass("selected");
    });

    var $add=$(".merchant-milk-details-content .milk-add");
    $add.click(function(){
        $(".merchant-footer .merchant-footer-cart .full").css("display","block");
        $(".merchant-footer .merchant-footer-cart .money").html("Y 2.00").css("color","red");
        $(".merchant-footer .settlement").html("去结算").css("background","green")
    });
});