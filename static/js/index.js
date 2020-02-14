/* 定义正则表达式 */
let telephoneReg = /^1[3-9][0-9]{9}$/i;
let studentIDReg = /^1940[7|8][0-9]{6}$/i;
let classNumberReg = /^190[1-6]$/i;
let nameReg = /^[\u4E00-\u9FA5]{2,4}$/i;       //实验室应该没有五个字的孩子

let selectIntro = new Array(
    "",
    "对算法及数据结构、程序设计竞赛、信息学竞赛、人工智能算法等有兴趣，喜欢在赛场上发挥自己的实力，蓝桥杯、ACM-ICPC、中国高校程序设计大赛等算法等都是算法类竞赛，且无论考研或工作，算法和数据结构都是必不可少的。",
    "Web端开发：网页前端的开发，需要学习HTML、CSS、JavaScript等。",
    "CS前端开发：客户端前端开发，如OpenGL、VTK、计算机图形学等。",
    "后端：Linux、数据库、计算机网络技术、所擅长语言的框架(SSM、Django或其他后端框架)。"
);

/**************获取学院数据*********************/
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200) {
        var result = xhr.responseText;
        var res = JSON.parse(result);
        console.log(res);
        var s = document.getElementById('college_number');
        for(var i=0 ; i<res.length ; ++i) {
            var option = document.createElement('option');
            option.setAttribute('value',res[i].college_code);
            option.innerText = res[i].college_name;
            s.appendChild(option);
        }
    }
};
xhr.open('get','http://localhost/kcsoft/src/collegeAndMajor.php?type=college',true);
xhr.send();

/**************切换学院获取专业***************/
document.getElementById('college_number').onchange = function() {
    var college_code = this.value;
    console.log(college_code);

    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200) {
            var result = xhr.responseText;
            console.log(result);
            var res = JSON.parse(result);

            var major = document.getElementById('major_number');
            major.innerHTML = '<option value="0">__请选择专业__</option>';

            for(let i in res) {
                var option = document.createElement('option');
                option.setAttribute('value',res[i].major_code);
                option.innerText = res[i].major_name;
                major.appendChild(option);
            }
        }
    };
    xhr.open('get','http://localhost/kcsoft/src/collegeAndMajor.php?type=major&collegecode='+college_code,true);
    xhr.send();
};
/* 判断是否可以提交 */
let judgeDisabled = [];
for(let i=0 ; i<7 ; ++i) {
    judgeDisabled[i] = false;
}

function disabledOrNot() {
    for(let i=0 ; i<7 ; ++i) {
        if(judgeDisabled[i] == false) {
            return false;
        }
    }
    return true;
}

/* 0 提交内容验证 */
$("#inputName").change(function () {
    let str = $("#inputName").val();
    //$("#inputName").val()
    if(nameReg.test(str)) {
        judgeDisabled[0] = true;
        $("#inputNameBox").removeClass('has-error');
        $("#inputNameBox").addClass('has-success');
        //$("#submitBtn").removeAttr('disabled');
    } else {
        judgeDisabled[0] = false;
        $("#inputNameBox").removeClass('has-success');
        $("#inputNameBox").addClass('has-error');
        //$("#submitBtn").attr('disabled','disabled');
    }

    if(disabledOrNot()) {
        $("#submitBtn").removeAttr('disabled');
    } else {
        $("#submitBtn").attr('disabled','disabled');
    }
});

/* 1 提交内容验证 */
$("#inputStudentID").change(function () {
    let str = $("#inputStudentID").val();
    /*console.log(str);*/
    if(studentIDReg.test(str)) {
        judgeDisabled[1] = true;
        $("#inputStudentIDBox").removeClass('has-error');
        $("#inputStudentIDBox").addClass('has-success');
        //$("#submitBtn").removeAttr('disabled');
    } else {
        judgeDisabled[1] = false;
        $("#inputStudentIDBox").removeClass('has-success');
        $("#inputStudentIDBox").addClass('has-error');
        //$("#submitBtn").attr('disabled','disabled');
    }
    if(disabledOrNot()) {
        $("#submitBtn").removeAttr('disabled');
    } else {
        $("#submitBtn").attr('disabled','disabled');
    }
});

