function openAboutBlank() {
  var win = window.open()
  var url = window.location.href
  var iframe = win.document.createElement('iframe')
  iframe.style.position = "fixed"
  iframe.style.width = "100%"
  iframe.style.height = "100%"
  iframe.style.border = "none"
  iframe.style.top = "0"
  iframe.style.bottom = "0"
  iframe.style.left = "0"
  iframe.style.right = "0"
  iframe.style.margin = "0"
  iframe.style.padding = "0"
  iframe.style.overflow = "hidden"
  iframe.src = url
  win.document.body.appendChild(iframe)
}
