/*!CK:1029448913!*//*1446443870,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["NRTGP"]); }

__d("XInviteSendController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/invite\/send\/",{invitee_name:{type:"String",required:true},contact_id:{type:"Int",required:true},credential:{type:"String",required:true},app_id:{type:"Int",required:true},locale:{type:"String",required:true},personal_msg:{type:"String"},invite_method:{type:"Int",defaultValue:-1},invite_source:{type:"Int",defaultValue:-1},individual_invite:{type:"Bool",defaultValue:false},announcement_invite:{type:"Bool",defaultValue:false}});},null,{});
__d('InviteButton',['Event','DOM','URI','XInviteSendController','AsyncRequest'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();function m(n,o,p,q,r,s){'use strict';this.inviteButton=n;this.inviteParams=s;this.dialogBox=p;this.textArea=o;this.confirmMsg=q;this.undoButton=r;this.handlerURIs=s.handler_uris;this.shouldPopDialog=s.should_pop_dialog;this.timeoutLength=s.undo_duration;h.listen(this.inviteButton,'click',this.inviteClick.bind(this));h.listen(this.undoButton,'click',this.undoInvite.bind(this));this.dialogBox.subscribe('confirm',this.dialogConfirm.bind(this));this.dialogBox.subscribe('cancel',this.dialogCancel.bind(this));}m.prototype.inviteClick=function(){'use strict';if(this.shouldPopDialog){this.dialogBox.show();new l().setURI(this.handlerURIs.popped_uri).send();}else{i.replace(this.inviteButton,this.confirmMsg);this.timeoutHandle=setTimeout(this.$InviteButton1.bind(this),this.timeoutLength);}};m.prototype.dialogConfirm=function(){'use strict';this.personalMsg=this.textArea.value;i.replace(this.inviteButton,this.confirmMsg);this.timeoutHandle=setTimeout(this.$InviteButton1.bind(this),this.timeoutLength);new l().setURI(this.handlerURIs.send_uri).send();this.dialogBox.hide();};m.prototype.dialogCancel=function(){'use strict';new l().setURI(this.handlerURIs.cancel_uri).send();};m.prototype.undoInvite=function(){'use strict';i.replace(this.undoButton.parentNode,this.inviteButton);clearTimeout(this.timeoutHandle);new l().setURI(this.handlerURIs.undo_uri).send();};m.prototype.$InviteButton1=function(){'use strict';var n=k.getURIBuilder().setString('invitee_name',this.inviteParams.name).setString('credential',this.inviteParams.credential).setString('personal_msg',this.personalMsg).setInt('app_id',this.inviteParams.appID).setBool('individual_invite',this.inviteParams.individual_invite).setInt('invite_source',this.inviteParams.invite_source).setInt('invite_method',this.inviteParams.invite_method).setString('locale',this.inviteParams.locale).setInt('contact_id',this.inviteParams.credentialFBID).getURI();new l().setURI(n).send();new l().setURI(this.handlerURIs.confirm_uri).setRelativeTo(this.confirmMsg).send();};f.exports=m;},null);
__d("XEgoPYMIActionsLoggingController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pymi\/logging\/",{action:{type:"String",required:true},contact_id:{type:"Int"},invitee_name:{type:"String"}});},null,{});
__d('PYMIActionsLogging',['Event','XEgoPYMIActionsLoggingController','AsyncRequest'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={logAction:function(l,m,n,o){h.listen(l,'click',function(){var p=i.getURIBuilder().setString('action',m).setInt('contact_id',n).setString('invitee_name',o).getURI();new j().setURI(p).send();});}};f.exports=k;},null);
__d('CovercardArrow',['ContextualDialogArrow','CSS','DOMQuery','Locale','Style','csx','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=-45,p=45,q=9;if(k.isRTL()){o=-o;p=-p;}function r(t){'use strict';this._layer=t;}r.prototype.enable=function(){'use strict';this._layer.enableBehavior(h);var t=this._layer.getContentRoot();this._arrowWrapper=j.scry(t,"._7lh")[0];if(!this._arrowWrapper)return;this._arrowShadow=j.scry(this._arrowWrapper,"._7li")[0];if(!this._arrowShadow)return;var u=null;if(s(this._arrowWrapper))u=this._renderArrowWithRotate.bind(this);if(!u)return;if(k.isRTL())i.addClass(t,"_7lf");this._subscription=this._layer.subscribe('reposition',function(v,w){var x=w.getPosition()=='below';i.conditionClass(t,"_53ih",x);x&&u(w);});};r.prototype.disable=function(){'use strict';this._subscription&&this._subscription.unsubscribe();this._subscription=null;};r.prototype._calculateArrowOffset=function(t){'use strict';var u=h.getOffsetPercent(t),v=h.getOffset(t,u,this._layer),w=l.get(this._layer.getContentRoot(),'width');return parseInt(w,10)*(u/100)+v;};r.prototype._renderArrowWithRotate=function(t){'use strict';var u=j.scry(this._arrowWrapper,"._7lj")[0];if(!u){var v=this._layer.getContentRoot();i.addClass(v,"_4nfk");}var w=j.scry(this._arrowWrapper,"._1ubp")[0];if(!w)return;var x=s(this._arrowWrapper);if(!x)return;var y=this._calculateArrowOffset(t),z=q+y,aa=-q;if(k.isRTL()){z=-z;aa=-aa;}this._arrowWrapper.style[x]='translate('+z+'px, -'+q+'px) '+'rotate('+p+'deg)';if(u)u.style[x]='rotate('+o+'deg) '+'translate('+ -z+'px, '+(q-12)+'px)';w.style[x]='rotate('+o+'deg) '+'translate('+aa+'px, 0)';};function s(t){if(!t)t=document.body;var u=['transform','WebkitTransform','msTransform','MozTransform','OTransform'],v;while(v=u.shift())if(t.style[v]!==undefined)return v;return null;}f.exports=r;},null);