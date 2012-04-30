/**
 * jQuery.centerAlign
 * Dual licensed under MIT and GPL.
 * Date: 03/09/2012
 * @author Gabriel Bull
 * @version 0.1
 *
 * https://github.com/gavroche/jquery-centeralign
 */

(function($) {
   "use strict";
   var methods = {
		/* Init plugin */
		init : function( options ) {
			return this.each(function(){
                var settings = $.extend({
                    'horizontal': true, 
                    'vertical': true
				}, options);
                
				var position = $(this).css('position');
                if (position!=='absolute' && position!=='relative' && position!=='fixed') {
                    $(this).css('position', 'relative');
                }
                
				if (settings.vertical) {
					$(this).css('top', ((($(document.body).height()/2) - ($(this).height() / 2))+'px'));
				}
				if (settings.horizontal) {
					$(this).css('left', ((($(document.body).width()/2) - ($(this).width() / 2))+'px'));
				}
			});
		}
	};

	$.fn.centeralign = function( method ) {
		// Method calling logic
		if (methods[method]) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.uploader' );
		}
	};

})(jQuery);