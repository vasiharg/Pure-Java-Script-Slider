var request = new XMLHttpRequest();

request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        function getRandomIndex() {
            var random = Math.random();
            return Math.floor(random * myArr.length) + 1;
        }

        var myArr, randNum, imgList = [];
        myArr = JSON.parse(this.responseText);

        for (var i = 0; i < 10; i++) {
            try {
                randNum = getRandomIndex();
                var randImage = myArr[randNum];
                var imgUrl = `https://picsum.photos/200/300?image=` + randImage.id;
                var imgObject = `<div id="auth">${randImage.author}</div>` + `<img id="slide-${i}" src=${imgUrl} alt = ${randImage.author}>`;

                imgList.push(imgObject);
            }
            catch (err) {
                alert('Resource at given URL is missing' + err);
            }
        }

        //        console.log(imgList);
        var para2 = document.getElementById('second');
        let indexNum = 0;

        para2.innerHTML = imgList[indexNum];

        document.addEventListener('keyup', moveSlide);

        

        function moveSlide(e) {
            const keyName = e.key;
            try {
                if (keyName === 'ArrowRight') {
                    
                    if (indexNum == 9) {
                        indexNum = 0;
                    }else{
                        indexNum++;
                    }
                    para2.innerHTML = imgList[indexNum];
                    // console.log(indexNum);

                } else if (keyName === 'ArrowLeft') {
                    
                    if (indexNum == 0) {
                        indexNum = 9;
                    }else{
                        indexNum--;
                    }
                    para2.innerHTML = imgList[indexNum];
                    // console.log(indexNum);
                }
            }
            catch(err){
                alert(err);
            }
            
        }
    }
};
request.open("GET", "https://picsum.photos/list");
request.send();