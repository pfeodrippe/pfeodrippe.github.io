// replace the default admonitions block with one that looks like the antora output to apply similar styling via adoc.css
window.addEventListener('load', function () {
    function getAdmonitionType (elm) {
        return elm.classList[1]
    }

    function getAdmonitionText (elm) {
        return elm.getElementsByTagName('p')[0].innerHTML
    }



    const doc_sections = document.getElementsByClassName('doc-sections');
    console.log(doc_sections);
})
