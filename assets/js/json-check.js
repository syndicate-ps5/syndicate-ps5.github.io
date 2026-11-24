(function () {
  var statuses = ["confirmed", "in-review", "unknown"];
  var evidence = ["publicly-documented", "unknown"];
  var example = {
    id: "cfi-model-groups",
    titleDe: "Modellgruppen in der USB-Ports-Anleitung",
    titleEn: "Model groups in the USB ports guide",
    status: "confirmed",
    evidence: "publicly-documented",
    source: "https://www.playstation.com/en-us/support/hardware/ps5-usb-ports-guide/",
    retrieved: "2026-11-23",
    statementDe: "Sony nennt CFI-1000, CFI-2000 und CFI-7000. Original, Slim und Pro stehen in dieser Quelle nicht.",
    statementEn: "Sony names CFI-1000, CFI-2000 and CFI-7000. Original, Slim and Pro do not appear in this source."
  };

  function lang() {
    return document.documentElement.lang === "en" ? "en" : "de";
  }

  function say(de, en) {
    return lang() === "en" ? en : de;
  }

  function checkRecord(record, path, errors) {
    if (!record || typeof record !== "object" || Array.isArray(record)) {
      errors.push(path + say(" muss ein Objekt sein.", " must be an object."));
      return;
    }
    ["id", "titleDe", "titleEn", "statementDe", "statementEn"].forEach(function (key) {
      if (typeof record[key] !== "string" || !record[key].trim()) {
        errors.push(path + "." + key + say(" muss ein nicht leerer Text sein.", " must be a non-empty string."));
      }
    });
    if (statuses.indexOf(record.status) === -1) {
      errors.push(path + ".status" + say(" muss confirmed, in-review oder unknown sein.", " must be confirmed, in-review or unknown."));
    }
    if (evidence.indexOf(record.evidence) === -1) {
      errors.push(path + ".evidence" + say(" muss publicly-documented oder unknown sein.", " must be publicly-documented or unknown."));
    }
    if (record.status === "confirmed") {
      if (typeof record.source !== "string" || !/^https:\/\/\S+$/.test(record.source)) {
        errors.push(path + ".source" + say(" muss bei confirmed eine https-Adresse sein.", " must be an https URL when status is confirmed."));
      }
      if (typeof record.retrieved !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(record.retrieved)) {
        errors.push(path + ".retrieved" + say(" muss bei confirmed ein Datum YYYY-MM-DD sein.", " must be a YYYY-MM-DD date when status is confirmed."));
      }
    }
  }

  var input = document.getElementById("json-input");
  var output = document.getElementById("json-output");
  var form = document.getElementById("json-form");
  if (!input || !output || !form) return;

  function show(messages, ok) {
    output.textContent = "";
    var title = document.createElement("p");
    title.textContent = ok
      ? say("Format gültig. Es wurde nichts gesendet oder gespeichert.", "Format is valid. Nothing was sent or stored.")
      : say("Format ungültig.", "Format is invalid.");
    output.appendChild(title);
    if (!ok) {
      var list = document.createElement("ul");
      messages.forEach(function (message) {
        var item = document.createElement("li");
        item.textContent = message;
        list.appendChild(item);
      });
      output.appendChild(list);
    }
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var errors = [];
    var data;
    try {
      data = JSON.parse(input.value);
    } catch (error) {
      show([say("Kein gültiges JSON.", "Not valid JSON.")], false);
      return;
    }
    var records = Array.isArray(data) ? data : [data];
    if (!records.length) errors.push(say("Die Liste ist leer.", "The list is empty."));
    records.forEach(function (record, index) {
      checkRecord(record, say("Eintrag ", "Record ") + (index + 1), errors);
    });
    show(errors, errors.length === 0);
  });

  var sample = document.getElementById("json-sample");
  if (sample) {
    sample.addEventListener("click", function () {
      input.value = JSON.stringify(example, null, 2);
      output.textContent = "";
    });
  }
})();
