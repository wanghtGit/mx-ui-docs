import{p,C as h,o as t,b as d,d as r,c as k,j as a,a as i,H as E,a1 as o}from"./chunks/framework.DioSGhIs.js";const b={__name:"case1",setup(l){const n=p([{value:"add01",label:"地址01"},{value:"add02",label:"地址02",children:[{value:"add0201",label:"地址02-01"},{value:"add0202",label:"地址02-02"}]}]);return(s,g)=>{const e=h("mx-address");return t(),d(e,{options:n.value},null,8,["options"])}}},y=JSON.parse('{"title":"MxAddress 地址级联选择器","description":"","frontmatter":{},"headers":[],"relativePath":"guild/cases/InputAddress/index.md","filePath":"guild/cases/InputAddress/index.md"}'),c={name:"guild/cases/InputAddress/index.md"},m=r({...c,setup(l){return(n,s)=>(t(),k("div",null,[s[0]||(s[0]=a("h1",{id:"mxaddress-地址级联选择器",tabindex:"-1"},[i("MxAddress 地址级联选择器 "),a("a",{class:"header-anchor",href:"#mxaddress-地址级联选择器","aria-label":'Permalink to "MxAddress 地址级联选择器"'},"​")],-1)),s[1]||(s[1]=a("p",null,[i("地址级联选择器 "),a("br")],-1)),s[2]||(s[2]=a("h2",{id:"基础用法",tabindex:"-1"},[i("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),s[3]||(s[3]=a("p",null,"通过 options 属性，传入相关地址的数据源，展示对应的级联列表",-1)),E(b),s[4]||(s[4]=o(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">mx-address</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;addOptions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">mx-address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ref } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> addOptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;add01&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;地址01&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;add02&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;地址02&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    children: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;add0201&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;地址02-01&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;add0202&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;地址02-02&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></details><h2 id="component-api" tabindex="-1">Component API <a class="header-anchor" href="#component-api" aria-label="Permalink to &quot;Component API&quot;">​</a></h2><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>options</td><td>地址选项的数据源</td><td>Array</td><td>—</td></tr><tr><td>allow</td><td>能否编辑</td><td>R：不能编辑，为禁用状态<br>W：可以编辑<br>X：不可编辑，且不展示文本框组件样式，只展示对应的值</td><td>W</td></tr></tbody></table><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><table tabindex="0"><thead><tr><th>名称</th><th>说明 <div style="width:11vw;"></div></th><th>示例 <div style="width:11vw;"></div></th></tr></thead><tbody><tr><td> </td><td> </td><td> </td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>名称</th><th>说明 <div style="width:11vw;"></div></th><th>类型 <div style="width:11vw;"></div></th></tr></thead><tbody><tr><td> </td><td> </td><td> </td></tr></tbody></table>`,8))]))}});export{y as __pageData,m as default};
