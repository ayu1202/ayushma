(function (window) {  
    var hello = {};
    var Word = "Hello";
    
    hello.speak = function (names) {
      console.log(Word + " " + names);
    }
        window.hello = hello;
    })(window);