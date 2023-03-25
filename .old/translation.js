var translation_dict = {}

function load_translation_file() {
	return fetch('translations.json')
	.then(function(response) {
		if (!response.ok) {
			throw new Error('Failed to load translations');
		}
		return response.json();
	})
	.then(function(raw_data) {
		translation_dict = raw_data
	})
	.catch(function(error) {
		console.error(error);
	});

}
function getTranslation(key, language) {
	var t = translation_dict[key]
	
	if (key == undefined || t == undefined || language == undefined) {
		console.error(translation_dict)
		throw TypeError("the key '" + String(key) + "' with language '" + String(language) + "' gave the following value: " + String(t) + "\nthe full translation dictionary has already been printed")
	}

	if (typeof t == "string") {
		return t
	}
	else {
		return t[language]
	}
}

//TODO: funzione riceve lingua in cui tradurre invece di dover cercare
function translatepage(language) {
	var elements = document.querySelectorAll('[translation_id]');

	for (var i = 0; i < elements.length; i++) {
		var key = elements[i].getAttribute("translation_id");
		var translation = getTranslation(key, language);
		elements[i].textContent = translation;
	}
}
