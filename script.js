function main(hour, minute) {
	var time = "";
	while (hour <= 23) {
		if (hour < 10) {
			time += "0" + hour + " : ";
		} else {
			time += hour + " : ";
		}
		while (minute < 59) {
			if (minute < 10) {
				time += "0" + minute;

				minute++;
			} else {
				time += minute;
				minute++;
			}
		}

		hour++;
		minute = 0;
		console.log(time);
	}
}
main(8, 5);
