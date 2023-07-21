// window.addEventListener('scroll', function() {
//     let aaaa=document.querySelector(".test");
//     aaaa.style.display="block";
// });
//At each load
    //get title of service and the line
    var titleService = document.querySelector('.titleService');
    var lineWhite = document.querySelector('.lineWhite');
    //get width the title and change the line width like it
    var titleServiceWidth = titleService.offsetWidth;
    lineWhite.style.width = titleServiceWidth + 'px';
    
    //LineWhite positioning
    //Top positioning
    var titleServiceTop = titleService.offsetTop;
    var titleServiceHeight = titleService.offsetHeight;
    lineWhite.style.top = (titleServiceTop + titleServiceHeight) + 'px';
    //left positioning
    var titleServiceRect = titleService.getBoundingClientRect();
    var lineWhiteLeft = titleServiceRect.left;
    lineWhite.style.left = lineWhiteLeft + 'px';

