
function SetCookie(name, value) {
	document.cookie = name + "=" + value
}

function GetCookie(name) {
	let full_name = name + "=";
	let all_cookies = decodeURIComponent(document.cookie).split(';');

	for (let i = 0; i < all_cookies.length; i++) {
		let cookie = all_cookies[i];
		while (cookie.charAt(0) == ' ') {
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(full_name) == 0) {
			return cookie.substring(full_name.length, cookie.length);
		}
	}

	return null;
}

function DeleteCookie(name) {

	value = GetCookie(name)

	document.cookie = name + "="

	return value

}
