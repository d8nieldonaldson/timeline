'use strict';

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            console.log('left');
            hideList(segments);
            break;
        case 38:
            console.log('up');
            //moveViewMaster('up', yAmt);
            break;
        case 39:
            console.log('right');
            showList(segments);
            break;
        case 40:
            console.log('down');
            //moveViewMaster('down', yAmt);
            break;
        case 32:
            console.log('space');
            //togglePlay(video[0]);
            break;
        case 13:
            console.log('enter');
            //toggleApp();
            break;
        case 79:
            //toggleApp();
    }
    return false;
};
