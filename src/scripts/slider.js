let offset = 0;
const sliderList = document.querySelector(".slider__list");

const firstTooglerBox = document.querySelector(".toogle-box:nth-child(1)");
const secondTooglerBox = document.querySelector(".toogle-box:nth-child(2)");
const thirdTooglerBox = document.querySelector(".toogle-box:nth-child(3)");
const fourthTooglerBox = document.querySelector(".toogle-box:nth-child(4)");

firstTooglerBox.style.background = "#D7B399";

firstTooglerBox.addEventListener("click", function(){
    offset = -556;
});
secondTooglerBox.addEventListener("click", function(){
    offset = 0;
});
thirdTooglerBox.addEventListener("click", function(){
    offset = 556;
});
fourthTooglerBox.addEventListener("click", function(){
    offset = 1112;
});

setInterval(function () {
    offset += 556;
    if (offset > 556 * 3) {
        offset = 0;
    }

    sliderList.style.right = offset + "px";

    if(offset === 0){
        fourthTooglerBox.style.background = "#CECECE";
        secondTooglerBox.style.background = "#CECECE";
        thirdTooglerBox.style.background = "#CECECE";
        firstTooglerBox.style.background = "#D7B399";
    } if(offset === 556){
        fourthTooglerBox.style.background = "#CECECE";
        firstTooglerBox.style.background = "#CECECE";
        thirdTooglerBox.style.background = "#CECECE";
        secondTooglerBox.style.background = "#D7B399";
    } if(offset === 1112){
        fourthTooglerBox.style.background = "#CECECE";
        firstTooglerBox.style.background = "#CECECE";
        secondTooglerBox.style.background = "#CECECE";
        thirdTooglerBox.style.background = "#D7B399";
    } if(offset === 1668){
        secondTooglerBox.style.background = "#CECECE";
        firstTooglerBox.style.background = "#CECECE";
        thirdTooglerBox.style.background = "#CECECE";
        fourthTooglerBox.style.background = "#D7B399";
    }
}, 5000);