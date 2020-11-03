export function getBrowserInfo() {
    var userAgent = navigator.userAgent, temp,
        matches = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(matches[1])) {
        temp = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
        return 'IE ' + (temp[1] || '');
    }
    if (matches[1] === 'Chrome') {
        temp = userAgent.match(/\b(OPR|Edge)\/(\d+)/);
        if (temp != null) return temp.slice(1).join(' ').replace('OPR', 'Opera');
    }
    matches = matches[2] ? [matches[1], matches[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((temp = userAgent.match(/version\/(\d+)/i)) != null) matches.splice(1, 1, temp[1]);
    return matches.join(' ');
}