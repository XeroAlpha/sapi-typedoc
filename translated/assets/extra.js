function toogleTranslation() {
    if (location.href.includes('sapi/original/')) {
        location.href = location.href.replace('sapi/original/', 'sapi/');
    } else {
        location.href = location.href.replace('sapi/', 'sapi/original/');
    }
}