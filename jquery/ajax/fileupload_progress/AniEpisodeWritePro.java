package action.ani;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import action.Action;

public class AniEpisodeWritePro implements Action{
	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 안씀
	}
	
	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response, ServletContext context)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		String path = context.getRealPath("/upload/ani/videos");
		int maxSize = 512*1024*1024;
		String encType = "UTF-8";
		
		String result = "err";
		
		MultipartRequest mr = null;
		
		PrintWriter out = response.getWriter();
			
		try {
			mr = new MultipartRequest(request, path, maxSize, encType, new DefaultFileRenamePolicy());
			
			result = "ok";
		} catch (Exception e) {
			out.print(result);
			return;
		}
		
		
		out.print(result);
		return;
		


		
	}
}
