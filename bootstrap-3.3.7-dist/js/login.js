function login() {
    if(isNone()) {
        if(localStorage.user) {
            // 从localStorage取出键为user的数据模型
            arr = eval(localStorage.user);
            let k = 0;
            // 循环取出，可用其他方法代理，数据量多的情况下，不建议使用for循环
            for(e in arr) {
                // 判断用户名，密码是否和localStorage中的数据一致，兼容性写法必须添加trim()清除前后空格,不需要兼容可以不写
                if($('#userName').val().trim() == arr[e].userName) {
                    if($('#passWord').val().trim() == arr[e].passWord) {
                        alert('登录成功');
                        // 成功后清除用户名和密码
                        clear();
                        k = 0;
                        // 成功之后对整个登录页面ID为web的部分重新换为成功的标识（也可以选择跳转到成功页面）
                        window.location.href="home.html";
                        return;
                    } else {
                        alert('密码错误');
                        // 失败后清除用户名和密码
                        clear();
                        k = 0;
                        return;
                    }
                } else {
                    k = 1;
                }
            }
            if(k == 1) {
                alert('用户名不存在');
                clear();
            }
        } else {
            alert('用户名不存在，正在跳转到注册页面！');
            window.location.href="register.html";
            clear();
        }
    }
}


//   清空数据等同于
//   document.getElementById("userName").value="";
//   document.getElementById("passWord").value="";

function clear() {
    $('#userName').val('');
    $("#passWord").val('');
}


//   登录的验证方法是否为空的判断
 
function isNone() {
    if($('#userName').val().trim() == "") {
        alert('用户名不能为空');
        return false;
    } else if($('#passWord').val().trim() == "") {
        alert('密码不能为空');
        return false;
    }
    return true;
}

$("#rememberMe").click(function(){
    if (!$(this).hasClass("checked")) {
        $(this).addClass("checked");
        $("#login").removeClass("disabled");
    }
    else{
        $(this).removeClass("checked");
        $("#login").addClass("disabled")
    }
});