/* 2 提交内容验证 */
$("#inputTelephoneNumber").change(function () {
    let str = $("#inputTelephoneNumber").val();
    if(telephoneReg.test(str)) {
        judgeDisabled[2] = true;
        $("#inputTelephoneNumberBox").removeClass('has-error');
        $("#inputTelephoneNumberBox").addClass('has-success');
        //$("#submitBtn").removeAttr('disabled');
    } else {
        judgeDisabled[2] = false;
        $("#inputTelephoneNumberBox").removeClass('has-success');
        $("#inputTelephoneNumberBox").addClass('has-error');
        //$("#submitBtn").attr('disabled','disabled');
    }
    if(disabledOrNot()) {
        $("#submitBtn").removeAttr('disabled');
    } else {
        $("#submitBtn").attr('disabled','disabled');
    }
});

/* 3 提交内容验证 */
$("#inputClassNumber").change(function () {
    let str = $("#inputClassNumber").val();
    if(classNumberReg.test(str)) {
        judgeDisabled[3] = true;
        $("#inputClassNumberBox").removeClass('has-error');
        $("#inputClassNumberBox").addClass('has-success');
        //$("#submitBtn").removeAttr('disabled');
    } else {
        judgeDisabled[3] = false;
        $("#inputClassNumberBox").removeClass('has-success');
        $("#inputClassNumberBox").addClass('has-error');
        //$("#submitBtn").attr('disabled','disabled');
    }
    if(disabledOrNot()) {
        $("#submitBtn").removeAttr('disabled');
    } else {
        $("#submitBtn").attr('disabled','disabled');
    }
});

/* 4 提交内容验证 */
$("#college_number").change(function () {
    let value = $("#college_number").find('option:selected').val();
    if(value != 0) {
        judgeDisabled[4] = true;
        $("#inputCollegeNumberBox").removeClass('has-error');
        $("#inputCollegeNumberBox").addClass('has-success');
    } else {
        judgeDisabled[4] = false;
        $("#inputCollegeNumberBox").remove('has-success');
        $("#inputCollegeNumberBox").addClass('has-error');
    }
    if(disabledOrNot()) {
        $("#submitBtn").removeAttr('disabled');
    } else {
        $("#submitBtn").attr('disabled','disabled');
    }
});

/* 5 提交内容验证 */
$("#major_number").change(function () {
    let value = $("#major_number").find('option:selected').val();
    if(value != 0) {
        judgeDisabled[5] = true;
        $("#inputMajorNumberBox").removeClass('has-error');
        $("#inputMajorNumberBox").addClass('has-success');
    } else {
        judgeDisabled[5] = false;
        $("#inputMajorNumberBox").removeClass('has-success');
        $("#inputMajorNumberBox").addClass('has-error');
    }
    if(disabledOrNot()) {
        $("#submitBtn").removeAttr('disabled');
    } else {
        $("#submitBtn").attr('disabled','disabled');
    }
});

/* 6 提交内容验证 */
$("#group_selection").change(function () {
    let value = $("#group_selection").find('option:selected').val();
    if(value != 0) {
        judgeDisabled[6] = true;
        $("#groupSelectionBox").removeClass('has-error');
        $("#groupSelectionBox").addClass('has-success');
    } else {
        judgeDisabled[6] = false;
        $("#groupSelectionBox").removeClass('has-success');
        $("#groupSelectionBox").addClass('has-error');
    }
    if(disabledOrNot()) {
        $("#submitBtn").removeAttr('disabled');
    } else {
        $("#submitBtn").attr('disabled','disabled');
    }
});

/* 弹出提示框，就是那个告诉你这个方向是干啥的提示 */
$("#group_selection").change(function () {
    let index = $("#group_selection").find('option:selected').val();
    $("#helpBlock").text(selectIntro[index]);
});

/* ajax异步提交表单 */
$("#submitBtn").click(function () {
    let data = $("#mainForm").serializeArray();
    //console.log(data);

    $.ajax({
        type: 'post',
        url: 'http://localhost/kcsoft/src/register.php',
        data: data,
        dataType: 'text',
        success: function () {
            alert('success');
        },
        error: function () {
            alert('error');
        }
    });
});
