let ultraschallArray = [
  {
        name:
            'Sumo-Suit',
        source:
            'images/Aoife-images/ultraschall0.jpeg',
        description:'Does my belly look big in this?'
  },
  {
      name:
          'Pardon me!',
      source:
          'images/Aoife-images/ultraschall1.jpeg',
      description:
          'I think my epidermis is showing!'
  },
  {
      name:
          'The Facepalm',
      source:
          'images/Aoife-images/ultraschall2.jpeg',
      description:
          'My best Picard impression'
  },
  {
      name:
          'The Slipknot',
      source:
          'images/Aoife-images/ultraschall3.jpeg',
      description:
          'look at it sideways'
  },
  {
      name:
          'The UFO',
      source:
          'images/Aoife-images/ultraschall4.jpeg',
      description:
          'Houston we have a baby!'
  },
  {
      name:
          'No comment',
      source:
          'images/Aoife-images/ultraschall5.jpeg',
      description:
          '..........'
  },
  {
      name:
          'Sumo-Suit 2',
      source:
          'images/Aoife-images/ultraschall6.jpeg',
      description:
          '........'
  },
]


let count = 0;
let currentUltrasound = document.getElementById('image-viewer');
let currentThumbnails = document.getElementById('thumbnail-reel');
let photoDescription = document.querySelector('.photo-description');

function scrollMemes(){
    currentUltrasound.innerHTML = `<p id="ultrasound-title">${ultraschallArray[count].name}</p><img class="ultrasound-image" src="images/Aoife-images/ultraschall${count}.jpeg"><p class="ultrasound-description">"${ultraschallArray[count].description}"</p>`
}

function scrollThumbnails() {
    currentThumbnails.innerHTML = `<img class="thumbnail" src="images/Aoife-images/ultraschall${count}.jpeg">
    <img class="thumbnail" src="images/Aoife-images/ultraschall${count + 1}.jpeg"><img class="thumbnail" src="images/Aoife-images/ultraschall${count + 2}.jpeg"><img class="thumbnail" src="images/Aoife-images/ultraschall${count + 3}.jpeg"><img class="thumbnail" src="images/Aoife-images/ultraschall${count + 4}.jpeg"><img class="thumbnail" src="images/Aoife-images/ultraschall${count + 5}.jpeg">
    <img class="thumbnail" src="images/Aoife-images/ultraschall${count + 6}.jpeg">`;
}

let previousButton = document.getElementById('previous-button');
let nextButton = document.getElementById('next-button');

previousButton.onclick = function () {
    if (count > 0){
        count = count - 1;
        scrollMemes();
    }
}

nextButton.onclick = function () {
    if (count < (ultraschallArray.length)){
        count = count + 1;
        scrollMemes();
    }
}

scrollMemes();
scrollThumbnails();
