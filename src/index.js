import $ from 'jquery';

import './scss/style.scss';

$(function() {
    $('ul li:nth-child(odd)').css('backgroundColor', 'green');
    $('ul li:nth-child(even)').css('backgroundColor', 'pink');
});

