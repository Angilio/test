$( document ).ready(function() {
    $( "#autocomplete" ).autocomplete({
        source: function( request, response ) {
            $.ajax({
                url: "/src/product/ajax.php",
                type: 'post',
                //asink:false : raha ohatra koa tsy mandeha firefox ty solution
                dataType: "json",
                data: {
                    name: request.term
                },
                success: function( data ) {
                    response( data );
                }
            });
        },
        select: function (event, ui) {
            $('#autocomplete').val(ui.food.label);
            return false;
        }
    });
});