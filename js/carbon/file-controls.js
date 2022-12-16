saveButton.onclick = () => {
    const data = new FormData(csForm)
    var params = new URLSearchParams(data)
    params.append("appearanceImage_b64", appearanceCanvas.toDataURL("image/png"))
    const str = params.toString()
    const blob = new Blob([str], { type: "text/plain" })
    var link = document.createElement("a")
    link.href = window.URL.createObjectURL(blob)
    link.download = "Carbon" + (data.has("name") ? ("_" + data.get("name").split(/\s/)[0]) : "" ) + ".ccs"
    link.click()
  }

loadButton.onclick = () => {
  var fileInput = document.createElement("input")
  fileInput.type = "file"
  fileInput.accept = "text/ccs"

  fileInput.onchange = () => {
    var file = fileInput.files[0]
    var reader = new FileReader()
    
    reader.onload = () => {
      const params = new URLSearchParams(reader.result)
      params.forEach((value, key) => {
        document.getElementsByName(key).forEach((element) => {
          element.value = value
        })
      })

      if (params.has("appearanceImage_b64")) {
        drawAppearanceImage(params.get("appearanceImage_b64"))
      }

      appearanceSelect.onchange()
    }

    reader.readAsText(file, "UTF-8")
  }

  fileInput.click()
}

exportButton.onclick = () => {
  window.print()
}
