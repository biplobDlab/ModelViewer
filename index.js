window.oncontextmenu = function () {
  $("#model-viewer").attr("camera-target", "-0.0m 0.57m 0.01m");
}

const modelViewerTexture1 = document.querySelector("model-viewer");


modelViewerTexture1.addEventListener("load", () => {
  
  modelViewerTexture1.orientation = `${0}deg ${0}deg ${90}deg`;
  const material = modelViewerTexture1.model.materials[2];
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
      createAndApplyTexture('baseColorTexture', texture_button.getAttribute("texture_value"));
    });
  });


  // var arbutton = document.getElementById("ar-button");
  // document.getElementById("ar-button").addEventListener('click', (event) => {
  //     arbuttons.style.display = 'block';
  //     arbutton.style.display = 'none';
  //   });

  // arbutton.addEventListener('DOMAttrModified', function () {
  //     if (e.attrName == 'style') {
  //       if(e.style.display =='block')
  //       {
  //         arbuttons.style.display = 'none';
  //       }
  //       else
  //       {
  //         arbuttons.style.display = 'none';
  //       }
  //     }
  //   }, false);


  // const buttons = document.querySelectorAll(".arbutton");
  // buttons.forEach((ar_button) => {
  //   ar_button.addEventListener('click', (event) => {
  //     //modelViewerTexture1.getElementById("ar-button").click();
  //   });
  // });
  createAndApplyTexture('baseColorTexture', document.getElementById('texture-green-orange1').getAttribute("texture_value"));
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
      document.getElementById(text + "3-child").style.opacity = 1;

    }
    else {
      document.getElementById(buttons[j].id + "-child").style.opacity = 0;
    }
  }

}


// highlightedItems.forEach((texture_button) => {
  //     texture_button.addEventListener('click', (event) => {
    //       document.getElementById("model-viewer").src = texture_button.value;
    //     });
    //   });
    // const buttons = document.querySelectorAll(".arbutton");
    // buttons.forEach((ar_button) => {
      //   ar_button.addEventListener('click', (event) => {
        //     exportGLB();
        //   });
        // });






