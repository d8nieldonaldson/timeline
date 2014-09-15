'use strict';

var segmentList = document.querySelector('.segment-list');
var segment = document.querySelectorAll('.segment');

var showProgress = function(){

    var progress = new WebKitCSSMatrix(window.getComputedStyle(segmentList).webkitTransform).m41;
    progress = Math.abs(progress);
    if(progress >= 100 && progress < 200){
      console.log('first');
      segment[0].style.display = 'none';
    }else if(progress >= 200 && progress < 300){
      console.log('second');
      segment[1].style.display = 'none';
    }else if(progress >= 300 && progress < 400){
      console.log('third');
      segment[2].style.display = 'none';
    }else if(progress >= 400 && progress < 500){
      console.log('fourth');
      segment[3].style.display = 'none';
    }else if(progress >= 500){
      console.log('fifth and last');
      segment[4].style.display = 'none';
    }
    console.log('progress: ' + progress);
};

//var timerId = setTimeout(function() { alert(1) }, 1000);

//clearTimeout(timerId);

//var hitSegments = setInterval(showProgress, 5);
