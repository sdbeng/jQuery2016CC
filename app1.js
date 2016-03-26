$(document).ready(function(){
  console.log('Doc is ready! - serving app1.js...');

  // var $target = $('div');
  // $target.fadeOut('fast');

  // $div1 = $('div#one');
  // $div2 = $('div#two');
  // $p = $("<p>foo hello1</p>");
  // $div1.after($p);
  // $div2.after($p);
// remove <p> tag from the html document
  // $p.remove();

  // $('#text').click(function(){
  //   console.log("clicked");
  //   $(this).addClass('highlighted');
  // });
  //
  // $('#fade2').click(function(){
  //   console.log("fadeTo...");
  // $('.green, .blue').fadeTo('fast', 0.33, function(){
  //   console.log('Animation complete.');
  // });
  // });
//Todo list mini project
  // $('#button').click(function(){
  //       console.log('Todo list btn clicked...');
  //       var toAdd = $('input[name=checkListItem]').val();
  //       // var appenditem ='<div class="item">' + toAdd + '</div>';
  //       $('.list').append('<div class="item">' + toAdd + '</div>');
  //   });
  //
  //   //remove item (check off list)
  //   $(document).on('click', '.item', function(){
  //     console.log('removing an item...');
  //       $(this).remove();
  //   });

  //exercise
  // $('div').append("<p>This is a paragraph.</p>");

  //find what value is returned
  // var valuereturned = $('input:checkbox:checked').val();
  // var data = $('div').append(valuereturned);
  // console.log(data);

// move (not copy) the paragraph after the div in the following code
  // $('#target').after($("#para"));

  //toggleClass
  // $('#text').click(function(){
  //   $('#text').toggleClass('highlighted');
  //   });

    //set height on a div using css
    // $("div").height("100px"); or $("div").css("height", "100px"); would both work equally well.

    //////////////////////////////////
    //.focus() - set focus input outline to red
    $('input').focus(function(){
      $(this).css('outline-color','#ff0000');
    });


});
