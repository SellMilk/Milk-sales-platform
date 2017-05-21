/**
 * Created by Administrator on 2017/5/19.
 */
$(function () {
    /*热词选择开始*/
    $('.home-header .hot-word').on('click',function () {
        $('.home-header input').val($(this).html());
    })
    /*热词选择结束*/
    /*轮播图开始*/
    var oContainer = $('.home-container .carousel');
    var oDot = $('.home-container .dot div');
    var aTips = $('.home-container .tips li');

    var iNow = 0;

    for(var i=0; i<oDot.length; i++){
        oDot[i].index = i;
        $(oDot[i]).on('click',function () {
            changeImg(this.index);
        });
    }

    function changeImg(index){
        iNow = index;
        $(oDot[iNow]).addClass('selected').siblings().removeClass('selected animated fadeIn');
        
        var oTip = $(aTips[iNow]);
        oTip.css({'display':'block'}).addClass('animated zoomIn').siblings().css({'display':'none'});

    }

    var timer = setInterval(function(){
        iNow++;
        if(iNow == aTips.length){
            iNow = 0;
        }
        changeImg(iNow);
    }, 5000);

    oContainer.on('mouseenter',function () {
        console.log('in');
        clearInterval(timer);
    });
    oContainer.on('mouseleave',function () {
        console.log('out');
        timer = setInterval(function(){
            iNow++;
            if(iNow == aTips.length){
                iNow = 1;
            }
            changeImg(iNow);
        }, 5000);
    });
    /*轮播图结束*/
    /*商品懒加载开始*/
    var milkComp = (function () {
       var Product = function (pro_id, title, price, date, num, area) {
           this.pro_id = pro_id;
           this.title = title;
           this.price = price;
           this.date = date;
           this.num = num;
           this.area = area
       };
       var productComp = {
          productlist: $('#product-list'),
          isLoad: true,
          pageNo: 1,
          isEnd: false,
          init: function () {
              
          },
          loadData: function (option, callback) {
              var param = $.extend({page:this.pageNo},option);
              $.get('',param,function (data) {
                  for(var i=0; i<data.product; i++){

                  }

              }.bind(this),'json');
          },
          loadMore: function () {

          }
       };
       return productComp;
    })();
    /*商品懒加载结束*/
});