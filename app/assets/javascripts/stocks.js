var init_stocks_lookup;

init_stocks_lookup = function(){

$('#stock-lookup-form').on('ajax:success', function(event, data, status){

$('#stock-lookup').replaceWith(data);

init_stocks_lookup();

$('#stock-lookup-form').on('ajax:error', function(event, xhr, status, error){

$('#stock-lookup-results').replaceWith('');

$('#stock-lookup-errors').replaceWith('Stock was not found.');

});

 
})

}
$(document).ready(function() {

init_stocks_lookup();


})
