import $ from 'jquery';

import './less/style.less';

$(function() {
    $('ul li:nth-child(odd)').css('backgroundColor', 'green');
    $('ul li:nth-child(even)').css('backgroundColor', 'pink');
});