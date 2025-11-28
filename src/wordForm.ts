export function getTimePhrases(timeString: string) {
  if (!timeString || typeof timeString !== "string")
    return ["неверный формат времени"];

  const parts = timeString.split(":");
  if (parts.length !== 2) return ["неверный формат времени"];

  const h = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10);

  if (isNaN(h) || isNaN(m) || h < 0 || h > 23 || m < 0 || m > 59) {
    return ["время вне диапазона"];
  }

  const genitiveHours = [
    "двенадцатого",
    "первого",
    "второго",
    "третьего",
    "четвёртого",
    "пятого",
    "шестого",
    "седьмого",
    "восьмого",
    "девятого",
    "десятого",
    "одиннадцатого",
  ];

  const nominativeHours = [
    "двенадцать",
    "один",
    "два",
    "три",
    "четыре",
    "пять",
    "шесть",
    "семь",
    "восемь",
    "девять",
    "десять",
    "одиннадцать",
  ];

  function getNominativePhrase(hour24: number) {
    if (hour24 === 0 || hour24 === 24) return "полночь";
    if (hour24 === 12) return "полдень";
    const h12 = hour24 > 12 ? hour24 - 12 : hour24 === 0 ? 12 : hour24;
    if (h12 === 1) return "час";
    if ([2, 3, 4].includes(h12)) return nominativeHours[hour24 % 12] + " часа";
    return nominativeHours[hour24 % 12] + " часов";
  }

  const phrases = [];

  // Ровный час
  if (m === 0) {
    if (h === 0) return ["полночь"];
    if (h === 12) return ["полдень"];
    phrases.push(getNominativePhrase(h));
    return phrases;
  }

  // Половина
  if (m === 30) {
    const nextGen = genitiveHours[(h + 1) % 12];
    phrases.push("пол" + nextGen);
    return phrases;
  }

  // Четверть
  if (m === 15) {
    const nextGen = genitiveHours[(h + 1) % 12];
    phrases.push(`четверть ${nextGen}`);
    return phrases;
  }

  // Минуты 40–59
  if (m >= 40 && m < 60) {
    const diff = 60 - m;
    const numToWord = {
      1: "одной",
      2: "двух",
      3: "трёх",
      4: "четырёх",
      5: "пяти",
      6: "шести",
      7: "семи",
      8: "восьми",
      9: "девяти",
      10: "десяти",
      11: "одиннадцати",
      12: "двенадцати",
      13: "тринадцати",
      14: "четырнадцати",
      15: "пятнадцати",
      16: "шестнадцати",
      17: "семнадцати",
      18: "восемнадцати",
      19: "девятнадцати",
      20: "двадцати",
    };

    if (h === 11) {
      phrases.push(
        `${numToWord[diff as keyof typeof numToWord]} минут до полудня`,
      );
      return phrases;
    }
    if (h === 23) {
      phrases.push(
        `${numToWord[diff as keyof typeof numToWord]} минут до полуночи`,
      );
      return phrases;
    }

    const nextHourPhrase = getNominativePhrase((h + 1) % 24 || 24);
    const shortHour = nextHourPhrase
      .replace(" часов", "")
      .replace(" часа", "")
      .replace("полночь", "час");

    if (diff === 15) {
      phrases.push(`без четверти ${shortHour}`);
      phrases.push(`без пятнадцати ${shortHour}`);
    } else if (diff === 5) {
      phrases.push(`без пяти ${shortHour}`);
    } else if (diff === 10) {
      phrases.push(`без десяти ${shortHour}`);
    } else {
      phrases.push(
        `без ${numToWord[diff as keyof typeof numToWord]} ${shortHour}`,
      );
    }

    return [...new Set(phrases)];
  }

  // Минуты 1–29
  if (m > 0 && m < 30 && m !== 15) {
    const wordsUpTo20 = [
      "",
      "одна",
      "две",
      "три",
      "четыре",
      "пять",
      "шесть",
      "семь",
      "восемь",
      "девять",
      "десять",
      "одиннадцать",
      "двенадцать",
      "тринадцать",
      "четырнадцать",
      "пятнадцать",
      "шестнадцать",
      "семнадцать",
      "восемнадцать",
      "девятнадцать",
      "двадцать",
    ];
    let phrase = "";
    if (m <= 20) {
      phrase = wordsUpTo20[m];
    } else {
      const tens = Math.floor(m / 10);
      const units = m % 10;
      phrase = tens === 2 ? "двадцать" : "тридцать";
      if (units > 0)
        phrase +=
          " " +
          [
            "",
            "одна",
            "две",
            "три",
            "четыре",
            "пять",
            "шесть",
            "семь",
            "восемь",
            "девять",
          ][units];
    }

    let form = "минут";
    if (m === 1) form = "минута";
    else if (m >= 2 && m <= 4) form = "минуты";

    const nextGen = genitiveHours[(h + 1) % 12];
    phrases.push(`${phrase} ${form} ${nextGen}`);
    return phrases;
  }

  // Минуты 31–44
  if (m > 30 && m < 45) {
    const base = m < 40 ? "тридцать" : "сорок";
    const units = m % 10;
    let phrase = base;
    if (units > 0) {
      phrase +=
        " " +
        [
          "",
          "одна",
          "две",
          "три",
          "четыре",
          "пять",
          "шесть",
          "семь",
          "восемь",
          "девять",
        ][units];
    }

    let form = "минут";
    const last = m % 10;
    if (last === 1 && m !== 11) form = "минута";
    else if ([2, 3, 4].includes(last) && ![12, 13, 14].includes(m))
      form = "минуты";

    const nextGen = genitiveHours[(h + 1) % 12];
    phrases.push(`${phrase} ${form} ${nextGen}`);
    return phrases;
  }

  return [timeString];
}
