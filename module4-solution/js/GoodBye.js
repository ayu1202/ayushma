(function (window){
    var bye = {};
    var Word = "Good Bye";
    
    bye.speak = function (names) {
      console.log(Word + " " + names);
    }
     
     window.bye = bye;
    })(window);