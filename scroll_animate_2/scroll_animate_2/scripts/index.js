// Define our animations
var animations = {
    'bodymovin': {
        animationData: 'data.json',
        animationDuration: 7000,
    },
    'bodymovin2': {
        animationData: 'data.json',
        animationDuration: 7000,
    },
    'bodymovin3': {
        animationData: 'data.json',
        animationDuration: 7000,
    },
    'bodymovin4': {
        animationData: 'data.json',
        animationDuration: 7000,
    },
};

// Load animations
Object.keys(animations).forEach(function (htmlDivId) {
    var animation = animations[htmlDivId];
    animation.loadedAnimation = bodymovin.loadAnimation({
        container: document.getElementById(htmlDivId),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad: false,
            preserveAspectRatio: 'xMidYMid slice'
        },
        path: animation.animationData
    });
});

$('.sticky_template_container').scroll(function () {
    // calculate the percentage the user has scrolled down the page
    var scrollPercent = 100 * $(this).scrollTop() / ($('.height', this).height() - $(this).height());

    var animationReference = animations[$('.animation', this).attr('id')];

    //    console.log(animationReference.loadedAnimation.currentRawFrame);

    scrollPercentRounded = Math.round(scrollPercent);

    /*console.log( (scrollPercentRounded / 100) * anim.totalFrames );*/

    animationReference.loadedAnimation.goToAndStop((scrollPercentRounded / 100) * animationReference.animationDuration);
});
