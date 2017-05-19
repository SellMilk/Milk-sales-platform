/**
 * Created by Administrator on 2017/5/19.
 */
$(function () {
    /*热词选择开始*/
    $('.home-header .hot-word').on('click',function () {
        $('.home-header input').val($(this).html());
    })
    /*热词选择结束*/
});