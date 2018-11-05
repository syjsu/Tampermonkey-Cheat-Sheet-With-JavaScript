// ==UserScript==
// @name         Dark Model
// @namespace    http://github.com/syjsu
// @version      0.1
// @description  Make the website to Dark Model
// @author       syjsu
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style')
    style.innerHTML = `
*,
*:after,
*:before {
color:#D5D6D6!important;
background-color: #292C2E!important;
}
.tags .mask {
background: #292C2E!important;
}
.video .mask {
opacity: 0.5 !important;
background: #292C2E!important;
}
.user,
.detailed-note,
.comment .box,
.simple-shortcut,
.promo-item {
border-color: #414446!important;
}
`
    document.head.appendChild(style)
    const allNodes = document.querySelectorAll('*')
    allNodes.forEach(node => node.classList.add('dark'))

})();
