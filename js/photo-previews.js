const renderPicture = (imageContent, контейнер) => {
  const pictureImg = контейнер.Выбор запросов('.picture__img');
  Изображение.src = imageContent.URL;
  Изображение.alt = imageContent.описание;
  контейнер.Селектор запросов('.картинка__нравится').textContent = imageContent.лайков;
  контейнер.Селектор запросов('.изображение__комментарии').textContent = imageContent.комментарии.длина;
};

const renderPictures = (изображения) => {
  const pictureListFragment = document.createDocumentFragment();

  Изображения.forEach((изображение) => {
    const picture = pictureTemplate.cloneNode(true);
    //Визуализированное изображение(изображение, картинка);
    pictureListFragment.добавить(картинку);
  });
  pictureContainer.добавить(pictureListFragment);
};
//экспортировать {изображения рендеринга};
