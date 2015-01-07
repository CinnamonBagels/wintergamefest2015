(function() {
	$(document).ready(function() {
		var themes = ['zelda', 'mario', 'league'];

		var theme = themes[Math.floor(Math.random() * 3)];
		switch(theme) {
			case 'zelda' :
				$('.container').prepend('<div id="zelda-foreground" class="parallax" data-id="zelda-foreground" data-start="0" data-stop="1500" data-speed="0.5">\
					<img src="./img/1_zelda/zelda_1.png" alt="" visibility="hidden" >\
					</div>');
				$('#zelda-foreground').scrollingParallax();
				$.scrollingParallax('./img/1_zelda/zelda_2.png');
				$.scrollingParallax('./img/1_zelda/zelda_3.png');
				// $.scrollingParallax('./img/2_mario/mario_5.png');
				break;
			case 'mario' :
				$('.container').prepend('<div id="mario-foreground" class="parallax" data-id="mario-foreground" data-start="3000" data-stop="5000" data-speed="0.5">\
					<img src="./img/2_mario/mario_1.png" alt="" visibility="hidden">\
					</div>');
				$('#mario-foreground').scrollingParallax();
				//$('#zelda-foreground').scrollingParallax();
				$.scrollingParallax('./img/2_mario/mario_2.png');
				$.scrollingParallax('./img/2_mario/mario_3.png');
				break;
			case 'league' :
				$('.container').prepend('<div id="league-foreground" class="parallax" data-id="league-foreground" data-start="2500" data-stop="3000" data-speed="0.5">\
				<img src="./img/3_league/league_1.png" alt="" visibility="hidden">\
			</div>');
				$('#league-foreground').scrollingParallax();
				$.scrollingParallax('./img/3_league/league_2.png');
				$.scrollingParallax('./img/3_league/league_3.png');

				// $.scrollingParallax('./img/2_mario/mario_5.png');
				break;
			default : 
				console.log('wtf did you do?');
				break;
		}
	});
})();