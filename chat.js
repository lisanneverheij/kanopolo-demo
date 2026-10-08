(function () {
  var kennisbank = [
    {
      trefwoorden: ["hoi", "hallo", "hey", "goeiedag"],
      antwoord: "Hoi! Leuk dat je meer wilt weten over kanopolo. Vraag gerust naar de regels, het materiaal, veiligheid, of hoe je het zelf kunt proberen."
    },
    {
      trefwoorden: ["wat is kanopolo", "wat houdt", "uitleg", "wat is het", "sport"],
      antwoord: "Kanopolo is een snelle teamsport op het water die elementen combineert van kanovaren, waterpolo en basketbal. Twee teams van vijf spelers proberen in een kano te scoren in het doel van de tegenstander."
    },
    {
      trefwoorden: ["materiaal", "uitrusting", "kano", "peddel", "helm", "vest", "bal"],
      antwoord: "Je speelt in een korte, wendbare polokano met een lichte peddel. Een helm met gezichtsbescherming en een zwemvest zijn verplicht, en er wordt gescoord met een lichte bal die je met je handen gooit."
    },
    {
      trefwoorden: ["speelveld", "baan", "doel", "zwembad", "water"],
      antwoord: "Er wordt gespeeld op een rechthoekig stuk rustig water, vaak een zwembad. Aan beide korte kanten hangt een doel: een net dat boven het wateroppervlak aan een paal is bevestigd."
    },
    {
      trefwoorden: ["regel", "regels", "scoren", "mag niet", "duwen", "rammen", "contact"],
      antwoord: "Je scoort door de bal in het doel van de tegenstander te gooien. Je mag met je kano tegen een andere boot duwen om de bal te veroveren, maar iemand vastpakken, aan zijn vest trekken of van opzij rammen mag niet."
    },
    {
      trefwoorden: ["beginnen", "proberen", "starten", "vereniging", "les", "proefles", "aanmelden"],
      antwoord: "De beste manier om te starten is een proefles bij een kanovereniging die kanopolo aanbiedt, of je aanmelden via de kanobond in je land. Kunnen zwemmen is meestal een vereiste."
    },
    {
      trefwoorden: ["veilig", "gevaarlijk", "blessure", "veiligheid"],
      antwoord: "Kanopolo is een contactsport, maar wel gecontroleerd: een helm met gezichtsbescherming en een zwemvest zijn verplicht, en gevaarlijke acties zoals rammen of vastgrijpen zijn niet toegestaan."
    },
    {
      trefwoorden: ["zwemmen", "zwemdiploma", "kunnen zwemmen"]
      , antwoord: "Ja, goed kunnen zwemmen is belangrijk: je kano kan omslaan en dan moet je zelfstandig weer boven water kunnen komen."
    },
    {
      trefwoorden: ["hoe lang", "duur", "tijd", "helft", "wedstrijdduur"],
      antwoord: "Een wedstrijd bestaat meestal uit twee helften van ongeveer tien minuten, met doorlopend wisselen van spelers vanaf de kant."
    },
    {
      trefwoorden: ["eskimorol", "eskimo rol", "roll", "omslaan", "omvallen", "kapseizen"],
      antwoord: "Een eskimorol is de techniek waarmee je jezelf, terwijl je nog in de kano zit, weer rechtop draait nadat je was omgeslagen — precies de beweging die je in de animatie op de homepage ziet."
    }
  ];

  function vindAntwoord(vraag) {
    var tekst = vraag.toLowerCase();
    for (var i = 0; i < kennisbank.length; i++) {
      var item = kennisbank[i];
      for (var j = 0; j < item.trefwoorden.length; j++) {
        if (tekst.indexOf(item.trefwoorden[j]) !== -1) {
          return item.antwoord;
        }
      }
    }
    return "Goede vraag! Die zit nog niet in mijn kennis. Kijk op de pagina “Wat is kanopolo?” voor meer uitleg, of vraag het aan een kanovereniging bij jou in de buurt.";
  }

  function initChat() {
    var toggle = document.getElementById("chat-toggle");
    var paneel = document.getElementById("chat-paneel");
    var form = document.getElementById("chat-form");
    var input = document.getElementById("chat-input");
    var berichten = document.getElementById("chat-berichten");
    if (!toggle || !paneel || !form || !input || !berichten) return;

    function voegBericht(tekst, afzender) {
      var div = document.createElement("div");
      div.className = "chat-bericht " + afzender;
      div.textContent = tekst;
      berichten.appendChild(div);
      berichten.scrollTop = berichten.scrollHeight;
      return div;
    }

    toggle.addEventListener("click", function () {
      var open = paneel.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) input.focus();
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var vraag = input.value.trim();
      if (!vraag) return;
      voegBericht(vraag, "gebruiker");
      input.value = "";

      var typend = voegBericht("...", "bot typend");
      var wachttijd = 500 + Math.random() * 500;
      setTimeout(function () {
        typend.textContent = vindAntwoord(vraag);
        typend.className = "chat-bericht bot";
        berichten.scrollTop = berichten.scrollHeight;
      }, wachttijd);
    });
  }

  document.addEventListener("DOMContentLoaded", initChat);
})();
