var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

document.addEventListener("DOMContentLoaded",(e=>{var t;wpcf7_recaptcha={...null!==(t=wpcf7_recaptcha)&&void 0!==t?t:{}};const c=wpcf7_recaptcha.sitekey,{homepage:n,contactform:a}=wpcf7_recaptcha.actions,o=e=>{const{action:t,func:n,params:a}=e;grecaptcha.execute(c,{action:t}).then((e=>{const c=new CustomEvent("wpcf7grecaptchaexecuted",{detail:{action:t,token:e}});document.dispatchEvent(c)})).then((()=>{"function"==typeof n&&n(...a)})).catch((e=>console.error(e)))};if(grecaptcha.ready((()=>{o({action:n})})),document.addEventListener("change",(e=>{o({action:a})})),"undefined"!=typeof wpcf7&&"function"==typeof wpcf7.submit){const e=wpcf7.submit;wpcf7.submit=(t,c={})=>{o({action:a,func:e,params:[t,c]})}}document.addEventListener("wpcf7grecaptchaexecuted",(e=>{const t=document.querySelectorAll('form.wpcf7-form input[name="_wpcf7_recaptcha_response"]');for(let c=0;c<t.length;c++)t[c].setAttribute("value",e.detail.token)}))}));

}
/*
     FILE ARCHIVED ON 11:03:50 Apr 28, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:41:33 Jun 25, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.881
  exclusion.robots: 0.036
  exclusion.robots.policy: 0.014
  esindex: 0.015
  cdx.remote: 52.616
  LoadShardBlock: 265.107 (6)
  PetaboxLoader3.datanode: 169.108 (7)
  PetaboxLoader3.resolve: 133.07 (2)
  load_resource: 117.1
*/