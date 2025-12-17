document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const fadeAnimations = [
    { selector: ".fade-left", from: { x: -40 } },
    { selector: ".fade-right", from: { x: 40 } },
    { selector: ".fade-top", from: { y: -40 } },
    { selector: ".fade-bottom", from: { y: 40 } },
  ];

  fadeAnimations.forEach(({ selector, from }) => {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.fromTo(
        el,
        { ...from, opacity: 0, visibility: "visible" },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 10%",
            once: true,
          },
        }
      );
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".animate-item");
    if (!items.length) return; 

    const observer = new IntersectionObserver((entries) =>
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const index = [...items].indexOf(entry.target);
            entry.target.style.transitionDelay = `${ 0.15}s`;
            entry.target.classList.add("visible");

            observer.unobserve(entry.target);
        })
    , { threshold: 0.1 });

    items.forEach(item => observer.observe(item));
});




document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector("#heroVideo");
  if(video){
  const source = video.querySelector("source");

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      source.src = source.dataset.src;
      video.load();
      observer.disconnect();
    }
  });

  observer.observe(video);
  }

});


const track = document.querySelector(".b-partners-track");
if (track) {
  const items = gsap.utils.toArray(".b-partners-track > *");

  items.forEach((item) => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });

  const totalWidth = track.scrollWidth / 2;

  gsap.to(track, {
    x: -totalWidth,
    duration: 50,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % -totalWidth),
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const categoryButtons = document.querySelectorAll(
    ".b-instruments-categories button"
  );
  const items = document.querySelectorAll(".b-instrument-item");

  function setActive(id) {
    categoryButtons.forEach((btn) => btn.classList.remove("active"));

    const activeBtn = document.querySelector(
      `.b-instruments-categories button[data-id="${id}"]`
    );
    if (activeBtn) activeBtn.classList.add("active");

    items.forEach((item) => {
      item.style.display = item.dataset.id === id ? "flex" : "none";
    });
  }

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.id;
      setActive(id);
    });
  });

  setActive("1");
});

document.addEventListener("DOMContentLoaded", () => {
  const instrumentItems = document.querySelectorAll(".b-instrument-item");

  instrumentItems.forEach((instrument) => {
    const valButtons = instrument.querySelectorAll(
      ".b-instrument-item-categories button"
    );
    const valImages = instrument.querySelectorAll(".b-instrument-img-item");

    function setActiveVal(val) {
      valButtons.forEach((btn) => btn.classList.remove("active"));

      const activeBtn = instrument.querySelector(
        `.b-instrument-item-categories button[data-val="${val}"]`
      );
      if (activeBtn) activeBtn.classList.add("active");

      valImages.forEach((img) => {
        img.style.display = img.dataset.val === val ? "flex" : "none";
      });
    }

    valButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const val = button.dataset.val;
        setActiveVal(val);
      });
    });

    setActiveVal("1");
  });
});

if (typeof window.jQuery !== "undefined") {
  jQuery.event.special.touchstart = {
    setup: function (_, ns, handle) {
      this.addEventListener("touchstart", handle, { passive: false });
    },
  };

  jQuery.event.special.touchmove = {
    setup: function (_, ns, handle) {
      this.addEventListener("touchmove", handle, { passive: false });
    },
  };
}

$(window).on("load", function () {
  if (typeof window.jQuery === "undefined") return;

  if (typeof $.fn.twentytwenty !== "function") return;

  $(".twentytwenty-picture").twentytwenty({
    orientation: "horizontal",
  });
});


let macy;

function initMacy() {
  if (typeof window.Macy !== "function") return;

  if (macy) {
    macy.recalculate(true);
    return;
  }

  macy = Macy({
    container: ".c-users-items",
    margin: window.innerWidth <= 768 ? 10 : 19.5,
    columns: 3,
    breakAt: {
      1100: 2,
      768: 1,
    },
  });
}

document.addEventListener("DOMContentLoaded", initMacy);

window.addEventListener("resize", () => {
  if (typeof window.Macy !== "function") return;
  initMacy();
});



