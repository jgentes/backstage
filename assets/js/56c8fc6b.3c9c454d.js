/*! For license information please see 56c8fc6b.3c9c454d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[660360],{144891:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>u,metadata:()=>i,toc:()=>c});var n=t(824246),o=t(511151);const u={id:"backend-plugin-api.urlreaderreadtreeresponsediroptions",title:"UrlReaderReadTreeResponseDirOptions",description:"API reference for UrlReaderReadTreeResponseDirOptions"},a=void 0,i={id:"reference/backend-plugin-api.urlreaderreadtreeresponsediroptions",title:"UrlReaderReadTreeResponseDirOptions",description:"API reference for UrlReaderReadTreeResponseDirOptions",source:"@site/../docs/reference/backend-plugin-api.urlreaderreadtreeresponsediroptions.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.urlreaderreadtreeresponsediroptions",permalink:"/docs/reference/backend-plugin-api.urlreaderreadtreeresponsediroptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.urlreaderreadtreeresponsediroptions.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.urlreaderreadtreeresponsediroptions",title:"UrlReaderReadTreeResponseDirOptions",description:"API reference for UrlReaderReadTreeResponseDirOptions"}},s={},c=[];function l(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api",children:(0,n.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.urlreaderreadtreeresponsediroptions",children:(0,n.jsx)(r.code,{children:"UrlReaderReadTreeResponseDirOptions"})})]}),"\n",(0,n.jsx)(r.p,{children:"Options that control  execution."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type UrlReaderReadTreeResponseDirOptions = {\n    targetDir?: string;\n};\n"})})]})}function f(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,u={},c=null,l=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,n)&&!s.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===u[n]&&(u[n]=r[n]);return{$$typeof:o,type:e,key:c,ref:l,props:u,_owner:i.current}}r.Fragment=u,r.jsx=c,r.jsxs=c},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function _(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}function b(){}function v(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}_.prototype.isReactComponent={},_.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=_.prototype;var R=v.prototype=new b;R.constructor=v,h(R,_.prototype),R.isPureReactComponent=!0;var g=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function j(e,r,n){var o,u={},a=null,i=null;if(null!=r)for(o in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(a=""+r.key),r)k.call(r,o)&&!x.hasOwnProperty(o)&&(u[o]=r[o]);var s=arguments.length-2;if(1===s)u.children=n;else if(1<s){for(var c=Array(s),l=0;l<s;l++)c[l]=arguments[l+2];u.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===u[o]&&(u[o]=s[o]);return{$$typeof:t,type:e,key:a,ref:i,props:u,_owner:S.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var O=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,o,u,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case t:case n:s=!0}}if(s)return a=a(s=e),e=""===u?"."+w(s,0):u,g(a)?(o="",null!=e&&(o=e.replace(O,"$&/")+"/"),C(a,r,o,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),r.push(a)),1;if(s=0,u=""===u?".":u+":",g(e))for(var c=0;c<e.length;c++){var l=u+w(i=e[c],c);s+=C(i,r,o,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(i=e.next()).done;)s+=C(i=i.value,r,o,l=u+w(i,c++),a);else if("object"===i)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return s}function $(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function P(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},D={transition:null},U={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:D,ReactCurrentOwner:S};r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=_,r.Fragment=o,r.Profiler=a,r.PureComponent=v,r.StrictMode=u,r.Suspense=l,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,a=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,i=S.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in r)k.call(r,c)&&!x.hasOwnProperty(c)&&(o[c]=void 0===r[c]&&void 0!==s?s[c]:r[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){s=Array(c);for(var l=0;l<c;l++)s[l]=arguments[l+2];o.children=s}return{$$typeof:t,type:e.type,key:u,ref:a,props:o,_owner:i}},r.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=j,r.createFactory=function(e){var r=j.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:c,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=D.transition;D.transition={};try{e()}finally{D.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return T.current.useCallback(e,r)},r.useContext=function(e){return T.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return T.current.useDeferredValue(e)},r.useEffect=function(e,r){return T.current.useEffect(e,r)},r.useId=function(){return T.current.useId()},r.useImperativeHandle=function(e,r,t){return T.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return T.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return T.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return T.current.useMemo(e,r)},r.useReducer=function(e,r,t){return T.current.useReducer(e,r,t)},r.useRef=function(e){return T.current.useRef(e)},r.useState=function(e){return T.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return T.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return T.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>a});var n=t(667294);const o={},u=n.createContext(o);function a(e){const r=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(u.Provider,{value:r},e.children)}}}]);