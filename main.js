
var gallery = document.querySelector('main');

var imageUrls = [
  'https://pbs.twimg.com/media/EgU53lhU0AASVXL.jpg',
  'https://cdn.vox-cdn.com/thumbor/-khg_S_-tf3eS4XqudtTqK2JwqM=/69x0:856x525/1200x800/filters:focal(69x0:856x525)/cdn.vox-cdn.com/uploads/chorus_image/image/50263513/Screen_Shot_2016-08-01_at_12.34.21_PM.0.0.png',
  'https://i.kym-cdn.com/entries/icons/original/000/030/967/spongebob.jpg'
];

var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function (event) {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = '';
  updateGallery();
});

function updateGallery() {
  for (var i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
