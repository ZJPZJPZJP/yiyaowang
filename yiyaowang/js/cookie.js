function setcookie(key, value, days) {
	var d1 = new Date();
	d1.setDate(d1.getDate() + days);
	document.cookie = key + '=' + value + ';expires=' + d1;
}

function getcookie(key) {
	var arr = document.cookie.split('; ');
	for (var i = 0; i < arr.length; i++) {
		var newarr = arr[i].split('=');
		if (key == newarr[0]) {
			return newarr[1];
		}
	}
}

function delcookie(key) {
	setcookie(key, '', -1);
}


// var cookie = {
// 	set: function (key, value, days) {
// 		var d1 = new Date();
// 		d1.setDate(d1.getDate() + days);
// 		document.cookie = key + '=' + value + ';expires=' + d1;
// 	},
// 	get: function (key) {
// 		var arr = document.cookie.split('; ');
// 		for (var i = 0; i < arr.length; i++) {
// 			var newarr = arr[i].split('=');
// 			if (key == newarr[0]) {
// 				return newarr[1];
// 			}
// 		}
// 	},
// 	remove: function (key) {
// 		cookie.set(key, '', -1);
// 	}
// }