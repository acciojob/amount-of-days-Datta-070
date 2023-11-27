//your JS code here. If required.
function daysOfAYear(date){
	if(date%4 == 0 && date%100 != 0 || date%400 == 0){
		return 366;
	}
	return 365;
}
let date = prompt("Enter the Year");
alert(daysOfAYear(date));