document.addEventListener("DOMContentLoaded", function () {
  const idSwitches = document.querySelectorAll(
    ".c-demonstration-media-swiitch"
  );
  const valSwitches = document.querySelectorAll(".c-demonstration-swiitch");
  const wrappers = document.querySelectorAll(
    ".c-demonstration-twentytwenty-wrapper"
  );

  const disabledById = {
    1: ["4"],
    2: ["1", "2"],
    3: ["3"],
  };

  let activeId = idSwitches.length ? idSwitches[0].dataset.id : null;

  valSwitches.forEach((sw) => {
    sw.classList.remove("disabled");
    sw.classList.add("active");
    sw.style.pointerEvents = "auto";
  });

  if (idSwitches[0]) {
    idSwitches[0].classList.add("active");
  }

  function getActiveVals() {
    return [...valSwitches]
      .filter(
        (sw) =>
          sw.classList.contains("active") && !sw.classList.contains("disabled")
      )
      .map((sw) => sw.dataset.val)
      .sort();
  }

  function hasWrapper(id, val) {
    return [...wrappers].some(
      (w) => w.dataset.id === id && w.dataset.val === val
    );
  }

  function updateDisabledById() {
    const toDisable = disabledById[activeId] || [];

    valSwitches.forEach((sw) => {
      const val = sw.dataset.val;

      if (toDisable.includes(val)) {
        sw.classList.add("disabled");
        sw.classList.remove("active");
        sw.style.pointerEvents = "none";
      } else {
        sw.classList.remove("disabled");
        sw.style.pointerEvents = "auto";
      }
    });
  }

  function applyFilter() {
    if (!activeId) return;

    updateDisabledById();

    const available = [...valSwitches].filter(
      (sw) => !sw.classList.contains("disabled")
    );
    const totalAvailable = available.length;

    const activeVals = getActiveVals();
    let finalVal = null;

    if (activeVals.length === 0) {
      if (hasWrapper(activeId, "disabled")) {
        finalVal = "disabled";
      } else if (hasWrapper(activeId, "all")) {
        finalVal = "all";
      }
    } else {
      if (activeVals.length === totalAvailable && hasWrapper(activeId, "all")) {
        finalVal = "all";
      } else if (activeVals.length === 1) {
        const single = activeVals[0];
        if (hasWrapper(activeId, single)) {
          finalVal = single;
        } else if (hasWrapper(activeId, "all")) {
          finalVal = "all";
        }
      } else {
        const combo = activeVals.join("+");
        if (hasWrapper(activeId, combo)) {
          finalVal = combo;
        } else if (hasWrapper(activeId, "all")) {
          finalVal = "all";
        }
      }
    }

    wrappers.forEach((w) => {
      const sameId = w.dataset.id === activeId;
      const sameVal = finalVal !== null && w.dataset.val === finalVal;
      w.style.display = sameId && sameVal ? "block" : "none";
    });

    setTimeout(() => window.dispatchEvent(new Event("resize")), 30);
    setTimeout(() => window.dispatchEvent(new Event("resize")), 120);
  }

  idSwitches.forEach((sw) => {
    sw.addEventListener("click", () => {
      idSwitches.forEach((s) => s.classList.remove("active"));
      sw.classList.add("active");
      activeId = sw.dataset.id;
      applyFilter();
    });
  });

  valSwitches.forEach((sw) => {
    sw.addEventListener("click", () => {
      if (sw.classList.contains("disabled")) return;
      sw.classList.toggle("active");
      applyFilter();
    });
  });

  applyFilter();
});





const hTracks = document.querySelectorAll(".h-universe-track");

hTracks.forEach((hTrack) => {
  const hItems = gsap.utils.toArray(hTrack.children);

  hItems.forEach((item) => {
    const clone = item.cloneNode(true);
    hTrack.appendChild(clone);
  });

  const totalWidth = hTrack.scrollWidth / 2;

  gsap.to(hTrack, {
    x: -totalWidth,
    duration: 70,
    ease: "none",
    repeat: -1,
 
  });
});

const hRightTracks = document.querySelectorAll(".h-universe-track--right");

hRightTracks.forEach((track) => {
  track.innerHTML += track.innerHTML;

  const width = track.scrollWidth / 2;

  gsap.fromTo(
    track,
    { x: -width }, 
    {
      x: 0,
      duration: 70,
      ease: "none",
      repeat: -1,

    }
  );
});


