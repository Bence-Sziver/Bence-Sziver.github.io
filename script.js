let images = [];
let i = 0;
images[0] = "./res/banner.png";
images[1] = "./res/7SAH7.jpg";
images[2] = "./res/abra.jpg";
images[3] = "./res/CHT02_25_5.jpg";
images[4] = "./res/gsnor_NO_5cP15.jpg";
images[5] = "./res/Kontrol_cyc_2.png";
let current = "./res/banner.png";
let text;

function setImg() {
    i = (i === images.length - 1) ? 0 : i + 1;

    document.getElementById("fadeImg").src = current;
    document.getElementById("bannerImg").classList.add("transitioning-src");
    setTimeout(() => {
        document.getElementById("bannerImg").setAttribute('src', images[i]);
        current = images[i];
        document.getElementById("bannerImg").classList.remove("transitioning-src");
        text = (i === 0) ? "Szárazságstressznek kitett Arabidopsis thaliana" : "Lorem ipsum dolor sit amet";
        document.getElementById("bannerCaption").innerHTML = text;
    }, 400);
}

function startTimer() {
    setInterval(setImg, 5000);
}