const modelViewerTexture1 = document.querySelector("model-viewer");

modelViewerTexture1.addEventListener("load", () => {

  const material = modelViewerTexture1.model.materials[0];

  const createAndApplyTexture = async (channel, value) => {
    const texture = await modelViewerTexture1.createTexture(value);
    if (channel.includes('base') || channel.includes('metallic')) {
      material.pbrMetallicRoughness[channel].setTexture(texture);
    } else {
      material[channel].setTexture(texture);
    }
  }
  const highlightedItems = document.querySelectorAll(".texture-button");

  highlightedItems.forEach((texture_button) => {
    texture_button.addEventListener('click', (event) => {
      createAndApplyTexture('baseColorTexture',texture_button.value);
    });
  });

  const buttons = document.querySelectorAll(".arbutton");
  buttons.forEach((ar_button) => {
    ar_button.addEventListener('click', (event) => {
      //modelViewerTexture1.getElementById("ar-button").click();
      console.log(modelViewerTexture1);
    });
  });
  createAndApplyTexture('baseColorTexture', document.getElementById('texture-green-orange1').value);
});


function displeCheck(e) {

  console.log(e.id);
  //ChangeTexture(e);
  //createAndApplyTexture('baseColorTexture',texture_button.value);
  var text = e.id;
  text = text.slice(0, -1);
  var buttons = document.getElementsByClassName("texture-button");
  for (let j = 0; j < buttons.length; j++) {
    var currentid = buttons[j].id;
    currentid = currentid.slice(0, -1);
    if (currentid === text) {

      document.getElementById(text + "1-child").style.opacity = 1;

      document.getElementById(text + "2-child").style.opacity = 1;

    }
    else {
      document.getElementById(buttons[j].id + "-child").style.opacity = 0;
    }
  }
  
}