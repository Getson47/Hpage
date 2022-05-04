var Image2;


Image2 = ['https://media.istockphoto.com/photos/texture-of-orange-wooden-boards-for-background-picture-id1195110272?k=20&m=1195110272&s=170667a&w=0&h=fxWWZmq8nTUywuJvFFj-5ABmQkhEN9U7kjNsTB0PaJQ=', 'https://media.istockphoto.com/photos/textured-wood-wall-picture-id956291438?k=20&m=956291438&s=170667a&w=0&h=JJKx0Xi9uYQyxGqrLWFILB9aG3RdFIv8i-UBZdmr778=', 'https://media.istockphoto.com/photos/wooden-stained-plank-background-picture-id826195042?k=20&m=826195042&s=170667a&w=0&h=t8oZovg5DldGwb3rK1nHYehCF5skpnfBLXVh2Vf_wNA='];
let element_img = document.getElementById('img');
element_img.setAttribute("src", Image2[0]);


document.getElementById('next').addEventListener('click', (event) => {
  let element_img2 = document.getElementById('img');
  element_img2.setAttribute("src", Image2[0]);
  element_img2.replaceChildren();
  Image2.push(Image2.shift());

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_img3 = document.getElementById('img');
  element_img3.setAttribute("src", Image2[0]);
  element_img3.replaceChildren();
  Image2.push(Image2.shift());

});

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('button').addEventListener('click', (event) => {
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(getNumberOrString(document.getElementById('text').value)));

});