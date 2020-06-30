function numDishes(n, dish) {
	var array = 1;
	var beginningDetergent = 750 * n;
	var totalDetergentUsed = 0;
	var plateValue = 5;
	var potValue = 15;
	var totalPots = 0;
	var totalPlates = 0;
	var i = 0;
	var dtu = 0;

	while (dish[i] != "End") {
		if (i / 3 == 0) {
			dtu = 5;
		} else {
			dtu = 15;
		}
		i++;

		console.log(dtu);
	}
}

numDishes(2, [53, 65, 55, "End"]);
