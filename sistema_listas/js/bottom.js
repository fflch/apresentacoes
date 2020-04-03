// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,

	transition: 'slide', // none/fade/slide/convex/concave/zoom

	// Optional reveal.js plugins, loaded from jsDelivr
	dependencies: [
		{ src: srcUrlPrefix + 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
		{ src: srcUrlPrefix + 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: srcUrlPrefix + 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: srcUrlPrefix + 'plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
		{ src: srcUrlPrefix + 'plugin/zoom-js/zoom.js', async: true },
		{ src: srcUrlPrefix + 'plugin/notes/notes.js', async: true }
	]
});
