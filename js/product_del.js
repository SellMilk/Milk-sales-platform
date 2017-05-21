 $(function(){
    $('#nav li').on('click', function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        $('#goods ul').eq($(this).index()).addClass('selected').siblings().removeClass('selected');
        $('#order ul').eq($(this).index()).addClass('selected').siblings().removeClass('selected');
    });
     var oLi = $('#goods ul li');
     oLi.on('click',function() {
         var that = $(this);
         if(that.find('i').hasClass('selected')){
             that.find('i').removeClass('selected');
             return false;
         }
         that.find('i').addClass('selected');
     })
 });

