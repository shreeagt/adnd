document.getElementById("ideal-image1").onmouseover = () => {
    document.getElementById("left-image1").classList.add('left-image1-hover')
    document.getElementById("left-image2").classList.add('left-image2-hover')
    document.getElementById("idealogy-text2").classList.add("idealogy-text2-opacity")
    document.getElementById("idealogy-text1").classList.add("idealogy-text1-opacity")
}

document.getElementById("ideal-image1").onmouseleave = () => {
    document.getElementById("left-image1").classList.remove('left-image1-hover')
    document.getElementById("left-image2").classList.remove('left-image2-hover')
    document.getElementById("idealogy-text2").classList.remove("idealogy-text2-opacity")
    document.getElementById("idealogy-text1").classList.remove("idealogy-text1-opacity")
}

document.getElementById("ideal-image2").onmouseover = () => {
    document.getElementById("right-image1").classList.add('right-image1-hover')
    document.getElementById("right-image2").classList.add('right-image2-hover')
    document.getElementById("idealogy-text2").classList.add("idealogy-text2-opacity")
    document.getElementById("idealogy-text3").classList.add("idealogy-text3-opacity")
}

document.getElementById("ideal-image2").onmouseleave = () => {
    document.getElementById("right-image1").classList.remove('right-image1-hover')
    document.getElementById("right-image2").classList.remove('right-image2-hover')
    document.getElementById("idealogy-text2").classList.remove("idealogy-text2-opacity")
    document.getElementById("idealogy-text3").classList.remove("idealogy-text3-opacity")
}