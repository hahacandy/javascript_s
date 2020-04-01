//파일 확장자명 체크 (form_file = frm.obj)
function checkFileType(form_file) {
	var pathpoint = form_file.value.lastIndexOf('.');
	filepoint = form_file.value.substring(pathpoint+1, form_file.value.length);
	filetype = filepoint.toLowerCase();

	var check_file_type=new Array();
	check_file_type=['mp4'];
	
	if(check_file_type.indexOf(filetype) == -1){ //check_file_type에 존재하지 않는 확장자 명이면 업로드 불가
		form_file.value="";
		alert(filetype+" 확장자명은 업로드 불가!");
		return false;
	}else{
		return true;
	}
}

//파일 용량 체크 (form_file = frm.obj, _maxsize = 1~(MB))
function checkFileSize(form_file, _maxsize) {
	var fileSize = form_file.files[0].size;
	var maxSize = _maxsize * 1024 * 1024;
	 
	if(fileSize > maxSize){
		alert("첨부파일 사이즈는 "+_maxsize+"MB 이내로 등록 가능합니다. ");
		form_file.value="";
		return false;
	}else{
		return true;
	}
}