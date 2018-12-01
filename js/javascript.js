var saat1 = document.getElementById('saat');
var deqiqe1 = document.getElementById('deqiqe');
var saniye1 = document.getElementById('saniye');

function initClock() {
	var date = new Date();
	var hour = date.getHours() % 12;
	var minute = date.getMinutes();
	var second = date.getSeconds();

	var saatdeg = (hour * 30) + (0.5 * minute);
	var deqiqedeg = (minute * 6) + (0.1 * second);
	var saniyedeg = second * 6;

	saat1.style.transform = 'rotate(' + saatdeg + 'deg)';
	deqiqe1.style.transform = 'rotate(' + deqiqedeg + 'deg)';
	saniye1.style.transform = 'rotate(' + saniyedeg + 'deg)';

	setTimeout(initClock, 1000);
};

initClock();