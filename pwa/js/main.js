/* MAIN */

// Detects if device is on iOS
const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test( userAgent );
}
// Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

// Checks if should display install popup notification:
if (isIos() && !isInStandaloneMode()) {
    this.setState({ showInstallMessage: true });
}
function isNumber (value) {
    return typeof value === 'number' && isFinite(value);
}

function inputScreenChangeWaterCount(value){
    if(isNumber(value)){
        var waterCountInput = document.getElementById('input-screen-water-count');
        var waterCount = parseInt(waterCountInput.value);
        waterCount += value;
        if(waterCount < 0){
            waterCount = 0;
        }
        waterCountInput.value = waterCount;
    }

}