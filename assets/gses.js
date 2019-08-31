
  $(function() {
    var items = ["GSE10038","GSE107426","GSE10896","GSE1122","GSE12815","GSE13896","GSE1650","GSE16972","GSE2125","GSE23704","GSE26296","GSE27536","GSE27543","GSE27597","GSE29133","GSE30027","GSE33337","GSE34562","GSE37147","GSE37693","GSE37768","GSE40885","GSE45251","GSE46903","GSE47460","GSE475","GSE47718","GSE47929","GSE55962","GSE56341","GSE56768","GSE56768","GSE57148","GSE60399","GSE62974","GSE63073","GSE69134","GSE69557","GSE69818","GSE7557","GSE76705","GSE77344","GSE81614","GSE8581","GSE8608","GSE87098","GSE994","GSE1786","GSE101286","GSE11196","GSE15197","GSE19976","GSE21369","GSE24206","GSE26594","GSE28221","GSE31934","GSE32537","GSE33566","GSE35145","GSE38958","GSE44723","GSE45686","GSE48149","GSE49072","GSE52463","GSE52612","GSE53845","GSE5457","GSE6804","GSE69764","GSE71351","GSE72073","GSE73854","GSE94060","GSE38934"];
        
    function split( val ) {
      return val.split( /,\s*/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }
 
    $( "#gse" )
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


