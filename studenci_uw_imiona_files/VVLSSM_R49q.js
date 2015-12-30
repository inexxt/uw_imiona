/*!CK:3481958362!*//*1446436750,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["VS2y1"]); }

__d("FullViewType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={ENTIRE_UNIT:1};},null,{});
__d('EmuController',['AsyncRequest','DataStore','URI','emptyFunction','ge','goURI'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();function n(o,p){'use strict';var q=l(o);if(!q)return null;this.impression=p;this.containerId=o;i.set(q,'emuController',this);return this;}n.prototype.event=function(o,p,q,r){'use strict';var s={eid:this.impression,f:0,ui:this.containerId,en:o,a:1};if(p)s.ed=JSON.stringify(p);if(!r)r=k;var t=new h().setURI(this.EVENT_HANDLER_PATH).setData(s).setErrorHandler(r);if(q)t.setHandler(q);t.send();};n.prototype.redirect=function(){'use strict';var o={eid:this.impression,f:0,ui:this.containerId,en:this.CLICK,a:0,sig:Math.floor(Math.random()*65535)+65536},p=new j(this.EVENT_HANDLER_PATH);p.setQueryData(o);m(p);};n.fromContainer=function(o){'use strict';var p=l(o);if(!p)return null;return i.get(p,'emuController');};n.getEventClass=function(o){'use strict';return "emuEvent"+String(o).trim();};Object.assign(n.prototype,{EVENT_HANDLER_PATH:'/ajax/emu/end.php',CLICK:1,FAN:"fad_fan"});f.exports=n;},null);
__d('legacy:ad-units-base-js',['EmuController'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.EmuController=c('EmuController');},3);
__d('DesktopHscrollUnitEventConstants',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={HSCROLL_ITEM_INSERTED_EVENT:'DesktopHScrollUnit/itemInserted',HSCROLL_ITEM_SHOWN_EVENT:'DesktopHScrollUnit/itemShown',HSCROLL_ITEM_HIDE_EVENT:'DesktopHScrollUnit/HideIndividualItem',HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT:'DesktopHScrollUnit/scrollItemBeforeXout',HSCROLL_ITEM_UNHIDE_EVENT:'DesktopHScrollUnit/unhideIndividualItem',HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN:'logLastAdXout',HSCROLL_PAGER_ITEM_HIDE_EVENT:'onXoutIndividualItem'};},null);
__d('BlueBarMinWidthWithJewel',['BanzaiODS','BlueBar','DOMQuery','DOMDimensions','Event','Locale','Style','UITinyViewportAction','Vector','CSS','csx','cx','queryThenMutateDOM'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if(c.__markCompiled)c.__markCompiled();g.init=function(u){var v=i.getNavRoot(),w=j.scry(v,"._fmc")[0],x=j.scry(document,"a._23nx")[0],y=j.scry(document,"a._23ny")[0],z=false,aa;if(u&&x&&y){l.listen(x,'click',function(){q.removeClass(document.body,"_23nw");q.hide(x);h.bumpEntityKey('tinyview.bookmark','show.click');});l.listen(y,'click',function(){q.addClass(document.body,"_23nw");q.show(x);h.bumpEntityKey('tinyview.bookmark','hide.click');});}var ba=t.bind(null,function(){var ca=k.getElementDimensions(v).width,da=k.getViewportDimensions().width,ea=k.measureElementBox(v,'width',true);z=o.isTinyWidth();var fa;if(m.isRTL()){fa=-p.getElementPosition(v).x;}else fa=2*p.getElementPosition(v).x+ca-da;var ga=ca-fa-ea;if(fa>0&&ga>0){aa=ga+'px';}else aa='';},function(){n.set(w,'width',aa);if(u){q.conditionClass(document.body,"_23nw",z);if(x&&y){if(z)h.bumpEntityKey('tinyview.bookmark','icon.show');q.conditionShow(x,z);q.conditionShow(y,z);}}},'BlueBarMinWidthWithJewel');l.listen(window,'resize',ba);ba();};},null);
__d('BrowseClientEventLogger',['Banzai'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='browse_client_event_session',j='21.',k={logData:function(event,l,m,n){if(!event||!l)return;n=n||{};n.event=event;n.client_time=Math.floor(Date.now());n.session_id=l;n.vertical=m;this.allData=this.allData||{};this.processedSessions=this.processedSessions||[];if(this.processedSessions.indexOf(l)!==-1)return;if(!this.allData.sessionid)this.allData.sessionid=[];this.allData.sessionid.push(n);if(event==='window_unloaded'||event==='window_transition_to_LHC'||event==='window_transition_to_home_click'||event==='window_transition_to_fb_page'){this._postBatch(this.allData.sessionid);this.processedSessions.push(l);}},logClick:function(l){l.event='click';this.maybeLogVisiblityEvent(l,true);},maybeLogClientViewEvent:function(l){l.event='client_view';this.maybeLogVisiblityEvent(l);},maybeLogVisiblityEvent:function(l,m){if(!l||!l.xt||l.xt.indexOf(j)!==0)return;var n=JSON.parse(l.xt.substring(3));if(m)n.click_type=l.click_type;var event=l.event;if(event==='vpvd'){if(!l.ft)return;n.vpvd_time=l.ft.vpvd_time_delta;}this.logData(event,n.session_id,n.vertical,n);},_postBatch:function(l){h.post(i,l,{delay:0,retry:true});}};f.exports=k;},null);
__d('AdBlockerDetectorLogging',['Banzai','ErrorUtils','getElementPosition'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={doAdBlockCheck:function(l,m){i.applyWithGuard((function(){this._doAdBlockImgCheck(l,m,0);}).bind(this),this);},_doAdBlockImgCheck:function(l,m,n){if(!m||!l)return;var o=l.querySelectorAll('img');if(o.length>0){var p=false;for(var q=0;q<o.length;q++){var r=o[q],s=j(r);if(s.width>0||s.height>0){p=true;break;}}if(!p){var t=l,u=0;while(t!==null){if(u++>50)break;if(t.classList.contains('hidden_elem')||t.classList.contains('holdoutAdStory')||t.classList.contains('ego_ads_holdout'))return;t=t.parentElement;}h.post('xtrackable:blocked_ad_view',{token:m});}}else if(o.length===0&&m.startsWith('7.'))if(++n<5)setTimeout((function(){this._doAdBlockImgCheck(l,m,n);}).bind(this).bind(this),2500);}};f.exports=k;},null);
__d('Visibility',['TimeSlice','mixInEventEmitter'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k;if(typeof document.hidden!=='undefined'){j='hidden';k='visibilitychange';}else if(typeof document.mozHidden!=='undefined'){j='mozHidden';k='mozvisibilitychange';}else if(typeof document.msHidden!=='undefined'){j='msHidden';k='msvisibilitychange';}else if(typeof document.webkitHidden!=='undefined'){j='webkitHidden';k='webkitvisibilitychange';}function l(){return j?document[j]:false;}var m={HIDDEN:'hidden',VISIBLE:'visible',isHidden:l};i(m,{visible:true,hidden:true});if(document.addEventListener&&k)document.addEventListener(k,h.guard(function n(){m.emit(l()?m.HIDDEN:m.VISIBLE);},'visibility change'));f.exports=m;},null);
__d('FullViewLogger',['Banzai','ScriptPath','SubscriptionsHandler','URI'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();l.logFromViewableImpressionTracker=function(m){'use strict';var n=new l();n.subscribeToTrackerEvents(m);};l.prototype.subscribeToTrackerEvents=function(m){'use strict';this.subscriptionsHandler=new j();this.subscriptionsHandler.addSubscriptions(m.addListener('full_view',this.onFullView,this));};l.prototype.onFullView=function(m){'use strict';if(this.$FullViewLogger1())this.$FullViewLogger2(m);var n={token:m.token,fullViewType:m.fullViewType,scriptPath:i.getTopViewEndpoint()};h.post('xtrackable:full_view',n);if(this.$FullViewLogger1())this.$FullViewLogger3(n);};l.prototype.$FullViewLogger1=function(){'use strict';return 0;};l.prototype.$FullViewLogger2=function(m){'use strict';};l.prototype.$FullViewLogger3=function(m){'use strict';};function l(){'use strict';}f.exports=l;},null);
__d('ViewableImpressionHeatmapLogger',['Banzai'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();i.logFromViewableImpressionTracker=function(j,k){'use strict';var l=new i(k);l.subscribeToTrackerEvents(j);};function i(j){'use strict';this.loggingDurationMS=j;this.trackingEntries={};}i.prototype.subscribeToTrackerEvents=function(j){'use strict';this.visibleSubscription=j.addListener('visible',this.onElementVisible,this);this.hiddenSubscription=j.addListener('hidden',this.onElementHidden,this);};i.prototype.onElementVisible=function(j){'use strict';var k=this.getCurrentTimestamp(),l=this.trackingEntries[j.id];if(!l){l=this.createTrackingEntry(j);this.beginTracking(j.id,l);k=l.startedTrackingTS;}l.viewportProgressEvents.push({timestamp:k,percentInViewport:j.percentInViewport.toFixed(2)});};i.prototype.onElementHidden=function(j){'use strict';var k=this.getCurrentTimestamp(),l=this.trackingEntries[j.id];if(!l)return;l.viewportProgressEvents.push({timestamp:k,percentInViewport:0});};i.prototype.onTrackingCompleted=function(j){'use strict';var k=this.trackingEntries[j];k.viewportProgressEvents.push({timestamp:this.getCurrentTimestamp(),percentInViewport:k.tracker.getPercentInViewport().toFixed(2)});if(this.$ViewableImpressionHeatmapLogger1())this.$ViewableImpressionHeatmapLogger2(j,k);this.logToServer(k);delete this.trackingEntries[j];};i.prototype.logToServer=function(j){'use strict';var k=j;delete k.tracker;h.post('xtrackable:heatmap',k);};i.prototype.beginTracking=function(j,k){'use strict';this.trackingEntries[j]=k;setTimeout((function(){return this.onTrackingCompleted(j);}).bind(this),this.loggingDurationMS);};i.prototype.createTrackingEntry=function(j){'use strict';return {tracker:j.tracker,token:j.token,startedTrackingTS:this.getCurrentTimestamp(),viewportProgressEvents:[]};};i.prototype.getCurrentTimestamp=function(){'use strict';return (Date.now()/1000).toFixed(2);};i.prototype.$ViewableImpressionHeatmapLogger1=function(){'use strict';return 0;};i.prototype.$ViewableImpressionHeatmapLogger2=function(j,k){'use strict';var l='Completed tracking for id '+j+' token='+k.token+' startedTrackingTS='+k.startedTrackingTS+'\n';k.viewportProgressEvents.forEach(function(m){l+='% in view: '+m.percentInViewport+' timestamp='+m.timestamp+'\n';});};f.exports=i;},null);
__d('ViewableImpressionUtils',['CSS','cx'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={isHorizontallyOffscreen:function(k,l,m){var n=Math.max(l.x,0),o=Math.min(l.x+l.width,m.width);return o-n<l.width||h.hasClass(k,"desktop_hscroll_offscreen");}};f.exports=j;},null);
__d('ViewableImpressionTracker',['Banzai','BrowseClientEventLogger','DOM','FullViewType','getElementPosition','getViewportDimensions','mixInEventEmitter','Style','URI','ViewableImpressionUtils'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();function r(s,t,u){'use strict';this.id=s;this.element=t;this.config=u;this.iframe=null;this.viewableTimeout=null;this.clearSubsequentTimeout=null;this.waitForSubsequent=false;this.waitForLogged=false;this.isNonViewableLogged=false;this.isVisible=false;this.banzaiLogged=false;this.topLeftInViewport=false;this.bottomRightInViewport=false;}r.prototype.getID=function(){'use strict';return this.id;};r.prototype.getPercentInViewport=function(){'use strict';var s=m(),t=l(this.element);return this.$ViewableImpressionTracker1(s,t);};r.prototype.$ViewableImpressionTracker1=function(s,t){'use strict';if(t.x<s.width&&t.x+t.width>0&&t.y<s.height&&t.y+t.height>0&&o.get(this.element,'visibility')!=='hidden'&&o.get(this.element,'opacity')!=='0'){var u=Math.max(t.x,0),v=Math.min(t.x+t.width,s.width),w=Math.max(t.y,0),x=Math.min(t.y+t.height,s.height);if(t.height*t.width===0)return 100;if(this.config.require_horizontally_onscreen&&q.isHorizontallyOffscreen(this.element,t,s))return 0;var y=100*(v-u)*(x-w)/(t.height*t.width);return y;}return 0;};r.prototype.$ViewableImpressionTracker2=function(s,t){'use strict';if(o.get(this.element,'visibility')==='hidden'||o.get(this.element,'opacity')==='0')return false;var u=t.x,v=t.y,w=t.x+t.width,x=t.y+t.height;this.topLeftInViewport=this.topLeftInViewport||u>=0&&u<=s.width&&v>=0&&v<=s.height;this.bottomRightInViewport=this.bottomRightInViewport||w>=0&&w<=s.width&&x>=0&&x<=s.height;return this.topLeftInViewport&&this.bottomRightInViewport;};r.prototype.$ViewableImpressionTracker3=function(s,t){'use strict';if(this.hasEmittedFullViewEvent)return;if(this.$ViewableImpressionTracker2(s,t)){this.emit('full_view',{tracker:this,id:this.getID(),token:this.getToken(),fullViewType:k.ENTIRE_UNIT});this.hasEmittedFullViewEvent=true;}};r.prototype.onVisible=function(){'use strict';this.isVisible=true;var s=m(),t=l(this.element),u=this.$ViewableImpressionTracker1(s,t),v=u>this.config.pixel_in_percentage;this.emit('visible',{tracker:this,id:this.getID(),token:this.getToken(),percentInViewport:u});this.$ViewableImpressionTracker3(s,t);if(!v){this.$ViewableImpressionTracker4();return;}if(this.isLogged()){this.$ViewableImpressionTracker5();}else this.$ViewableImpressionTracker6();if(!this.waitForLogged&&!this.isLogged()){this.waitForLogged=true;this.viewableTimeout=setTimeout((function(){this.waitForLogged=false;var w=this.getPercentInViewport(),x=w>this.config.pixel_in_percentage;if(!x){this.$ViewableImpressionTracker7();return;}this.logImpression(1,{});this.$ViewableImpressionTracker5();}).bind(this),this.config.duration_in_ms);}};r.prototype.onHidden=function(){'use strict';this.emit('hidden',{id:this.getID(),token:this.getToken()});if(this.config.log_initial_nonviewable&&!this.isLogged()&&!this.isNonViewableLogged){this.logNonViewableImpression();}else if(!this.config.log_initial_nonviewable&&!this.isLogged()&&this.isVisible)this.logNonViewableImpression();this.isVisible=false;if(this.waitForLogged){this.waitForLogged=false;clearTimeout(this.viewableTimeout);}if(this.isLogged()&&!this.waitForSubsequent&&this.config.subsequent_gap_in_ms>=0){this.waitForSubsequent=true;this.clearSubsequentTimeout=setTimeout((function(){this.waitForSubsequent=false;this.reset();if(this.isVisible)this.onVisible();}).bind(this),this.config.subsequent_gap_in_ms);}this.$ViewableImpressionTracker7();};r.prototype.onRemoved=function(){'use strict';this.isVisible=false;};r.prototype.getToken=function(){'use strict';return this.element.getAttribute('data-xt');};r.prototype.logImpression=function(s,t){'use strict';if(this.isLogged())return;var u=this.getToken(),v=Math.floor(Date.now()/1000),w={xt:u,isv:s,cts:v};if(h.isEnabled('xtrackable_clientview_batch')&&this.config.should_batch){this.logWithBanzai(w);}else this.logWithIFrame(Object.assign(w,t));};r.prototype.logNonViewableImpression=function(){'use strict';if(this.config.nonviewableEnabled){var s=this.getToken();h.post('xtrackable:nonviewable',{xt:s});}this.isNonViewableLogged=true;};r.prototype.isLogged=function(){'use strict';return this.iframe!==null||this.banzaiLogged;};r.prototype.reset=function(){'use strict';if(this.iframe){j.remove(this.iframe);this.iframe=null;}if(this.banzaiLogged)this.banzaiLogged=false;this.isNonViewableLogged=false;this.isVisible=false;this.waitForLogged=false;this.waitForSubsequent=false;};r.prototype.logWithBanzai=function(s){'use strict';this.banzaiLogged=true;i.maybeLogClientViewEvent(s);h.post('xtrackable:clientview_batch',s);};r.prototype.logWithIFrame=function(s){'use strict';this.iframe=j.create('iframe',{src:new p(this.config.impressionURL).addQueryData(s),width:0,height:0,frameborder:0,scrolling:'no',className:'fbEmuTracking'});this.iframe.setAttribute('aria-hidden','true');j.appendContent(this.element,this.iframe);};r.prototype.$ViewableImpressionTracker8=function(){'use strict';return 0;};r.prototype.$ViewableImpressionTracker4=function(){'use strict';if(this.$ViewableImpressionTracker8()){o.set(this.element,'background-color','#abab9a');o.set(this.element,'outline','3px solid #abab9a');}};r.prototype.$ViewableImpressionTracker6=function(){'use strict';if(this.$ViewableImpressionTracker8()){o.set(this.element,'background-color','#e4f70a');o.set(this.element,'outline','3px solid #e4f70a');}};r.prototype.$ViewableImpressionTracker7=function(){'use strict';if(this.$ViewableImpressionTracker8()){o.set(this.element,'background-color',null);o.set(this.element,'outline',null);}};r.prototype.$ViewableImpressionTracker5=function(){'use strict';if(this.$ViewableImpressionTracker8()){o.set(this.element,'background-color','#047515');o.set(this.element,'outline','3px solid #047515');}};n(r,{visible:true,hidden:true,full_view:true});f.exports=r;},null);
__d('VisibilityTrackingHelper',['Arbiter','DesktopHscrollUnitEventConstants','getViewportDimensions','Event'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l={getEventListeners:function(m){return [k.listen(document,'DOMContentLoaded',m),k.listen(window,'scroll',m),k.listen(window,'resize',m),h.subscribe(i.HSCROLL_ITEM_SHOWN_EVENT,m)];},getViewportInfo:function(){return j();}};f.exports=l;},null);
__d('VisibilityTracking',['Banzai','BrowseClientEventLogger','ErrorUtils','ScriptPath','SubscriptionsHandler','Visibility','VisibilityTrackingHelper','collectDataAttributes','getElementPosition','pageID','throttle'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s='visibility_tracking',t='[data-vistracking]',u=500,v=50,w=50,x=50,y=50,z={VISIBLE:'visible',HIDDEN:'hidden'},aa={DEFAULT:'default',REMOVED:'removed'},ba={name:z.VISIBLE,cause:aa.DEFAULT},ca={name:z.HIDDEN,cause:aa.DEFAULT},da={name:z.HIDDEN,cause:aa.REMOVED},ea=0;function fa(ga){'use strict';ga=ga||{};if(!ga.bypass_banzai_check&&!h.isEnabled(s))return;this.visibleElementInfo={};this.getDataFromConfig(ga);m.addListener(m.VISIBLE,j.guard(this.fireEvent,'VisibilityTracking:visible',this));if(!this.skipVisibilityHiddenEvents)m.addListener(m.HIDDEN,j.guard(this.clearAllVisibleElements,'VisibilityTracking:hidden',this));k.subscribe(j.guard(this.updateVisibleElements,'VisibilityTracking:scriptPath',this));h.subscribe(h.SHUTDOWN,j.guard(this.onUnload,'VisibilityTracking:banzaiShutdown',this));this.fireEventCallback=r.acrossTransitions(j.guard(this.fireEvent,'VisibilityTracking:fireEventCallback',this),this.timeout,this);this.listeners=new l();n.getEventListeners(this.fireEventCallback).forEach(function(ha){this.listeners.addSubscriptions(ha);},this);if(this.extraInit)j.applyWithGuard(this.extraInit.bind(this));}fa.prototype.getDataFromConfig=function(ga){'use strict';this.config=ga;this.root=ga.root||document.documentElement;this.selector=ga.selector||t;this.timeout=typeof ga.timeout!=='undefined'?ga.timeout:u;this.minOffsetVisibleFromBottom=typeof ga.minOffsetVisibleFromBottom!=='undefined'?ga.minOffsetVisibleFromBottom:v;this.minOffsetVisibleFromTop=typeof ga.minOffsetVisibleFromTop!=='undefined'?ga.minOffsetVisibleFromTop:w;this.minOffsetVisibleFromLeft=typeof ga.minOffsetVisibleFromLeft!=='undefined'?ga.minOffsetVisibleFromLeft:x;this.minOffsetVisibleFromRight=typeof ga.minOffsetVisibleFromRight!=='undefined'?ga.minOffsetVisibleFromRight:y;this.handleAllHiddenEvents=typeof ga.handleAllHiddenEvents!=='undefined'?ga.handleAllHiddenEvents:false;this.handleAllVisibleEvents=typeof ga.handleAllVisibleEvents!=='undefined'?ga.handleAllVisibleEvents:false;this.skipVisibilityHiddenEvents=typeof ga.skipVisibilityHiddenEvents!=='undefined'?ga.skipVisibilityHiddenEvents:false;this.cacheTrackedElements=typeof ga.cacheTrackedElements!=='undefined'?ga.cacheTrackedElements:false;};fa.prototype.getAllTrackedElements=function(){'use strict';if(!this.allTrackedElements){this.allTrackedElements={};if(this.root.querySelectorAll){var ga=this.root.querySelectorAll(this.selector);for(var ha=0;ha<ga.length;ha++){var ia=this.getElementID(ga[ha]);this.allTrackedElements[ia]=ga[ha];}}}return this.allTrackedElements;};fa.prototype.refreshAllTrackedElements=function(){'use strict';delete this.allTrackedElements;return this.getAllTrackedElements();};fa.prototype.getDataToLog=function(ga){'use strict';var ha=Object.assign(o(ga,['gt']).gt,{client_time:Date.now()/1000,time_spent_id:q,script_path:k.getScriptPath()});return ha;};fa.prototype.getElementID=function(ga){'use strict';var ha=ga.$VisibilityTracking1;if(ha)return ha;ga.$VisibilityTracking1=++ea;return ea;};fa.prototype.sendDataToLog=function(ga){'use strict';i.maybeLogVisiblityEvent(ga);h.post(s,ga);};fa.prototype.fireEvent=function(){'use strict';var ga=this.cacheTrackedElements?this.allTrackedElements:this.refreshAllTrackedElements();for(var ha in ga){var ia=ga[ha],ja=n.getViewportInfo(),ka=this.isVisible(ia,ja);if(!ka&&(ha in this.visibleElementInfo||this.handleAllHiddenEvents)){this.handleEvent(ia,ca);}else if(ka&&(!(ha in this.visibleElementInfo)||this.handleAllVisibleEvents))this.handleEvent(ia,ba);}this.clearUntrackedVisibleElements();};fa.prototype.isVisible=function(ga,ha){'use strict';var ia=p(ga);return (ia.x||ia.y||ia.width||ia.height)&&ia.y+ia.height>=this.minOffsetVisibleFromTop&&ia.y<=ha.height-this.minOffsetVisibleFromBottom&&ia.x+ia.width>=this.minOffsetVisibleFromLeft&&ia.x<=ha.width-this.minOffsetVisibleFromRight;};fa.prototype.handleEvent=function(ga,event){'use strict';var ha=this.getElementID(ga),ia=this.getDataToLog(ga),ja;if(event.name===z.VISIBLE){var ka=Math.floor(Date.now()/1000);ja=q.concat(":",ka.toString(),":",this.getElementID(ga).toString());this.visibleElementInfo[ha]={visibility_id:ja,elem:ga};}else if(event.name===z.HIDDEN)if(ha in this.visibleElementInfo){ja=this.visibleElementInfo[ha].visibility_id;delete this.visibleElementInfo[ha];}this.sendDataToLog(Object.assign(ia,{event:event.name,visibility_id:ja}));};fa.prototype.clearUntrackedVisibleElements=function(){'use strict';var ga=this.getAllTrackedElements();for(var ha in this.visibleElementInfo)if(!(ha in ga)){var ia=this.visibleElementInfo[ha];if(ia.elem)this.handleEvent(ia.elem,da);}};fa.prototype.clearAllVisibleElements=function(){'use strict';var ga=this.getAllTrackedElements();for(var ha in ga)if(ha in this.visibleElementInfo)this.handleEvent(ga[ha],ca);this.clearUntrackedVisibleElements();};fa.prototype.updateVisibleElements=function(){'use strict';this.clearAllVisibleElements();this.fireEvent();};fa.prototype.refreshAndFireEvent=function(){'use strict';this.refreshAllTrackedElements();this.fireEventCallback();};fa.prototype.onUnload=function(){'use strict';this.clearAllVisibleElements();if(this.listeners){this.listeners.release();this.listeners=null;}if(this.extraCleanup)j.applyWithGuard(this.extraCleanup.bind(this));};fa.init=function(ga){'use strict';new fa(ga);};fa.EVENT=z;fa.CAUSE=aa;f.exports=fa;},null);
__d('ViewableImpressionEventHandler',['FullViewLogger','ViewableImpressionHeatmapLogger','ViewableImpressionTracker','VisibilityTracking'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m,n=1;l=babelHelpers.inherits(o,k);m=l&&l.prototype;o.prototype.extraInit=function(){'use strict';this.impressionTrackers={};};o.prototype.getDataFromConfig=function(p){'use strict';m.getDataFromConfig.call(this,p);this.doHeatmapLogging=p.doHeatmapLogging;this.heatmapLoggingDurationMS=p.heatmapLoggingDurationMS;p.impressionURL=p.impressionURL!==undefined?p.impressionURL:'/xti.php';p.nonviewableEnabled=p.nonviewableEnabled!==undefined?p.nonviewableEnabled:false;};o.prototype.getImpressionTracking=function(p){'use strict';var q=this.getElementID(p),r=babelHelpers._extends({},this.getConfigFromElement(p),this.config),s=this.impressionTrackers[q];if(!s){s=new j(q,p,r);this.impressionTrackers[q]=s;if(this.doHeatmapLogging)i.logFromViewableImpressionTracker(s,this.heatmapLoggingDurationMS);if(r.should_log_full_views)h.logFromViewableImpressionTracker(s);}return s;};o.prototype.handleEvent=function(p,event){'use strict';var q=this.getImpressionTracking(p);if(!q)return;if(event.name===k.EVENT.VISIBLE){q.onVisible();if(!this.visibleElementInfo[q.getID()])this.visibleElementInfo[q.getID()]={elem:p};}else if(event.name===k.EVENT.HIDDEN)if(event.cause===k.CAUSE.DEFAULT){q.onHidden();delete this.visibleElementInfo[q.getID()];}else if(event.cause===k.CAUSE.REMOVED){q.onRemoved();delete this.visibleElementInfo[q.getID()];delete this.impressionTrackers[q.getID()];}};o.prototype.getConfigFromElement=function(p){'use strict';return JSON.parse(p.getAttribute('data-xt-vimp'));};o.prototype.getElementID=function(p){'use strict';if(!p.getAttribute('id'))p.setAttribute('id','xt_uniq_'+n++);return p.getAttribute('id');};function o(){'use strict';l.apply(this,arguments);}f.exports=o;},null);
__d("GamesGogglesSwitch",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=false,i={enable:function(){h=true;},isEnabled:function(){return h;}};f.exports=i;},null);
__d('GamesImpressionTracker',['VisibilityTracking','throttle','Event','Banzai','Arbiter','cx','GamesGogglesSwitch'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o,p,q='data-gamesegoimp',r='data-gamesrankedimp',s=1000;function t(x){if(n.isEnabled())x.className=x.className+" "+"_1z5y";}o=babelHelpers.inherits(u,h);p=o&&o.prototype;u.prototype.handleEvent=function(x,event){'use strict';if(event.name===h.EVENT.VISIBLE){var y=x.getAttribute(q),z=x.getAttribute(r);x.removeAttribute(q);x.removeAttribute(r);if(y||z){t(x);y&&k.post('games_ego_imp',{data:y});z&&k.post('games_ranked_imp',{data:z});}}};function u(){'use strict';o.apply(this,arguments);}var v=new u({selector:'[data-gamesrankedimp]',handleAllVisibleEvents:true,skipVisibilityHiddenEvents:true,cacheTrackedElements:true}),w=i.acrossTransitions(function(){return v.fireEventCallback();},s,null);v.listeners.addSubscriptions(j.listen(document,'mousemove',w),j.listen(document,'click',w),l.subscribe('games_unit_loaded',function(){return v.refreshAllTrackedElements();}));},null);
__d('legacy:async-signal',['AsyncSignal'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.AsyncSignal=c('AsyncSignal');},3);
__d('ViewableImpressionTracking',['Arbiter','DesktopHscrollUnitEventConstants','ErrorUtils','LitestandMessages','Run','ViewableImpressionEventHandler','ViewableImpressionConfig'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o={init:function(){if(m.instance===undefined){m.instance=new m(n);m.instance.listeners.addSubscriptions(h.subscribe([k.STORIES_INSERTED,'AdsRefreshHandler/AdsLoaded','MPPInsights/ChartView','PhotoSnowliftAds/displayUnits','WebMessengerAdsControl/adjustAds',i.HSCROLL_ITEM_INSERTED_EVENT,'WebVideoChannelAds/AdsLoaded'],j.guard(function(){m.instance.refreshAndFireEvent();},'ViewableImpressionTracking')));}l.onLoad(function(){m.instance.refreshAndFireEvent();});}};f.exports=o;},null);
__d('MercuryLeftNav',['Arbiter','MessagingTag','NavigationMessage','MercuryThreadInformer','MercuryUnreadState'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=c('MercuryThreadInformer').get(),l=c('MercuryUnreadState').get(),m=false;function n(){var p=l.getUnreadCount(i.INBOX);h.inform(j.NAVIGATION_COUNT_UPDATE,{key:'inbox',hide:true});h.inform(j.NAVIGATION_COUNT_UPDATE,{key:'inbox',count:p});}var o={bootstrap:function(){if(m)return;k.subscribe('unread-updated',n);m=true;}};f.exports=o;},null);
__d('EgoUnitSlideInsert',['Animation','CSS','DataStore','DOM','Ease','Event','Parent','TidyArbiterMixin','cx','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r='sliding',s="EgoSlider/End",t=babelHelpers._extends({isSliding:function(u){return j.get(u,r);},runAfterSlide:function(u,v){var w=q(t.subscribe(s,function(x,y){if(y===u){w&&w.unsubscribe();v();}}));},registerSlide:function(u,v){m.listen(u,'click',function(w){var x=n.byClass(w.getTarget(),"_5cl_");if(!x)return;var y=n.byClass(u,'ego_unit'),z=0,aa=n.byClass(y,'ego_unit_container'),ba=k.scry(aa,'.ego_unit')[0];if(ba===y)if(y.nextSibling){y.nextSibling.style.paddingTop='0px';y.nextSibling.style.borderTop='0px';}i.addClass(y,"_5cl-");j.set(y,r,true);new h(y).to('height',0).to('padding-top',z).to('padding-bottom',0).to('margin',0).from('opacity',1).to('opacity',0).ease(l.circOut).duration(300).checkpoint(1,function(){k.appendContent(aa,y);k.prependContent(y,v);j.remove(y,r);}).to('height',12).to('opacity',1).to('margin-bottom',10).duration(0).checkpoint(2,function(){t.inform(s,y);}).go();});}},o);f.exports=t;},null);
__d('NetEgo',['Animation','Arbiter','csx','CSS','DOM','EgoUnitSlideInsert','PageLikeConstants','Parent','URI','ge'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r={setup:function(s){i.subscribe([n.LIKED,'FriendRequest/sending'],function(t,u){if(s==u.profile_id&&u.origin=='hovercard'||s==u.uid){var v=q(document.body,'.ego_unit_container');if(v){var w=l.scry(v,'.ego_unit'),x=w.length;for(var y=0;y<x;y++){var z=w[y].getAttribute('data-ego-fbid');if(z==s){var aa=l.scry(w[y],'.ego_action a')[0];if(aa)aa.click();break;}}}}});},updateXids:function(s,t){if(s.length==0&&t.length==0)return;var u=function(ea){return function(fa){var ga=fa.getAttribute(ea);if(!ga)return false;var ha=new p(ga).getQueryData();return !!ha.xids;};},v=l.scry(document.body,'.ego_section a');v=v.filter(u('ajaxify'));if(v.length==0)return;var w=new p(v[0].getAttribute('ajaxify')),x=w.getQueryData();if(!x.xids)return;var y=null;try{y=JSON.parse(x.xids);}catch(z){return;}for(var aa=0;aa<t.length;++aa)y[t[aa]]=1;var ba=JSON.stringify(y),ca=function(ea,fa){w=new p(ea.getAttribute(fa));x=w.getQueryData();x.xids=ba;w.setQueryData(x);ea.setAttribute(fa,w.toString());};for(aa=0;aa<v.length;++aa)ca(v[aa],'ajaxify');var da=l.scry(document.body,'.ego_unit form');da=da.filter(u('action'));for(aa=0;aa<da.length;++aa)ca(da[aa],'action');},replaceUnit:function(s,t,u,v){r.replaceUnitCheckParent(s,t,u,v,'');},addUnitsWithSeeMore:function(s,t,u){if(!u)k.hide(s);var v=s.previousSibling;v&&t&&l.appendContent(v,t);},replaceUnitCheckParent:function(s,t,u,v,w){var x=o.byClass(s,'ego_unit_container');if(x&&m.isSliding(s)){var y=l.appendContent(x,t);y.forEach(k.hide);m.runAfterSlide(s,r._replaceUnitElement.bind(null,s,y,w));}else r._replaceUnit(s,t,u,v,w);},_replaceUnit:function(s,t,u,v,w){var x=l.insertAfter(s,t);x.forEach(k.hide);if(v!==undefined&&v!==null){setTimeout(function(){r._replaceUnitFadeout(s,x,u,w);},v);}else r._replaceUnitFadeout(s,x,u,w);},_replaceUnitFadeout:function(s,t,u,v){if(u){new h(s).from('opacity',1).to('opacity',0).duration(u).checkpoint(1,function(){r._replaceUnitElement(s,t,v);}).go();}else r._replaceUnitElement(s,t,v);},_replaceUnitElement:function(s,t,u){var v=k.hasClass(s,'ego_unit')?s.parentNode:null;if(v&&v.tagName==='LI')v=l.scry(s.parentNode,'^ul')[0];l.remove(s);if(t.length)t.forEach(k.show);i.inform('netego_replacedUnit',{serializedData:u,numUnitsRemained:v.childNodes.length});r.clearHeader();},clearHeader:function(){var s=l.scry(document.body,'.ego_column'),t=[];for(var u=0;u<s.length;++u)t=t.concat(l.scry(s[u],'.uiHeader'));for(u=0;u<t.length;++u){var v=t[u].nextSibling,w=l.find(v,"._2xq");if(!w)w=v;if(!w||w.childNodes.length===0){l.remove(t[u]);}else if(w.childNodes.length===1){var x=w.childNodes[0];if(k.hasClass(x,'ego_appended_units')&&x.childNodes.length===0)l.remove(t[u]);}}}};f.exports=r;},null);