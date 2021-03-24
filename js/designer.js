jQuery(document).ready( function (){

    jQuery('#width').on('change', function() {
        jQuery('#widthPreviewDisplay').html(jQuery('#width').val());
    });

    jQuery('#length').on('change', function() {
        jQuery('#lengthPreviewDisplay').html(jQuery('#length').val());
    });

    var pattern = jQuery('#pattern').val();
    var patternArray = pattern.split(" ");
    var arrayLength = patternArray.length;
    for (var i = 0; i < arrayLength; i++ ) {
        jQuery("#preview").append('<div class="row"><div class="strip">' + patternArray[i] + '</div></div>');
        
        
    }
});

