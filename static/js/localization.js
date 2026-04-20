$(document).ready(function() {
  var i18nOpts = {
    lng: 'en',
    fallbackLng: 'en',
    resGetPath: 'static/locales/__lng__.json'
  };

  var sections = [
    '.i18container',
    '#i18_navbar',
    '#i18_about_me',
    '#i18_skills',
    '#i18_projects',
    '#i18_career',
    '#i18_blog',
    '#i18_link'
  ];

  var translate = function() {
    sections.forEach(function(selector) {
      var $node = $(selector);
      if ($node.length && typeof $node.i18n === 'function') {
        $node.i18n();
      }
    });
  };

  var changeLanguage = function(locale) {
    if (window.i18n && typeof window.i18n.changeLanguage === 'function') {
      window.i18n.changeLanguage(locale).then(translate);
      return;
    }

    if (window.i18n && typeof window.i18n.setLng === 'function') {
      window.i18n.setLng(locale, translate);
    }
  };

  $("[id^=set_lang]").each(function() {
    var $this = $(this);
    $this.on('click', function() {
      changeLanguage($this.data('locale'));
    });
  });

  if (window.i18n && typeof window.i18n.init === 'function') {
    window.i18n.init(i18nOpts, translate);
  }
});
