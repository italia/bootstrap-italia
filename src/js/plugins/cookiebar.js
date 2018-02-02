// Codice di partenza cookie.js di johnchambers in https://gist.github.com/johnchambers/
jQuery(function($) {
  checkCookie_eu();
  function checkCookie_eu() {
      var consent = getCookie_eu("cookies_consent");
      if (consent == null || consent == "" || consent == undefined) {
          $('#cookie-bar').removeClass("d-none");
      }
  }

  function setCookie_eu(c_name,value,exdays) {
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + exdays);
      var c_value = escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
      document.cookie = c_name + "=" + c_value+"; path=/";
      $('#cookie-bar').addClass("d-none");
  }

  function getCookie_eu(c_name) {
      var i,x,y,ARRcookies=document.cookie.split(";");
      for (i=0;i<ARRcookies.length;i++) {
          x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
          y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
          x=x.replace(/^\s+|\s+$/g,"");
          if (x==c_name) {
              return unescape(y);
          }
      }
  }

  $("#btn-accept").click(function(){
      setCookie_eu("cookies_consent", 1, 30);
  });
});
