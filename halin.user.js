// ==UserScript==
// @name         [翰林] 行動大師3 + 輔材網　[康軒] 數位高手 by Vochant
// @version      0.4
// @description  免登入開啟電子書
// @author       Vincender
// @match        edisc3.hle.com.tw/edisc_v3/*
// @match        reference.hle.com.tw/*
// @match        reference.hle.com.tw/*bookId*
// @match        h5.hle.com.tw/*
// @match        https://digitalmaster.knsh.com.tw/v3/pages/*/index.html*
// @match        https://digitalmaster.knsh.com.tw/ebooks/BookMain/Viewer_*/index.html*
// @updateURL    https://vincender.github.io/tpmScripts/update.json
// @downloadURL  https://vincender.github.io/tpmScripts/halin.user.js
// @grant        unsafeWindow
// ==/UserScript==
(function() {
    'use strict';
    const observerTitle = new MutationObserver(function(mutationsList) { mutationsList.forEach(function(mutation) { if (document.title.includes("翰林電子書")) { const cookies = document.cookie; const getCookie = (name) => { const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)')); return match ? decodeURIComponent(match[2]) : null; }; if (getCookie('data') != null) { document.title = getCookie('data'); document.cookie = "data=; domain=hle.com.tw; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;"; } } }); }); observerTitle.observe(document, { subtree: true, childList: true });
    if(location.hostname === decodeURIComponent(escape(atob('ZWRpc2MzLmhsZS5jb20udHc=')))) {
        const g = o => decodeURIComponent(escape(atob(o))), userData = { 'bGFzdF9zaWduaW5YX3YyMDIz': btoa(unescape(encodeURIComponent(new Date().getTime().toString()))), 'ZW1haWxYX3YyMDIz': 'dGVzdEB0ZXN0LmNvbQ==', 'dG9rZW5YX3YyMDIz': 'ZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNklqZzFOemd3TldZeFpHUTNabUU1WVRaaU5USTNaalEwWldObVptSmtORGhqSWl3aWRIbHdJam9pWVhRcmFuZDBJbjAuZXlKdVltWWlPakUzTXpJNE5EZzJNRElzSW1WNGNDSTZNVGMyTkRrNE9UUXdNaXdpYVhOeklqb2lhSFIwY0hNNkx5OXBaQzVvYkdVdVkyOXRMblIzSWl3aVlYVmtJanBiSW1Gd2FURWlMQ0pKWkdWdWRHbDBlVk5sY25abGNrRndhU0lzSW1oaGJteHBiaTFoY0draVhTd2lZMnhwWlc1MFgybGtJam9pYW5NaUxDSnpkV0lpT2lKbE56UTNNak13TlMweFlXUXlMVFJqTURZdFlqRXhPQzFtWlRka09EazNNek5tWWpBaUxDSmhkWFJvWDNScGJXVWlPakUzTXpJNE5EZzJNREVzSW1sa2NDSTZJbXh2WTJGc0lpd2lhSFIwY0RvdkwzTmphR1Z0WVhNdWVHMXNjMjloY0M1dmNtY3ZkM012TWpBd05TOHdOUzlwWkdWdWRHbDBlUzlqYkdGcGJYTXZaVzFoYVd4aFpHUnlaWE56SWpvaWNtRnRZWGN4T1RNME1FQjNhV3RtWldVdVkyOXRJaXdpUVhOd1RtVjBMa2xrWlc1MGFYUjVMbE5sWTNWeWFYUjVVM1JoYlhBaU9pSkRSMFEzTkVsYVFVcE9NalJITlZSVlMwOVpVMW8zU2pOT1JVTlNVak5KTXlJc0luSnZiR1VpT2lMb2dJSGx1S3NpTENKbGJXRnBiQ0k2SW5KaGJXRjNNVGt6TkRCQWQybHJabVZsTG1OdmJTSXNJbVpoYldsc2VWOXVZVzFsSWpwYkl1V0ZyT2VVcU9PRWxpSXNJdVdGck9lVXFDSmRMQ0puYVhabGJsOXVZVzFsSWpvaTViaXo2Sm1mSWl3aWJtRnRaU0k2V3lMbGhhem5sS2pqaEpibHVMUG9tWjhpTENMbGhhem5sS2psdUxQb21aOGlYU3dpWlcxaGFXeGZkbVZ5YVdacFpXUWlPblJ5ZFdVc0luQm9iMjVsWDI1MWJXSmxjaUk2SWpBNU16TXpNVEl3TkRraUxDSndhRzl1WlY5dWRXMWlaWEpmZG1WeWFXWnBaV1FpT25SeWRXVXNJbkJ5WldabGNuSmxaRjkxYzJWeWJtRnRaU0k2SXVXRnJPZVVxT09FbHVXNHMtaVpueUlzSW5WelpYSmZaRzl0WVdsdUlqb2laV1IxSWl3aWMyTm9iMjlzVTNsemRHVnRJam9pNVp5TDVMaXRJaXdpYVhOcFpHVnVkR2xtYVdWa0lqcDBjblZsTENKc2IyTnJJanBtWVd4elpTd2lkbVZ5SWpvekxDSnpZMjl3WlNJNld5SnZjR1Z1YVdRaUxDSndjbTltYVd4bElpd2lZWEJwTVNJc0lrbGtaVzUwYVhSNVUyVnlkbVZ5UVhCcElpd2lhR0Z1YkdsdUxXRndhU0lzSW05bVpteHBibVZmWVdOalpYTnpJbDBzSW1GdGNpSTZXeUp3ZDJRaVhYMC5QOThXMXVIUVIzRjVFMU5hVFRCZWVhQkY2WEE4OUdUc0xaVnpaekZNU2RqYXVNZGw0VzJKclpjZXVZZW5meUpBTXVEbWJMdzFaZmI2NTB3QmlwMnQ0RWNKY0RLdEcyUVdaQ3NaVjBNcVVsMUdxaE1WNHRDVXQ1MjU5Y01wemlPRC10ZWNIaEtqQ1ctZUZmaHNzaUdUa1hjaTJDYkY5UzNLNFhaVC1jcF9lMzBnYWdFMDBTRlJhMGNReEE2ejZkVmxBSzRLM3VBakdUVWFQemlWR0RMV3E3Z2hPWkZBYzR0OTFBQ0ZIeWU5U0V6cUNTelU4N0ZHZENfTzVMUjFpMlJHc2NVOHZSN1k0QnJ4RnFVR0tlQjFUY2szYndXcklfWEhVU21qRFF2dlJRb1VfM3dpelZtdlcwRG5xeTEtVlk0aGFrNWpyei1DTElycEZOdk82Zml2eGc=', 'cm9sZVhfdjIwMjM=': '6ICB5bir', 'bG9ja1hfdjIwMjM=': 'ZmFsc2U=', 'cHJvZmlsZVhfdjIwMjM=': '5YWN55m76IWz5pys' }, observer = new MutationObserver((mutationsList, observer) => { for (const mutation of mutationsList) { if (mutation.type === 'childList') { mutation.addedNodes.forEach(node => { if (node.nodeType === 1 && node.classList.contains(g('c3dhbDItY29udGFpbmVy')) && node.classList.contains(g('c3dhbDItY29udGFpbmVy')) && node.classList.contains('swal2-backdrop-show')) { node.style.visibility = "hidden"; document.documentElement.style.overflow = 'auto'; document.body.style.overflow = 'auto'; } }); } } }); observer.observe(document.body, { childList: true, subtree: true });
        var observerBtn = new MutationObserver(function(mutationsList, observerBtn) { mutationsList.forEach(function(mutation) { if (mutation.type === 'childList') { var button = document.getElementById('btnPlayBook'); if (button) { recordForm.style.display = "none"; document.getElementById("recordFormTable").innerHTML = ""; var title = document.querySelector('.lblTitle').innerText; document.cookie = "data=" + encodeURIComponent(title) + "; domain=hle.com.tw; path=/;"; button.onclick(); } } }); }); var config = { childList: true, subtree: true }; var modalContent = document.querySelector('.detable'); if (modalContent) { observerBtn.observe(modalContent, config); }
        for (const key in userData) { if (userData.hasOwnProperty(key)) { localStorage.setItem(g(key), g(userData[key])); } }
    } else if(location.hostname === decodeURIComponent(escape(atob('cmVmZXJlbmNlLmhsZS5jb20udHc=')))) {
        const g = o => decodeURIComponent(escape(atob(o))), userData = { 'dXNlck5hbWU=': '5YWN55m76IWz5pys', 'aWRw': '5YWN55m76IWz5pys', 'YWNjZXNzVG9rZW4=': 'ZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNklqZzFOemd3TldZeFpHUTNabUU1WVRaaU5USTNaalEwWldObVptSmtORGhqSWl3aWRIbHdJam9pWVhRcmFuZDBJbjAuZXlKdVltWWlPakUzTXpJNE5Ua3hOREFzSW1WNGNDSTZNVGMyTkRrNU9UazBNQ3dpYVhOeklqb2lhSFIwY0hNNkx5OXBaQzVvYkdVdVkyOXRMblIzSWl3aVkyeHBaVzUwWDJsa0lqb2lhbk1pTENKemRXSWlPaUpsTnpRM01qTXdOUzB4WVdReUxUUmpNRFl0WWpFeE9DMW1aVGRrT0RrM016Tm1ZakFpTENKaGRYUm9YM1JwYldVaU9qRTNNekk0TlRreE16a3NJbWxrY0NJNklteHZZMkZzSWl3aWFIUjBjRG92TDNOamFHVnRZWE11ZUcxc2MyOWhjQzV2Y21jdmQzTXZNakF3TlM4d05TOXBaR1Z1ZEdsMGVTOWpiR0ZwYlhNdlpXMWhhV3hoWkdSeVpYTnpJam9pY21GdFlYY3hPVE0wTUVCM2FXdG1aV1V1WTI5dElpd2lRWE53VG1WMExrbGtaVzUwYVhSNUxsTmxZM1Z5YVhSNVUzUmhiWEFpT2lKRFIwUTNORWxhUVVwT01qUkhOVlJWUzA5WlUxbzNTak5PUlVOU1VqTkpNeUlzSW5KdmJHVWlPaUxvZ0lIbHVLc2lMQ0psYldGcGJDSTZJbkpoYldGM01Ua3pOREJBZDJsclptVmxMbU52YlNJc0ltWmhiV2xzZVY5dVlXMWxJam9pNVlXczU1U280NFNXSWl3aVoybDJaVzVmYm1GdFpTSTZJdVc0cy1pWm55SXNJbTVoYldVaU9pTGxoYXpubEtqamhKYmx1TFBvbVo4aUxDSmxiV0ZwYkY5MlpYSnBabWxsWkNJNmRISjFaU3dpY0dodmJtVmZiblZ0WW1WeUlqb2lNRGt6TXpNeE1qQTBPU0lzSW5Cb2IyNWxYMjUxYldKbGNsOTJaWEpwWm1sbFpDSTZkSEoxWlN3aWNISmxabVZ5Y21Wa1gzVnpaWEp1WVcxbElqb2k1WVdzNTVTbzQ0U1c1Yml6NkptZklpd2lkWE5sY2w5a2IyMWhhVzRpT2lKbFpIVWlMQ0p6WTJodmIyeFRlWE4wWlcwaU9pTGxuSXZrdUswaUxDSnBjMmxrWlc1MGFXWnBaV1FpT25SeWRXVXNJbXh2WTJzaU9tWmhiSE5sTENKMlpYSWlPak1zSW5OamIzQmxJanBiSW05d1pXNXBaQ0lzSW5CeWIyWnBiR1VpTENKdlptWnNhVzVsWDJGalkyVnpjeUpkTENKaGJYSWlPbHNpY0hka0lsMTkuU3JDcDlwUjRBdDEzdkdfZmkzMnJfSnBIdTFkR1VEcjk5eGNpc2N4QmhVRFlFQVZPLURkX2lYYldFX0xOQ1VRYklHZjRqbFFxYWtwanhSa1ZySUtQNGhpZXlBN2pqa3F4b0I4Q0RKNzFMd3l0Qm1JT1NPMVl2NUItNFpMZnY3VjRBZkxWaGtpN2xOY1htVG5qMmZPbU12dUE0cTIyQlJPUm5GeUVlNW1FN3d2SEplWHdyZnpYaDVwMGNnR0xCQVhGU1F4UVNoaUFTYjVGZ3Qwanh3b1duWDJBaElaRTBYSDFqUmhndEVhTTY3ZmtVdDl5dWNLX0lCclNGWUNWN05sMVdBTXRta2c4WTdRSkRNSmQ0QUFlSFRoWm9wRzhCTl8wVk5ZRHNleTk0Xy1DTDVVYVNha21BemUwd1BpMnQ2Smt5SnhrNkw0V255SXNwOWlfMm1mWThR', 'dXNlclRva2Vu': 'ZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNklqZzFOemd3TldZeFpHUTNabUU1WVRaaU5USTNaalEwWldObVptSmtORGhqSWl3aWRIbHdJam9pU2xkVUluMC5leUp1WW1ZaU9qRTNNekk0TlRreE5EQXNJbVY0Y0NJNk1UY3pOVFV6TnpVME1Dd2lhWE56SWpvaWFIUjBjSE02THk5cFpDNW9iR1V1WTI5dExuUjNJaXdpWVhWa0lqb2lhbk1pTENKcFlYUWlPakUzTXpJNE5Ua3hOREFzSW1GMFgyaGhjMmdpT2lKc1JHNVBOMk5IVFhVME9XZFpjVk5OY1c5cWVHaDNJaXdpYzE5b1lYTm9Jam9pVkhST1RITktjM001Ym01T2RsSnZkR056TXpZdFVTSXNJbk5wWkNJNklraERhakJRZW5wNmNXUkNjR2haWTJvMFFsQmhjMEVpTENKemRXSWlPaUpsTnpRM01qTXdOUzB4WVdReUxUUmpNRFl0WWpFeE9DMW1aVGRrT0RrM016Tm1ZakFpTENKaGRYUm9YM1JwYldVaU9qRTNNekk0TlRreE16a3NJbWxrY0NJNklteHZZMkZzSWl3aWFIUjBjRG92TDNOamFHVnRZWE11ZUcxc2MyOWhjQzV2Y21jdmQzTXZNakF3TlM4d05TOXBaR1Z1ZEdsMGVTOWpiR0ZwYlhNdlpXMWhhV3hoWkdSeVpYTnpJam9pY21GdFlYY3hPVE0wTUVCM2FXdG1aV1V1WTI5dElpd2lRWE53VG1WMExrbGtaVzUwYVhSNUxsTmxZM1Z5YVhSNVUzUmhiWEFpT2lKRFIwUTNORWxhUVVwT01qUkhOVlJWUzA5WlUxbzNTak5PUlVOU1VqTkpNeUlzSW5KdmJHVWlPaUxvZ0lIbHVLc2lMQ0psYldGcGJDSTZJbkpoYldGM01Ua3pOREJBZDJsclptVmxMbU52YlNJc0ltWmhiV2xzZVY5dVlXMWxJam9pNVlXczU1U280NFNXSWl3aVoybDJaVzVmYm1GdFpTSTZJdVc0cy1pWm55SXNJbTVoYldVaU9pTGxoYXpubEtqamhKYmx1TFBvbVo4aUxDSmxiV0ZwYkY5MlpYSnBabWxsWkNJNmRISjFaU3dpY0dodmJtVmZiblZ0WW1WeUlqb2lNRGt6TXpNeE1qQTBPU0lzSW5Cb2IyNWxYMjUxYldKbGNsOTJaWEpwWm1sbFpDSTZkSEoxWlN3aWNISmxabVZ5Y21Wa1gzVnpaWEp1WVcxbElqb2k1WVdzNTVTbzQ0U1c1Yml6NkptZklpd2lkWE5sY2w5a2IyMWhhVzRpT2lKbFpIVWlMQ0p6WTJodmIyeFRlWE4wWlcwaU9pTGxuSXZrdUswaUxDSnBjMmxrWlc1MGFXWnBaV1FpT25SeWRXVXNJbXh2WTJzaU9tWmhiSE5sTENKMlpYSWlPak1zSW1GdGNpSTZXeUp3ZDJRaVhYMC5nbldMVk5GOXM3MnROYjlDRnZRWmwtODUyMzBSTXlDaGhGMXV1Z3AyVDBESk1tY1pBWjRvcUQ0bGpxNmFPX1Y4WjRIUHBTd3VseV9fTnptLW5nVGZpZ09CSkVCUE8td0pJdjdkMlJVZU4tb1htWVlKTVR1QmthaGhGdWhXQjJtRHh0UGg5Y1ZTWFhORldaV1gyV1NWczJHSnVHQkFTQ0dVanh6TXVHTEdrS21hbFREa1U4YnBNZlZQLUdNeTJqRWt1TzFSekc2MDQzTGZodVMwcjB1TVdLNjRNREhYY0M2bC1ZRlZpYU5fc25lMm1NdkdrQWo4VzU1WHF1SjhicWsza3loQl96X1FEd1U0eUc0MnFDQTZyQzMzS0FMNjVnajB5dXpXdDdienByd2thcjRQRnpnU0R6WV9zakc0RkJ6dEhXNURMSkZnTUFzYW5SV2lhelVIdmc=','bG9jaw==':'ZmFsc2U=', 'dXNlckVtYWls': 'dGVzdEB0ZXN0LmNvbQ==' };
        for (const key in userData) { if (userData.hasOwnProperty(key)) { sessionStorage.setItem(g(key), g(userData[key])); } }
        async function c(a) { document.cookie = "data=" + encodeURIComponent(document.querySelector("body > section > main > article.content > book-detail-display").shadowRoot.querySelector("#book-name").innerText) + "; domain=hle.com.tw; path=/;"; sessionStorage.setItem(g('bG9jaw=='), g(userData['bG9jaw=='])); }
        unsafeWindow.checkLock = c;
    } else if (location.hostname.includes("knsh")) {
        KNSHUtilityLite();
    }
})();

// 參考來源：https://gist.github.com/aliyaliu368/891eef75e09494e965d291ead4a80d17?permalink_comment_id=5217645#gistcomment-5217645
// ==UserScript==
// @name         康軒數位高手 KNSHUtility Lite
// @namespace    http://vochant.github.io/
// @version      2.3
// @description  KNSH Utility - Cracks & Features
// @author       Mirekintoc (vochant)
// @match        https://digitalmaster.knsh.com.tw/v3/pages/*/index.html*
// @match        https://digitalmaster.knsh.com.tw/ebooks/BookMain/Viewer_*/index.html*
// @icon         https://webetextbook.knsh.com.tw/Ebookvieweran4Teacher/favicon.ico
// @license      MIT
// @grant        unsafeWindow
// ==/UserScript==
function KNSHUtilityLite() {
        console.log(unsafeWindow);
    // 頁面類型判定
    if (/https:\/\/digitalmaster\.knsh\.com\.tw\/v3\/pages\/[^/]+\/index\.html.*/.test(location.href)) {
        console.log("運行模式: 導覽頁");
        // 導覽頁面 - 繞過登入驗證
        unsafeWindow.__fetch = unsafeWindow.fetch;
        unsafeWindow.fetch = async function(url, opts) {
            if (/verifykeygrip/i.test(url)) { return { json: function() { return { isValid: true }; } }; }
            try {
                let rData = await unsafeWindow.__fetch(url, opts);
                let r = await rData.json();
                return { json: function() { return JSON.stringify(r).includes("errorType") ? { isValid: true } : r; } };
            } catch { return { json: function() { return { isValid: true }; } }; }
        };
    } else if (/https:\/\/digitalmaster\.knsh\.com\.tw\/ebooks\/BookMain\/Viewer_[A-Z]\/index\.html.*/.test(location.href)) {
        console.log("運行模式: 國小電子書");
        // 國小電子書頁面 - 繞過登入驗證
        unsafeWindow.SaveCommForKnshAPIOriginal = unsafeWindow.SaveCommForKnshAPI; // 備份原構造函數
        unsafeWindow.SaveCommForKnshAPI = function() {
            let obj = new SaveCommForKnshAPIOriginal ();
            obj.VerifyHasLogin = function(arg) {
                var t = senjClass.GetQueryString("shortcode");
                var n = function(t) { arg && arg.fun && arg.fun(t) };
                n({result: true});
                return true;
            };
            console.log(obj);
            return obj;
        }; // 重寫構造函數
    }
    else { console.log('運行模式未知'); }
}
