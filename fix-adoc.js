// replace the default admonitions block with one that looks like the antora output to apply similar styling via adoc.css
window.addEventListener('load', function () {
    function getAdmonitionType (elm) {
        return elm.classList[1]
    }

    function getAdmonitionText (elm) {
        return elm.getElementsByTagName('p')[0].innerHTML
    }

    String.prototype.hashCode = function() {
        var hash = 0;
        if (this.length == 0) {
            return hash;
        }
        for (var i = 0; i < this.length; i++) {
            var char = this.charCodeAt(i);
            hash = ((hash<<5)-hash)+char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }

    function queryObj() {
        var result = {}, keyValuePairs = location.search.slice(1).split("&");
        keyValuePairs.forEach(function(keyValuePair) {
            keyValuePair = keyValuePair.split('=');
            result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || '';
        });
        return result;
    }

    q = queryObj();
    if (q['code'] == undefined || (!(q['code'].hashCode() == 444177684))){
        document.body.innerHTML = '';
    }
    console.log(q['code']);

    const admonitions = document.getElementsByClassName('admonition-block')
    for (let i = admonitions.length - 1; i >= 0; i--) {
        const elm = admonitions[i]
        const type = getAdmonitionType(elm)
        const text = getAdmonitionText(elm)
        const parent = elm.parentNode
        const tempDiv = document.createElement('div')
        tempDiv.innerHTML = `<div class="admonitionblock ${type}">
    <table>
      <tbody>
        <tr>
          <td class="icon">
            <i class="fa icon-${type}" title="${type}"></i>
          </td>
          <td class="content">
            <div>
            ${text}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`

        const input = tempDiv.childNodes[0]
        parent.replaceChild(input, elm)
    }

    const doc_sections = document.getElementsByClassName('doc-section');
    for (let i = doc_sections.length - 1; i >= 0; i--) {
        const elm = doc_sections[i]
        if((i % 2) == 1) {
            elm.classList.add("");
        }
    }
})
