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

"use strict";window.wp_fallback_consent_type=consent_api.consent_type;window.waitfor_consent_hook=consent_api.waitfor_consent_hook;function wp_has_consent(category){var consent_type;if(typeof window.wp_consent_type!=="undefined"){consent_type=window.wp_consent_type}else{consent_type=window.wp_fallback_consent_type}var has_consent_level=false;var cookie_value=consent_api_get_cookie(consent_api.cookie_prefix+"_"+category);if(!consent_type){has_consent_level=true}else if(consent_type.indexOf("optout")!==-1&&cookie_value===""){has_consent_level=true}else{has_consent_level=cookie_value==="allow"}return has_consent_level}function consent_api_set_cookie(name,value){var secure=";secure";var days=consent_api.cookie_expiration;var date=new Date;date.setTime(date.getTime()+days*24*60*60*1e3);var expires=";expires="+date.toGMTString();if(window.location.protocol!=="https:")secure="";document.cookie=name+"="+value+secure+expires+";path=/"}function consent_api_get_cookie(name){name=name+"=";var cookies=window.document.cookie.split(";");for(var i=0;i<cookies.length;i++){var cookie=cookies[i].trim();if(cookie.indexOf(name)==0)return cookie.substring(name.length,cookie.length)}return""}function wp_set_consent(category,value){var event;if(value!=="allow"&&value!=="deny")return;var previous_value=consent_api_get_cookie(consent_api.cookie_prefix+"_"+category);consent_api_set_cookie(consent_api.cookie_prefix+"_"+category,value);if(previous_value===value)return;var changedConsentCategory=[];changedConsentCategory[category]=value;try{event=new CustomEvent("wp_listen_for_consent_change",{detail:changedConsentCategory})}catch(err){event=document.createEvent("Event");event.initEvent("wp_listen_for_consent_change",true,true);event.detail=changedConsentCategory}document.dispatchEvent(event)}

}
/*
     FILE ARCHIVED ON 11:03:50 Apr 28, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:41:32 Jun 25, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.513
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.01
  esindex: 0.01
  cdx.remote: 55.958
  LoadShardBlock: 187.733 (3)
  PetaboxLoader3.datanode: 156.223 (4)
  PetaboxLoader3.resolve: 165.459 (2)
  load_resource: 159.196
*/