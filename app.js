$(document).ready(function(){
  console.log('Doc is ready!');

  // var $target = $('div');
  // $target.fadeOut('fast');

  $div1 = $('div#one');
  $div2 = $('div#two');
  $p = $("<p>foo hello1</p>");
  $div1.after($p);
  $div2.after($p);
// remove <p> tag from the html document
  $p.remove();

});
