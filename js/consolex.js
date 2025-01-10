function openPanel(){const e=document.getElementById("settingPanel");e.classList.contains("show")?closePanel():(e.classList.remove("hide"),setTimeout((()=>{e.classList.add("show")}),20))}function closePanel(){const e=document.getElementById("settingPanel");e.classList.remove("show"),e.style.bottom="-100%",setTimeout((()=>{e.classList.add("hide"),e.style.bottom=""}),250)}function showItems(){const e=document.getElementById("settingItems");e.classList.remove("hide"),e.classList.remove("fade-out"),e.classList.add("fade-in")}function hideItems(){const e=document.getElementById("settingItems");e.classList.add("fade-out"),setTimeout((()=>{e.classList.add("hide")}),250)}function clearLocalStorage(){localStorage.clear(),location.reload()}function clearBrowserStorage(e,t){document.getElementById(e).addEventListener("click",(function(){t(),this.textContent="已清除",setTimeout((function(){location.reload()}),1e3)}))}function settingAddRemove(e,t){var n=document.querySelector(e);n&&("add"===t?n.style.display="none"===n.style.display||""===n.style.display?"block":n.style.display:"remove"===t&&(n.style.display="block"===n.style.display?"none":n.style.display))}document.getElementById("settingBackToMain2").onclick=function(){document.getElementById("settingItems").classList.add("fade-out"),document.getElementById("settingBackToMain2").classList.add("fade-out"),document.getElementById("settingBackToMain2").classList.add("hide"),setTimeout((()=>{document.getElementById("settingItems").classList.add("hide"),document.getElementById("settingTabs").classList.remove("hide"),document.getElementById("settingWidget").classList.remove("hide"),setTimeout((()=>{document.getElementById("settingTabs").classList.remove("fade-out"),document.getElementById("settingWidget").classList.remove("fade-out"),document.getElementById("settingTabs").classList.add("fade-in"),document.getElementById("settingWidget").classList.add("fade-in")}),10)}),100)},document.querySelectorAll("#settingTabs button").forEach((e=>{e.onclick=function(){document.getElementById("settingTabs").classList.add("fade-out"),document.getElementById("settingWidget").classList.add("fade-out"),document.getElementById("settingBackToMain2").classList.remove("hide"),document.getElementById("settingBackToMain2").classList.remove("fade-out"),document.getElementById("settingBackToMain2").classList.add("fade-in"),setTimeout((()=>{document.getElementById("settingTabs").classList.add("hide"),document.getElementById("settingWidget").classList.add("hide"),document.getElementById("settingItems").classList.remove("hide"),document.querySelectorAll("#settingItems > div").forEach((e=>{e.classList.add("hide")})),document.getElementById(e.id+"-Content").classList.remove("hide"),setTimeout((()=>{document.getElementById("settingItems").classList.remove("fade-out"),document.getElementById("settingItems").classList.add("fade-in")}),10)}),100)}})),document.getElementById("settingScrollToTop").onclick=function(){document.getElementById("settingMain").scrollTo({top:0,behavior:"smooth"})},document.getElementById("settingFullScreen").addEventListener("click",(function(){document.fullscreenElement?document.exitFullscreen().catch((e=>{console.log(`Error attempting to exit full-screen mode: ${e.message} (${e.name})`)})):document.documentElement.requestFullscreen().catch((e=>{console.log(`Error attempting to enable full-screen mode: ${e.message} (${e.name})`)}))})),clearBrowserStorage("clearSessionStorage",(function(){sessionStorage.clear()})),clearBrowserStorage("clearCookies",(function(){document.cookie.split(";").forEach((function(e){document.cookie=e.trim().split("=")[0]+"=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/"}))})),clearBrowserStorage("clearServiceWorkers",(function(){"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then((function(e){for(let t of e)t.unregister()}))})),clearBrowserStorage("clearCaches",(function(){"caches"in window&&caches.keys().then((function(e){for(let t of e)caches.delete(t)}))}));var sps={};function settingCheckboxBinding(e,t,n,o,a){if("string"!=typeof t||"fffff"!==t&&"ttttt"!==t)console.error("Invalid initialState value");else{var s=localStorage.getItem(e);null===s?(s="fffff"===t?0:1,localStorage.setItem(e,s)):s=parseInt(s),1===s?o():a(),window[n]=function(){s=s?0:1,localStorage.setItem(e,s),1===s?o():a()},new MutationObserver((function(e){e.forEach((function(e){"childList"===e.type&&c()}))})).observe(document.body,{childList:!0,subtree:!0}),document.addEventListener("DOMContentLoaded",c),document.getElementById("resetSwitches").addEventListener("click",(function(){localStorage.removeItem(e),s="fffff"===t?0:1,localStorage.setItem(e,s),1===s?o():a(),c()}))}function c(){var t=document.getElementById(e);t&&(t.checked=1===s,t.onclick=window[n])}}function aplayerMain(){if(!document.getElementById("aplayerScript")){const e=document.querySelector(".aplayerBgMusic");e&&(e.style.display="block")}}function removeAplayer(){const e=document.querySelector(".aplayerBgMusic");e&&(e.style.display="none",e.aplayer&&e.aplayer.pause())}function FPSMain(){if(!document.getElementById("fpsDisplayElement")){const e=document.createElement("div");e.id="fpsDisplayElement",document.body.appendChild(e);let t=performance.now(),n=0;!function o(){const a=performance.now();n++;const s=a-t;if(s>=1e3){const o=Math.round(1e3*n/s);e.innerHTML=`FPS: ${o}`,n=0,t=a}requestAnimationFrame(o)}()}}function removeFPS(){const e=document.getElementById("fpsDisplayElement");e&&e.remove()}function astralMain(){document.getElementById("universe").style.display="block"}function removeAstral(){document.getElementById("universe").style.display="none"}function functionState111(){console.log("func111")}function functionState000(){console.log("func000")}function setFont(e){localStorage.setItem("selectedFont",e),"main"===e?(document.body.style.fontFamily="-apple-system, IBM Plex Mono, monospace, '微软雅黑', sans-serif",document.documentElement.style.removeProperty("--global-font")):(document.body.style.fontFamily="var(--global-font), -apple-system, IBM Plex Mono, monospace, '微软雅黑', sans-serif",document.documentElement.style.setProperty("--global-font",e))}function resetFont(){localStorage.removeItem("selectedFont"),setFont("微软雅黑")}function saveData(e,t){localStorage.setItem(e,JSON.stringify({time:Date.now(),data:t}))}function loadData(e,t){let n=JSON.parse(localStorage.getItem(e));if(n){let e=Date.now()-n.time;if(e<60*t*1e3&&e>-1)return n.data}return 0}sps.switchDarkMode=function(){"light"===("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(btf.activateDarkMode(),btf.saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(btf.activateLightMode(),btf.saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout((()=>window.disqusReset()),200)},document.getElementById("menu-darkmode").onclick=function(){sps.switchDarkMode()},settingCheckboxBinding("aplayerOnOff","ttttt","aplayerState",aplayerMain,removeAplayer),settingCheckboxBinding("fpsDisplay","fffff","fpsState",FPSMain,removeFPS),settingCheckboxBinding("universeEffect","fffff","universeState",astralMain,removeAstral),settingCheckboxBinding("variable1","ttttt","switchState1",functionState111,functionState000),null===localStorage.getItem("selectedFont")&&localStorage.setItem("selectedFont","微软雅黑"),setFont(localStorage.getItem("selectedFont")),document.getElementById("resetFont").addEventListener("click",resetFont);try{let e=loadData("blogbg",1440);e?changeBg(e,1):localStorage.removeItem("blogbg")}catch(e){localStorage.removeItem("blogbg")}function changeBg(e,t){let n=document.getElementById("web_bg");"#"==e.charAt(0)?(n.style.backgroundColor=e,n.style.backgroundImage="none"):n.style.backgroundImage=e,t||saveData("blogbg",e)}function resetBg(){document.getElementById("web_bg"),localStorage.getItem("original_blog_bg");localStorage.removeItem("blogbg"),changeBg("url(/img/background_img.jpg)")}function spElementsAddon(){const e=document.getElementById("rightside-config");if(!document.getElementById("SPanel")){const t=document.createElement("button");t.id="SPanel",t.type="button",t.title="控制面板",t.innerHTML='<i class="fas fa-gears"></i>',e.parentNode&&e.parentNode.insertBefore(t,e),t.addEventListener("click",(function(){openPanel()}))}}function settingRangeBarBinding(e,t,n,o,a){const s=document.getElementById(e),c=document.getElementById(t),l=localStorage.getItem(n),i=null!==l?l:o||c.value;c.value=i,s.textContent=i;c.addEventListener("input",(()=>{const e=c.value;s.textContent=e,localStorage.setItem(n,e),a&&a(e)}));document.getElementById("resetRangeBar").addEventListener("click",(()=>{c.value=o,localStorage.setItem(n,o),s.textContent=o,a&&a(o)})),a&&a(i)}function getOrCreateStyleTag(e){let t=document.getElementById(e);return t||(t=document.createElement("style"),t.id=e,document.head.appendChild(t)),t}function updateColorBoxSp(e){const t=`rgba(250, 250, 250, ${e/100})`,n=`rgba(10, 10, 10, ${e/100})`;getOrCreateStyleTag("spstyleColorBox").innerHTML=`\n        #settingPanel {\n            background: ${t};\n        }\n        [data-theme="dark"] #settingPanel {\n            background: ${n};\n        }\n    `}function updateColorBoxSpButton(e){const t=`rgba(150, 150, 150, ${e/100})`,n=`rgba(200, 200, 200, ${e/100})`,o=`rgba(10, 10, 10, ${e/100})`,a=`rgba(120, 120, 120, ${e/100})`;getOrCreateStyleTag("spstyleColorBoxStButton").innerHTML=`\n        #settingPanel button {\n            background: ${t};\n        }\n        #settingPanel button:hover {\n            background-color: ${n};\n        }\n        [data-theme="dark"] #settingPanel button {\n            background: ${o};\n        }\n        [data-theme="dark"] #settingPanel button:hover {\n            background-color: ${a};\n        }\n    `}document.getElementById("resetBg").onclick=function(){resetBg()},window.addEventListener("pjax:complete",spElementsAddon),spElementsAddon(),settingRangeBarBinding("valueDisplaySp","opacityRangeSp","opacityValueSp","95",updateColorBoxSp),settingRangeBarBinding("valueDisplaySpButtons","opacityRangeSpButtons","opacityValueSpButtons","40",updateColorBoxSpButton);