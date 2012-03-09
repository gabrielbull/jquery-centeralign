# jQuery Center Align

Align an element to the center of the screen.

## Example Usage

`$('#element').centeralign();`

You can specify if whether you want the horizontal or the vertical alignment, like in this example:

`$('#element').centeralign({'vertical': false});`
`$('#element').centeralign({'horizontal': false});`

## Use it with flexbox and Modernizr

Vertical alignment has become a child's game with the introduction of flexbox. Unfortunatly, not all modern browsers support flexbox yet. If you are using Modernizr you can detect wheter or not the browser supports flexbox and load jQuery.centerAlign only if it doesn't. For this, consider this example:

`Modernizr.load([
  {
    test : Modernizr.flexbox,
    nope : 'js/libs/jquery.centeralign.min.js', 
    complete : function () {
      if(!Modernizr.flexbox) {
          $("#box").centeralign();
      }
    }
  }
]);`