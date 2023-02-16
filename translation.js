var translation_dict = {}

function load_translation_file() {
	return fetch('translations.json')
	.then(function(response) {
		if (!response.ok) {
			throw new Error('Failed to load translations');
		}
			return response.json();
		}
	)
	.then(function(raw_data) {
		//TODO
	})
	.catch(function(error) {
		console.error(error);
	});

}

//TODO: funzione riceve lingua in cui tradurre invece di dover cercare
function translatepage() {
	var language = document.getElementById('language-selector').value;
	var elements = document.querySelectorAll('[data-translate]');

	for (var i = 0; i < elements.length; i++) {
		var key = elements[i].value;
		var translation = getTranslation(key, language);
		elements[i].textContent = translation;
	}
}
