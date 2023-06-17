function toggleAnimation() {
    const parent = document.getElementsByClassName("parent")[0];
    const cards = document.getElementsByClassName("card")

    for (let i = 0; i < cards.length; i++) {
        const element = cards[i];
        if (element.classList.contains(`offcard`) || element.classList.contains(`oncard`)) {
            element.classList.contains(`oncard`) ? element.classList.replace(`oncard`, `offcard`) : element.classList.replace(`offcard`, `oncard`)
        }
        else {
            element.classList.add(`oncard`)
        }
    }
    parent.classList.contains("on") ? parent.classList.replace("on", 'off') : parent.classList.replace("off", "on")
    if (!parent.classList.contains("on") && !parent.classList.contains("off")) {
        parent.classList.add("on")
    }

}

function goWebsite(url) {
    window.open(
        url,
        '_blank' // <- This is what makes it open in a new window.
    );
}