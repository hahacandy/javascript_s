        //해당 하는 id의 엘리멘탈을 드래그했을때 드래그 한 text를 리턴함
    	var temp_select_text = "";
	    function getSelectedNode(element_id)
	    {
	  	  select_element = "";
	  	  select_text = "";
	  	  
	        if (document.selection){
	      	  select_element = document.selection.createRange().parentElement();
	      	  select_text = document.getSelection();
	        }
	        else{
	            var selection = window.getSelection();
	            select_text = selection;
	            if (selection.rangeCount > 0)
	          	  select_element = selection.getRangeAt(0).startContainer.parentNode;
	        }
	        select_text = select_text.toString();
	
	        select_element_id = select_element.getAttribute('id');
	        if(select_text.toString().length > 0 && temp_select_text != select_text && select_element.textContent.includes(select_text) && select_element_id == element_id){
	      	  temp_select_text = select_text;
	      	  return select_text;
	        }else{
	      	  return;
	        }
	        
		}
    
        document.onmouseup = function() {
	       	var select_element_text = getSelectedNode("element id!!!");
			if(select_element_text != null){
				alert(select_element_text);
			}
        }
