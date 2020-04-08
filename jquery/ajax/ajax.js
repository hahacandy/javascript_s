//폼형식 전달
var formData = $("form[name=frm]").serialize();	
$.ajax({
	url:'Member?command=signupcheck',
	type:'post',
	data:formData,
	success:function(data){
		if(data == 'true'){
			$('#mbrIdMsg').text("이미 사용중인 아이디입니다.");
			$('#mbrIdMsg').css('color', 'red');
			$('#mbrIdCheck').text('false');
			return;
		}else{
			$('#mbrIdMsg').text("사용가능");
			$('#mbrIdMsg').css('color', '#1DDB16');
			$('#mbrIdCheck').text('true');
			return;
		}
	}

});


//문자열식 전달
$.ajax({
	url: '/member/memberAction.asp',
	type: 'post', //post,get,등..전송방식
	dataType: 'text',//데이타 타입
	data: { mode : "login", code : code, uid : uid, pass : pass },
	success: function(data){
	}
});


