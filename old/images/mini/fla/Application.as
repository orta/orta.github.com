package {
	
	import flash.events.*;
	import flash.display.Sprite;
	
	import flash.external.ExternalInterface;
  import flash.net.URLRequest;
  import flash.net.navigateToURL;
  
	/**
	 *	Main Class for Project. Only used if compiled through TextMate
	 *
	 *	@langversion ActionScript 3.0
	 *	@playerversion Flash 9.0
	 *
	 *	@author orta
	 *	@since 22.05.2008
	 */	
	 
	public class Application extends Sprite {
	      
		public function Application() {
			super();      
			spread_mc.download_btn.addEventListener(MouseEvent.MOUSE_UP, openLink);
		}
    
		public function openLink(e:Event) :void{
      var window:String = "";
      var req:URLRequest = new URLRequest("http://ortatherox.com/softstuff/fonts/softstuff.ttf");
      if (!ExternalInterface.available) {
        navigateToURL(req, window);
      } else {
        var strUserAgent:String = String(ExternalInterface.call("function() {return navigator.userAgent;}")).toLowerCase();
        if (strUserAgent.indexOf("firefox") != -1 || (strUserAgent.indexOf("msie") != -1 && uint(strUserAgent.substr(strUserAgent.indexOf("msie") + 5, 3)) >= 7)) {
          ExternalInterface.call("window.open", req.url, window);
        } else {
          navigateToURL(req, window);
        }
      }
    }
    
	}
	
}
