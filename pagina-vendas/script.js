(function () {
  // ---------- checkout ----------
  // Troque a URL abaixo pelo link do seu checkout (Hotmart, Kiwify, Cakto, etc.)
  var CHECKOUT_URL = "#";
  document.querySelectorAll("[data-checkout]").forEach(function (el) {
    el.href = CHECKOUT_URL;
  });

  // ---------- autodiagnóstico ----------
  var list = document.getElementById("selfcheck");
  if (list) {
    var out = document.getElementById("tallyNum");
    var foot = document.getElementById("cardFoot");
    var msg = {
      low: "Quase ninguém marca mais de duas. Não é descuido — é que ninguém nunca sentou para montar a lista.",
      mid: "Melhor que a média. Ainda assim, veja quantos itens continuam em aberto — e sem data de troca.",
      high: "Você já pensou nisso. O guia fecha os poucos buracos que sobraram e coloca tudo com data de revisão.",
    };
    var refresh = function () {
      var n = list.querySelectorAll('button[aria-pressed="true"]').length;
      out.textContent = n;
      foot.textContent = n <= 2 ? msg.low : n <= 5 ? msg.mid : msg.high;
    };
    list.querySelectorAll("button").forEach(function (b) {
      b.addEventListener("click", function () {
        b.setAttribute(
          "aria-pressed",
          b.getAttribute("aria-pressed") === "true" ? "false" : "true"
        );
        refresh();
      });
    });
    refresh();
  }

  // ---------- barra fixa ----------
  var bar = document.getElementById("stickyCta");
  var hero = document.querySelector(".hero");
  if (bar && hero && "IntersectionObserver" in window) {
    new IntersectionObserver(
      function (entries) {
        var show = !entries[0].isIntersecting;
        bar.classList.toggle("show", show);
        bar.setAttribute("aria-hidden", show ? "false" : "true");
      },
      { rootMargin: "-40px 0px 0px 0px" }
    ).observe(hero);
  }

  // ---------- faixa sazonal ----------
  var season = document.getElementById("season");
  if (season) {
    var m = new Date().getMonth(); // 0 = janeiro
    var txt;
    if (m >= 9 || m <= 2) {
      txt =
        "<strong>Temporada de temporais e vendavais.</strong> Boa hora para revisar telhado, ralos e a lista de compras.";
    } else if (m >= 5 && m <= 8) {
      txt =
        "<strong>Umidade baixa e queimada</strong> na maior parte do Brasil neste mês. Boa hora para montar o plano.";
    } else {
      txt =
        "Fora da temporada crítica — <strong>a melhor época para montar o plano com calma.</strong>";
    }
    season.innerHTML = txt;
  }

  // ---------- revelar ao rolar ----------
  if (
    "IntersectionObserver" in window &&
    !matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    var ro = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            ro.unobserve(en.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      el.classList.add("reveal");
      ro.observe(el);
    });
  }
})();
