'use strict';

var isHidden = false;
var segmentList = document.querySelector('.segment-list');
var segments = document.querySelectorAll('.segment');
var header = document.querySelector('.show-header');
var showMessage = function(){
  console.log('ended');
};

/*
segmentList.addEventListener('transitionend', function(){
  console.log('doing it');
  segmentList.classList.toggle('fresh');
  }, false);
*/

var setSegments = function(collection, time){

  var length = collection.length;
  var interval = time/length;
  console.log('length: ' + length + ' interval: ' + interval);

};


setSegments(segments, 500);

var hideList = function(el){

  //el.style.webkitTransform = 'translate3d(-' + amt + 'px, 0, 0)';
  //el.style.width = 0;
  Velocity(el,
    { width: 0 },
    { duration: 250,
      begin: function(elements) {
        console.log('begin!!!!!');
        },
      progress: function(elements, percentComplete, timeRemaining, timeStart) {
        console.log((percentComplete * 100) + "%");
        console.log(timeRemaining + "ms remaining!");
      },
      complete: function(elements) {
          console.log('begin!!!!!');
          var nodesArray = [].slice.call(elements);
          nodesArray.forEach(function(element){
            console.log('working');
            element.classList.add('closed');
          });
      }
    }
  );
  return;
};

var showList = function(el){

  //el.style.webkitTransform = 'translate3d(0,0,0)';
  //el.style.width = '100%';
  Velocity(el, { width: 100 }, {
    duration: 250,
    begin: function(elements) {
      console.log('begin!!!!!');
      var nodesArray = [].slice.call(elements);
      nodesArray.forEach(function(element){
        console.log('working');
        element.classList.remove('closed');
      });
      }
    });

  return;
};
