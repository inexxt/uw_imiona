/*!CK:413499931!*//*1446436751,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ZfEM5"]); }

__d("MessengerView",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={DETAIL:{COMPOSE:"detail\/compose",THREAD:"detail\/thread"},MASTER:{GROUPS:"master\/groups",PEOPLE:"master\/people",RECENT:"master\/recent"}};},null,{});
__d('NotificationBeeperModuleLoader',['BootloadedComponent.react','JSResource','React','ReactDOM'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l={load:function(m,n){k.render(j.createElement(h,babelHelpers._extends({bootloadPlaceholder:j.createElement('span',null),bootloadLoader:i('NotificationBeeper.react')},m)),n);}};f.exports=l;},null);
__d('NotificationBeeperItemCloseButton.react',['React','XUIAbstractGlyphButton.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=h.createClass({displayName:'NotificationBeeperItemCloseButton',render:function(){return (h.createElement(i,babelHelpers._extends({},this.props,{className:"_3soc",title:k._("Close")})));}});f.exports=l;},null);
__d('SyncRequestTitle.react',['React','fbt','cx'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.PropTypes,l=h.createClass({displayName:'SyncRequestTitle',propTypes:{appName:k.string.isRequired,isSender:k.bool.isRequired,receiverName:k.string.isRequired,senderName:k.string.isRequired},render:function(){if(this.props.isSender){return (h.createElement('div',null,i._("Waiting for {receiver} to accept your invite to play {app_name}.",[i.param('receiver',h.createElement('span',{className:"_dg4"},this.props.receiverName)),i.param('app_name',h.createElement('span',{className:"_dg5"},this.props.appName))])));}else return (h.createElement('div',null,i._("{sender} wants to play {app_name} with you, right now.",[i.param('sender',h.createElement('span',{className:"_dg4"},this.props.senderName)),i.param('app_name',h.createElement('span',{className:"_dg5"},this.props.appName))])));}});f.exports=l;},null);
__d('SyncRequestAcceptedMessage.react',['React','fbt','cx'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=h.PropTypes,l=h.createClass({displayName:'SyncRequestAcceptedMessage',propTypes:{appName:k.string.isRequired,isSender:k.bool.isRequired,receiverName:k.string.isRequired,senderName:k.string.isRequired},render:function(){if(this.props.isSender){return (h.createElement('div',null,i._("{receiver} accepted your invite to play {app name}.",[i.param('receiver',h.createElement('span',{className:"_dg4"},this.props.receiverName)),i.param('app name',h.createElement('span',{className:"_dg5"},this.props.appName))])));}else return (h.createElement('div',null,i._("You accepted an invite from {sender} to play {app name}.",[i.param('sender',h.createElement('span',{className:"_dg4"},this.props.senderName)),i.param('app name',h.createElement('span',{className:"_dg5"},this.props.appName))])));}});f.exports=l;},null);
__d('SyncRequestRejectedMessage.react',['AsyncRequest','Link.react','React','URI','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=j.PropTypes,o=j.createClass({displayName:'SyncRequestRejectedMessage',propTypes:{requestId:n.string.isRequired,app:n.object.isRequired,isSender:n.bool.isRequired,receiver:n.object.isRequired,sender:n.object.isRequired},render:function(){if(this.props.isSender){return (j.createElement('div',null,m._("{receiver} declined your invite to play {app_name}.",[m.param('receiver',j.createElement('span',{className:"_dg4"},this.props.receiver.name)),m.param('app_name',j.createElement('span',{className:"_dg5"},this.props.app.name))])));}else return (j.createElement('div',null,m._("You declined an invite from {sender} to play {app_name}.",[m.param('sender',j.createElement('span',{className:"_dg4"},this.props.sender.name)),m.param('app_name',j.createElement('span',{className:"_dg5"},this.props.app.name))]),j.createElement('div',{className:"_13n7"},j.createElement('div',null,j.createElement(i,{onClick:this._submitBlockApp},m._("Block {app}",[m.param('app',this.props.app.name)]))),j.createElement('div',null,j.createElement(i,{onClick:this._submitBlockUser},m._("Block requests from {sender}",[m.param('sender',this.props.sender.name)]))))));},_submitBlockApp:function(){var p=new k('/games/block_app/'),q=new h().setURI(p);q.setData({app_id:this.props.app.id,source:'sync_request'});q.send();},_submitBlockUser:function(){var p=new k('/games/block_user/'),q=new h().setURI(p);q.setData({app_id:this.props.app.id,blockee_uid:this.props.sender.id});q.send();}});f.exports=o;},null);
__d('SyncRequestExpiredMessage.react',['React','fbt','cx'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.PropTypes,l=h.createClass({displayName:'SyncRequestExpiredMessage',propTypes:{appName:k.string.isRequired,isSender:k.bool.isRequired,receiverName:k.string.isRequired,senderName:k.string.isRequired},render:function(){if(this.props.isSender){return (h.createElement('div',null,i._("{receiver} missed your invite to play {app name}.",[i.param('receiver',h.createElement('span',{className:"_dg4"},this.props.receiverName)),i.param('app name',h.createElement('span',{className:"_dg5"},this.props.appName))])));}else return (h.createElement('div',null,i._("You missed an invite from {sender} to play {app name}.",[i.param('sender',h.createElement('span',{className:"_dg4"},this.props.senderName)),i.param('app name',h.createElement('span',{className:"_dg5"},this.props.appName))])));}});f.exports=l;},null);
__d('SyncRequestCanceledMessage.react',['React','cx','fbt'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=h.PropTypes,l=h.createClass({displayName:'SyncRequestCanceledMessage',propTypes:{appName:k.string.isRequired,isSender:k.bool.isRequired,receiverName:k.string.isRequired,senderName:k.string.isRequired},render:function(){if(this.props.isSender){return (h.createElement('div',null,j._("You canceled an invite to {receiver} to play {app name}.",[j.param('receiver',h.createElement('span',{className:"_dg4"},this.props.receiverName)),j.param('app name',h.createElement('span',{className:"_dg5"},this.props.appName))])));}else return (h.createElement('div',null,j._("{sender} canceled an invitation to play {app name}.",[j.param('sender',h.createElement('span',{className:"_dg4"},this.props.senderName)),j.param('app name',h.createElement('span',{className:"_dg5"},this.props.appName))])));}});f.exports=l;},null);
__d('SyncRequestTimer.react',['React','fbt'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=h.PropTypes;function k(m){if(m){m=Math.ceil(m);var n=m%60;if(n<10)n='0'+n;var o=Math.floor(m/60);return o+':'+n;}else return "0:00";}var l=h.createClass({displayName:'SyncRequestTimer',propTypes:{timeRemaining:j.number.isRequired,isSender:j.bool.isRequired,receiverName:j.string.isRequired},render:function(){if(this.props.isSender){return (h.createElement('div',null,i._("({time_remaining} remaining)",[i.param('time_remaining',k(this.props.timeRemaining))])));}else return (h.createElement('div',null,i._("You have {time_remaining} to accept.",[i.param('time_remaining',k(this.props.timeRemaining))])));}});f.exports=l;},null);
__d("XSyncRequestSubmitController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/platform\/games\/sync_requests\/submit\/",{request_id:{type:"Int",required:true},sender:{type:"Int",required:true},action:{type:"Int",required:true}});},null,{});
__d('SyncRequest.react',['Arbiter','AsyncRequest','ChannelConstants','React','SyncRequestStatusEnum','SyncRequestTitle.react','SyncRequestAcceptedMessage.react','SyncRequestRejectedMessage.react','SyncRequestExpiredMessage.react','SyncRequestCanceledMessage.react','SyncRequestTimer.react','XUIButton.react','XSyncRequestSubmitController','cx','fbt','getObjectValues'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){if(c.__markCompiled)c.__markCompiled();var x=k.PropTypes,y=k.createClass({displayName:'SyncRequest',propTypes:{app:x.object.isRequired,creationTime:x.number.isRequired,requestId:x.string.isRequired,receiver:x.object.isRequired,sender:x.object.isRequired,status:x.oneOf(w(l)).isRequired,timeout:x.number.isRequired,timeRemaining:x.number.isRequired,viewerId:x.number.isRequired,onStatusUpdate:x.func},componentWillMount:function(){if(this.props.status===l.PENDING){var z=h.subscribe(j.getArbiterType('sync_request_updated'),(function(ca,da){da=da.obj;if(da.id.toString()!==this.props.requestId)return;this.setState({status:da.status});}).bind(this));this.setState({statusEvent:z});}var aa=null;if(this.props.status===l.PENDING){var ba=function(){this.setState({time_remaining:this.state.time_remaining-1});if(this.state.time_remaining<=0){clearInterval(this.state.counter);var ca={counter:null,time_remaining:0};if(this.state.status===l.PENDING)ca.status=l.EXPIRED;this.setState(ca);}};aa=setInterval(ba.bind(this),1000);}this.setState({time_remaining:this.props.timeRemaining,counter:aa});},componentWillUnmount:function(){if(this.state.counter)clearInterval(this.state.counter);h.unsubscribe(this.state.statusEvent);},getInitialState:function(){return {buttonsDisabled:false,time:Date.now(),status:this.props.status,viewerIsSender:this.props.viewerId===this.props.sender.id};},componentDidUpdate:function(z,aa){if(this.props.status!=l.PENDING)this.state.status=this.props.status;if(this.props.onStatusUpdate)this.props.onStatusUpdate(this.state.status,aa.status);},render:function(){var z;switch(this.state.status){case l.PENDING:var aa;if(!this.state.viewerIsSender){aa=[k.createElement(s,{use:'confirm',onClick:this._handleAccept,disabled:this.state.buttonsDisabled,label:v._("Accept")}),k.createElement(s,{use:'default',onClick:this._handleReject,disabled:this.state.buttonsDisabled,label:v._("Decline")})];}else aa=k.createElement(s,{use:'default',onClick:this._handleCancel,disabled:this.state.buttonsDisabled,label:v._("Cancel")});z=k.createElement('div',null,k.createElement('div',{className:"_372m"},k.createElement(m,{appName:this.props.app.name,isSender:this.state.viewerIsSender,receiverName:this.props.receiver.name,senderName:this.props.sender.name})),k.createElement('div',{className:"_372n"},k.createElement(r,{isSender:this.state.viewerIsSender,timeRemaining:this.state.time_remaining,receiverName:this.props.receiver.name})),k.createElement('div',{className:"_372o"},aa));break;case l.ACCEPTED:z=k.createElement('div',{className:"_372p mvs"},k.createElement(n,{appName:this.props.app.name,isSender:this.state.viewerIsSender,receiverName:this.props.receiver.name,senderName:this.props.sender.name}));break;case l.REJECTED:z=k.createElement('div',{className:"_372p mvs"},k.createElement(o,{requestId:this.props.requestId,app:this.props.app,isSender:this.state.viewerIsSender,receiver:this.props.receiver,sender:this.props.sender}));break;case l.EXPIRED:z=k.createElement('div',{className:"_372p mvs"},k.createElement(p,{appName:this.props.app.name,isSender:this.state.viewerIsSender,receiverName:this.props.receiver.name,senderName:this.props.sender.name}));break;case l.CANCELED:z=k.createElement('div',{className:"_372p mvs"},k.createElement(q,{appName:this.props.app.name,isSender:this.state.viewerIsSender,receiverName:this.props.receiver.name,senderName:this.props.sender.name}));break;default:throw new Error('The request status `%s` is unknown.',this.state.status);}return (k.createElement('div',{className:"_372q"},z));},_handleAccept:function(){this._handleStatusUpdate(l.ACCEPTED);var z=window.open(this.props.app.uri);if(z)z.focus();},_handleReject:function(){this._handleStatusUpdate(l.REJECTED);},_handleCancel:function(){this._handleStatusUpdate(l.CANCELED);},_handleStatusUpdate:function(z){this.setState({status:z,buttonsDisabled:true});var aa=t.getURIBuilder().setInt('request_id',this.props.requestId).setInt('sender',this.props.sender.id).setInt('action',z).getURI();new i().setURI(aa).setHandler((function(ba){this.setState({status:z});}).bind(this)).setErrorHandler((function(ba){this.setState({buttonsDisabled:false});}).bind(this)).send();}});f.exports=y;},null);
__d('MessengerURIConstants',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={COMPOSE_SUBPATH:'/new',GROUPS_PATH:'/groups',PEOPLE_PATH:'/people',THREAD_PREFIX:'/t/',GROUP_PREFIX:'group-',RESERVED_WORDS:['groups','people','new','messenger','t']};f.exports=h;},null);
__d('MessengerStateProcessor',['MercuryAPIArgsSource','MercuryIDs','MercuryParticipantTypes','MercuryParticipants','MercuryThreadIDMap','MercuryThreads','MercuryVanityIDMap','MessengerURIConstants'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){'use strict';if(c.__markCompiled)c.__markCompiled();var p={preprocess:function(r){var s=r.activeThreadID;if(s){var t=i.getUserIDFromThreadID(s),u=t&&k.getNow(i.getParticipantIDFromUserID(t));if(u&&u.type!==j.EVENT){r.threadKey=u.vanity||t;}else if(t&&!u){var v=i.getParticipantIDFromUserID(t);r.threadKey=n.hasID(v)?n.getVanity(v):t;}else{var w=l.get(),x=w.getServerIDFromClientIDNow(s);r.threadKey=x||s;}}delete r.activeThreadID;return r;},postprocess:function(r){var s=l.get(),t=m.get(),u=q(r.threadKey),v;v=i.isValid(u)?u:s.getClientIDFromServerIDNow(u);if(!v){var w=k.getIDFromVanityOrFBID(u),x=w&&t.getCanonicalThreadToParticipant(w,null,h.MESSENGER);if(x)v=x.thread_id;}if(v){r.activeThreadID=v;r.serverThreadID=s.getServerIDFromClientIDNow(v);}delete r.threadKey;return r;}};function q(r){if(!r)return null;return r.startsWith(o.GROUP_PREFIX)?r.substr(o.GROUP_PREFIX.length):r;}f.exports=p;},null);
__d('MessengerURISerializer',['MessengerStateProcessor','MessengerURIConstants','MessengerView','URI','WWWBase'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m='/?$',n={serialize:function(w){var x=new k(l.uri);w=h.preprocess(w);switch(w.masterView){case j.MASTER.GROUPS:x.setPath(i.GROUPS_PATH);break;case j.MASTER.PEOPLE:x.setPath(i.PEOPLE_PATH);break;}if(w.detailView===j.DETAIL.COMPOSE){x.setPath(x.getPath()+i.COMPOSE_SUBPATH);}else if(w.threadKey)x.setPath(x.getPath()+i.THREAD_PREFIX+u(w.threadKey));return x;},deserialize:function(w){var x={},y=w.getPath();if(y.match('^'+i.GROUPS_PATH)){x.masterView=j.MASTER.GROUPS;}else if(y.match('^'+i.PEOPLE_PATH)){x.masterView=j.MASTER.PEOPLE;}else x.masterView=j.MASTER.RECENT;if(y.match(i.COMPOSE_SUBPATH+m)){x.detailView=j.DETAIL.COMPOSE;}else{var z=o(y);if(z&&!s(z)){x.threadKey=v(z);x.detailView=j.DETAIL.THREAD;}}return h.postprocess(x);}};function o(w){var x=w.match(i.THREAD_PREFIX+'([^/]+)'+m);return x&&x[1];}var p=i.RESERVED_WORDS.join('|'),q=new RegExp('^('+p+')$'),r=new RegExp('^\\.('+p+')$');function s(w){return !!w.match(q);}function t(w){return !!w.match(r);}function u(w){w=s(w)?'.'+w:w;return k.encodeComponent(w);}function v(w){w=k.decodeComponent(w);return t(w)?w.substr(1):w;}f.exports=n;},null);
__d('MessengerActions',['MessengerDispatcher','MessengerURISerializer','MessengerView','URI','goURI','keyMirror'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=m({CHANGE_FOLDER:null,HIDE_DIALOG:null,REPLACE_STATE:null,SHOW_DIALOG:null}),o={Types:n,changeDetailView:function(q){p(function(r){if(r.detailView!==q)return {detailView:q};});},changeMasterView:function(q){p(function(r){if(r.masterView!==q)return {masterView:q};});},selectThread:function(q){p(function(r){if(r.activeThreadID!==q)return {activeThreadID:q,detailView:j.DETAIL.THREAD};});},changeState:function(q){h.dispatch({type:n.REPLACE_STATE,nextState:q});},showDialog:function(q,r){h.dispatch({type:o.Types.SHOW_DIALOG,dialogClass:q,dialogProps:r});},hideDialog:function(q){h.dispatch({type:o.Types.HIDE_DIALOG,dialogClass:q});},changeFolder:function(q){h.dispatch({type:o.Types.CHANGE_FOLDER,folder:q});}};function p(q){var r=i.deserialize(new k(window.location.href)),s=q(r);if(s)l(i.serialize(Object.assign(r,s)));}f.exports=o;},null);
__d('P2PActions',['ChatOpenTab','MessengerActions','P2PActionConstants','P2PDispatcher'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l={updateCreditCards:function(m){k.dispatch({type:j.CREDIT_CARDS_UPDATED,data:m});},ignoreCreditCardChannelEvents:function(){k.dispatch({type:j.CHANNEL_EVENTS_IGNORED});},allowCreditCardChannelEvents:function(){k.dispatch({type:j.CHANNEL_EVENTS_ALLOWED});},creditCardSaving:function(){k.dispatch({type:j.CREDIT_CARD_SAVING});},addCreditCard:function(m){k.dispatch({type:j.CREDIT_CARD_ADDED,data:m});},addCreditCardError:function(m){k.dispatch({type:j.CREDIT_CARD_ADDED_ERROR,data:m});},addCreditCardErrorCleared:function(){k.dispatch({type:j.CREDIT_CARD_ADDED_ERROR_CLEARED});},updatePresetCreditCard:function(m){k.dispatch({type:j.PRESET_CREDIT_CARD_UPDATED,data:m});},updatePresetCreditCardError:function(m){k.dispatch({type:j.PRESET_CREDIT_CARD_UPDATED_ERROR,data:m});},updateCreditCard:function(m){k.dispatch({type:j.CREDIT_CARD_UPDATED,data:m});},updateCreditCardError:function(m){k.dispatch({type:j.CREDIT_CARD_UPDATED_ERROR,data:m});},deleteCreditCard:function(m){k.dispatch({type:j.CREDIT_CARD_DELETED,data:m});},deleteCreditCardError:function(m){k.dispatch({type:j.CREDIT_CARD_DELETED_ERROR,data:m});},verifyCreditCard:function(m){k.dispatch({type:j.CREDIT_CARD_VERIFIED,data:m});},verifyCreditCardError:function(m){k.dispatch({type:j.CREDIT_CARD_VERIFIED_ERROR,data:m});},updateTransfers:function(m){k.dispatch({type:j.TRANSFERS_UPDATED,data:m});},updateTransfersError:function(m){k.dispatch({type:j.TRANSFERS_UPDATED_ERROR,data:m});},updateNUXTransfers:function(m){k.dispatch({type:j.NUX_TRANSFERS_UPDATED,data:m});},transferAdded:function(m){k.dispatch({type:j.TRANSFER_ADDED,data:m});},transferAddedError:function(m){k.dispatch({type:j.TRANSFER_ADDED_ERROR,data:m});},transferUpdated:function(m){k.dispatch({type:j.TRANSFER_UPDATED,data:m});},transferUpdatedError:function(m){k.dispatch({type:j.TRANSFER_UPDATED_ERROR,data:m});},transferAccepted:function(){k.dispatch({type:j.TRANSFER_ACCEPTED});},transferDeclined:function(m){k.dispatch({type:j.TRANSFER_DECLINED,data:m});},chatSendViewOpened:function(m){function n(){k.dispatch({type:j.CHAT_SEND_VIEW_OPENED,data:m});}if(h.canOpenTab()){h.openThread(m.threadID,null,null,n);}else{i.selectThread(m.threadID);n();}},chatSendViewClosed:function(m){k.dispatch({type:j.CHAT_SEND_VIEW_CLOSED,data:m});},binNumberValidated:function(m){k.dispatch({type:j.BIN_NUMBER_VALIDATED,data:m});},binNumberValidatedError:function(m){k.dispatch({type:j.BIN_NUMBER_VALIDATED_ERROR,data:m});},friendsListUpdated:function(m){k.dispatch({type:j.FRIENDS_LIST_UPDATED,data:m});},userEligibilityUpdated:function(m){k.dispatch({type:j.USER_ELIGIBILITY_UDPATED,data:m});},showDialog:function(m,n){k.dispatch({type:j.DIALOG_SHOWN,data:{dialogClass:m,dialogProps:n}});},hideDialog:function(){k.dispatch({type:j.DIALOG_CLOSED});},bannerStatesUpdated:function(m){k.dispatch({type:j.BANNER_STATES_UPDATED,data:m});},bannerDismissed:function(m){k.dispatch({type:j.BANNER_DISMISSED,data:m});},bannerCompleted:function(m){k.dispatch({type:j.BANNER_COMPLETED,data:m});},moneypennyTransferCreated:function(m){k.dispatch({type:j.MONEYPENNY_TRANSFER_CREATED,data:m});},moneypennyTransferCreatedError:function(m){k.dispatch({type:j.MONEYPENNY_TRANSFER_CREATED_ERROR,data:m});},addPlatformContext:function(m){k.dispatch({type:j.PLATFORM_CONTEXT_ADDED,data:m});},addPlatformContextError:function(m){k.dispatch({type:j.PLATFORM_CONTEXT_ADDED_ERROR,data:m});},clearPlatformContextSaveErrors:function(m){k.dispatch({type:j.PLATFORM_CONTEXT_SAVE_ERRORS_CLEARED,data:m});},platformContextBannerDismissed:function(m){k.dispatch({type:j.PLATFORM_CONTEXT_BANNER_DISMISSED,data:m});},platformContextProductItemSold:function(m){k.dispatch({type:j.PLATFORM_CONTEXT_PRODUCT_ITEM_SOLD,data:m});},platformContextChanged:function(m){k.dispatch({type:j.PLATFORM_CONTEXT_CHANGED,data:m});},extensiveTransferDetailsLoaded:function(m){k.dispatch({type:j.EXTENSIVE_TRANSFER_DETAILS_UPDATED,data:m});},updateAddresses:function(m){k.dispatch({type:j.ADDRESSES_UPDATED,data:m});},addressSaving:function(){k.dispatch({type:j.ADDRESS_SAVING});},addAddress:function(m){k.dispatch({type:j.ADDRESS_ADDED,data:m});},addAddressError:function(m){k.dispatch({type:j.ADDRESS_ADDED_ERROR,data:m});},addAddressErrorCleared:function(){k.dispatch({type:j.ADDRESS_ADDED_ERROR_CLEARED});},checkoutCartInitiated:function(){k.dispatch({type:j.CHECKOUT_CART_INITIATED});},checkoutCartCreated:function(m){k.dispatch({type:j.CHECKOUT_CART_CREATED,data:m});},checkoutShippingOptionSelected:function(m){k.dispatch({type:j.CHECKOUT_SHIPPING_OPTION_SELECTED,data:m});},checkoutAddressSelected:function(m){k.dispatch({type:j.CHECKOUT_ADDRESS_SELECTED,data:m});},checkoutCreditCardSelected:function(m){k.dispatch({type:j.CHECKOUT_CREDIT_CARD_SELECTED,data:m});},checkoutAddressFormToggled:function(m){k.dispatch({type:j.CHECKOUT_ADDRESS_FORM_TOGGLED,data:m});},checkoutCreditCardFormToggled:function(m){k.dispatch({type:j.CHECKOUT_CREDIT_CARD_FORM_TOGGLED,data:m});},checkoutAddressEditOptionsToggled:function(m){k.dispatch({type:j.CHECKOUT_ADDRESS_EDIT_OPTIONS_TOGGLED,data:m});},checkoutCreditCardEditOptionsToggled:function(m){k.dispatch({type:j.CHECKOUT_CREDIT_CARD_EDIT_OPTIONS_TOGGLED,data:m});},checkoutCreditCardFormValidated:function(m,n){k.dispatch({type:j.CHECKOUT_CREDIT_CARD_FORM_VALIDATED,data:{isValid:m,formData:n}});},checkoutAddressFormValidated:function(m,n){k.dispatch({type:j.CHECKOUT_ADDRESS_FORM_VALIDATED,data:{isValid:m,formData:n}});},checkoutEditCompleted:function(){k.dispatch({type:j.CHECKOUT_EDIT_COMPLETED});},checkoutProcessing:function(m){k.dispatch({type:j.CHECKOUT_PROCESSING,data:m});},checkoutBuyerProfileUpdated:function(m){k.dispatch({type:j.CHECKOUT_BUYER_PROFILE_UPDATED,data:m});}};f.exports=l;},null);
__d('P2PSendMoneyHelper',['MercuryIDs','P2PActions'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j={bindProfileSendMoneyAction:function(k,l){k.subscribe('itemclick',function(m,n){if(n.item.getValue()==='send_money')i.chatSendViewOpened({referrer:'profile_action',threadID:h.getThreadIDFromUserID(l)});});}};f.exports=j;},null);
__d('SyncRequestNotificationBeeperItemContents.react',['Animation','ImageBlock.react','NotificationBeeperItemCloseButton.react','NotificationUserActions','React','ReactDOM','SyncRequest.react','SyncRequestStatusEnum','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q=l.createClass({displayName:'SyncRequestNotificationBeeperItemContents',_markAsRead:function(){k.markNotificationsAsRead([this.props.beep.notificationID]);this.props.onHide();},_onClose:function(){this._markAsRead();this.props.onHide();},_doFlash:function(){new h(m.findDOMNode(this.refs.inner)).from('opacity','0').to('opacity','1').duration(200).go();},componentDidMount:function(){if(this.props.beep.rendererData.status!=o.PENDING)this.props.onReadyToHide(this.props.beep.notificationID);},componentDidUpdate:function(r){if(this.props.beep.rendererData.status!=o.PENDING&&r.beep.rendererData.status==o.PENDING)this.props.onReadyToHide(this.props.beep.notificationID);},onRequestStatusUpdate:function(r,s){if(r!=o.PENDING&&s==o.PENDING)this.props.onReadyToHide(this.props.beep.notificationID);},render:function(){var r=this.props.beep,s=r.rendererData;return (l.createElement('div',{ref:'inner'},l.createElement(j,{onClick:this._onClose}),l.createElement(i,{className:"_3soj"},l.createElement('img',{src:r.actors[0].profile_picture.uri,className:"_3sok"}),l.createElement('div',{className:"_3sol"},l.createElement(n,{app:s.app,creationTime:s.creation_time,requestId:s.id.toString(),receiver:s.receiver,sender:s.sender,status:s.status,timeout:s.timeout,timeRemaining:s.time_remaining,viewerId:s.receiver.id,onStatusUpdate:this.onRequestStatusUpdate})))));}});f.exports=q;},null);
__d('LiveMessageReceiver',['Arbiter','ChannelConstants','emptyFunction','shield'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(m){this.eventName=m;this.subs=null;this.handler=j;this.shutdownHandler=null;this.registered=false;this.appId=1;}Object.assign(l,{getAppMessageType:function(m,n){return 'live_message/'+m+':'+n;},route:function(m){var n=function(o){var p=l.getAppMessageType(m.app_id,m.event_name);h.inform(p,o,h.BEHAVIOR_PERSISTENT);};n(m.response);}});Object.assign(l.prototype,{setAppId:function(m){this.appId=m;return this;},setHandler:function(m){this.handler=m;this._dirty();return this;},setRestartHandler:j,setShutdownHandler:function(m){this.shutdownHandler=k(m);this._dirty();return this;},_dirty:function(){if(this.registered){this.unregister();this.register();}},register:function(){var m=(function(o,p){return this.handler(p);}).bind(this),n=l.getAppMessageType(this.appId,this.eventName);this.subs={};this.subs.main=h.subscribe(n,m);if(this.shutdownHandler)this.subs.shut=h.subscribe(i.ON_SHUTDOWN,this.shutdownHandler);this.registered=true;return this;},unregister:function(){if(!this.subs)return this;for(var m in this.subs)if(this.subs[m])this.subs[m].unsubscribe();this.subs=null;this.registered=false;return this;}});f.exports=l;},null);
__d('initLiveMessageReceiver',['Arbiter','ChannelConstants','LiveMessageReceiver'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();h.subscribe(i.getArbiterType('app_msg'),function(k,l){j.route(l.obj);});},null);