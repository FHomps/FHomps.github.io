function drawAppearanceImage(srcURL) {
  const img = document.createElement("img")
  const ctx = appearanceCanvas.getContext("2d")

  img.onload = () => {
    const [ow, oh] = [img.naturalWidth, img.naturalHeight]
    var dw, dh

    if (ow <= 512 && oh <= 512) {
      [dw, dh] = [ow, oh]
    }
    else if (ow >= oh) {
      dw = 512
      dh = Math.round(oh * 512 / ow)
    }
    else {
      dh = 512
      dw = Math.round(ow * 512 / oh)
    }

    appearanceCanvas.width = dw
    appearanceCanvas.height = dh
    ctx.drawImage(img, 0, 0, ow, oh, 0, 0, dw, dh)

    appearanceImagePrompt.style.display = "none"
    appearanceCanvas.style.display = "block"
  }

  img.src = srcURL
}

appearanceImageInput.onchange = evt => {
  const [file] = appearanceImageInput.files
  if (file) {
    drawAppearanceImage(URL.createObjectURL(file))
  }
}

appearanceSelect.onchange = evt => {
  if (appearanceSelect.value == "image") {
    appearanceImageLabel.style.display = "block"
    appearanceText.style.display = "none"
  }
  else {
    appearanceImageLabel.style.display = "none"
    appearanceText.style.display = "block"
  }
}

appearanceSelect.onchange()