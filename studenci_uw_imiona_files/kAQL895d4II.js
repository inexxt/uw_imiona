/*!CK:858243250!*//*1445583662,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["WSQe9"]); }

__d('ChatThreadIsMessageBlockedSheet',['ArbiterMixin','DOM','Event','MercuryIDs','MercuryParticipants','ChatTabTemplates','fbt','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p,q;p=babelHelpers.inherits(r,o(h));q=p&&p.prototype;function r(s,t,u){'use strict';q.constructor.call(this);this.$ChatThreadIsMessageBlockedSheet1=s;this.$ChatThreadIsMessageBlockedSheet2=t;this.$ChatThreadIsMessageBlockedSheet3=u;}r.prototype.render=function(){'use strict';var s=m[':fb:mercury:messages-blocked-sheet'].build(),t=k.getUserIDFromThreadID(this.$ChatThreadIsMessageBlockedSheet1),u='fbid:'+t,v=null;l.get(u,function(w){v=n._("Messages from {name} are blocked.",[n.param('name',w.short_name)]);});i.setContent(s.getNode('text'),v+' ');i.setContent(this.$ChatThreadIsMessageBlockedSheet2,s.getRoot());j.listen(s.getNode('unblockButton'),'click',(function(){this.inform('clicked',this.$ChatThreadIsMessageBlockedSheet1);}).bind(this));};r.prototype.isPermanent=function(){'use strict';return true;};r.prototype.getType=function(){'use strict';return 'message-blocked';};r.prototype.open=function(){'use strict';this.$ChatThreadIsMessageBlockedSheet3.open(this);};r.prototype.close=function(){'use strict';this.$ChatThreadIsMessageBlockedSheet3.close(this);};f.exports=r;},null);