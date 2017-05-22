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
            .eq(index).show()
            .siblings().hide();
    });


});