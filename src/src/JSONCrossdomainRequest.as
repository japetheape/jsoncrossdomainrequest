package {
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.external.ExternalInterface;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	import com.serialization.json.JSON;
	
	
	public class JSONCrossdomainRequest extends Sprite
	{
		
		private var fCallback:String;
		
		public function JSONCrossdomainRequest() {
			
			ExternalInterface.addCallback("doRequest", doRequest);
			ExternalInterface.call("JSONCrossdomainRequest.onLoadComplete");
		}
		
		
		/**
		 * Does the request: 
		 */
		public function doRequest(pUrl:String, pParams:String, pMethod:String, pCallback:String):void {
			fCallback = pCallback;
			var loader:URLLoader = new URLLoader();
            var request:URLRequest = new URLRequest(pUrl);
            loader.load(request);
            loader.addEventListener(Event.COMPLETE, onComplete);
		}
		
		
		public function onComplete(pEvent:Event):void {
			var loader:URLLoader = URLLoader(pEvent.target);
            trace("completeHandler: " + loader.data);
            var lObj = JSON.deserialize(loader.data);

            ExternalInterface.call(fCallback, lObj);
		}
		
	}

}

