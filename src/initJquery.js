// Before kendo-ui library loads, set jQuery global so it can see it
var jQuery = typeof jQuery !== 'undefined'
    ? jQuery
    : window['$'];
console.log('jQuery global is now set, using jQuery.fn.jquery:',jQuery.fn.jquery);