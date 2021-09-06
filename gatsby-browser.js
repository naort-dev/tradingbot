/* FIXME: We need to change the pieces requiring the js in onRouteUpdate below into react comps*/

exports.onRouteUpdate = ({ location, prevLocation }) => {
    var exitIntentShown = false;
    var fixedBannerHidden = false;
    var elems = document.querySelector('.close');
    if (elems) {
        document.querySelector('.close').addEventListener('click', () => {
            document.querySelector('.fixed-banner').style.display = 'none';
            fixedBannerHidden = true;
        });
    }

    window.addEventListener(
        'scroll',
        function () {
            var target = document.querySelector('.fixed-banner');
            if (!target) {
                return;
            }
            if (fixedBannerHidden) {
                return;
            }
            if (window.pageYOffset > 500) {
                target.style.display = 'block';
            } else if (window.pageYOffset < 500) {
                target.style.display = 'none';
            }
        },
        false,
    );

    document.addEventListener('mouseout', (e) => {
        if (exitIntentShown === true) {
            return;
        }
        if (!e.toElement && !e.relatedTarget) {
            var isThereIntent = document.querySelector('.exit-intent');
            var parent = document.querySelector('#gatsby-focus-wrapper');
            if (parent && isThereIntent) {
                var clone = isThereIntent.cloneNode(true);
                parent.appendChild(clone);
                exitIntentShown = true;
                clone.querySelector('.close').addEventListener('click', () => {
                    clone.remove();
                });
            }
        }
    });
    if (!document.getElementById('fit-vids-style')) {
        // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
        var head = document.head || document.getElementsByTagName('head')[0];
        var css =
            '.fluid-width-video-container{flex-grow: 1;width:100%;}.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
        var div = document.createElement('div');
        div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
        head.appendChild(div.childNodes[1]);
    }

    let videoCounter = 0;
    var selectors = [
        'iframe[src*="player.vimeo.com"]',
        'iframe[src*="youtube.com"]',
        'iframe[src*="youtube-nocookie.com"]',
        'iframe[src*="kickstarter.com"][src*="video.html"]',
        'object',
        'embed',
    ];

    var $allVideos = document.querySelectorAll(selectors.join(','));

    $allVideos.forEach(function (item) {
        var $this = item;
        if ((item.tagName.toLowerCase() === 'embed' && $this.closest('object')) || $this.closest('.fluid-width-video-wrapper')) {
            return;
        }
        if (!$this.style.height && !$this.style.width && (isNaN($this.getAttribute('height')) || isNaN($this.getAttribute('width')))) {
            $this.setAttribute('height', 9);
            $this.setAttribute('width', 16);
        }
        var height =
                item.tagName.toLowerCase() === 'object' || ($this.getAttribute('height') && !isNaN(parseInt($this.getAttribute('height'), 10)))
                    ? parseInt($this.getAttribute('height'), 10)
                    : $this.height(),
            width = !isNaN(parseInt($this.getAttribute('width'), 10)) ? parseInt($this.getAttribute('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if (!$this.getAttribute('name')) {
            var videoName = 'fitvid' + videoCounter;
            $this.setAttribute('name', videoName);
            videoCounter++;
        }
        const parent = $this.parentNode;
        $this.remove();
        const container = document.createElement('div');
        const wrapper = document.createElement('div');
        container.classList.add('fluid-width-video-container');
        wrapper.classList.add('fluid-width-video-wrapper');
        wrapper.appendChild($this);
        container.appendChild(wrapper);
        wrapper.style.paddingTop = aspectRatio * 100 + '%';
        parent.style.paddingBottom = '20px';
        parent.appendChild(container);
    });
};
