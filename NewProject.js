const counter = document.querySelectorAll(".counter")
// console.log(counter.textContent);
counter.forEach(counter=>{
    // console.log(counter.textContent);
    const speed = 200;
    const update = ()=>{
        // console.log(counter.getAttribute("data.count"));
        let target = counter.getAttribute("data.count")
        let count = +counter.textContent
        let increment = Math.ceil(target / speed)
        console.log(increment);
        if (count < target) {
            counter.textContent = count + increment
            setTimeout(update , 1)
        }
        else{
            counter.textContent = target;
        }
    }

    update()
})