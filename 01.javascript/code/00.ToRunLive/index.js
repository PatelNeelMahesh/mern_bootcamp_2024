console.log("Run JavaScript Code Here.");
var username="Haider";
      var no = `Username is ${username} bye`;
      console.log(no);

function m(x=2,y=3){
    return x*y;
}
const p = m(4,5);
console.log(p);


(function () {
    var privateVar = "I am private";
    function privateFunction() {
      console.log(privateVar);
    }
  
    window.publicFunction = function () {
      privateFunction();
    };
  })();

  (function() {
    var mes="yo .......";
    console.log(mes);
  })();
  
  // Using the publicly exposed function
  window.publicFunction(); // Logs: 'I am private'


  function outer(){
    var nu=10;
    function inner()
    {
        var nu = 100;
        console.log(nu);
    }
    inner();
  }
  outer();
//   console.log(nu);