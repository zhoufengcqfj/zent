(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{763:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return D}));var t=s(291),e=s.n(t),p=s(615),o=s.n(p),c=s(616),l=s.n(c),u=s(610),i=s.n(u),k=s(611),r=s.n(k),d=s(612),m=s.n(d),g=s(613),h=s.n(g),f=s(614),v=s.n(f),E=s(0),y=s.n(E),b=s(114),w=s(84),z=function(){var n=function(n){function a(){return i()(this,a),m()(this,h()(a).apply(this,arguments))}return v()(a,n),r()(a,[{key:"render",value:function(){return y.a.createElement("div",null,y.a.createElement(w.f,{title:"Youzan wsc",tooltip:y.a.createElement("span",null,"test"),position:"top-center"}),y.a.createElement("br",null),y.a.createElement(w.f,{className:"test-class",title:"Youzan wsc",position:"top-center",leftContent:y.a.createElement("a",{className:"zent-link",href:"/"},"left content")}),y.a.createElement("br",null),y.a.createElement(w.f,{title:"Youzan wsc",tooltip:y.a.createElement("span",null,"test"),position:"top-center",rightContent:y.a.createElement("a",{className:"zent-link",href:"/"},"right content")}),y.a.createElement("br",null),y.a.createElement(w.f,{className:"test-class",title:"Youzan wsc",tooltip:y.a.createElement("span",null,"test"),position:"top-center",leftContent:y.a.createElement("a",{className:"zent-link",href:"/"},"left content"),rightContent:y.a.createElement("a",{className:"zent-link",href:"/"},"right content")}))}}]),a}(y.a.Component);return y.a.createElement(n,null)},N=function(){var n=function(n){function a(){return i()(this,a),m()(this,h()(a).apply(this,arguments))}return v()(a,n),r()(a,[{key:"render",value:function(){return y.a.createElement("div",null,y.a.createElement(w.f,{title:"ribbon (default)"}),y.a.createElement("br",null),y.a.createElement(w.f,{type:"minimum",title:"minimum"}))}}]),a}(y.a.Component);return y.a.createElement(n,null)};function C(n){return y.a.createElement(n.tag,l()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function _(n){return y.a.createElement(C,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function B(n){return y.a.createElement(C,{tag:"style",html:n.style})}var H=function(n){function a(){var n,s;i()(this,a);for(var t=arguments.length,p=new Array(t),c=0;c<t;c++)p[c]=arguments[c];return s=m()(this,(n=h()(a)).call.apply(n,[this].concat(p))),o()(e()(s),"state",{showCode:!1}),o()(e()(s),"toggle",(function(){s.setState({showCode:!s.state.showCode})})),s}return v()(a,n),r()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return y.a.createElement("div",{className:"zandoc-react-demo"},y.a.createElement("div",{className:"zandoc-react-demo__preview"},e),y.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},y.a.createElement("div",{className:"zandoc-react-demo__title"},y.a.createElement("p",null,s||"")),y.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&y.a.createElement("pre",{className:"zandoc-react-demo__code"},y.a.createElement(C,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(E.Component),D=function(n){function a(){return i()(this,a),m()(this,h()(a).apply(this,arguments))}return v()(a,n),r()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(b.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return y.a.createElement("div",{className:"zandoc-react-container",key:null},y.a.createElement(B,{style:""}),y.a.createElement(_,{html:'<h2 class="anchor-heading"><a href="#blockheader">¶</a><a href="javascript:void(0)" id="blockheader" class="anchor-point"></a>BlockHeader</h2>\n<p>This is a block header.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),y.a.createElement(H,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> BlockHeader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlockHeader</span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Youzan wsc<span class="token punctuation">"</span></span>\n          <span class="token attr-name">tooltip={&lt;span</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n          position<span class="token operator">=</span><span class="token string">"top-center"</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlockHeader</span>\n          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test-class<span class="token punctuation">"</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Youzan wsc<span class="token punctuation">"</span></span>\n          <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>top-center<span class="token punctuation">"</span></span>\n          <span class="token attr-name">leftContent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-link<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              left content\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlockHeader</span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Youzan wsc<span class="token punctuation">"</span></span>\n          <span class="token attr-name">tooltip={&lt;span</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n          position<span class="token operator">=</span><span class="token string">"top-center"</span>\n          rightContent<span class="token operator">=</span><span class="token punctuation">{</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-link<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              right content\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlockHeader</span>\n          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test-class<span class="token punctuation">"</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Youzan wsc<span class="token punctuation">"</span></span>\n          <span class="token attr-name">tooltip={&lt;span</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n          position<span class="token operator">=</span><span class="token string">"top-center"</span>\n          leftContent<span class="token operator">=</span><span class="token punctuation">{</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-link<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              left content\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">}</span>\n          rightContent<span class="token operator">=</span><span class="token punctuation">{</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-link<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              right content\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(z)),y.a.createElement(H,{title:"type",id:"Demotype",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> BlockHeader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Type</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlockHeader</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ribbon (default)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlockHeader</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>minimum<span class="token punctuation">"</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>minimum<span class="token punctuation">"</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Type</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(N)),y.a.createElement(_,{html:"<h2 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h2>\n<table class=\"table\">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>className</td>\n<td>custom class name</td>\n<td>string</td>\n<td>''</td>\n<td></td>\n</tr>\n<tr>\n<td>type</td>\n<td>style type</td>\n<td>'ribbon' \n|\n 'minimum'</td>\n<td>'ribbon'</td>\n<td>'minimum'</td>\n</tr>\n<tr>\n<td>title</td>\n<td>title</td>\n<td>ReactNode</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>tooltip</td>\n<td>content of the pop</td>\n<td>ReactNode</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>position</td>\n<td>pop position</td>\n<td>string</td>\n<td>'top-right'</td>\n<td></td>\n</tr>\n<tr>\n<td>leftContent</td>\n<td>left custom content</td>\n<td>ReactNode</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>rightContent</td>\n<td>right custom content</td>\n<td>ReactNode</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>"}))}}]),a}(E.Component)}}]);