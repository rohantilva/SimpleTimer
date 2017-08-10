function Stopwatch(elem) {
	var time = 0;
	var interval;
	var offset;
	this.on = false;

	function update() {
		if (this.on) {
			time += delta();
		}
		var formattedTime = timeFormatter(time)
		elem.textContent = formattedTime;
	}

	function delta () {
		var now = Date.now();
		var timePassed = now - offset;
		offset = now;
		return timePassed;
	}

	function timeFormatter(timeInMilliseconds) {
		var time = new Date(timeInMilliseconds);
		var minutes = time.getMinutes().toString();
		var seconds = time.getSeconds().toString();
		var milliseconds = time.getMilliseconds().toString();

		if (minutes.length < 2) {
			minutes = '0' + minutes;
		}

		if (seconds.length < 2) {
			seconds = '0' + seconds;
		}
		while (milliseconds.length < 3) {
			milliseconds = '0' + milliseconds;
		}
		return minutes + " : " + seconds + " . " + milliseconds;
	}

	this.start = function() {
		if (!this.on) {
			interval = setInterval(update.bind(this), 10);
			offset = Date.now();
			this.on = true;
		}
	};

	this.stop = function() {
		if (this.on) {
			clearInterval(interval);
			interval = null;
			this.on = false;
		}
	};

	this.reset = function() {
		time = 0;
		update();
	};
}
