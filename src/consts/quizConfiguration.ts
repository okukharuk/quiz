import { IOptionsTemplate } from "../models/quiz";

export const options: IOptionsTemplate[] = [
  {
    type: "single-select",
    header: "preferred_language",
    label: "choose_language",
    style: "col",
    options: [
      {
        text: "English",
        key: "en",
      },
      {
        text: "French",
        key: "fr",
      },
      {
        text: "German",
        key: "de",
      },
      {
        text: "Spanish",
        key: "sp",
      },
    ],
  },
  {
    type: "single-select",
    header: "gender_identify",
    label: "please_share",
    style: "row",
    options: [
      {
        text: "female",
        emoji: "👩",
        key: "female",
      },
      {
        text: "male",
        emoji: "👨",
        key: "male",
      },
      {
        text: "other",
        emoji: "😉",
        key: "other",
      },
    ],
  },
  {
    type: "single-select",
    header: "your_age",
    style: "col",
    options: [
      {
        text: "18-29 years",
        key: "18-29 years",
      },
      {
        text: "30-39 years",
        key: "30-39 years",
      },
      {
        text: "40-49 years",
        key: "40-49 years",
      },
      {
        text: "50+",
        key: "50+",
      },
    ],
  },
  {
    type: "multiple-select",
    header: "what_do_you_hate",
    styleHeader: { word: "hate", style: { color: "#E4229B" } },
    options: [
      {
        text: "lack_of_logic",
        key: "lack_of_logic",
      },
      {
        text: "a_slow_speed",
        key: "a_slow_speed",
      },
      {
        text: "lack_of_humor",
        key: "lack_of_humor",
      },
      {
        text: "generic_ending",
        key: "generic_ending",
      },
    ],
  },
  {
    type: "bubble",
    header: "favorite_topics",
    label: "choose_topics",
    style: "grid",
    limit: 3,
    options: [
      {
        text: "werewolf",
        emoji: "🐺",
        key: "werewolf",
      },
      {
        text: "action",
        emoji: "💃",
        key: "action",
      },
      {
        text: "royal_obsession",
        emoji: "👑",
        key: "royal_obsession",
      },
      {
        text: "billionaire",
        emoji: "🤑",
        key: "billionaire",
      },
      {
        text: "romance",
        emoji: "🥰",
        key: "romance",
      },
      {
        text: "young_adult",
        emoji: "💁‍♀️",
        key: "young_adult",
      },
      {
        text: "bad_boy",
        emoji: "🤠",
        key: "bad_boy",
      },
    ],
  },
];
