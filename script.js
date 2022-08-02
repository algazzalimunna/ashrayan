const slide_box = document.querySelectorAll(".head_right_box_1");


let count = 1;
setInterval(() => {
    count++;
    let slide_item = document.querySelector(".current");

    slide_item.classList.remove("current");

    if (count>slide_box.length) {
        slide_box[0].classList.add("current");
        count=1;
    } else {
        slide_item.nextElementSibling.classList.add("current");
    }
   
   
}, 3000);
