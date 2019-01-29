/* !
 * "position: sticky" jQuery plugin / polyfill
 * https://github.com/regru/i-sticky
 * License: MIT
 */
( function( $ ) {
    var prefixTestList       = [ '', '-webkit-', '-ms-', '-moz-', '-o-' ],
        stickyTestElement    = document.createElement('div'),

        hasNativeSupport     = false,
        areWindowEventsAttached = false,
        isAnimationRequested = false,
        lastKnownScrollTop   = 0,
        lastKnownScrollLeft  = 0,

        affectedChromeVersions = [ '56' ],

        // requestAnimationFrame may be prefixed
        requestAnimationFrame = window.requestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.mozRequestAnimationFrame,
        idCounter = 0,
        stickies  = [],
        methods   = { unstick : function() {
            var currentId = $( this ).data('sticky-id'),
                removeIndex,
                el;

            for ( var i = stickies.length - 1; i >= 0; i-- ) {
                if ( stickies[i].id == currentId ) {
                    removeIndex = i;
                    break;
                }
            }

            if ( typeof removeIndex !== 'undefined' ) {
                el = stickies.splice( removeIndex, 1 );
            }

            if ( typeof el !== 'undefined' ) {
                $( this )
                        .removeAttr('style')
                        .next( '.' + el[0].options.holderClass )
                            .remove();
            }

            return this;
        } };

    if ( !checkIfBrowserAffectedWithBug() ) {
        for (var i = 0, l = prefixTestList.length; i < l; i++) {
            stickyTestElement.setAttribute('style', 'position:' + prefixTestList[i] + 'sticky');

            if (stickyTestElement.style.position !== '') {
                hasNativeSupport = true;
                break;
            }
        }
    }

    $.fn.iSticky = function( methodOrOptions ) {
        if ( hasNativeSupport ) {
            if ( typeof methodOrOptions === 'object' && methodOrOptions.force ) {
                attachWindowEvents();
            }
            else {
                return this;
            }
        }

        if ( typeof methodOrOptions === 'string' && methods[methodOrOptions] ) {
            return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ) );
        }

        var options = $.extend( {
                holderClass      : 'i-sticky__holder',
                holderAutoHeight : true,
                debug            : false,
                fixWidth         : true,
                stuckClass       : '',
            }, methodOrOptions ),
            selector = this.selector;

        return this.each( function() {
            var $this = $( this ),
                id    = 'sticky-' + ++idCounter,
                topCSSstring,
                bottomCSSstring,
                item;

            // 'auto' value workaround
            // http://stackoverflow.com/questions/13455931/jquery-css-firefox-dont-return-auto-values
            $this.hide();

            topCSSstring    = $this.css('top');
            bottomCSSstring = $this.css('bottom');

            $this.show();

            if ( !topCSSstring && !bottomCSSstring ) {
                if ( options.debug ) {
                    console.warn( 'i-sticky: element `top` or `bottom` properties must be set in pixels', selector, this );
                }

                return;
            }

            $this
                .data( 'sticky-id', id )
                .after( '<span class="' + options.holderClass + '" style="display:none;"></span>' );

            item = {
                id     : id,
                el     : this,
                parent : this.parentElement,
                holder : this.nextSibling,
                style  : {
                    home    : 'position:static;',
                    top     : undefined,
                    bottom  : undefined,
                    current : '',
                    height  : 0,
                    isStuck : false,
                    margin  : { left: parseInt( $this.css('margin-left'), 10 ) },
                },
                options : {
                    holderClass      : options.holderClass,
                    holderAutoHeight : options.holderAutoHeight,
                    fixWidth         : options.fixWidth,
                    stuckClass       : options.stuckClass || '',
                },
            };

            if ( topCSSstring !== 'auto' ) {
                item.style.top = {
                    fixed    : 'position:fixed;top:' + topCSSstring + ';bottom:auto;',
                    opposite : 'position:absolute;bottom:0;top:auto;',
                    px       : parseInt( topCSSstring, 10 ),
                };
            }

            if ( bottomCSSstring !== 'auto' ) {
                item.style.bottom = {
                    fixed    : 'position:fixed;bottom:' + bottomCSSstring + ';top:auto;',
                    opposite : 'position:absolute;top:0;bottom:auto;',
                    px       : parseInt( bottomCSSstring, 10 ),
                };
            }


            stickies.push( item );

            updateScrollPos();
        } );

    };

    function getOffset( elem ) {
        var docElem,
            body,
            win,
            clientTop,
            clientLeft,
            scrollTop,
            scrollLeft,
            box = {
                top  : 0,
                left : 0,
            },
            doc = elem && elem.ownerDocument;

        if ( !doc ) {
            if ( options.debug ) {
                console.error( 'i-sticky: no element.ownerDocument defined' );
            }

            return;
        }

        if ( ( body = doc.body ) === elem ) {
            return {
                top  : body.offsetTop,
                left : body.offsetLeft,
            };
        }

        docElem = doc.documentElement;

        if ( typeof elem.getBoundingClientRect !== 'undefined' ) {
            box = elem.getBoundingClientRect();
        }

        win        = window;
        clientTop  = docElem.clientTop || body.clientTop || 0;
        clientLeft = docElem.clientLeft || body.clientLeft || 0;
        scrollTop  = win.pageYOffset || docElem.scrollTop;
        scrollLeft = win.pageXOffset || docElem.scrollLeft;

        return {
            top  : box.top + scrollTop - clientTop,
            left : box.left + scrollLeft - clientLeft,
        };
    }

    function setPositions() {
        var scrollTop    = lastKnownScrollTop,
            scrollLeft   = window.pageXOffset || document.documentElement.scrollLeft,
            windowHeight = window.innerHeight || document.documentElement.clientHeight,
            scrollBottom = scrollTop + windowHeight;

        isAnimationRequested = false;

        for ( var i = 0, l = stickies.length; i < l; i++ ) {
                var item         = stickies[i],
                    height       = item.el.offsetHeight,
                    parentOffset = getOffset( item.parent ),
                    homeOffset   = item.style.isStuck ? getOffset( item.holder ) : getOffset( item.el ),
                    topPx        = item.style.top ? item.style.top.px : 0,
                    bottomPx     = item.style.bottom ? item.style.bottom.px : 0,

                    style        = item.style.home,
                    isStuck      = true,
                    classes      = item.el.className.split(' '),
                    index        = 0,
                    points       = {
                        parent       : parentOffset.top,
                        home         : homeOffset.top - topPx,
                        under        : parentOffset.top + item.parent.offsetHeight - height - topPx,
                        parentBottom : parentOffset.top + height + bottomPx,
                        homeBottom   : homeOffset.top + height + bottomPx,
                    };

            for ( index in classes ) {
                if ( classes[index] === item.options.stuckClass ) {
                    classes.splice( index, 1 );
                }
            }

            item.el.className = classes.join(' ');

            if ( item.style.bottom && scrollBottom <= points.parentBottom ) {
                style = item.style.bottom.opposite;
            }
            else if ( item.style.bottom && scrollBottom > points.parentBottom && scrollBottom < points.homeBottom ) {
                style = item.style.bottom.fixed;
            }
            else if ( item.style.top && scrollTop > points.home && scrollTop < points.under ) {
                style = item.style.top.fixed;
            }
            else if ( item.style.top && scrollTop >= points.under ) {
                style = item.style.top.opposite;
            }
            else {
                isStuck = false;
            }

            if ( item.style.isStuck !== isStuck ) {
                item.holder.style.display = isStuck ? 'block' : 'none';
            }

            if ( isStuck && item.options.stuckClass ) {
                item.el.className += ' ' + item.options.stuckClass;
            }

            if ( isStuck ) {
                style += 'margin-left:-' + ( scrollLeft - item.style.margin.left ) + 'px;';
            }

            if ( item.options.fixWidth ) {
                style += 'width:' + ( isStuck ? item.holder.offsetWidth + 'px;' : 'auto;' );
            }
            else {
                style += 'min-width:' + ( isStuck ? item.holder.offsetWidth + 'px;' : 'auto;' );
            }

            if ( style !== item.style.current ) {
                item.el.setAttribute( 'style', style );
                item.style.isStuck = isStuck;
                item.style.current = style;
            }

            if ( item.options.holderAutoHeight && isStuck && height != item.style.height ) {
                item.holder.style.height = height + 'px';
                item.style.height = height;
            }
        }

        lastKnownScrollLeft = scrollLeft;
    }

    var timeout;

    // Debounced scroll handling
    function updateScrollPos() {
        if ( !stickies.length ) {
            return;
        }

        lastKnownScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        // Only trigger a layout change if we’re not already waiting for one
        if ( !isAnimationRequested ) {
            isAnimationRequested = true;

            // Don’t update until next animation frame if we can, otherwise use a
            // timeout - either will help avoid too many repaints
            if ( requestAnimationFrame ) {
                requestAnimationFrame( setPositions );
            }
            else {
                if ( timeout ) {
                    clearTimeout( timeout );
                }

                timeout = setTimeout( setPositions, 15 );
            }
        }
    }

    function attachWindowEvents() {
        if ( areWindowEventsAttached ) {
            return;
        }

        $( window )
            .on( 'scroll', updateScrollPos )
            .on( 'resize', updateScrollPos );

        updateScrollPos();
        areWindowEventsAttached = true;
    }

    function checkIfBrowserAffectedWithBug() {

        if ( !window.chrome ) {
            return false;
        }

        var matches = /Chrom(e|ium)\/(\d+)/.exec(navigator.appVersion);

        return matches && ~affectedChromeVersions.indexOf( matches[ 2 ] );
    }

    if ( !hasNativeSupport ) {
        attachWindowEvents();
    }

} )( jQuery );
