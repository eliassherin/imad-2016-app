//console.log('Loaded!');

//change the test of main-text div
//var element=document.getElementById('main-text');
//element.innerHTML="New Value";

//move the image
//var img=document.getElementById('madi');
//var marginLeft=0;
//function moveRight()
//{
 //   marginLeft=marginLeft+1;
  //  img.style.marginLeft= marginLeft + "px" ;
//}
//img.onclick = function()
//{
 //   var interval=setInterval(moveRight,50);
    
//};


//counter code
var button=document.getElementById('counter');
var counter=0;
button.onClick=function()
{
    
    
   // var request=new XMLHttpRequest();
    
  //  request.onreadystatechange=function()
    //{
     //  if(request.readystate===XMLHttpRequest.DONE)
      // {
        //  if(request.status===200)
          //{
            //  var counter=request.responseText;
              var span=document.getElementById('count');
                span.innerHTML=counter.toString();
          //}
      // }
    //};
    
    //request.open("GET","http://eliassherin.imad.hasura-app.io/counter",true);
    //request.send(null);
};