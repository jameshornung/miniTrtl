if (self.CavalryLogger) { CavalryLogger.start_js(["As2RI"]); }

__d('ChatNewMessagesTabSheet.react',['cx','fbt','Link.react','React'],(function a(b,c,d,e,f,g,h,i){'use strict';var j=function k(l){return c('React').createElement(c('Link.react'),{onClick:l.onClick},c('React').createElement('div',{className:"_2phz"},c('React').createElement('div',{className:"_1skc",'data-jsid':'image'}),c('React').createElement('div',{className:"_1skd",'data-jsid':'text'},i._("Scroll down to see new messages."))));};f.exports=j;}),null);
__d('FantaNewMessagesTabSheet.react',['ChatNewMessagesTabSheet.react','FantaTabActions','React'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('React').PureComponent);i=h&&h.prototype;function j(){var k,l;for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];return l=(k=i.constructor).call.apply(k,[this].concat(n)),this.$FantaNewMessagesTabSheet1=function(){c('FantaTabActions').showUnseenMessages(this.props.threadID);}.bind(this),l;}j.prototype.render=function(){return c('React').createElement(c('ChatNewMessagesTabSheet.react'),{onClick:this.$FantaNewMessagesTabSheet1});};f.exports=j;}),null);