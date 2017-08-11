var timer = document.getElementById('clock');
var pressBtn = document.getElementById('press');
var resetBtn = document.getElementById('reset');

var watch = new Stopwatch(timer);

pressBtn.addEventListener('click', function() {
	if (watch.on) {
		watch.stop();
		pressBtn.textContent = 'Start';
	} else {
		watch.start();
		pressBtn.textContent = 'Stop';
	}
} );

resetBtn.addEventListener('click', function() {
	watch.reset();
} );