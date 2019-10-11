(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{808:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return E});var t=s(34),e=s.n(t),o=s(35),p=s.n(o),c=s(36),i=s.n(c),r=s(37),l=s.n(r),u=s(45),d=s.n(u),k=s(38),h=s.n(k),m=s(39),f=s.n(m),g=s(784),z=s.n(g),y=s(0),b=s.n(y),v=s(184);function j(n){return b.a.createElement(n.tag,z()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function x(n){return b.a.createElement(j,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function w(n){return b.a.createElement(j,{tag:"style",html:n.style})}y.Component;var E=function(n){function a(){return e()(this,a),i()(this,l()(a).apply(this,arguments))}return h()(a,n),p()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(v.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return b.a.createElement("div",{className:"zandoc-react-container",key:null},b.a.createElement(w,{style:""}),b.a.createElement(x,{html:'<h2 class="anchor-heading"><a href="#zent-2-x-dao-3-x-sheng-ji-zhi-nan">¶</a><a href="javascript:void(0)" id="zent-2-x-dao-3-x-sheng-ji-zhi-nan" class="anchor-point"></a>Zent 2.x 到 3.x 升级指南</h2>\n<h3 class="anchor-heading"><a href="#javascript-zu-jian">¶</a><a href="javascript:void(0)" id="javascript-zu-jian" class="anchor-point"></a>Javascript 组件</h3>\n<p>从 Zent 3.x 开始我们不再单独为每个组件发包，所有组件代码都包含在一个包里。因此，原来的一些使用方法我们不再支持了。</p>\n<pre><code class="language-js"><span class="token comment">// 这些 2.x 的写法不再支持(以 Button 组件为例)</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'zent-button\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'zent/button\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 请改成 3.x 的写法</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span></code></pre>\n<p>也就是说 3.x 只支持 <code>import { Button } from \'zent\';</code> 这一种写法。</p>\n<h3 class="anchor-heading"><a href="#umd">¶</a><a href="javascript:void(0)" id="umd" class="anchor-point"></a>UMD</h3>\n<p>UMD 文件的路径变了。</p>\n<pre><code class="language-js"><span class="token comment">// 2.x 的写法</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'zent/dist/main.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 请改成 3.x 的写法</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'zent/lib/zent-umd.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 或者使用 minify 后的版本</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'zent/lib/zent-umd.min.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 class="anchor-heading"><a href="#yang-shi">¶</a><a href="javascript:void(0)" id="yang-shi" class="anchor-point"></a>样式</h3>\n<p>css 文件的目录变了。</p>\n<pre><code class="language-js"><span class="token comment">// 2.x 的写法</span>\n<span class="token keyword">import</span> <span class="token string">\'zent/lib/index.css\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 请改成 3.x 的写法</span>\n<span class="token keyword">import</span> <span class="token string">\'zent/css/index.css\'</span><span class="token punctuation">;</span></code></pre>\n<h3 class="anchor-heading"><a href="#babel-plugin-zent">¶</a><a href="javascript:void(0)" id="babel-plugin-zent" class="anchor-point"></a>babel-plugin-zent</h3>\n<p>我们不再维护每个组件单独的包，但是我们提供了一个更加方便的替代方案来达到相同的目的。</p>\n<p>这个 babel 插件可以自动重写所有 Zent 的 <code>import</code>，自动在打包的时候剔除没有使用的 Zent 组件代码，帮助减小代码体积。</p>\n<p>使用说明请看<a href="../guides/babel-plugin-zent">插件文档</a>。</p>'}))}}]),a}(y.Component)}}]);