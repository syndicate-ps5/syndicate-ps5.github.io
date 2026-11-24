(function () {
  var labels = {
    de: { nav: "Hauptnavigation", foot: "Fußnavigation", lang: "Sprache", menuOpen: "Menü öffnen", menuClose: "Menü schließen" },
    en: { nav: "Main", foot: "Footer", lang: "Language", menuOpen: "Open menu", menuClose: "Close menu" }
  };

  function lang() {
    return document.documentElement.lang === "en" ? "en" : "de";
  }

  function apply(next) {
    var choice = next === "en" ? "en" : "de";
    document.documentElement.lang = choice;
    try {
      localStorage.setItem("syndicate-lang", choice);
    } catch (error) {
      /* local storage can be blocked; the page still switches for this view */
    }
    document.querySelectorAll("[data-set-lang]").forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-set-lang") === choice ? "true" : "false");
    });
    var titleDe = document.documentElement.getAttribute("data-title-de");
    var titleEn = document.documentElement.getAttribute("data-title-en");
    if (titleDe && titleEn) document.title = (choice === "en" ? titleEn : titleDe) + " – SYNDICATE";
    var meta = document.querySelector('meta[name="description"]');
    if (meta) {
      var descriptionDe = meta.getAttribute("data-description-de");
      var descriptionEn = meta.getAttribute("data-description-en");
      if (descriptionDe && descriptionEn) meta.setAttribute("content", choice === "en" ? descriptionEn : descriptionDe);
    }
    var nav = document.getElementById("nav");
    if (nav) nav.setAttribute("aria-label", labels[choice].nav);
    var foot = document.getElementById("footnav");
    if (foot) foot.setAttribute("aria-label", labels[choice].foot);
    var group = document.querySelector(".langs");
    if (group) group.setAttribute("aria-label", labels[choice].lang);
    var menu = document.querySelector(".menu");
    if (menu) {
      var open = menu.getAttribute("aria-expanded") === "true";
      menu.setAttribute("aria-label", open ? labels[choice].menuClose : labels[choice].menuOpen);
    }
  }

  document.querySelectorAll("[data-set-lang]").forEach(function (button) {
    button.addEventListener("click", function () {
      apply(button.getAttribute("data-set-lang"));
    });
  });

  var menu = document.querySelector(".menu");
  var nav = document.getElementById("nav");
  if (menu && nav) {
    menu.addEventListener("click", function () {
      var open = menu.getAttribute("aria-expanded") !== "true";
      menu.setAttribute("aria-expanded", open ? "true" : "false");
      nav.classList.toggle("is-open", open);
      menu.setAttribute("aria-label", open ? labels[lang()].menuClose : labels[lang()].menuOpen);
    });
  }

  apply(lang());

  var canvas = document.querySelector(".rain");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var context = canvas.getContext("2d");
  if (!context) return;
  var glyphs = "01".split("");
  var drops = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var columns = Math.max(1, Math.floor(canvas.width / 18));
    drops = [];
    for (var i = 0; i < columns; i += 1) drops.push(Math.random() * -40);
  }

  function frame() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "14px ui-monospace, monospace";
    context.fillStyle = "rgba(57, 255, 101, 0.28)";
    for (var i = 0; i < drops.length; i += 1) {
      var glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
      context.fillText(glyph, i * 18, drops[i] * 18);
      if (drops[i] * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i] += 0.35;
    }
    window.requestAnimationFrame(frame);
  }

  resize();
  window.addEventListener("resize", resize);
  window.requestAnimationFrame(frame);
})();
