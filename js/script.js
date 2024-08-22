$(document).ready(function(){

       // example1
	 $('#alertshow').on('click', function(){
		alert("Hello");
	});

	// example2
	$('#btnh').on('click', function(){
		$('#loren').hide();
	});
	// example3
	$('#btns').on('click', function(){
		$('#loren').show();

	});
	// example4
	$('#btnt').on('click', function(){
		$('#loren3').toggle();

	});
	// example5
	$('#loren4, #loren5, #loren6, #loren7').on('click', function(){
		$(this).hide();

	});
	// example6
	$('#fadeo').on('click', function(){
		$('#ipsa1').fadeOut();

	});
	// example7
	$('#fadei').on('click', function(){
		$('#ipsa1').fadeIn();

	});
	// example8
		$('#fadet1').on('click', function(){
		$('#ipsa2').fadeToggle();

	});
		$('#loren8, #loren9, #loren10, #loren11').on('click', function(){
		$(this).slideUp();
    });


		
	    $( "#dolor1" ).hide();
        $( "a" ).on( "click", function( event ) {
          event.preventDefault();
        $( this ).hide();
    });


        $('.dolor3').on('click', function(){
        	$('#dolor4, #dolor5').hide();


        });


        $('#heder').on('click', function(){
        	$("span:last-child").hide('fast', function(){
        		$(this).prev().hide('fast', arguments.callee);
        	});
        });

        $('#heder1').on('click', function(){
        	$('span').show(2000);

        });

        $('#somit').on('click', function(){
        	$('ul li:first-child').hide();
        });
        $('#somit1').on('click', function(){
        	$('ul li:first-child').show();
        });
            // example13 
        $('#somit2').on('click', function(){
        	$('[href]').hide();
        });
          $('#somit3').on('click', function(){
        	$('[href]').show();
        });
               // example14
             $('#somit4').on('click', function(){
        	$('a[target="_blank"]').hide();
        });

            $('#somit5').on('click', function(){
        	$('a[target="_blank"]').show();
        });
             // example15
            $('#somit6').on('click', function(){
        	$('a[target!="_blank"]').hide();
        });
            $('#somit7').on('click', function(){
        	$('a[target!="_blank"]').show();
        });

           // example16
        $('#demo, #demo1, #demo2').on('click', function(){
        	$(this).hide();
        });
        // example17
         $('#demo3, #demo4, #demo5').on('dblclick', function(){
        	$(this).hide();
        });

        // example18
         $('#demo').off('mouseenter', function(){
         	alert('You entered demo!');
         });

         // example19
         $("input").focus(function(){
         	$(this).css("background-color", "yellow");
         });
         $("input").blur(function(){
         	$(this).css("background-color", "green");
         });
         // example20
         $('#demo10').on('click', function(){
         	$('#demo11').fadeTo('slow', 0.15);
         	$('#demo12').fadeTo('slow', 0.4);
         	$('#demo13').fadeTo('slow', 0.7);

         });
         // example21
         $('#flip').on('click', function(){
         	$('#panel').slideDown();
         });
             // example22
         $('#flip1').on('click', function(){
         	$('#panel1').slideUp();
         });
               // example23
         $('#flip2').on('click', function(){
         	$('#panel2').slideToggle();
         });
         // example24
         $('#demo14').on('click', function(){
         	$('#flip3').animate({left: '600px'});
         });

           // example25
         $('#demo15').on('click', function(){
         	$('#flip4').animate({left: '600px', opacity: '0.4', hight: '150px', width: '150px'});
         });
            // example26
         $('#demo16').on('click', function(){
         	$('#flip5').animate({left: '600px', hight: '+=150px', width: '+=150px'});
         });
              // example27
         $('#demo17').on('click', function(){
         	$('#flip6').animate({height: 'toggle'});
         });
         // example28
         $('#demo18').on('click', function(){
         	var loren = $('#loren22');
         	loren.animate({height: "300px", opacity: "0.4"}, "slow");
         	loren.animate({width: "300px", opacity: "0.8"}, "slow");
         	loren.animate({height: "100px", opacity: "0.4"}, "slow");
         	loren.animate({width: "100px", opacity: "0.8"}, "slow");
         });
         // example29

         $('#flipp').on('click', function(){
         	$('#panela').slideDown(5000);
         });
        
         $('#stop').on('click', function(){
         	$('#panela').stop();
         });
         // example30
         $('#flipp1').on('click', function(){
         	$('#para').hide('slow', function(){
         		alert('This is a paragraph with little content.');
         	});
         });
          // example31

         $('#flipp2').on('click', function(){
         	$('#para1').hide(1000);
         	alert("This is a paragraph with little content.");
         });
         $('#flipp3').on('click', function(){
         	$('#para2').slideUp(2000).slideDown(2000);
         });

         $('#btn1').on('click', function(){
         	$('#test1').text("Hello World");
         });
         $('#btn2').on('click', function(){
         	$('#test2').html("Hello World");
         });
         $('#btn3').on('click', function(){
         	$('#test3').val("Hello Bangladesh");
         });
             $('#loren1111').on('click', function(){
         	$('#w3s').attr("href", "https://www.w3schools.com/jquery/");
         });

                $('#btn4').on('click', function(){
         	$('#loren13, loren14').append("Append text");
         });
              $('#btn5').on('click', function(){
         	$('#loren12').append("<li>Appended item</li>");
         });
             $('#btn6').on('click', function(){
         	$('#loren16, loren14').prepend("Append text");
         });
              $('#btn7').on('click', function(){
         	$('#loren15').prepend("<li>Appended item</li>");
         });
              $('#btn8').on('click', function(){
         	$('img').after("<li>After-text</li>");
         });
               $('#btn9').on('click', function(){
         	$('img').before("<li>before-text</li>");
         });

             $('#loren18').on('click', function(){
         	$('#loren21').remove();
         });
            $('#loren23').on('click', function(){
         	$('#loren24').empty();
         });

            $('#loren25').on('click', function(){
         	$('#nirob, #nirob1, #nirob2, #nirob3').addClass('blue');
         	$('#nirob4').addClass('important');
         });

              $('#loren26').on('click', function(){
         	$('#nirob5, #nirob6, #nirob7').removeClass('blue1');
         	
         });








         















});