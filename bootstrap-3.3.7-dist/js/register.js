function register() {
    if(isNone()) {
        // 定义一个空数组
        let arr = [];
        if(localStorage.user) {
            arr = eval(localStorage.user);
            for(e in arr) {
                // 取出数据判断是否注册过
                if($('#userName').val().trim() == arr[e].userName) {
                    alert('该账号已被注册');
                    clear();
                    return;
                }
            }
        }
        const user = {
            'userName': $("#userName").val(),
            'passWord': $("#passWord").val()
        };
        // 添加数据
        arr.push(user);
        localStorage.user = JSON.stringify(arr);
        alert('注册成功');
        window.location.href="login.html";
        clear();
    }
}

//   清空数据 等同于
//   document.getElementById("loginName").value="";
//   document.getElementById("loginPsd").value="";

function clear() {
    $('#userName').val('');
    $("#passWord").val('');
    $("#rePassword").val('');
}


//   注册的验证方法
//   是否为空的判断
//   两次密码是否相等的判断

function isNone() {
    if($('#userName').val().trim() == "") {//trim()删除字符串开始和末尾的空格
        alert('账号不能为空');
        return false;
    } else if($('#passWord').val().trim() == "") {
        alert('密码不能为空');
        return false;
    } else if($('#passWord').val().trim() != $('#rePassword').val().trim()) {
        alert('两次密码不一致，请检查！');
        return false;
    }
    return true;
}


$("#rememberMe").click(function(){
    if (!$(this).hasClass("checked")) {
        $(this).addClass("checked");
        $("#register").removeClass("disabled");
    }
    else{
        $(this).removeClass("checked");
        $("#register").addClass("disabled")
    }
});