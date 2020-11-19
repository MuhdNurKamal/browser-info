export function getBrowserInfo() {
    if (!navigator || !navigator.userAgent) {
        return ""
    }
    var userAgent = navigator.userAgent;
    var matches = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    var temp;

    if (/trident/i.test(matches[1])) {
        temp = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
        return {
            name: 'IE',
            version: parseInt(temp[1])
        }
    }
    if (matches[1] === 'Chrome') {
        temp = userAgent.match(/\b(OPR|Edge)\/(\d+)/);
        if (temp != null) {
            return {
                name: temp[0],
                version: parseInt(temp[1])
            }
        }
    }
    matches = matches[2] ? [matches[1], matches[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((temp = userAgent.match(/version\/(\d+)/i)) != null) matches.splice(1, 1, temp[1]);
    return {
        name: matches[0],
        version: parseInt(matches[1])
    }
}

export function getNavigator() {
    const x = {
        userAgent: navigator.userAgent,
        appVersion: navigator.appVersion,
        appName: navigator.appName,
    }
    return x;
}
