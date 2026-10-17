/* =====================================================
   ✏️ ده الملف اللي هتعدل فيه أي كلام في الموقع
   غيّر الكلام اللي جوه علامات التنصيص "..." بس
   ومتمسحش العلامات نفسها ولا الفواصل ,
   ===================================================== */

const NAME = "Name";   // اسمه
const ME   = "Me";     // اسمك

const CONFIG = {
  tabTitle: "Happy Birthday",                          // اسم التاب في المتصفح
  navLabels: ["Page 1", "Page 2", "Page 3", "Page 4"], // أسامي الصفحات فوق

  // كلام الزراير
  texts: {
    open: "open me",
    next: "next",
    back: "back",
    nowPlaying: "now playing"
  },

  // ---- الصفحة الأولى ----
  heroLines: ["HAPPY", "BIRTHDAY", "MY LOVE"],
  babyPhoto: "baby.png",
  showHat: true,                    // طاقية عيد الميلاد: true تظهر / false تختفي

  // ---- موسيقى الخلفية ----
  bgMusic: "background.mp3",
  bgVolume: 0.35,

  // ---- صفحة الصفات ----
  mainPhoto: "main.jpg",
  traitsLeft:  ["Thoughtful", "Warmhearted", "Funny", "Supportive", "Charming"],
  traitsRight: ["Loyal", "Calm", "Caring", "Genuine", "Unforgettable"],

  // ---- صفحة الصور ... الكلام اللي بين *نجمتين* بيتلوّن ----
  memoriesText: "Every photo here holds a *little universe* of us. The *laughter*, the long talks, the *quiet moments*, and the silly things nobody else would understand. I'd keep every single one, and I'd live them *all over again*.",
  polaroids: ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg", "p5.jpg", "p6.jpg"],

  // ---- الجواب (مكتوب بين علامتين ` ` مش " ") ----
  letterTitle: `Happy Birthday, ${NAME}.`,
  letter: `
I wanted to make you something that stays, not a gift that ends when the day ends, but a little corner of the internet that's only yours.

Thank you for being exactly who you are. For making ordinary days feel lighter, and for every time you made me laugh without even trying. I hope this year is gentle with you, brings you everything you've been quietly wishing for, and reminds you every day how loved you are.

Every page here was made while thinking of you. Happy birthday, again and again.
`,
  letterSign: `Love, ${ME}.`,
  letterPhotos: ["s1.jpg", "s2.jpg", "s3.jpg", "s4.jpg", "s5.jpg"],

  // ---- صفحة الفويس ----
  voiceTitle: "a little voice note for you",
  voiceSubtitle: "press play and listen till the end",
  voicePhoto: "voice-photo.jpg",
  voiceNote: "voice.m4a",

  // ---- صفحة الأغاني ----
  songsTitle: "Songs",
  songsSubtitle: "that remind me<br>of you",
  songsPhoto: "songs.jpg",
  showSongTitles: true,
  // start و end بالثواني = الجزء اللي هيشتغل (مثلاً 1:05 تبقى 65)
  songs: [
    { title: "Song One",   artist: "Artist", cover: "cover1.jpg", file: "song1.mp3", start: 45, end: 75 },
    { title: "Song Two",   artist: "Artist", cover: "cover2.jpg", file: "song2.mp3", start: 30, end: 60 },
    { title: "Song Three", artist: "Artist", cover: "cover3.jpg", file: "song3.mp3", start: 60, end: 90 },
    { title: "Song Four",  artist: "Artist", cover: "cover4.jpg", file: "song4.mp3", start: 20, end: 50 },
    { title: "Song Five",  artist: "Artist", cover: "cover5.jpg", file: "song5.mp3", start: 50, end: 80 }
  ]
};
