

function test1Ctrl($scope) {

}

app.directive("myDirective1", function(){
 return {
   scope: {},
   templateUrl: "./1.html",
   controller: test1Ctrl
  };
});
