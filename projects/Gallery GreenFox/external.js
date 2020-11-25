let data1 = {
  photo: 'images/photo1.jpg',
  title: 'Spring',
  description: 'Landscape in Norway'
};

let data2 = {
  photo: 'images/photo2.jpg',
  title: 'Summer',
  description: 'Beach at Thailand'
};

let data3 = {
  photo: 'images/photo3.jpg',
  title: 'Summer',
  description: 'Sunset at the beach'
};

let data4 = {
  photo: 'images/photo4.jpg',
  title: 'Winter',
  description: 'Sunrise in winter'
};

let data5 = {
  photo: 'images/photo5.jpg',
  title: 'Autumn',
  description: 'Rays of sunlight in woods'
};

let data6 = {
  photo: 'images/photo6.jpg',
  title: 'Autumn',
  description: 'Colorful maple leaves'
};


$(document).ready(function () {
  let indexClicked;
  let currentPhoto = 0;
  let imagesData = [data1, data2, data3, data4, data5, data6];

  //it was required fill out array with each photo
  imagesData.forEach(item => {
    $('#photo').attr('src', imagesData[currentPhoto].photo);
    console.log (imagesData);
  });
  //-------------------------------------------------------------------------------
  //function for the click event
  let loadPhoto = currentPhoto => {
    $('#photo').attr('src', imagesData[currentPhoto].photo);  //putting photo into #photo
    $('#photo-title').text(imagesData[currentPhoto].title);   //putting title into #photo-title
    $('#photo-description').text(imagesData[currentPhoto].description);
  }

  let scaleOriginal = currentPhoto => {
    $(".box" + currentPhoto).css('transform', 'scale(1)');
  }

  let scaleBigger = currentPhoto => {
    $(".box" + currentPhoto).css('transform', 'scale(1.2)');
  }
  //-------------------------------------------------------------------------------
  $('#right-arrow').click(function () {
    $(".box" + currentPhoto).css('transform', 'scale(1)');
    currentPhoto++;
    if (currentPhoto > (imagesData.length - 1)) {
      currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
    $(".box" + currentPhoto).css('transform', 'scale(1.2)');
  });

  $('#left-arrow').click(function () {
    $(".box" + currentPhoto).css('transform', 'scale(1)');
    currentPhoto--;
    if (currentPhoto < 0) {
      currentPhoto = imagesData.length - 1;
    }
    loadPhoto(currentPhoto);
    $(".box" + currentPhoto).css('transform', 'scale(1.2)');
  });

  thumbimages = [data1, data2, data3, data4, data5, data6];

  /*creating data-index for following actions (.attr('data-index'))*/ /*creating box-properties as cointainer which is used for click event*/
  imagesData.forEach((item, index) => {
    $('.thumbnails-container').append(`<div class="box-properties box${index}" data-index="${index}">       
        <img src="${item.photo}"  height="85" width="85"data-index="${index}">
        <div class="title">${item.title}</div>
        </div>`);

    loadPhoto(currentPhoto);  //first box photo is scaled on load page
    scaleBigger(currentPhoto); //first box photo is scaled on load page
  });

  $('.box-properties').click((event) => {
    // Current photo must be scale(1),
    scaleOriginal(currentPhoto);

    //then variable is overwritten with indexclicked
    let indexClicked = $(event.target).attr('data-index');  //using event.target for saving variable indexClicked
    currentPhoto = parseInt(indexClicked);      //new value of variable currentPhoto

    //Loading new photo from array
    loadPhoto(currentPhoto);

    //make sure scaling animation is done after saving new value in currentPhoto
    scaleBigger(currentPhoto);
  });
});