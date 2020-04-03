// Load print, pdf stylesheets from jsDelivr
var srcUrlPrefix = 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.8.0/';
var link = document.createElement( 'link' );
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = srcUrlPrefix + (window.location.search.match( /print-pdf/gi ) ? 'css/print/pdf.css' : 'css/print/paper.css');
document.getElementsByTagName( 'head' )[0].appendChild( link );
