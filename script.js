// JavaScript Sample 

// body の背景色を変える 
function MyFunction01() { 
  var obj = document.body; 
  obj.style.backgroundColor = 'gray'; 
} 

// ID要素 の背景色を変える 
function MyFunction02() { 
  var obj = document.getElementById('id01'); 
  obj.style.backgroundColor = 'orange'; 
} 

// CLASS要素 の背景色を変える 
function MyFunction03() { 
  var lines = document.getElementsByClassName('class01'); 
    for( var i=0; i<lines.length; i++ ){ 
      lines[i].style.backgroundColor = 'green'; 
    } 
} 

// HTML要素 の背景色を変える 
function MyFunction04() { 
  var obj = document.getElementsByTagName("p");  
    for( var i=0; i<obj.length; i++ ) { 
      obj[i].style.backgroundColor = "blue";  
  } 
} 