const hWorkTracks = document.querySelectorAll(".h-work-partners-track");

hWorkTracks.forEach((track) => {
  const items = Array.from(track.children);

  items.forEach((item) => track.appendChild(item.cloneNode(true)));

  const totalWidth = track.scrollWidth / 2;

  gsap.to(track, {
    x: -totalWidth,
    duration: 70,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % -totalWidth),
    },
  });
});








document.querySelector(".h-hero-input-box") &&
  document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".h-hero-input-box");
    const input = box.querySelector("input");

    input.onfocus = () => box.classList.add("active");
    input.onblur = () => box.classList.remove("active");
  });

document.querySelector(".h-tolls-slide") &&
  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".h-tolls-slide");

    const isMobile = window.matchMedia(
      "(hover: none), (pointer: coarse)"
    ).matches;

    if (!isMobile) return; //

    slides.forEach((slide) => {
      slide.addEventListener("click", () => {
        if (slide.classList.contains("active")) {
          slide.classList.remove("active");
          return;
        }
        slides.forEach((s) => s.classList.remove("active"));

        slide.classList.add("active");
      });
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  const hItems = document.querySelectorAll(".h-possibilities-item");
  const hMediaBlocks = document.querySelectorAll(".h-possibilities-media");

  if (!hItems.length || !hMediaBlocks.length) return;

  hItems[0].classList.add("h-active");
  hMediaBlocks[0].classList.add("h-active");

  hItems.forEach((hItem) => {
    hItem.addEventListener("click", function () {
      const hId = this.dataset.id;

      hItems.forEach((i) => i.classList.remove("h-active"));
      this.classList.add("h-active");

      hMediaBlocks.forEach((block) => {
        block.classList.toggle("h-active", block.dataset.id === hId);
      });
    });
  });
});








const jFileInput = document.querySelector("#j-file-input");
const jFileLabel = document.querySelector(".j-hero-file-label");
const jFileResult = document.querySelector(".j-hero-file-rezult");
const jPreviewImg = jFileResult?.querySelector("img");
const jCloseBtn = jFileResult?.querySelector(".icon-jClose");

if (!jFileInput || !jFileLabel || !jFileResult || !jPreviewImg || !jCloseBtn) {
  console.warn("j-file elements not found");
} else {
  jFileInput.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
      jPreviewImg.src = e.target.result;
    };

    reader.readAsDataURL(file);

    jFileLabel.style.display = "none";
    jFileResult.style.display = "flex";
  });

  jCloseBtn.addEventListener("click", function () {
    jFileInput.value = "";
    jPreviewImg.src = "";

    jFileResult.style.display = "none";
    jFileLabel.style.display = "flex";
  });
}



document.addEventListener("DOMContentLoaded", () => {
  const jTextarea = document.querySelector(".j-hero-textarea-label textarea");
  const jStartCount = document.querySelector(".j-start-count");
  const jMaxCount = document.querySelector(".j-max-count");
  const jCounter = document.querySelector(".j-textarea-length");

  const J_MAX = 500;
  const jDefaultPlaceholder = "Что вы хотите нарисовать?";

  if (!jTextarea || !jStartCount || !jMaxCount || !jCounter) return;

  jTextarea.placeholder = jDefaultPlaceholder; 
  jStartCount.textContent = "0";
  jMaxCount.textContent = String(J_MAX);

  const jUpdate = () => {
    const len = jTextarea.value.length;

    jStartCount.textContent = String(len);

    if (len > 0) {
      jTextarea.placeholder = "";
    } else {
      jTextarea.placeholder = jDefaultPlaceholder;
    }

    if (len > J_MAX) {
      jCounter.classList.add("is-error");
      jTextarea.classList.add("is-error");
    } else {
      jCounter.classList.remove("is-error");
      jTextarea.classList.remove("is-error");
    }
  };

  jTextarea.addEventListener("input", jUpdate);

  jUpdate();
});


