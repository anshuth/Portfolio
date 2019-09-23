var animationDone = false;

$(document).ready(function(){

	skrollr.init({
            forceHeight: false
        });

	createCounter(5, $("#visites .counter"));
	createCounter(5, $("#facebook_part .counter"));
	createCounter(5, $("#facebook_vis .counter"));
	createCounter(5, $("#twitter_part .counter"));
	createCounter(5, $("#twitter_vis .counter"));

	eventAtFocus($("#visites"), function(){
			applyToCounter("70000", $("#visites .counter")); 
			setTimeout(function(){
				$("#visites h2").fadeIn("slow")
			},2500) 
		});

	eventAtFocus($("#country"), function(){
			if(!animationDone){
				animationDone = true;
				setTimeout( function(){
					$("#largeMap").animate({opacity: 0}, 600, function(){
	  					$("#largeMap").attr("src","./images/countries_3_large.jpg");
	  				});
	  				$("#largeMap").animate({opacity: 1}, 600, function(){
		  				$("#squares").animate({opacity: 1}, 1000);
	  				})
				}, 1500)
				
			}
  			
	})

	eventAtFocus($("#social"), function(){
			applyToCounter("25364", $("#facebook_part .counter"));
			applyToCounter("43000", $("#facebook_vis .counter"));
			applyToCounter("6547", $("#twitter_part .counter"));
			applyToCounter("32500", $("#twitter_vis .counter"));
		});

	eventAtFocus($("#messages"), function(){
		$('#skull').jrumble();
		$('#skull').trigger('startRumble');

		bubbleHeart();
	})



	eventBewtween($("#country").offset().top+900, $("#country").offset().top+4900, animationsCountry);

})

function createCounter(size, div){

	var list = "<li>&nbsp;</li><li>9</li><li>8</li><li>7</li><li>6</li><li>5</li><li>4</li><li>3</li><li>2</li><li>1</li><li>0</li>"

	for (i=size; i>0; i--){
		div.append('<ul id="digit-'+i+'" class="digit">');
		div.append('</ul');
	}

	$(".digit").each(function(){
		$( this ).append(list);
	})

}

function initCounter(counter){
	var height = counter.find("li").height();

	for (i=6; i>=0; i--){
		counter.children("#digit-"+i).css("top", -9*height+"px");
	}
}

function applyToCounter(number, counter){

	var height = counter.find("li").height();

	for (i=1; i<=number.length; i++){
		counter.children("#digit-"+i).animate({ top:  (-10*height)+number[number.length-i]*height+"px"}, {duration: 2000+(i*30), easing: 'easeOutBounce'});
	}

}

/*function eventAtFocus(div, callback){
	$(window).scroll(function(e){
		e.preventDefault();
		var offset = div.offset();
		if($(window).scrollTop() > offset.top){
			e.preventDefault();
			callback();
		}
	})
}*/

function eventBewtween(from, to, callback){
	var difference = to - from;
	$(window).bind('scroll', function(e){
		e.preventDefault();
		if($(window).scrollTop() > from && $(window).scrollTop() < to)
			callback($(window).scrollTop() - from, "in")
		else if($(window).scrollTop() < from)
			callback($(window).scrollTop() - from, "before");
		else
			callback($(window).scrollTop() - from, "after");
	})
}

function animationsCountry(diff, state){

	if(state == "before"){

		$("#second").css("opacity", 0);
		$("#third").css("opacity", 0);

		$("#heads_text h3").html("1");
		
		$("#nuitsblanches #heads_text h5").css("opacity", 0);
		$("#nuitsblanches #heads_text span").css("opacity", 0);
		$("#nuitsblanches #mails").css("opacity", 0);

	}else if(state == "after"){

	}else{

		$("#country").css("margin-top", diff)

		if(diff > 0 && diff < 2000){
			$("#second").css("opacity", diff/1500);

			$("#heads_text h3").html("2");

			$("#nuitsblanches #heads_text h5").css("opacity", 0);
			$("#nuitsblanches #heads_text span").css("opacity", 0);
			$("#nuitsblanches #mails").css("opacity", 0);
		}
		if(diff > 2000 && diff < 3500){
			$("#third").css("opacity", diff/2500);

			$("#heads_text h3").html("3");
		}
		if(diff > 3500){
			$("#nuitsblanches #heads_text h5").css("opacity", (diff-2500)/1500);
			$("#nuitsblanches #heads_text span").css("opacity", (diff-2500)/1500);
			$("#nuitsblanches #mails").css("opacity", (diff-2500)/1500);
		}
	}
}

function bubbleHeart(){

	$('#love2').animate({marginTop: '-=80'}, 1000);
	$('#love2').animate({opacity: 0}, 450, function(){
		$(this).css("margin-top", "+=80");
		$(this).css("opacity", "1");
	});

	$('#love3').delay(100).animate({marginTop: '-=90'}, 950);
	$('#love3').animate({opacity: 0}, 450, function(){
		$(this).css("margin-top", "+=90");
		$(this).css("opacity", "1");
	});


	setTimeout(function() { bubbleHeart() }, 500)
}
