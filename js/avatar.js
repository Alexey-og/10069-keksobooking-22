const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('.ad-form-header__input');
const avatarPreview = document.querySelector('.ad-form-header__preview img');

const photoChooser = document.querySelector('.ad-form__upload input[type=file]');
const photoContainer = document.querySelector('.ad-form__photo-container');
const photoPreview = document.querySelector('.ad-form__photo');

/* avatarChooser.addEventListener('change', () => {
  const file = avatarChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.addEventListener('load', () => {
      avatarPreview.src = reader.result;
    });
  }
}); */

const createImage = (imageSrc) => {
  const image = {
    WIDTH: '70',
    HEIGHT: '70',
    ALT: 'Фотография жилья',
  }
  const imageElement = document.createElement('IMG');
  imageElement.src = imageSrc;
  imageElement.alt = image.ALT;
  imageElement.width = image.WIDTH;
  imageElement.height = image.HEIGHT;
  return imageElement;
}

const uploadImage = (imageChooser, image) => {
  imageChooser.addEventListener('change', () => {
    const file = imageChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });

    if (matches) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener('load', () => {
        image.src = reader.result;
      });
    }
  });
}

const uploadAvatar = (chooser, image) => {
  uploadImage(chooser, image);
}


photoChooser.addEventListener('change', () => {
  const photoElement = photoPreview.cloneNode();
  const file = photoChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      photoElement.append(createImage(reader.result));
      photoContainer.append(photoElement);
    });
    reader.readAsDataURL(file);
  }
});


uploadAvatar(avatarChooser, avatarPreview);
