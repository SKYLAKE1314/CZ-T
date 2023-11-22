//分类选项卡
$('.title-tab li').mouseenter(function () {
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
    //匹配选项卡对应内容，显示它
    //console.log($(this).index());
    let index = $(this).index()
    let section = $('.wrap section').eq(index)
    section.addClass('tab-cont-show').siblings().removeClass('tab-cont-show')
    //技术架构
    $('.btn-bgimg-l').mouseenter(function (){
        $('.build-bgimg-l').css('display','block')
    })
    $('.btn-bgimg-l').mouseleave(function (){
        $('.build-bgimg-l').css('display','none')
    })
})
