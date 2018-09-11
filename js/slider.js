var imgNumber = 0;
var path = ["img/lambo.jpg",
    "img/photo-1509042009371-65fa830819f1.jpg",
    "img/202554-tuning-Nissan_Skyline_GT-R_R35-Liberty_Walk-Nissan_GTR-748x421.jpg",
    "img/153211115-fbb8d05c-98f5-4b87-9673-6dddd7644042.jpg"
];
var numberOfImg = path.length;
var timer = null;

function slide() {
    imgNumber = (imgNumber + 1) % path.length;
    console.log(imgNumber);
    document.getElementById("imgSlideshow").src = path[imgNumber];
    changeCounter(imgNumber + 1, numberOfImg);
}

function setTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    } else {
        timer = setInterval(slide, 2000);
    }
    return false;
}

function previousImage() {
    --imgNumber;
    if (imgNumber < 0) {
        imgNumber = numberOfImg - 1;
    }
    document.getElementById("imgSlideshow").src = path[imgNumber];
    changeCounter(imgNumber + 1, numberOfImg);
    return false;
}

function nextImage() {
    ++imgNumber;
    if (imgNumber > (numberOfImg - 1)) {
        imgNumber = 0;
    }
    document.getElementById("imgSlideshow").src = path[imgNumber];
    changeCounter(imgNumber + 1, numberOfImg);
    return false;
}
function changeImage(dir) {
    var img = document.getElementById("imgSlideshow");
    img.src = path[path.indexOf(path.src) + (dir || 1)] || path[dir ? path.length - 1 : 1];
}

document.onkeydown = function(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
        changeImage(-1) //left <- show Prev image
        --imgNumber;
        if (imgNumber < 0) {
            imgNumber = numberOfImg - 1;
        }
        document.getElementById("imgSlideshow").src = path[imgNumber];
        changeCounter(imgNumber + 1, numberOfImg);
        return false;

    } else if (e.keyCode == '39') {
        // right -> show next image
        changeImage()
        ++imgNumber;
        if (imgNumber > (numberOfImg - 1)) {
            imgNumber = 0;
        }
        document.getElementById("imgSlideshow").src = path[imgNumber];
        changeCounter(imgNumber + 1, numberOfImg);
        return false;
    }

}

function changeCounter(cur, total) {
    document.getElementById("counter").innerHTML = cur + "/" + total;
}
document.getElementById("counter").innerHTML = 1 + "/" + path.length;


document.getElementById("Pause").addEventListener(
    "click",
    function(event) {
        if (event.target.value === "Play") {
            event.target.value = "Pause";
        } else {
            event.target.value = "Play";
        }
    },
    false
);