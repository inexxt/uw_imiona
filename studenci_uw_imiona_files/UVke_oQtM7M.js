/*!CK:642490680!*//*1446566726,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ZcZ7W"]); }

__d("PrivacyConst",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={BaseValue:{FRIEND_LIST:129,FRIENDS_PLUS_GAMER_FRIENDS:128,FRIENDS_MINUS_ACQUAINTANCES:127,FACEBOOK_EMPLOYEES:112,CUSTOM:111,EVERYONE:80,NETWORKS_FRIENDS_OF_FRIENDS:60,NETWORKS_FRIENDS:55,FRIENDS_OF_FRIENDS:50,ALL_FRIENDS:40,SELF:10,NOBODY:0},CustomPrivacyTokens:{FRIENDS:247124075410460,FRIENDS_OF_FRIENDS:498125493540100},FriendsValue:{EVERYONE:80,NETWORKS_FRIENDS:55,FRIENDS_OF_FRIENDS:50,ALL_FRIENDS:40,SOME_FRIENDS:30,SELF:10,NO_FRIENDS:0},PostParam:{EVERYONE:300645083384735,NETWORKS_FRIENDS:123780391104836,FRIENDS_OF_FRIENDS:275425949243301,FRIENDS:291667064279714,FRIENDS_MINUS_ACQUAINTANCES:284920934947802,ONLY_ME:286958161406148,FB_ONLY:411331705596297,EVENT_PUBLIC:1493271774218406,EVENT_OPEN_INVITE:854618297899786,EVENT_GUESTS_AND_FRIENDS:1439959856260766,EVENT_INVITE_ONLY:599950423437029},PrivacyField:{CURRENT_COMPOSER:8787670733,DEFAULT_COMPOSER:875106179167765,TIMELINE_TAGGED_CONTENT_VISIBILITY:8787530733,WALL_POSTS:8787370733,TAG_EXPANDED_CONTENT:8787795733,SEARCH_BY_PHONE:8787815733,SEARCH_BY_EMAIL:8787820733,CAN_FRIEND:8787540733,DEPRECATED_APP_DEFAULT:8787700733,SEARCH_BY_NAME:8787755733,SEARCH_BY_CONTACT_INFO:8787760733,SCREENNAME:8787335733,CURRENT_ADDRESS:8787355733,FRIENDS:8787365733,WEBSITE:8787375733,STATUS_UPDATES:8787395733,BIRTHDAY:8787510733,BIRTHYEAR:8787805733,CAN_COMMENT:8787535733,CAN_MESSAGE:8787545733,RELATIONSHIPS:8787550733,PROFILE_PICTURE_ALBUM:8787565733,DASHBOARD_ACTIVITY:8787575733,FAMILY:8787585733,INTERESTED_IN_LOOKING_FOR:8787590733,PLACES:8787620733,NAME_DAY:8787810733,LANGUAGES:8787625733,QUOTATIONS:8787630733,ABOUT_ME:8787635733,POLITICAL:8787640733,RELIGIOUS:8787645733,CURRENT_CITY:8787650733,HOMETOWN:8787655733,PROFILE_LIKES_AND_INTERESTS:8787660733,BLURB:8787665733,OTHER_LIKES_AND_INTERESTS:8787680733,SUBSCRIBERS:8787690733,SUBSCRIBED_TO:8787695733,PERSONAL_CONTACT_DEFAULT:8787765733,PAGE_CONTACT_DEFAULT:8787770733,AUTO_GENERATED_FB_EMAIL:8787775733,SKILLS:8787780733,CUSTOM_GENDERS:237760973066217,LOCATION_DO_NOT_WRITE_DIRECTLY:8787785733,SOCIAL_ADS:7719929599,PLATFORM_ADS:126540474531,BASS_ADS:183468681673909,ACTIVITIES:144331422306930,INTERESTS:113693108715766,MUSIC:172372399483077,BOOKS:100725463352700,GAMES:199298603444535,MOVIES:201146206594049,TV_SHOWS:129665560441221,SPORTS_PLAYED:129991670408857,FAVORITE_TEAMS:225288534151802,FAVORITE_ATHLETES:203380763033334,PEOPLE_I_ADMIRE:210380795648667,FAVORITE_FOODS:585935528106425,FAVORITE_RESTAURANTS:172588449584647,FAVORITE_WEBSITES:180412195459106,CLOTHING_BRANDS:397391233714082,LAST_POST_PRIVACY:314763985364212,SECOND_TO_LAST_POST_PRIVACY:321179124722698,PREVIOUS_SECONDARY_COMPOSER:864562253561430,RECENT_COMPOSER:358304524327898,NOW_COMPOSER:421290164697736,BACKSTAGE_PRIVACY:809506612451171},TagExpansion:{NONE:0,TAGGEES:1,FRIENDS_OF_TAGGEES:2},EventExpansion:{NONE:0,EVENT_INVITEES:1,EVENT_GROUP:2},ExpansionType:{NONE:0,TAGS_ONLY:1,EVENT_INVITEES_ONLY:2,EVENT_GROUP_ONLY:3,TAGS_AND_EVENT_INVITEES:4,TAGS_AND_EVENT_GROUP:5}};},null,{});
__d('BanzaiNectar',['Banzai'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k){return {log:function(l,m,n){var o={e:m,a:n};h.post('nectar:'+l,o,k);}};}var j=i();j.create=i;f.exports=j;},null);
__d('AccessibilityLogger',['AsyncSignal','Cookie'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={COOKIE:'a11y',DECAY_MS:6*60*60*1000,DEFAULT:{sr:0,'sr-ts':Date.now(),jk:0,'jk-ts':Date.now(),kb:0,'kb-ts':Date.now(),hcm:0,'hcm-ts':Date.now()},getCookie:function(){var k=j.DEFAULT,l=i.get(j.COOKIE);if(l){l=JSON.parse(l);for(var m in k)if(m in l)k[m]=l[m];}return k;},logKey:function(k,l){var m=j.getCookie();m[k]++;var n=Date.now();if(n-m[k+'-ts']>j.DECAY_MS){new h('/ajax/accessibilitylogging',{eventName:l,times_pressed:m[k]}).send();m[k+'-ts']=n;m[k]=0;}i.set(j.COOKIE,JSON.stringify(m));},logHCM:function(){j.logKey('hcm','hcm_users');},logSRKey:function(){j.logKey('sr','sr_users');},logJKKey:function(){j.logKey('jk','jk_users');},logFocusIn:function(){j.logKey('kb','kb_users');}};f.exports=j;},null);
__d("Ease",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={makePowerOut:function(i){var j=h.makePowerIn(i);return function(k){return 1-j(1-k);};},makePowerIn:function(i){return function(j){var k=Math.pow(j,i);return (k*10000|0)/10000;};},makePowerInOut:function(i){var j=h.makePowerIn(i),k=h.makePowerOut(i);return function(l){return l<.5?.5*j(l*2):.5*k(l*2-1)+.5;};},expoOut:function(i){return 1-Math.pow(2,-10*i);},expoIn:function(i){return 1-h.expoOut(1-i);},expoInOut:function(i){return i<.5?.5*h.expoIn(i*2):.5*h.expoOut(i*2-1)+.5;},sineOut:function(i){return Math.sin(i*Math.PI*.5);},sineIn:function(i){return 1-Math.cos(i*Math.PI*.5);},sineInOut:function(i){return -.5*(Math.cos(Math.PI*i)-1);},circOut:function(i){i--;return Math.sqrt(1-i*i);},circIn:function(i){return 1-h.circOut(1-i);},circInOut:function(i){return i<.5?.5*h.circIn(i*2):.5*h.circOut(i*2-1)+.5;},bounceOut:function(i){if(i<1/2.75){return 7.5625*i*i;}else if(i<2/2.75){return 7.5625*(i-=1.5/2.75)*i+.75;}else if(i<2.5/2.75){return 7.5625*(i-=2.25/2.75)*i+.9375;}else return 7.5625*(i-=2.625/2.75)*i+.984375;},bounceIn:function(i){return 1-h.bounceOut(1-i);},bounceInOut:function(i){return i<.5?.5*h.bounceIn(i*2):.5*h.bounceOut(i*2-1)+.5;},makeBounceOut:function(i){i=i||1;return function(j){j=(1-Math.cos(j*Math.PI*i))*(1-j)+j;return 1-Math.abs(1-j);};},makeBounceIn:function(i){var j=h.makeBounceOut(i);return function(k){return 1-j(1-k);};},makeElasticOut:function(i,j){i<1&&(i=1);var k=Math.PI*2;return function(l){if(l===0||l===1)return l;var m=j/k*Math.asin(1/i);return i*Math.pow(2,-10*l)*Math.sin((l-m)*k/j)+1;};},makeElasticIn:function(i,j){var k=h.makeElasticOut(i,j);return function(l){return 1-k(1-l);};},makeElasticInOut:function(i,j){j*=1.5;var k=h.makeElasticIn(i,j),l=h.makeElasticOut(i,j);return function(m){return m<.5?.5*k(m*2):.5*l(m*2-1)+.5;};},makeBackOut:function(i){var j=h.makeBackIn(i);return function(k){return 1-j(1-k);};},makeBackIn:function(i){return function(j){return j*j*((i+1)*j-i);};},makeBackInOut:function(i){i*=1.525;var j=h.makeBackIn(i),k=h.makeBackOut(i);return function(l){return l<.5?.5*j(l*2):.5*k(l*2-1)+.5;};}};h.elasticOut=h.makeElasticOut(1,.3);h.elasticIn=h.makeElasticIn(1,.3);h.elasticInOut=h.makeElasticInOut(1,.3);h.backOut=h.makeBackOut(1.7);h.backIn=h.makeBackIn(1.7);h.backInOut=h.makeBackInOut(1.7);f.exports=h;},null);
__d('SelectorDeprecated',['Arbiter','Button','ContextualLayer','CSS','DataStore','DOM','Event','Focus','HTML','Keys','MenuDeprecated','Parent','Style','Toggler','TooltipData','URI','Vector','arrayContains','emptyFunction','getDocumentScrollElement'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa){if(c.__markCompiled)c.__markCompiled();var ba,ca,da=[],ea;function fa(qa){return s.byClass(qa,'uiSelector');}function ga(qa){return s.byClass(qa,'uiSelectorButton');}function ha(){if(!ca){ca=new j({position:'below'},m.create('div'));k.addClass(ca.getRoot(),'uiSelectorContextualLayer');}return ca;}function ia(qa){return m.scry(qa,'select')[0];}function ja(qa){return m.find(qa,'div.uiSelectorMenuWrapper');}var ka=function(){ka=z;r.subscribe('select',function(qa,ra){if(!ba||!ra||ra.menu!==pa.getSelectorMenu(ba))return;var sa=la(ba),ta=ma(ra.item);if(ta){var ua=ba,va=pa.isOptionSelected(ra.item),wa=pa.inform('select',{selector:ua,option:ra.item,clone:ea});if(wa===false)return;if(sa||!va){pa.setSelected(ua,pa.getOptionValue(ra.item),!va);pa.inform('toggle',{selector:ua,option:ra.item});pa.inform('change',{selector:ua});h.inform('Form/change',{node:ua});if(na(ua))l.set(ua,'dirty',true);}}if(!sa||!ta)ba&&pa.toggle(ba);});};function la(qa){return !!qa.getAttribute('data-multiple');}function ma(qa){return k.hasClass(qa,'uiSelectorOption');}function na(qa){return !!qa.getAttribute('data-autosubmit');}var oa=function(){oa=z;var qa={keydown:function(event){var ra=event.getTarget();if(m.isInputNode(ra))return;switch(n.getKeyCode(event)){case q.DOWN:case q.SPACE:case q.UP:if(ga(ra)){var sa=fa(ra);pa.toggle(sa);return false;}break;case q.ESC:if(ba){var ta=pa.getSelectorButton(ba);pa.toggle(ba);ta&&o.set(ta);return false;}break;}},mouseover:function(event){var ra=s.byAttribute(event.getTarget(),'ajaxify');if(ra&&k.hasClass(ra,'uiSelectorButton'))pa.loadMenu(fa(ra));}};n.listen(document.body,qa);};u.subscribe(['show','hide'],function(qa,ra){var sa=fa(ra.getActive());if(sa){oa();ka();var ta=pa.getSelectorButton(sa),ua=pa.getSelectorMenu(sa),va=qa==='show';ta.setAttribute('aria-expanded',va?'true':'false');if(va){ba=sa;if(k.hasClass(ta,'uiButtonDisabled')){pa.setEnabled(sa,false);return false;}ua=ua||pa.loadMenu(sa);var wa=t.getScrollParent(sa),xa=wa!==window&&wa!==aa();if(xa||k.hasClass(sa,'uiSelectorUseLayer')){if(xa)da.push(n.listen(wa,'scroll',function(){ra.hide();}));ea=m.create('div',{className:sa.className});k.addClass(ea,'invisible_elem');x.getElementDimensions(sa).setElementDimensions(ea);m.replace(sa,ea);var ya=k.hasClass(sa,'uiSelectorRight'),za=k.hasClass(sa,'uiSelectorBottomUp');ha().setContext(ea).setContent(sa).setPosition(za?'above':'below').setAlignment(ya?'right':'left').show();}r.register(ua);var ab=r.getCheckedItems(ua);if(!ab.length)ab=r.getEnabledItems(ua);if(ab.length)r.focusItem(ab[0]);}else{ba=null;if(ea){while(da.length)da.pop().remove();m.replace(ea,sa);ha().hide();ea=null;}ua&&r.unregister(ua);if(na(sa)&&l.get(sa,'dirty')){var bb=m.scry(sa,'input.submitButton')[0];bb&&bb.click();l.remove(sa,'dirty');}}k.conditionClass(pa.getSelectorButton(sa),'selected',va);pa.inform(va?'open':'close',{selector:sa,clone:ea});}});var pa=Object.assign(new h(),{attachMenu:function(qa,ra,sa){qa=fa(qa);if(qa){ba&&r.unregister(pa.getSelectorMenu(ba));m.setContent(ja(qa),ra);ba&&r.register(pa.getSelectorMenu(qa));ea&&ha().updatePosition();if(sa){var ta=qa.getAttribute('data-name');ta&&sa.setAttribute('name',ta);if(!la(qa))sa.setAttribute('multiple',false);var ua=ia(qa);if(ua){m.replace(ua,sa);}else m.insertAfter(qa.firstChild,sa);}return true;}},getOption:function(qa,ra){var sa=pa.getOptions(qa),ta=sa.length;while(ta--)if(ra===pa.getOptionValue(sa[ta]))return sa[ta];return null;},getOptions:function(qa){var ra=r.getItems(pa.getSelectorMenu(qa));return ra.filter(ma);},getEnabledOptions:function(qa){var ra=r.getEnabledItems(pa.getSelectorMenu(qa));return ra.filter(ma);},getSelectedOptions:function(qa){return r.getCheckedItems(pa.getSelectorMenu(qa));},getOptionText:function(qa){return r.getItemLabel(qa);},getOptionValue:function(qa){var ra=fa(qa),sa=ia(ra),ta=pa.getOptions(ra).indexOf(qa);return ta>=0?sa.options[ta+1].value:'';},getSelectorButton:function(qa){return m.find(qa,'a.uiSelectorButton');},getSelectorMenu:function(qa){return m.scry(qa,'div.uiSelectorMenu')[0];},getValue:function(qa){var ra=ia(qa);if(!ra)return null;if(!la(qa))return ra.value;var sa=[],ta=ra.options;for(var ua=1,va=ta.length;ua<va;ua++)if(ta[ua].selected)sa.push(ta[ua].value);return sa;},isOptionSelected:function(qa){return r.isItemChecked(qa);},listen:function(qa,ra,sa){return this.subscribe(ra,function(ta,ua){if(ua.selector===qa)return sa(ua,ta);});},loadMenu:function(qa,ra){var sa=pa.getSelectorMenu(qa);if(!sa){var ta=pa.getSelectorButton(qa),ua=ta.getAttribute('ajaxify');if(ua){e(['AsyncRequest'],(function(wa){var xa=new w(ua),ya=xa.getQueryData();xa.setQueryData({});var za=new wa(xa).setData(ya).setNectarModuleDataSafe(ta).setRelativeTo(ta);ra&&za.setFinallyHandler(function(){setTimeout(ra,0);});za.send();}).bind(this));var va=p('<div class="uiSelectorMenuWrapper uiToggleFlyout">'+'<div class="uiMenu uiSelectorMenu loading">'+'<ul class="uiMenuInner">'+'<li><span></span></li>'+'</ul>'+'</div>'+'</div>');m.appendContent(ta.parentNode,va);sa=pa.getSelectorMenu(qa);ta.removeAttribute('onmouseover');}}else ra&&ra();return sa;},setButtonLabel:function(qa,ra){var sa=pa.getSelectorButton(qa),ta=parseInt(sa.getAttribute('data-length'),10);ra=ra||sa.getAttribute('data-label')||'';i.setLabel(sa,ra);if(typeof ra==='string')if(ta&&ra.length>ta){sa.setAttribute('title',ra);}else sa.removeAttribute('title');},setButtonTooltip:function(qa,ra){var sa=pa.getSelectorButton(qa),ta=s.byTag(sa,'a');ta&&v.set(ta,ra||sa.getAttribute('data-tooltip')||'');},setEnabled:function(qa,ra){if(!ra&&ba&&fa(qa)===ba)pa.toggle(qa);i.setEnabled(pa.getSelectorButton(qa),ra);},setOptionEnabled:function(qa,ra){r.setItemEnabled(qa,ra);},setSelected:function(qa,ra,sa){sa=sa!==false;var ta=pa.getOption(qa,ra);if(!ta)return;var ua=pa.isOptionSelected(ta);if(sa!==ua){if(!la(qa)&&!ua){var va=pa.getSelectedOptions(qa)[0];va&&r.toggleItem(va);}r.toggleItem(ta);}pa.updateSelector(qa);},toggle:function(qa){u.toggle(m.scry(fa(qa),'div.wrap')[0]);},updateSelector:function(qa){var ra=pa.getOptions(qa),sa=pa.getSelectedOptions(qa),ta=ia(qa).options,ua=[],va=[];for(var wa=0,xa=ra.length;wa<xa;wa++){var ya=y(sa,ra[wa]);ta[wa+1].selected=ya;if(ya){var za=pa.getOptionText(ra[wa]);ua.push(za);va.push(ra[wa].getAttribute('data-tooltip')||za);}}ta[0].selected=!sa.length;var ab=k.hasClass(qa,'uiSelectorDynamicLabel'),bb=k.hasClass(qa,'uiSelectorDynamicTooltip');if(ab||bb){var cb='';if(la(qa)){var db=pa.getSelectorButton(qa);cb=db.getAttribute('data-delimiter')||', ';}ua=ua.join(cb);va=va.join(cb);ab&&pa.setButtonLabel(qa,ua);bb&&pa.setButtonTooltip(qa,va);}}});f.exports=pa;},null);
__d('PrivacySelectorNewDispatcher',['Dispatcher'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='selector',j=Object.assign(new h(),{handleUpdateFromSelector:function(k){this.dispatch(babelHelpers._extends({payloadSource:i},k));}});f.exports=j;},null);
__d("XPrivacyCustomDialogController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/privacy\/custom_dialog\/",{id:{type:"String",required:true},option_id:{type:"String",required:true},autosave:{type:"Bool",defaultValue:false},explain_tags:{type:"Bool",defaultValue:false},limit_community:{type:"Bool",defaultValue:false},limit_facebook:{type:"Bool",defaultValue:false},limit_fof:{type:"Bool",defaultValue:false},limit_tagexpand:{type:"Bool",defaultValue:false},is_new_privacy_selector:{type:"Bool",defaultValue:false},render_location:{type:"Int"},content_type:{type:"String"},post_param:{type:"String"},privacy_data:{type:"String"},source:{type:"String"},tags:{type:"IntVector"},tag_expansion_button:{type:"String"},__asyncDialog:{type:"Int"}});},null,{});
__d("XPrivacyRemindersDismissController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/privacy\/reminders\/dismiss\/",{type:{type:"String",required:true},log_plite:{type:"Bool",defaultValue:false}});},null,{});