function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

 function resizeSketch(iframe, parentId, aspectRatio) {
                    let parent = document.getElementById(parentId);
                    let w = parent.clientWidth;
                    iframe.width = w;
                    iframe.height = w * aspectRatio;
                    iframe.contentWindow.addEventListener('resize', () => {
                        let w = parent.clientWidth;
                        iframe.width = w;
                        iframe.height = w * aspectRatio;
                    });
                }