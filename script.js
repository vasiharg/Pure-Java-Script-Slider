$(document).ready(function () {

    function getRandomIndex() {
        var random = Math.random();
        return Math.floor(random * jsonResult.length);
    }

    var jsonResult, imagesElements, i;
    imagesElements = "";
    $.get('https://picsum.photos/list').done(function (data) {
        jsonResult = data;
    }).then(function () {

        for (let i = 0; i < 10; i++) {
            let randomIndex = getRandomIndex();
            let randomImage = jsonResult[randomIndex];
            let randomImageUrl = `https://picsum.photos/200/300?image=${randomImage.id}`;
            let fgCaption = `by ${randomImage.author}`;

            let imageElement = `${fgCaption} <br> <img class="slide-${i}" src="${randomImageUrl}" alt="${randomImage.author}">`;

            imagesElements = imagesElements + "</br>" + imageElement;
        }

        $("#slider-container").append(imagesElements);
    });

});


