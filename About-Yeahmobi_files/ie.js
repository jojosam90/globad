
// ie10和谷歌63以下跳转浏览器升级页面
/*@cc_on window.location.href="http://support.dmeng.net/upgrade-your-browser.html?referrer="+encodeURIComponent(window.location.href); @*/
function getBrowser() {
  var UserAgent = navigator.userAgent.toLowerCase();
  var browserInfo = {};
  var browserArray = {
      Chrome: UserAgent.indexOf('chrome') > -1 && UserAgent.indexOf('safari') > -1, // Chrome浏览器
  };
  // console.log(browserArray)
  for (var i in browserArray) {
      if (browserArray[i]) {
          var versions = '';
          if (i == 'IE') {
              versions = UserAgent.match(/(msie\s|trident.*rv:)([\w.]+)/)[2];
          } else if (i == 'Chrome') {
              for (var mt in navigator.mimeTypes) {
                  //检测是否是360浏览器(测试只有pc端的360才起作用)
                  if (navigator.mimeTypes[mt]['type'] == 'application/360softmgrplugin') {
                      i = '360';
                  }
              }
              versions = UserAgent.match(/chrome\/([\d.]+)/)[1];
          }
          browserInfo.type = i;
          browserInfo.versions = parseInt(versions);
      }
  }
  return browserInfo.versions;
}
if(getBrowser() < 63){
window.location.href="http://support.dmeng.net/upgrade-your-browser.html?referrer="+encodeURIComponent(window.location.href);
}