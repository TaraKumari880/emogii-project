const emojiContainer = document.getElementById("emojiContainer");
const searchInput = document.getElementById("searchInput");

// Function to filter emojis based on search input
function filterEmojis() {
  const searchQuery = searchInput.value.toLowerCase();
  const filteredEmojis = emojis.filter((emoji) => {
    return emoji.keywords.some((keyword) => keyword.includes(searchQuery));
  });

  displayEmojis(filteredEmojis);
}

// Function to display emojis in the emoji container
function displayEmojis(emojis) {
  emojiContainer.innerHTML = "";

  emojis.forEach((emoji) => {
    const emojiElement = document.createElement("span");
    emojiElement.textContent = emoji.symbol;
    emojiElement.classList.add("emoji");

    // Copy emoji to clipboard on click
    emojiElement.addEventListener("click", () => {
      navigator.clipboard.writeText(emoji.symbol);
      alert("Copied to clipboard!");
    });

    emojiContainer.appendChild(emojiElement);
  });
}

//Example emojis data
const emojis = [
  {
    symbol: "😃",
    keywords: ["happy", "smile", "face"],
  },
  {
    symbol: "😪",
    keywords: ["sleepy face", "Smileys & Emotion", "sleepy"],
  },
  {
    symbol: "😴",
    keywords: ["sleeping face", "Smileys & Emotion", "zzz"],
  },
  {
    symbol: "😞",
    keywords: ["disappointed face", "Smileys & Emotion", "sad"],
  },
  {
    symbol: "😁",
    keywords: ["beaming face with smiling eyes", "Smileys & Emotion", "grin"],
  },

  {
    symbol: "😆",
    keywords: ["grinning squinting face", "Smileys & Emotion", "laughing"],

  },
  {
    symbol: "😅",
    keywords: ["grinning face with sweat", "Smileys & Emotion", "sweat_smile"],
  },
  {
    symbol: "🤣",
    keywords: ["rolling on the floor laughing", "Smileys & Emotion","laughing"],
  },
  {
    symbol: "😂",
    keywords: ["face with tears of joy", "Smileys & Emotion","tears"],
  },

  {
    symbol: "🙂",
    keywords: ["slightly smiling face", "Smileys & Emotion", "slightly_smiling_face"],
  },
  {
    symbol: "🙃",
    keywords: ["upside-down face", "Smileys & Emotion", "upside_down_face"],
  },

   {
     symbol: "😉",
     keywords: ["winking face", "Smileys & Emotion", "flirt"],
   },

   {
     symbol: "😊",
     keywords: ["smiling face with smiling eyes", "blush", "proud"],
   },

   {
     symbol: "😇",
     keywords: ["smiling face with halo", "Smileys & Emotion", "innocent"],

   },

   {
     symbol: "🥰",
     keywords: ["smiling face with hearts", "smiling_face_with_three_hearts", "love"],
   },
   {
     symbol: "😍",
     keywords: ["smiling face with heart-eyes","love"
       , "crush"],
   },

   {
     symbol: "🤩",
     keywords: ["star-struck", "Smileys & Emotion", "eyes"],
   },
   {
     symbol: "😘",
     keywords: ["face blowing a kiss", "kissing_heart", "flirt"],
   },
   
   {
     symbol: "😙",
     keywords: ["kissing face with smiling eyes", "Smileys & Emotion"
       , "kissing_smiling_eyes"],
   },
   {
     symbol: "🥲",
     keywords: ["smiling face with tear", "Smileys & Emotion", "smiling_face_with_tear"],
   },

   {
     symbol: "😋",
     keywords: ["face savoring food", "Smileys & Emotion",  "tongue"],
   },

  {
    symbol: "😜",
    keywords: ["winking face with tongue", "Smileys & Emotion", "prank","silly"],
  },
  {
    symbol: "🤪",
    keywords: ["zany face", "Smileys & Emotion", "wacky"],
  },
  {
    symbol: "🤑",

    keywords: ["money-mouth face", "Smileys & Emotion","rich"],
  },
  {
    symbol: "🤗",
    keywords: ["hugging face", "Smileys & Emotion", "hugs"],
  },
  {
    symbol:"🤔",
    keywords:["thinking face","Smileys & Emotion","thinking"],
  },
  {
    symbol:"🤐",
    keywords:["zipper-mouth face","Smileys & Emotion","silence"],
  },
  {
    symbol:"😮‍💨",
    keywords:["face exhaling","Smileys & Emotion"],
  },
  {
    symbol:"🤥",
    keywords: ["lying face","Smileys & Emotion","liar"],
  },
  {
    symbol:"🤤",
    keywords:["drooling face","Smileys & Emotion"],
  },
  {
    symbol:"😷",
    keywords:["face with medical mask","Smileys & Emotion", "sick", "ill"],
  },
  {
    symbol:"🤒",
    keywords:["face with thermometer","Smileys & Emotion","sick"],
  },
   {
    symbol:"🤕",
    keywords:["face with head-bandage","Smileys & Emotion","hurt"],
  },
  {
    symbol:"🤢",
    keywords:["nauseated face","Smileys & Emotion","sick"],
  },
  {
    symbol:"🤮",
    keywords:["face vomiting","Smileys & Emotion","sick"],
  },
  {
    symbol:"🤧",
    keywords:["sneezing face","Smileys & Emotion","sick"],
  },
  {
    symbol:"🥵",
    keywords:["hot face","Smileys & Emotion","heat", "sweating"],
  },
  {
    symbol:"🥶",
    keywords:["cold face","Smileys & Emotion","freezing", "ice"],
  },
  {
    symbol: "🥴",
    keywords: ["woozy face","Smileys & Emotion","groggy"],
  },
  {
    symbol:"😵",
    keywords:["knocked-out face","Smileys & Emotion","dizzy_face"],
  },
  {
    symbol:"😵‍💫",
    keywords:["face with spiral eyes","Smileys & Emotion"],
  },
  {
    symbol:"🤯",
    keywords:["exploding head","Smileys & Emotion","mind", "blown"],
  },

































  {
    symbol: "🐶",
    keywords: ["dog", "animal", "pet"],
  },
  {
    symbol: "🍕",
    keywords: ["pizza", "food"],
  },
  {
    symbol: "🌞",
    keywords: ["sun", "weather"],
  },
  {
    symbol: "🌈",
    keywords: ["rainbow", "colorful"],
  },
  {
    symbol: "🎉",
    keywords: ["celebration", "party", "confetti"],
  },
  {
    symbol: "🚀",
    keywords: ["rocket", "space", "launch"],
  },
  {
    symbol: "⚡️",
    keywords: ["lightning", "electricity", "power"],
  },
  {
    symbol: "❤️",
    keywords: ["heart", "love"],
  },
  {
    symbol: "🔥",
    keywords: ["fire", "hot", "flame"],
  },
  {
    symbol: "🌸",
    keywords: ["flower", "blossom", "spring"],
  },
  {
    symbol: "🐱",
    keywords: ["cat", "animal", "pet"],
  },
  {
    symbol: "🍦",
    keywords: ["ice cream", "dessert", "summer"],
  },
  {
    symbol: "🌊",
    keywords: ["wave", "ocean", "water"],
  },
  {
    symbol: "🎈",
    keywords: ["balloon", "party", "celebration"],
  },
  {
    symbol: "🐝",
    keywords: ["bee", "insect", "buzz"],
  },
  {
    symbol: "🍔",
    keywords: ["hamburger", "food", "fast food"],
  },
  {
    symbol: "🌙",
    keywords: ["moon", "night", "sleep"],
  },
  {
    symbol: "🌳",
    keywords: ["tree", "nature", "forest"],
  },
  {
    symbol: "🎁",
    keywords: ["gift", "present", "surprise"],
  },
  {
    symbol: "🐬",
    keywords: ["dolphin", "animal", "sea"],
  },
  {
    symbol: "☀️",
    keywords: ["sun", "sunny", "weather"],
  },
  {
    symbol: "🌻",
    keywords: ["sunflower", "flower", "bright"],
  },
  {
    symbol: "🐢",
    keywords: ["turtle", "animal", "slow"],
  },
  {
    symbol: "🍩",
    keywords: ["doughnut", "dessert", "sweet"],
  },
  {
    symbol: "⛅",
    keywords: ["sun", "cloud", "weather"],
  },
  {
    symbol: "🍓",
    keywords: ["strawberry", "fruit", "red"],
  },
  {
    symbol: "🦋",
    keywords: ["butterfly", "insect", "flutter"],
  },
  {
    symbol: "🌵",
    keywords: ["cactus", "plant", "desert"],
  },
  {
    symbol: "🍭",
    keywords: ["lollipop", "candy", "sweet"],
  },
  {
    symbol: "🌄",
    keywords: ["sunrise", "mountain", "scenery"],
  },
  {
    symbol: "🐼",
    keywords: ["panda", "animal", "cute"],
  },
  {
    symbol: "🎵",
    keywords: ["musical note", "music", "song"],
  },
  {
    symbol: "🌺",
    keywords: ["hibiscus", "flower", "tropical"],
  },
  {
    symbol: "🦁",
    keywords: ["lion", "animal", "wild"],
  },
  {
    symbol: "🎈",
    keywords: ["balloon", "party", "celebration"],
  },
  {
    symbol: "🍦",
    keywords: ["ice cream", "dessert", "summer"],
  },
  {
    symbol: "🌊",
    keywords: ["wave", "ocean", "water"],
  },
  {
    symbol: "🎈",
    keywords: ["balloon", "party", "celebration"],
  },
  {
    symbol: "🐝",
    keywords: ["bee", "insect", "buzz"],
  },
  {
    symbol: "🍔",
    keywords: ["hamburger", "food", "fast food"],
  },
  {
    symbol: "🌙",
    keywords: ["moon", "night", "sleep"],
  },
  {
    symbol: "🌳",
    keywords: ["tree", "nature", "forest"],
  },
  {
    symbol: "🎁",
    keywords: ["gift", "present", "surprise"],
  },
  {
    symbol: "🐬",
    keywords: ["dolphin", "animal", "sea"],
  },
  {
    symbol: "☀️",
    keywords: ["sun", "sunny", "weather"],
  },
  {
    symbol: "🌻",
    keywords: ["sunflower", "flower", "bright"],
  },
  {
    symbol: "🐢",
    keywords: ["turtle", "animal", "slow"],
  },
  {
    symbol: "🍩",
    keywords: ["doughnut", "dessert", "sweet"],
  },
  {
    symbol: "⛅",
    keywords: ["sun", "cloud", "weather"],
  },
  {
    symbol: "🍓",
    keywords: ["strawberry", "fruit", "red"],
  },
  {
    symbol: "🦋",
    keywords: ["butterfly", "insect", "flutter"],
  },
  {
    symbol: "🌵",
    keywords: ["cactus", "plant", "desert"],
  },
  {
    symbol: "🍭",
    keywords: ["lollipop", "candy", "sweet"],
  },
  {
    symbol: "🌄",
    keywords: ["sunrise", "mountain", "scenery"],
  },
  {
    symbol: "🐼",
    keywords: ["panda", "animal", "cute"],
  },
  {
    symbol: "🎵",
    keywords: ["musical note", "music", "song"],
  },
  {
    symbol: "🌺",
    keywords: ["hibiscus", "flower", "tropical"],
  },
  {
    symbol: "🦁",
    keywords: ["lion", "animal", "wild"],
  },
  {
    symbol: "🐠",
    keywords: ["fish", "animal", "aquarium"],
  },
  {
    symbol: "🎨",
    keywords: ["palette", "painting", "art"],
  },
  {
    symbol: "🌼",
    keywords: ["daisy", "flower", "spring"],
  },
  {
    symbol: "🦄",
    keywords: ["unicorn", "fantasy", "magical"],
  },
  {
    symbol: "🍎",
    keywords: ["apple", "fruit", "healthy"],
  },
  {
    symbol: "🎡",
    keywords: ["ferris wheel", "carnival", "amusement park"],
  },
  {
    symbol: "🐵",
    keywords: ["monkey", "animal", "ape"],
  },
  {
    symbol: "📷",
    keywords: ["camera", "photography", "picture"],
  },
  {
    symbol: "🌮",
    keywords: ["taco", "food", "mexican"],
  },
  {
    symbol: "🌟",
    keywords: ["star", "sparkle", "glitter"],
  },
  {
    symbol: "🐳",
    keywords: ["whale", "animal", "ocean"],
  },
  {
    symbol: "☁️",
    keywords: ["cloud", "sky", "weather"],
  },
  {
    symbol: "🌹",
    keywords: ["rose", "flower", "romance"],
  },
  {
    symbol: "🐰",
    keywords: ["rabbit", "animal", "bunny"],
  },
  {
    symbol: "🎮",
    keywords: ["video game", "controller", "play"],
  },
  {
    symbol: "🍔",
    keywords: ["hamburger", "food", "fast food"],
  },
  {
    symbol: "🌕",
    keywords: ["full moon", "night", "lunar"],
  },
  {
    symbol: "🌴",
    keywords: ["palm tree", "beach", "tropical"],
  },
  {
    symbol: "🎂",
    keywords: ["birthday cake", "celebration", "party"],
  },
  {
    symbol: "🐟",
    keywords: ["fish", "animal", "aquarium"],
  },
  {
    symbol: "📚",
    keywords: ["book", "reading", "education"],
  },
  {
    symbol: "🍟",
    keywords: ["fries", "food", "snack"],
  },
  {
    symbol: "🌸",
    keywords: ["cherry blossom", "flower", "spring"],
  },
  {
    symbol: "🐦",
    keywords: ["bird", "animal", "tweet"],
  },
  {
    symbol: "🎤",
    keywords: ["microphone", "music", "singing"],
  },
  {
    symbol: "🍦",
    keywords: ["ice cream", "dessert", "summer"],
  },
  {
    symbol: "🌈",
    keywords: ["rainbow", "colorful", "sky"],
  },
  {
    symbol: "🎁",
    keywords: ["gift", "present", "surprise"],
  },
  {
    symbol: "🐛",
    keywords: ["caterpillar", "insect", "bug"],
  },
  {
    symbol: "☔",
    keywords: ["umbrella", "rain", "weather"],
  },
  {
    symbol: "🍇",
    keywords: ["grapes", "fruit", "vine"],
  },
  {
    symbol: "🌱",
    keywords: ["seedling", "plant", "growth"],
  },
  {
    symbol: "🎪",
    keywords: ["circus", "tent", "show"],
  },
  {
    symbol: "🐼",
    keywords: ["panda", "animal", "cute"],
  },
  {
    symbol: "🌞",
    keywords: ["sun", "sunny", "weather"],
  },
  {
    symbol: "🌻",
    keywords: ["sunflower", "flower", "bright"],
  },
  {
    symbol: "🌴",
    keywords: ["palm tree", "beach", "tropical"],
  },
  {
    symbol: "🎄",
    keywords: ["Christmas tree", "holiday", "festive"],
  },
  {
    symbol: "🐨",
    keywords: ["koala", "animal", "cute"],
  },
  {
    symbol: "🎈",
    keywords: ["balloon", "party", "celebration"],
  },
  {
    symbol: "🎠",
    keywords: ["carousel", "ride", "amusement park"],
  },
  {
    symbol: "🍎",
    keywords: ["apple", "fruit", "healthy"],
  },
  {
    symbol: "🚲",
    keywords: ["bicycle", "bike", "transportation"],
  },
  {
    symbol: "🌃",
    keywords: ["night", "city", "sky"],
  },
  {
    symbol: "🌺",
    keywords: ["hibiscus", "flower", "tropical"],
  },
  {
    symbol: "🦁",
    keywords: ["lion", "animal", "wild"],
  },
  {
    symbol: "🐠",
    keywords: ["fish", "animal", "aquarium"],
  },
  {
    symbol: "🎨",
    keywords: ["palette", "painting", "art"],
  },
  {
    symbol: "🌼",
    keywords: ["daisy", "flower", "spring"],
  },
  {
    symbol: "🦄",
    keywords: ["unicorn", "fantasy", "magical"],
  },
  {
    symbol: "🍎",
    keywords: ["apple", "fruit", "healthy"],
  },
  {
    symbol: "🎡",
    keywords: ["ferris wheel", "carnival", "amusement park"],
  },
  {
    symbol: "🐵",
    keywords: ["monkey", "animal", "ape"],
  },
  {
    symbol: "📷",
    keywords: ["camera", "photography", "picture"],
  },
  {
    symbol: "🌮",
    keywords: ["taco", "food", "mexican"],
  },
  {
    symbol: "🌟",
    keywords: ["star", "sparkle", "glitter"],
  },
  {
    symbol: "🐳",
    keywords: ["whale", "animal", "ocean"],
  },
  {
    symbol: "☁️",
    keywords: ["cloud", "sky", "weather"],
  },
  {
    symbol: "🌹",
    keywords: ["rose", "flower", "romance"],
  },
  {
    symbol: "🐰",
    keywords: ["rabbit", "animal", "bunny"],
  },
  {
    symbol: "🎮",
    keywords: ["video game", "controller", "play"],
  },
  {
    symbol: "🍔",
    keywords: ["hamburger", "food", "fast food"],
  },
  {
    symbol: "🌕",
    keywords: ["full moon", "night", "lunar"],
  },
];

// Display all emojis initially



 


















displayEmojis(emojis);

// Add event listener to search input
searchInput.addEventListener("input", filterEmojis);

