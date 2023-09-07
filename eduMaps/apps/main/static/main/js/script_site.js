function switchLanguage(lang) {

let elements = document.querySelectorAll('[data-lang]');

elements.forEach(function(element) {

let translations = {
    'ru': {
        'map_title': 'Интерактивная карта образовательных учреждений Чеченской Республики',
        'select_region': 'Выбрать район:',
        'institution_type': 'Тип учреждения:',
        'education_level': 'Уровень образования:'
    },
    'en': {
        'map_title': 'Interactive map of educational institutions in the Chechen Republic',
        'select_region': 'Select a region:',
        'institution_type': 'Institution type:',
        'education_level': 'Education level:'
    }
};

let translation = translations[lang][element.getAttribute('data-lang')];
if (translation) {
    element.textContent = translation;
}
});

let toggles = document.querySelectorAll('.language-toggle span');
toggles.forEach(function(toggle) {
    toggle.classList.remove('active');
});

document.querySelector('.language-toggle .' + lang).classList.add('active');
}

// document.getElementById('apply-filters').addEventListener('click', function() {
// // ваш код для применения фильтров
// });