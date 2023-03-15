function changeColor(event) {
    event.target.style.color = 'red';
}

let element = document.querySelectorAll("p2");

console.log("el :")
element.forEach(e => {
    if (e.id.charAt(1) === '3') {
        console.log("hummm this is 3")
        e.style.color = "red";
    }
    console.log(e.id)
});

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }

    img = document.getElementById("img1");

    // Function to increase image size
    function enlargeImg() {
        img.style.transform = "scale(1.5)";
        img.style.transition = "transform 0.25s ease";
    }
}