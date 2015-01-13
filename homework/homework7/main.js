function element() {
    this.value = [];
  
    this.width = function(a){
        var result = [];
        if (!a) {
          for (i = 0; i<this.length; i++)
            result = result.concat([(this.value[i].offsetWidth).toString()+"px"]);
          return result;
        }
        else
        {
          for (i = 0; i<this.length; i++)
            this.value[i].style.width = a;
          return this;
        }
      };
  
    this.height = function(a){
        var result = [];
        
        if (!a) {
          for (i = 0; i<this.length; i++)
            result = result.concat([(this.value[i].offsetHeight).toString()+"px"]);
          return result;
        }
        else
        {      
          for (i = 0; i<this.length; i++)
            this.value[i].style.height = a;
          return this;
        }
      };
  
   function setParametrs(thi,name,val,time){
      if (time)
         {
           switch (name)
           {
             case 'width':
                for (i = 0; i<thi.length; i++){
                  setTimeout(function(i){thi.value[i].style.width = val;},time,i);
                }
                break;
             case 'height':
                for (i = 0; i<thi.length; i++){
                  setTimeout(function(i){thi.value[i].style.height = val;},time,i);
                }
                break;
             case 'color':
                for (i = 0; i<thi.length; i++){
                  setTimeout(function(i){thi.value[i].style.color = val;},time,i);
                }
                break;
           }
         }
      else
         {
           console.log(name,parseInt(val));
           switch (name){
             case 'width':
                thi.width(val);
                break;
             case 'height':
                thi.height(val);
                break;
             case 'color':
                for (i = 0; i<thi.length; i++){
                      thi.value[i].style.color = val;
                }
                break;
           }              
         }  
    }
  
  
    this.css = function(a,b,c){
      var thi = this;
      if (typeof a === 'object') 
        Object.keys(a).map(function(curr){
          setParametrs(thi,curr,a[curr],c);
        });
      else
          setParametrs(thi,a,b,c);
      return this;
      };
}

function my_$(DOM){
  var a = new element();
  if (DOM)
    switch (DOM[0]) {   
      case '.':
        a.value = document.getElementsByClassName(DOM.slice(1));
        a.length = a.value.length;
        return a;
      
      case '#':
        a.value = [document.getElementById(DOM.slice(1))];
        a.length = a.value.length;
        return a;
      
      default:
        a.value = document.querySelectorAll(DOM);
        a.length = a.value.length;
        return a;
    }
  else
    return DOM;    
}
