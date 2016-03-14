$(document).ready(function(){
  console.log('Doc is ready!');

  // var $target = $('div');
  // $target.fadeOut('fast');

  // $div1 = $('div#one');
  // $div2 = $('div#two');
  // $p = $("<p>foo hello1</p>");
  // $div1.after($p);
  // $div2.after($p);
// remove <p> tag from the html document
  // $p.remove();

  $('#text').click(function(){
    console.log("clicked");
    $(this).addClass('highlighted');
  });

  $('#fade2').click(function(){
    console.log("fadeTo...");
  $('.green, .blue').fadeTo('fast', 0.33, function(){
    console.log('Animation complete.');
  });
  });



});
