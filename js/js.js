function stop_minuite() {
    let numbers = document.getElementById("numbers");
    let nums = document.querySelectorAll(".fire .num")
    function startcount(el) {
        let goal = el.dataset.goal;
        let count = setInterval(() => {
            el.textContent++;
            if (el.textContent == goal) {
                clearInterval(count);
            }
        }, 10);
    }
    let started = false; // function is started ? no

    let bars = document.getElementById("bars");
    let ul = document.getElementById("ul");
    let cancel = document.getElementById("cancel")
    bars.onclick = function () {
        ul.style = "left:0";
        bars.style.display = "none";
        cancel.style.display = "block";
    }
    cancel.onclick = function () {
        ul.style = "left:-100%";
        bars.style.display = "block";
        cancel.style.display = "none";
    }
    let spans = document.querySelectorAll(".progress span");
    let section = document.getElementById("section");

    window.onscroll = function () {
        if (window.scrollY >= section.offsetTop + 300) {
            spans.forEach((span) => {
                span.style.width = span.dataset.width;
            })
        }
        if (window.scrollY >= numbers.offsetTop + 4200) {
            console.log("reached");
            if (!started) {
                nums.forEach((num) => {
                    startcount(num);
                })
            }
            started = true;
        }
    }
}
setTimeout(stop_minuite, 3000);
