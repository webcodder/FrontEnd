//先查看是否有本地数据（记住密码）  
    /* function myfunction(){  
        var email = localStorage.getItem("email");  
        var password = localStorage.getItem("password");  
        if(email!=null&&password!=null){  
            alert("邮箱："+email+"密码："+password);  
            $.ajax({  
                url : '../servlet/LoginServlet?choose=login',  
                data : {  
                    email : email,  
                    password : password  
                },  
                dataType : 'json',  
                success : function(data) {  
                    if (data.msg == "") {  
                        alert("用户名或密码错误");  
                    } else {  
                    //登录成功后保存session，如果选择了记住密码，再保存到本地  
                        //window.location.href ='../index/index.jsp';  
                    }  
                },  
                error : function() {  
                    alert("系统错误");  
                }  
            });  
        }else{  
            //alert("没有信息");  
              
        }  
    }  
    function saveStorage(){  
        var email = document.getElementById("email").value;  
        localStorage.setItem("email",email);  
        var password = document.getElementById("password").value;  
        localStorage.setItem("password",password);  
      
    }  
    function login(){  
        $.ajax({  
            url : '../servlet/LoginServlet?choose=login',  
            data : {  
                email : $('#loginform input[name=email]').val(),  
                password : $('#loginform input[name=password]').val()  
            },  
            dataType : 'json',  
            success : function(data) {  
                if (data.msg == "") {  
                    alert("用户名或密码错误");  
                } else {  
                //登录成功后保存session，如果选择了记住密码，再保存到本地  
                    window.location.href ='../index/index.jsp';  
                }  
            },  
            error : function() {  
                alert("系统错误");  
            }  
       });  
    }  
    function reg(){  
        $.ajax({  
            url : 'servlet/LoginServlet?choose=reg',  
            data : {  
                username : $('#regform input[name=username]').val(),  
                password : $('#regform input[name=password]').val(),  
                email : $('#regform input[name=email]').val(),  
            },    
            dataType : 'json',  
            success : function(data) {  
                if(data.msg == false){  
                    alert("注册失败");  
                }else{  
                    alert("注册成功请返回登录");  
                }  
            },  
            error : function() {  
                alert("系统错误");  
            }  
        });  
    } */  
$(document).ready(function(){    
  //读取 localStage 本地存储，填充用户名密码,如果自动登录有值直接跳转；    
  //相反，跳转到本页面,等待登陆处理    
  var storage = window.localStorage;    
    var getEmail = storage["email"];    
    var getPwd = storage["password"];    
    var getisstroepwd = storage["isstorePwd"];    
    var getisautologin = storage["isautologin"];    
    if("yes" == getisstroepwd)    
    {    
        if("yes" == getisautologin)    
        {    
            if(( ("" != getEmail) ||(null != getEmail)) && (("" != getPwd) ||(null != getPwd)))    
            {    
                //lacoste  已经保存 登陆信息 直接登陆    
                // alert('正在自动登录');  
                $("email").val(getEmail);  
                $("#password").val(getPwd);    
               // window.location="";     
               //加载时显示：正在自动登录  
                $.ajax({  
                    url : '../servlet/LoginServlet?choose=login',  
                    data : {  
                        email :  getEmail,  
                        password : getPwd   
                    },  
                    dataType : 'json',  
                    success : function(data) {  
                        if (data.msg == "") {  
                            alert("账号信息异常，请核实后重新登录");  
                        } else {  
                        //登录成功后保存session，如果选择了记住密码，再保存到本地  
                            //window.location.href ='../index/index.jsp';  
                        }  
                    },  
                    error : function() {  
                        alert("系统错误");  
                    }  
                });  
            }    
        }    
        else    
        {       
                $("#email").val(getEmail);    
                $("#password").val(getPwd);    
                document.getElementById("isRemberPwdId").checked = true;    
        }    
    }    
 });    
function login(){  
     var userEmail=$("#email").val();    
    var userPassWord=$("#password").val();    
    
    var storage = window.localStorage;    
    //记住密码    
    if(document.getElementById("isRemberPwdId").checked)    
    {    
        //存储到loaclStage      
    
        storage["email"] = userEmail;    
        storage["password"] =  userPassWord;    
        storage["isstorePwd"] =  "yes";    
    }    
    else    
    {    
        storage["email"] = userEmail;    
        storage["isstorePwd"] =  "no";    
    }    
    
    //下次自动登录    
    if(document.getElementById("isAutoLoginId").checked)    
    {    
        //存储到loaclStage      
        storage["email"] = userEmail;    
        storage["password"] =  userPassWord;    
        storage["isstorePwd"] =  "yes";    
        storage["isautologin"] =  "yes";    
    }    
    else    
    {    
        storage["email"] = userEmail;    
        storage["isautologin"] =  "no";    
    }   
     $.ajax({  
            url : '../servlet/LoginServlet?choose=login',  
            data : {  
                email : userEmail,  
                password : userPassWord  
            },  
            dataType : 'json',  
            success : function(data) {  
                if (data.msg == "") {  
                    alert("用户名或密码错误");  
                } else {  
                //登录成功后保存session，如果选择了记住密码，再保存到本地  
                    window.location.href ='../index/index.jsp';  
                }  
            },  
            error : function() {  
                alert("系统错误");  
            }  
       });   
       alert("登录成功");  
}  