import $ from 'jquery';

import './css/style.css';

$(function() {
    $('ul li:nth-child(odd)').css('backgroundColor', 'green');
    $('ul li:nth-child(even)').css('backgroundColor', 'pink');
});
class Person {
    static info = 'hello'
}
console.log(Person.info);