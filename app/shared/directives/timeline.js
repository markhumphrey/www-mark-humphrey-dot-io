
 module.exports = function(MODULE_ROOT, $window) {

   // https://dev.twitter.com/web/embedded-timelines
   // https://dev.twitter.com/web/javascript/loading
   function twttr(d, s, id) {
     var js, fjs = d.getElementsByTagName(s)[0],
       t = window.twttr || {};
     if (d.getElementById(id)) return t;
     js = d.createElement(s);
     js.id = id;
     js.src = "https://platform.twitter.com/widgets.js";
     fjs.parentNode.insertBefore(js, fjs);

     t._e = [];
     t.ready = function(f) {
       t._e.push(f);
     };

     return t;
   }

   function link(scope, element, attrs) {
     element.bind('$destroy', function() {
       var twitterScriptEl = angular.element(document.querySelector('#twitter-wjs'));
       twitterScriptEl.remove();
     });
     twttr(document, "script", "twitter-wjs");
   }

   return {
     templateUrl: MODULE_ROOT + 'views/timeline.html',
     link : link,
   };
 };
