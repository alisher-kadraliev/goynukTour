tailwind.config = {
  daisyui: {
    themes: [], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },

  theme: {
    extend: {
      container: {
        center: true,
      },

      colors: {
        primary: "#07652f",
        secondary: "#ff7e13",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
        "2xl": "1140px",
      },
    },
  },
};

// ===== responsive navbar
let navbarToggler = document.querySelector("#navbarToggler");
const navbarCollapse = document.querySelector("#navbarCollapse");

navbarToggler.addEventListener("click", () => {
  navbarToggler.classList.toggle("navbarTogglerActive");
  navbarCollapse.classList.toggle("hidden");
});

//===== close navbar-collapse when a  clicked
document
  .querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a")
  .forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("navbarTogglerActive");
      navbarCollapse.classList.add("hidden");
    })
  );

// ===== Sub-menu
const submenuItems = document.querySelectorAll(".submenu-item");
submenuItems.forEach((el) => {
  el.querySelector("a").addEventListener("click", () => {
    el.querySelector(".submenu").classList.toggle("hidden");
  });
});

// lang
function openLangMenu() {
  document.getElementById("dropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropdown-button")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// lang
// swiper
//swiper-1
let swiperHero = new Swiper(".swiper-hero", {
  slidesPerView: 1,

  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// swiper-about-swiper
//swiper-1
let swiperAbout = new Swiper(".swiper-about-swiper", {
  spaceBetween: 25,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    760: {
      slidesPerView: 3,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

// swiper

// whatsapp
function cookieAcceptWhatsapp() {
  createCookie("wp-cookie", "1", 5);
}

function createCookie(name, value, days) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie =
    encodeURIComponent(name) +
    "=" +
    encodeURIComponent(value) +
    expires +
    "; path=/";
}

function readCookie(name) {
  var nameEQ = encodeURIComponent(name) + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0)
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

var yesCookie = readCookie("p-cookie");
if (yesCookie == 1) {
  $(".cookie-policy").hide();
}

const firstSession = readCookie("wp-cookie");
$(document).on("click", "#whatsapp-popup", function () {
  $(".whatsapp-wrapper").toggleClass("hide-whatsapp show-whatsapp");
  setTimeout(function () {
    $(".loading-animation").hide();
    $(".whatsapp-message-wrapper").css("display", "flex").hide().fadeIn("slow");
  }, 1000);
});
$(document).on("click", ".close_whatsapp", function () {
  $("#whatsapp-chat");
  $(".whatsapp-wrapper").toggleClass("hide-whatsapp show-whatsapp");
});
if (firstSession == "1") {
  $(".whatsapp-wrapper").removeClass("show-whatsapp");
  $(".whatsapp-wrapper").addClass("hide-whatsapp");
} else {
  cookieAcceptWhatsapp();
  $(".whatsapp-wrapper")
    .delay(10000)
    .queue(function () {
      $(this).addClass("show-whatsapp");
      $(this).removeClass("hide-whatsapp");
    });
  $(".whatsapp-message-wrapper")
    .delay(13000)
    .queue(function () {
      $(this).addClass("di");
      $(this).removeClass("loading-animation");
    });
  $(".loading-animation")
    .delay(13000)
    .queue(function () {
      $(this).addClass("dinone");
    });
}

// whatsapp

// video
$(document).ready(function () {
  $('[data-fancybox="gallery"]').fancybox({
    // Optional settings
    loop: true, // Enable looping through the gallery
    // Add more options as needed
  });
});

// video

// zoom image
/**
 * Magnifier.js is a Javascript library enabling magnifying glass effect on an images.
 *
 * Features
 *
 * Zoom in / out functionality using mouse wheel
 * Setting options via Javascript or data attributes
 * Magnified image can be displayed in the lens itself or outside of it in a wrapper
 * Attachment to multiple images with single call
 * Attachment of user defined functions for thumbnail entering, moving and leaving and image zooming events
 * Display loading text while the large image is being loaded, and switch to lens once its loaded
 *
 * Magnifier.js uses Event.js as a cross-browser event handling wrapper, which is available at
 * Github and JSClasses.org:
 *
 * Github - https://github.com/mark-rolich/Event.js
 * JS Classes - http://www.jsclasses.org/package/212-JavaScript-Handle-events-in-a-browser-independent-manner.html
 *
 * Works in Chrome, Firefox, Safari, IE 7, 8, 9 & 10.
 *
 * @author Mark Rolich <mark.rolich@gmail.com>
 */
var Magnifier = function (evt, options) {
  "use strict";

  var gOptions = options || {},
    curThumb = null,
    curData = {
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      lensW: 0,
      lensH: 0,
      lensBgX: 0,
      lensBgY: 0,
      largeW: 0,
      largeH: 0,
      largeL: 0,
      largeT: 0,
      zoom: 2,
      zoomMin: 1.1,
      zoomMax: 5,
      mode: "outside",
      largeWrapperId:
        gOptions.largeWrapper !== undefined
          ? gOptions.largeWrapper.id || null
          : null,
      status: 0,
      zoomAttached: false,
      zoomable: gOptions.zoomable !== undefined ? gOptions.zoomable : false,
      onthumbenter:
        gOptions.onthumbenter !== undefined ? gOptions.onthumbenter : null,
      onthumbmove:
        gOptions.onthumbmove !== undefined ? gOptions.onthumbmove : null,
      onthumbleave:
        gOptions.onthumbleave !== undefined ? gOptions.onthumbleave : null,
      onzoom: gOptions.onzoom !== undefined ? gOptions.onzoom : null,
    },
    pos = {
      t: 0,
      l: 0,
      x: 0,
      y: 0,
    },
    gId = 0,
    status = 0,
    curIdx = "",
    curLens = null,
    curLarge = null,
    gZoom = gOptions.zoom !== undefined ? gOptions.zoom : curData.zoom,
    gZoomMin =
      gOptions.zoomMin !== undefined ? gOptions.zoomMin : curData.zoomMin,
    gZoomMax =
      gOptions.zoomMax !== undefined ? gOptions.zoomMax : curData.zoomMax,
    gMode = gOptions.mode || curData.mode,
    data = {},
    inBounds = false,
    isOverThumb = 0,
    getElementsByClass = function (className) {
      var list = [],
        elements = null,
        len = 0,
        pattern = "",
        i = 0,
        j = 0;

      if (document.getElementsByClassName) {
        list = document.getElementsByClassName(className);
      } else {
        elements = document.getElementsByTagName("*");
        len = elements.length;
        pattern = new RegExp("(^|\\s)" + className + "(\\s|$)");

        for (i, j; i < len; i += 1) {
          if (pattern.test(elements[i].className)) {
            list[j] = elements[i];
            j += 1;
          }
        }
      }

      return list;
    },
    $ = function (selector) {
      var idx = "",
        type = selector.charAt(0),
        result = null;

      if (type === "#" || type === ".") {
        idx = selector.substr(1, selector.length);
      }

      if (idx !== "") {
        switch (type) {
          case "#":
            result = document.getElementById(idx);
            break;
          case ".":
            result = getElementsByClass(idx);
            break;
        }
      }

      return result;
    },
    createLens = function (thumb, idx) {
      var lens = document.createElement("div");

      lens.id = idx + "-lens";
      lens.className = "magnifier-loader";

      thumb.parentNode.appendChild(lens);
    },
    updateLensOnZoom = function () {
      curLens.style.left = pos.l + "px";
      curLens.style.top = pos.t + "px";
      curLens.style.width = curData.lensW + "px";
      curLens.style.height = curData.lensH + "px";
      curLens.style.backgroundPosition =
        "-" + curData.lensBgX + "px -" + curData.lensBgY + "px";

      curLarge.style.left = "-" + curData.largeL + "px";
      curLarge.style.top = "-" + curData.largeT + "px";
      curLarge.style.width = curData.largeW + "px";
      curLarge.style.height = curData.largeH + "px";
    },
    updateLensOnLoad = function (idx, thumb, large, largeWrapper) {
      var lens = $("#" + idx + "-lens"),
        textWrapper = null;

      if (data[idx].status === 1) {
        textWrapper = document.createElement("div");
        textWrapper.className = "magnifier-loader-text";
        lens.className = "magnifier-loader hidden";

        textWrapper.appendChild(document.createTextNode("Loading..."));
        lens.appendChild(textWrapper);
      } else if (data[idx].status === 2) {
        lens.className = "magnifier-lens hidden";
        lens.removeChild(lens.childNodes[0]);
        lens.style.background = "url(" + thumb.src + ") no-repeat 0 0 scroll";

        large.id = idx + "-large";
        large.style.width = data[idx].largeW + "px";
        large.style.height = data[idx].largeH + "px";
        large.className = "magnifier-large hidden";

        if (data[idx].mode === "inside") {
          lens.appendChild(large);
        } else {
          largeWrapper.appendChild(large);
        }
      }

      lens.style.width = data[idx].lensW + "px";
      lens.style.height = data[idx].lensH + "px";
    },
    getMousePos = function () {
      var xPos = pos.x - curData.x,
        yPos = pos.y - curData.y,
        t = 0,
        l = 0;

      inBounds =
        xPos < 0 || yPos < 0 || xPos > curData.w || yPos > curData.h
          ? false
          : true;

      l = xPos - curData.lensW / 2;
      t = yPos - curData.lensH / 2;

      if (curData.mode !== "inside") {
        if (xPos < curData.lensW / 2) {
          l = 0;
        }

        if (yPos < curData.lensH / 2) {
          t = 0;
        }

        if (xPos - curData.w + curData.lensW / 2 > 0) {
          l = curData.w - (curData.lensW + 2);
        }

        if (yPos - curData.h + curData.lensH / 2 > 0) {
          t = curData.h - (curData.lensH + 2);
        }
      }

      pos.l = Math.round(l);
      pos.t = Math.round(t);

      curData.lensBgX = pos.l + 1;
      curData.lensBgY = pos.t + 1;

      if (curData.mode === "inside") {
        curData.largeL = Math.round(
          xPos * (curData.zoom - curData.lensW / curData.w)
        );
        curData.largeT = Math.round(
          yPos * (curData.zoom - curData.lensH / curData.h)
        );
      } else {
        curData.largeL = Math.round(
          curData.lensBgX * curData.zoom * (curData.largeWrapperW / curData.w)
        );
        curData.largeT = Math.round(
          curData.lensBgY * curData.zoom * (curData.largeWrapperH / curData.h)
        );
      }
    },
    zoomInOut = function (e) {
      var delta = e.wheelDelta > 0 || e.detail < 0 ? 0.1 : -0.1,
        handler = curData.onzoom,
        multiplier = 1,
        w = 0,
        h = 0;

      if (e.preventDefault) {
        e.preventDefault();
      }

      e.returnValue = false;

      curData.zoom = Math.round((curData.zoom + delta) * 10) / 10;

      if (curData.zoom >= curData.zoomMax) {
        curData.zoom = curData.zoomMax;
      } else if (curData.zoom >= curData.zoomMin) {
        curData.lensW = Math.round(curData.w / curData.zoom);
        curData.lensH = Math.round(curData.h / curData.zoom);

        if (curData.mode === "inside") {
          w = curData.w;
          h = curData.h;
        } else {
          w = curData.largeWrapperW;
          h = curData.largeWrapperH;
          multiplier = curData.largeWrapperW / curData.w;
        }

        curData.largeW = Math.round(curData.zoom * w);
        curData.largeH = Math.round(curData.zoom * h);

        getMousePos();
        updateLensOnZoom();

        if (handler !== null) {
          handler({
            thumb: curThumb,
            lens: curLens,
            large: curLarge,
            x: pos.x,
            y: pos.y,
            zoom: Math.round(curData.zoom * multiplier * 10) / 10,
            w: curData.lensW,
            h: curData.lensH,
          });
        }
      } else {
        curData.zoom = curData.zoomMin;
      }
    },
    onThumbEnter = function () {
      curData = data[curIdx];
      curLens = $("#" + curIdx + "-lens");

      if (curData.status === 2) {
        curLens.className = "magnifier-lens";

        if (curData.zoomAttached === false) {
          if (curData.zoomable !== undefined && curData.zoomable === true) {
            evt.attach("mousewheel", curLens, zoomInOut);

            if (window.addEventListener) {
              curLens.addEventListener("DOMMouseScroll", function (e) {
                zoomInOut(e);
              });
            }
          }

          curData.zoomAttached = true;
        }

        curLarge = $("#" + curIdx + "-large");
        curLarge.className = "magnifier-large";
      } else if (curData.status === 1) {
        curLens.className = "magnifier-loader";
      }
    },
    onThumbLeave = function () {
      if (curData.status > 0) {
        var handler = curData.onthumbleave;

        if (handler !== null) {
          handler({
            thumb: curThumb,
            lens: curLens,
            large: curLarge,
            x: pos.x,
            y: pos.y,
          });
        }

        if (curLens.className.indexOf("hidden") === -1) {
          curLens.className += " hidden";
          curThumb.className = curData.thumbCssClass;

          if (curLarge !== null) {
            curLarge.className += " hidden";
          }
        }
      }
    },
    move = function () {
      if (status !== curData.status) {
        onThumbEnter();
      }

      if (curData.status > 0) {
        curThumb.className = curData.thumbCssClass + " opaque";

        if (curData.status === 1) {
          curLens.className = "magnifier-loader";
        } else if (curData.status === 2) {
          curLens.className = "magnifier-lens";
          curLarge.className = "magnifier-large";
          curLarge.style.left = "-" + curData.largeL + "px";
          curLarge.style.top = "-" + curData.largeT + "px";
        }

        curLens.style.left = pos.l + "px";
        curLens.style.top = pos.t + "px";
        curLens.style.backgroundPosition =
          "-" + curData.lensBgX + "px -" + curData.lensBgY + "px";

        var handler = curData.onthumbmove;

        if (handler !== null) {
          handler({
            thumb: curThumb,
            lens: curLens,
            large: curLarge,
            x: pos.x,
            y: pos.y,
          });
        }
      }

      status = curData.status;
    },
    setThumbData = function (thumb, thumbData) {
      var thumbBounds = thumb.getBoundingClientRect(),
        w = 0,
        h = 0;

      thumbData.x = thumbBounds.left;
      thumbData.y = thumbBounds.top;
      thumbData.w = Math.round(thumbBounds.right - thumbData.x);
      thumbData.h = Math.round(thumbBounds.bottom - thumbData.y);

      thumbData.lensW = Math.round(thumbData.w / thumbData.zoom);
      thumbData.lensH = Math.round(thumbData.h / thumbData.zoom);

      if (thumbData.mode === "inside") {
        w = thumbData.w;
        h = thumbData.h;
      } else {
        w = thumbData.largeWrapperW;
        h = thumbData.largeWrapperH;
      }

      thumbData.largeW = Math.round(thumbData.zoom * w);
      thumbData.largeH = Math.round(thumbData.zoom * h);
    };

  this.attach = function (options) {
    if (options.thumb === undefined) {
      throw {
        name: "Magnifier error",
        message: "Please set thumbnail",
        toString: function () {
          return this.name + ": " + this.message;
        },
      };
    }

    var thumb = $(options.thumb),
      i = 0;

    if (thumb.length !== undefined) {
      for (i; i < thumb.length; i += 1) {
        options.thumb = thumb[i];
        this.set(options);
      }
    } else {
      options.thumb = thumb;
      this.set(options);
    }
  };

  this.setThumb = function (thumb) {
    curThumb = thumb;
  };

  this.set = function (options) {
    if (data[options.thumb.id] !== undefined) {
      curThumb = options.thumb;
      return false;
    }

    var thumbObj = new Image(),
      largeObj = new Image(),
      thumb = options.thumb,
      idx = thumb.id,
      zoomable = null,
      largeUrl = null,
      largeWrapper =
        $("#" + options.largeWrapper) ||
        $("#" + thumb.getAttribute("data-large-img-wrapper")) ||
        $("#" + curData.largeWrapperId),
      zoom = options.zoom || thumb.getAttribute("data-zoom") || gZoom,
      zoomMin =
        options.zoomMin || thumb.getAttribute("data-zoom-min") || gZoomMin,
      zoomMax =
        options.zoomMax || thumb.getAttribute("data-zoom-max") || gZoomMax,
      mode = options.mode || thumb.getAttribute("data-mode") || gMode,
      onthumbenter =
        options.onthumbenter !== undefined
          ? options.onthumbenter
          : curData.onthumbenter,
      onthumbleave =
        options.onthumbleave !== undefined
          ? options.onthumbleave
          : curData.onthumbleave,
      onthumbmove =
        options.onthumbmove !== undefined
          ? options.onthumbmove
          : curData.onthumbmove,
      onzoom = options.onzoom !== undefined ? options.onzoom : curData.onzoom;

    if (options.large === undefined) {
      largeUrl =
        options.thumb.getAttribute("data-large-img-url") !== null
          ? options.thumb.getAttribute("data-large-img-url")
          : options.thumb.src;
    } else {
      largeUrl = options.large;
    }

    if (largeWrapper === null && mode !== "inside") {
      throw {
        name: "Magnifier error",
        message: "Please specify large image wrapper DOM element",
        toString: function () {
          return this.name + ": " + this.message;
        },
      };
    }

    if (options.zoomable !== undefined) {
      zoomable = options.zoomable;
    } else if (thumb.getAttribute("data-zoomable") !== null) {
      zoomable = thumb.getAttribute("data-zoomable") === "true";
    } else if (curData.zoomable !== undefined) {
      zoomable = curData.zoomable;
    }

    if (thumb.id === "") {
      idx = thumb.id = "magnifier-item-" + gId;
      gId += 1;
    }

    createLens(thumb, idx);

    data[idx] = {
      zoom: zoom,
      zoomMin: zoomMin,
      zoomMax: zoomMax,
      mode: mode,
      zoomable: zoomable,
      thumbCssClass: thumb.className,
      zoomAttached: false,
      status: 0,
      largeUrl: largeUrl,
      largeWrapperId: mode === "outside" ? largeWrapper.id : null,
      largeWrapperW: mode === "outside" ? largeWrapper.offsetWidth : null,
      largeWrapperH: mode === "outside" ? largeWrapper.offsetHeight : null,
      onzoom: onzoom,
      onthumbenter: onthumbenter,
      onthumbleave: onthumbleave,
      onthumbmove: onthumbmove,
    };

    evt.attach(
      "mouseover",
      thumb,
      function (e, src) {
        if (curData.status !== 0) {
          onThumbLeave();
        }

        curIdx = src.id;
        curThumb = src;

        onThumbEnter(src);

        setThumbData(curThumb, curData);

        pos.x = e.clientX;
        pos.y = e.clientY;

        getMousePos();
        move();

        var handler = curData.onthumbenter;

        if (handler !== null) {
          handler({
            thumb: curThumb,
            lens: curLens,
            large: curLarge,
            x: pos.x,
            y: pos.y,
          });
        }
      },
      false
    );

    evt.attach("mousemove", thumb, function (e, src) {
      isOverThumb = 1;
    });

    evt.attach("load", thumbObj, function () {
      data[idx].status = 1;

      setThumbData(thumb, data[idx]);
      updateLensOnLoad(idx);

      evt.attach("load", largeObj, function () {
        data[idx].status = 2;
        updateLensOnLoad(idx, thumb, largeObj, largeWrapper);
      });

      largeObj.src = data[idx].largeUrl;
    });

    thumbObj.src = thumb.src;
  };

  evt.attach(
    "mousemove",
    document,
    function (e) {
      pos.x = e.clientX;
      pos.y = e.clientY;

      getMousePos();

      if (inBounds === true) {
        move();
      } else {
        if (isOverThumb !== 0) {
          onThumbLeave();
        }

        isOverThumb = 0;
      }
    },
    false
  );

  evt.attach("scroll", window, function () {
    if (curThumb !== null) {
      setThumbData(curThumb, curData);
    }
  });
};
// zoom image

/**
 * Unifies event handling across browsers
 *
 * - Allows registering and unregistering of event handlers
 * - Injects event object and involved DOM element to listener
 *
 * @author Mark Rolich <mark.rolich@gmail.com>
 */
var Event = function () {
  "use strict";
  this.attach = function (evtName, element, listener, capture) {
    var evt = "",
      useCapture = capture === undefined ? true : capture,
      handler = null;

    if (window.addEventListener === undefined) {
      evt = "on" + evtName;
      handler = function (evt, listener) {
        element.attachEvent(evt, listener);
        return listener;
      };
    } else {
      evt = evtName;
      handler = function (evt, listener, useCapture) {
        element.addEventListener(evt, listener, useCapture);
        return listener;
      };
    }

    return handler.apply(element, [
      evt,
      function (ev) {
        var e = ev || event,
          src = e.srcElement || e.target;

        listener(e, src);
      },
      useCapture,
    ]);
  };

  this.detach = function (evtName, element, listener, capture) {
    var evt = "",
      useCapture = capture === undefined ? true : capture;

    if (window.removeEventListener === undefined) {
      evt = "on" + evtName;
      element.detachEvent(evt, listener);
    } else {
      evt = evtName;
      element.removeEventListener(evt, listener, useCapture);
    }
  };

  this.stop = function (evt) {
    evt.cancelBubble = true;

    if (evt.stopPropagation) {
      evt.stopPropagation();
    }
  };

  this.prevent = function (evt) {
    if (evt.preventDefault) {
      evt.preventDefault();
    } else {
      evt.returnValue = false;
    }
  };
};

// zoomImage
document.querySelectorAll(".mainImage").forEach(function (img) {
  // Event listener for mouse movement within the image
  img.addEventListener("mousemove", function (e) {
    const zoomResult = this.nextElementSibling; // Assumes zoomResult is next to img
    const size = 300; // Size of the zoom window
    const scale = 3; // Zoom scale factor
    const x = e.offsetX;
    const y = e.offsetY;

    // Calculate background image position
    const bgPosX = x * scale - size / 2;
    const bgPosY = y * scale - size / 2;

    // Set styles for the zoomed result
    zoomResult.style.backgroundImage = `url('${this.src}')`;
    zoomResult.style.backgroundSize = `${this.width * scale}px ${
      this.height * scale
    }px`;
    zoomResult.style.backgroundPosition = `-${bgPosX}px -${bgPosY}px`;
    zoomResult.style.display = "block"; // Ensure visibility on hover
  });

  // Event listener for mouse leaving the image area
  img.addEventListener("mouseleave", function () {
    const zoomResult = this.nextElementSibling; // Assumes zoomResult is next to img
    zoomResult.style.display = "none"; // Hide the zoom result when mouse leaves
  });
});


// zoomImage
