jQuery(function($){

    // показать список товаров при первой загрузке 
    showProducts();

});

// функция для показа списка товаров 
function showProducts(){

}

// при нажатии кнопки 
$(document).on('click', '.read-products-button', function(){
    showProducts();
});


// получить список товаров из API 
$.getJSON("http://rest-api/api/product/read.php", function(data){

});