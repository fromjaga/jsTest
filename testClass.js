(function(window){

  function testClass(){
    console.log("js is loaded");
    this.myMethod();
  }

  testClass.prototype.myMethod=function(){
    console.log("method tested");
    for (var i = 0; i < 11; i ++) {
    document.write( "<div id='btn' onmouseover=changeBgColor(); style='display:inline-block; width: 120px; height:21px; background:#ff0000; marign-left:10px'>div Number"+i+"</div>"); }
  }
  testClass.prototype.getBtnId=function(element){
    return element;
  }


  window.testClass=testClass;

}(window));
