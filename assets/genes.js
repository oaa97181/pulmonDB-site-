
  $(function() {
    var items = ["A1BG", "A1CF", "A2M", "A2ML1", "A3GALT2", "A4GALT", "A4GNT", "AAAS", "AACS", "AADAC", "AADACL2", "AADACL3", "AADACL4", "AADAT", "AAED1", "AAGAB", "AAK1", "AAMDC", "AAMP", "AANAT", "AAR2", "AARD", "AARS", "AARS2", "AARSD1", "AASDH", "AASDHPPT", "AASS", "AATF", "AATK", "AATK-AS1", "ABAT", "ABCA1", "ABCA10", "ABCA12", "ABCA2", "ABCA3", "ABCA4", "ABCA5", "ABCA6", "ABCA8", "ABCA9", "ABCB1", "ABCB10", "ABCB11", "ABCB4", "ABCB5", "ABCB6", "ABCB7", "ABCB8", "ABCB9", "ABCC1", "ABCC10", "ABCC11", "ABCC12", "ABCC2", "ABCC3", "ABCC4", "ABCC5", "ABCC6", "ABCC8", "ABCC9", "ABCD1", "ABCD2", "ABCD3", "ABCD4", "ABCE1", "ABCF1", "ABCF2", "ABCF3", "ABCG1", "ABCG2", "ABCG4", "ABCG5", "ABCG8", "ABHD1", "ABHD10", "ABHD11", "ABHD12", "ABHD12B", "ABHD13", "ABHD14A", "ABHD14A-ACY1", "ABHD14B", "ABHD15", "ABHD16A", "ABHD16B", "ABHD17A", "ABHD17B", "ABHD17C", "ABHD18", "ABHD2", "ABHD3", "ABHD4", "ABHD5", "ABHD6", "ABHD8", "ABI1", "ABI2", "ABI3"];

        
    function split( val ) {
      return val.split( /,\s*/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }
 
    $( "#gene" )
      .autocomplete({
        minLength: 0,
        source: function( request, response ) {
          response( $.ui.autocomplete.filter(
            items, extractLast( request.term ) ) );
        },
        focus: function() {
          return false;
        },
        select: function( event, ui ) {
          var terms = split( this.value );
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push( ui.item.value );
          // add placeholder to get the comma-and-space at the end
          terms.push( "" );
          this.value = terms.join( ", " );
          return false;
        }
      });
  });