document.addEventListener("DOMContentLoaded", () => {
  const jSelects = document.querySelectorAll(".j-hero-select");

  if (!jSelects.length) return;

  jSelects.forEach((jSelect) => {
    const jHeader = jSelect.querySelector(".j-hero-select-header");
    if (!jHeader) return;

    jHeader.addEventListener("click", (e) => {
      e.stopPropagation();

      jSelects.forEach((item) => {
        if (item !== jSelect) {
          item.classList.remove("active");
        }
      });

      jSelect.classList.toggle("active");
    });

    jSelect.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });

  document.addEventListener("click", () => {
    jSelects.forEach((jSelect) => {
      jSelect.classList.remove("active");
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const jStyleSelect = document.querySelector(".j-hero-select-style");
  if (!jStyleSelect) return;

  const jHeader = jStyleSelect.querySelector(".j-style-select-header p");
  const jItems = jStyleSelect.querySelectorAll(".j-style-sub-block ul li");

  if (!jHeader || !jItems.length) return;

  jItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();

      jItems.forEach((el) => el.classList.remove("active"));

      item.classList.add("active");

      const text = item.querySelector("span")?.textContent;
      if (text) {
        jHeader.textContent = `Стиль: ${text}`;
      }

      jStyleSelect.classList.remove("active");
    });
  });
});

document.querySelector(".j-examples-media") &&
document.addEventListener("DOMContentLoaded", () => {
  const media = document.querySelector(".j-examples-media");
  const btn = media.querySelector(".j-examples-btn");
  const text = btn.querySelector("span");

  btn.addEventListener("click", () => {
    const isActive = media.classList.contains("active");

    if (isActive) {
      media.classList.remove("active");
      text.textContent = "Показать больше";

      media.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    } else {
      media.classList.add("active");
      text.textContent = "Показать меньше";
    }
  });
});


$(function () {
  let Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    let links = this.el.find(".link");
    links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    let $el = e.data.el;
    let $this = $(this),
      $next = $this.next();

    $next.slideToggle();

    if (!e.data.multiple) {
      $el.find(".submenu").not($next).slideUp();
    }

    if (!$this.hasClass("open")) {
      $(".link").removeClass("open");
      $this.addClass("open");
    } else {
      $this.removeClass("open");
    }
  };

  let accordion = new Accordion($("#accordion"), false);

  let firstLink = $("#accordion .link").first();
  let firstSub = firstLink.next(".submenu");

  firstLink.addClass("open");
  firstSub.show();
});



document.addEventListener("DOMContentLoaded", () => {
    const heroBlock = document.querySelector(".e-hero-textarea");
    if (!heroBlock) return; 

    const textarea = heroBlock.querySelector("textarea");
    const placeholder = heroBlock.querySelector(".e-textarea-placeholder");
    const buttons = document.querySelectorAll(".e-hero-hints button");

    if (!textarea || !placeholder) return;

    const toggle = () =>
        textarea.value.trim() === ""
            ? placeholder.classList.remove("hidden")
            : placeholder.classList.add("hidden");

    buttons.forEach(btn =>
        btn.addEventListener("click", () => {
            textarea.value = btn.textContent.trim();
            placeholder.classList.add("hidden");
            textarea.focus();
        })
    );

    textarea.addEventListener("input", toggle);
    textarea.addEventListener("blur", toggle);
    textarea.addEventListener("focus", () => placeholder.classList.add("hidden"));

    toggle();
});




document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".f-search-box");
  if (!boxes.length) return; 

  boxes.forEach(box => {
    const input = box.querySelector("input");
    if (!input) return;

    input.addEventListener("focus", () => box.classList.add("active"));
    input.addEventListener("blur",  () => box.classList.remove("active"));
  });
});


document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".f-sidebar-nav");
    if (!sidebar) return; 

    const links = sidebar.querySelectorAll("ul li a");
    if (!links.length) return;

    links.forEach(link =>
        link.addEventListener("click", e => {
            e.preventDefault();
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        })
    );
});





document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".f-wrapper");
    const arrowBtn = document.querySelector(".icon-arrowUpLine");
    const burger = document.querySelector(".f-burger");

    if (!wrapper) return;

    arrowBtn?.addEventListener("click", () => {
        wrapper.classList.remove("active");
        wrapper.classList.add("inActive");
    });

    burger?.addEventListener("click", () => {
        wrapper.classList.remove("inActive");
        wrapper.classList.add("active");
    });
});


