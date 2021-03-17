$( function() {
  $( ".section-questions__list" ).accordion({
    icons: false,
    heightStyle: 'content',
    collapsible: true,
    active: true,
    header: '> .section-questions__item > .section-questions__wrapper-subtitle'
  })
} );
