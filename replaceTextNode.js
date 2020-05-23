function findTextNodes (element, str) {
    let textNodes = []

    if (["SCRIPT", "STYLE"].includes(element.tagName)) {
        return []
    }

    if (element.childNodes.length) {
        for (let i = 0; i < element.childNodes.length; i++) {
            if (element.childNodes[i].nodeType === Node.TEXT_NODE) {
                if (element.childNodes[i].textContent.match(str)) {
                    textNodes.push(element.childNodes[i])
                }
            } else if (element.childNodes[i].childNodes.length) {
                textNodes = textNodes.concat(findTextNodes(element.childNodes[i], str))
            }
        }
    }

    return textNodes
}

function replaceTextNode (element, str, wrapper) {
    var textNodes = findTextNodes(element, str)
    
    textNodes.forEach(function (textNode) {
        var fragment = document.createDocumentFragment()
        var tempWrapperElement = document.createElement('div')
        tempWrapperElement.innerHTML = textNode.textContent.replace(str, wrapper)
        
        Array.prototype.slice.call(tempWrapperElement.childNodes).forEach(
            function (child) {
                fragment.appendChild(child)
            }
        )

        textNode.replaceWith(fragment)
    })
}

window["replaceTextNode"] = replaceTextNode
