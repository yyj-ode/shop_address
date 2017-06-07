var len,shStatus,that,url;
len = $("body").find(".shop_list").length;
//根据审核状态显示不同图标和颜色
for(var i = 0; i < len; i++){
    shStatus = $(".shop_list").find(".shop_status_shenhe").eq(i);
    if(shStatus.text() == "审核中"){
        shStatus.css({"color":"#f9ae3a"});
        shStatus.find("i").addClass("shenhezhong");
        shStatus.siblings(".shop_status_xiugai").hide();
    }else if(shStatus.text() == "审核通过"){
        shStatus.css({"color":"#083680"});
        shStatus.find("i").addClass("shenhetongguo");
    }else{
        shStatus.css({"color":"#df001f"});
        shStatus.find("i").addClass("shenheshibai");
    }
}

//点击删除，出现弹窗
$(".shop_list .shop_status_shanchu").click(function(event){
    that = $(this).parent().parent();
    $(".clear").show();
    event.stopPropagation(); //阻止事件冒泡
});
//删除弹窗里点击取消
$(".cancel").click(function () {
    $(".clear").hide();
});
//删除弹窗里点击确定
$(".sure").click(function(){
    $(".clear").hide();
    that.remove();
});

//点击修改和发布新店址
$(".shop_list .shop_status_xiugai,.footer>p").click(function(event){
    window.location.href = "detail.html";
    event.stopPropagation(); //阻止事件冒泡
});

// //点击列表跳到审核状态页
$(".shop_list").click(function () {
    var text = $(this).find(".shop_status_shenhe").text();
        if(text == "审核中"){
            window.location.href = "review.html?1";
        }else if(text == "审核通过"){
            window.location.href  = "review.html?2";
        }else{
            window.location.href = "review.html?3";
        }
});