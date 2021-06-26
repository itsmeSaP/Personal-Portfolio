const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Bibliophile",
				weight: 10
			}, {
				text: "css3",
				weight: 8.7
			}, {
				text: "javascript",
				weight: 11.5
			}, {
				text: "Machine learning",
				weight: 10.5
			}, {
				text: "Algorithms",
				weight: 7
			}, {
				text: "python",
				weight: 10
			}, {
				text: "Cpp",
				weight: 12
			}, {
				text: "Html",
				weight: 8
			}, {
				text: "Micro-controllers",
				weight: 9
			},{
				text: "Netflix",
				weight: 8
			},{
				text: "Anime",
				weight: 10
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 150});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"a Full-Stack Web Developer.", "a Learner.","a Dreamer.", " also an Otaku.","a Coder."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
