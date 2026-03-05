const batch1 = [
  // --- ANIMALS (EXTENDED) ---
  { en: "Tiger", zh: "老虎", idn: "Harimau", emoji: "🐯", category: "animals", level: "moderate" },
  { en: "Monkey", zh: "猴子", idn: "Monyet", emoji: "🐒", category: "animals", level: "basic" },
  { en: "Zebra", zh: "斑馬", idn: "Zebra", emoji: "🦓", category: "animals", level: "moderate" },
  { en: "Panda", zh: "熊貓", idn: "Panda", emoji: "🐼", category: "animals", level: "basic" },
  { en: "Kangaroo", zh: "袋鼠", idn: "Kanguru", emoji: "🦘", category: "animals", level: "hard" },
  { en: "Cow", zh: "母牛", idn: "Sapi", emoji: "🐄", category: "animals", level: "basic" },
  { en: "Pig", zh: "豬", idn: "Babi", emoji: "🐖", category: "animals", level: "basic" },
  { en: "Chicken", zh: "雞", idn: "Ayam", emoji: "🐔", category: "animals", level: "basic" },
  { en: "Snake", zh: "蛇", idn: "Ular", emoji: "🐍", category: "animals", level: "moderate" },
  { en: "Shark", zh: "鯊魚", idn: "Hiu", emoji: "🦈", category: "animals", level: "hard" },
  { en: "Bee", zh: "蜜蜂", idn: "Lebah", emoji: "🐝", category: "animals", level: "basic" },
  { en: "Butterfly", zh: "蝴蝶", idn: "Kupu-kupu", emoji: "🦋", category: "animals", level: "moderate" },
  { en: "Whale", zh: "鯨魚", idn: "Paus", emoji: "🐋", category: "animals", level: "hard" },
  { en: "Owl", zh: "貓頭鷹", idn: "Burung hantu", emoji: "🦉", category: "animals", level: "hard" },
  { en: "Frog", zh: "青蛙", idn: "Katak", emoji: "🐸", category: "animals", level: "basic" },

  // --- FRUITS & FOOD (EXTENDED) ---
  { en: "Strawberry", zh: "草莓", idn: "Stroberi", emoji: "🍓", category: "fruits", level: "moderate" },
  { en: "Mango", zh: "芒果", idn: "Mangga", emoji: "🥭", category: "fruits", level: "basic" },
  { en: "Cherry", zh: "櫻桃", idn: "Ceri", emoji: "🍒", category: "fruits", level: "moderate" },
  { en: "Lemon", zh: "檸檬", idn: "Lemon", emoji: "🍋", category: "fruits", level: "moderate" },
  { en: "Peach", zh: "桃子", idn: "Persik", emoji: "🍑", category: "fruits", level: "hard" },
  { en: "Pear", zh: "梨子", idn: "Pir", emoji: "🍐", category: "fruits", level: "moderate" },
  { en: "Egg", zh: "蛋", idn: "Telur", emoji: "🥚", category: "household", level: "basic" },
  { en: "Milk", zh: "牛奶", idn: "Susu", emoji: "🥛", category: "household", level: "basic" },
  { en: "Bread", zh: "麵包", idn: "Roti", emoji: "🍞", category: "household", level: "basic" },
  { en: "Rice", zh: "米飯", idn: "Nasi", emoji: "🍚", category: "household", level: "basic" },
  { en: "Pizza", zh: "披薩", idn: "Piza", emoji: "🍕", category: "household", level: "moderate" },
  { en: "Cookie", zh: "餅乾", idn: "Kue kering", emoji: "🍪", category: "household", level: "basic" },

  // --- SCHOOL & TOOLS (EXTENDED) ---
  { en: "Paper", zh: "紙", idn: "Kertas", emoji: "📄", category: "school", level: "basic" },
  { en: "Eraser", zh: "橡皮擦", idn: "Penghapus", emoji: "🧼", category: "school", level: "basic" },
  { en: "Ruler", zh: "尺", idn: "Penggaris", emoji: "📏", category: "school", level: "moderate" },
  { en: "Scissors", zh: "剪刀", idn: "Gunting", emoji: "✂️", category: "school", level: "hard" },
  { en: "Computer", zh: "電腦", idn: "Komputer", emoji: "💻", category: "school", level: "moderate" },
  { en: "Clock", zh: "時鐘", idn: "Jam", emoji: "⏰", category: "school", level: "basic" },
  { en: "Desk", zh: "書桌", idn: "Meja tulis", emoji: "📑", category: "school", level: "moderate" },

  // --- BODY PARTS (NEW CATEGORY - Add to your HTML if needed) ---
  { en: "Head", zh: "頭", idn: "Kepala", emoji: "👤", category: "nature", level: "basic" },
  { en: "Eye", zh: "眼睛", idn: "Mata", emoji: "👁️", category: "nature", level: "basic" },
  { en: "Ear", zh: "耳朵", idn: "Telinga", emoji: "👂", category: "nature", level: "basic" },
  { en: "Nose", zh: "鼻子", idn: "Hidung", emoji: "👃", category: "nature", level: "basic" },
  { en: "Mouth", zh: "嘴巴", idn: "Mulut", emoji: "👄", category: "nature", level: "basic" },
  { en: "Hand", zh: "手", idn: "Tangan", emoji: "✋", category: "nature", level: "basic" },
  { en: "Foot", zh: "腳", idn: "Kaki", emoji: "🦶", category: "nature", level: "basic" },

  // --- VERBS / ACTIONS (EXTENDED) ---
  { en: "Walk", zh: "走路", idn: "Jalan", emoji: "🚶", category: "verbs", level: "basic" },
  { en: "Jump", zh: "跳", idn: "Lompat", emoji: "🦘", category: "verbs", level: "basic" },
  { en: "Read", zh: "閱讀", idn: "Baca", emoji: "📖", category: "verbs", level: "basic" },
  { en: "Write", zh: "寫", idn: "Tulis", emoji: "✍️", category: "verbs", level: "basic" },
  { en: "Draw", zh: "畫畫", idn: "Gambar", emoji: "🎨", category: "verbs", level: "moderate" },
  { en: "Sing", zh: "唱歌", idn: "Nyanyi", emoji: "🎤", category: "verbs", level: "moderate" },
  { en: "Dance", zh: "跳舞", idn: "Menari", emoji: "💃", category: "verbs", level: "moderate" },
  { en: "Climb", zh: "爬", idn: "Panjat", emoji: "🧗", category: "verbs", level: "hard" },
  { en: "Listen", zh: "聽", idn: "Dengar", emoji: "👂", category: "verbs", level: "moderate" },
  { en: "Laugh", zh: "笑", idn: "Tertawa", emoji: "😆", category: "verbs", level: "moderate" },

  // --- TRANSPORTATION (EXTENDED) ---
  { en: "Train", zh: "火車", idn: "Kereta api", emoji: "🚆", category: "transportation", level: "moderate" },
  { en: "Boat", zh: "船", idn: "Perahu", emoji: "⛵", category: "transportation", level: "moderate" },
  { en: "Truck", zh: "卡車", idn: "Truk", emoji: "🚚", category: "transportation", level: "moderate" },
  { en: "Motorcycle", zh: "摩托車", idn: "Sepeda motor", emoji: "🏍️", category: "transportation", level: "hard" },
  { en: "Rocket", zh: "火箭", idn: "Roket", emoji: "🚀", category: "transportation", level: "hard" },
  { en: "Helicopter", zh: "直升機", idn: "Helikopter", emoji: "🚁", category: "transportation", level: "hard" },

  // --- NATURE & WEATHER (EXTENDED) ---
  { en: "Tree", zh: "樹", idn: "Pohon", emoji: "🌳", category: "nature", level: "basic" },
  { en: "Grass", zh: "草", idn: "Rumput", emoji: "🌿", category: "nature", level: "basic" },
  { en: "Cloud", zh: "雲", idn: "Awan", emoji: "☁️", category: "nature", level: "basic" },
  { en: "Star", zh: "星星", idn: "Bintang", emoji: "⭐", category: "nature", level: "basic" },
  { en: "Rainbow", zh: "彩虹", idn: "Pelangi", emoji: "🌈", category: "nature", level: "moderate" },
  { en: "Snow", zh: "雪", idn: "Salju", emoji: "❄️", category: "nature", level: "moderate" },
  { en: "Wind", zh: "風", idn: "Angin", emoji: "💨", category: "nature", level: "moderate" },
  { en: "Fire", zh: "火", idn: "Api", emoji: "🔥", category: "nature", level: "moderate" },
  { en: "Ocean", zh: "海洋", idn: "Lautan", emoji: "🌊", category: "nature", level: "hard" },
  { en: "Earth", zh: "地球", idn: "Bumi", emoji: "🌍", category: "nature", level: "hard" },

  // --- WORKFORCE / JOBS (EXTENDED) ---
  { en: "Nurse", zh: "護士", idn: "Perawat", emoji: "👩‍⚕️", category: "workforce", level: "moderate" },
  { en: "Firefighter", zh: "消防員", idn: "Pemadam kebakaran", emoji: "👨‍🚒", category: "workforce", level: "hard" },
  { en: "Pilot", zh: "飛行員", idn: "Pilot", emoji: "👨‍✈️", category: "workforce", level: "moderate" },
  { en: "Artist", zh: "藝術家", idn: "Seniman", emoji: "🎨", category: "workforce", level: "moderate" },
  { en: "Farmer", zh: "農民", idn: "Petani", emoji: "👨‍🌾", category: "workforce", level: "moderate" },
  { en: "Astronaut", zh: "宇航員", idn: "Astronot", emoji: "👨‍🚀", category: "workforce", level: "hard" },

  // --- ADJECTIVES / FEELINGS ---
  { en: "Happy", zh: "快樂", idn: "Senang", emoji: "😊", category: "adjectives", level: "basic" },
  { en: "Sad", zh: "悲傷", idn: "Sedih", emoji: "😢", category: "adjectives", level: "basic" },
  { en: "Angry", zh: "生氣", idn: "Marah", emoji: "😠", category: "adjectives", level: "basic" },
  { en: "Hungry", zh: "餓", idn: "Lapar", emoji: "😋", category: "adjectives", level: "basic" },
  { en: "Thirsty", zh: "渴", idn: "Haus", emoji: "🥛", category: "adjectives", level: "basic" },
  { en: "Tired", zh: "累", idn: "Lelah", emoji: "😫", category: "adjectives", level: "moderate" },
  { en: "Scared", zh: "害怕", idn: "Takut", emoji: "😨", category: "adjectives", level: "moderate" },
  { en: "Beautiful", zh: "漂亮", idn: "Cantik", emoji: "👸🏻", category: "adjectives", level: "moderate" },
  { en: "Fast", zh: "快", idn: "Cepat", emoji: "⚡", category: "adjectives", level: "moderate" },
  { en: "Slow", zh: "慢", idn: "Lambat", emoji: "🐢", category: "adjectives", level: "moderate" },
  { en: "Big", zh: "大", idn: "Besar", emoji: "🐘", category: "adjectives", level: "basic" },
  { en: "Small", zh: "小", idn: "Kecil", emoji: "🐭", category: "adjectives", level: "basic" },
  { en: "Hot", zh: "熱", idn: "Panas", emoji: "🔥", category: "adjectives", level: "basic" },
  { en: "Cold", zh: "冷", idn: "Dingin", emoji: "❄️", category: "adjectives", level: "basic" },
  
  // (Remaining words following same structure...)
];

// Continue this pattern until 1500 total words
const batch2 = [
  // --- COLORS (Add "Colors" to your HTML category list!) ---
  { en: "Red", zh: "紅色", idn: "Merah", emoji: "🔴", category: "adjectives", level: "basic" },
  { en: "Blue", zh: "藍色", idn: "Biru", emoji: "🔵", category: "adjectives", level: "basic" },
  { en: "Yellow", zh: "黃色", idn: "Kuning", emoji: "🟡", category: "adjectives", level: "basic" },
  { en: "Green", zh: "綠色", idn: "Hijau", emoji: "🟢", category: "adjectives", level: "basic" },
  { en: "Orange", zh: "橙色", idn: "Oranye", emoji: "🟠", category: "adjectives", level: "basic" },
  { en: "Purple", zh: "紫色", idn: "Ungu", emoji: "🟣", category: "adjectives", level: "moderate" },
  { en: "Pink", zh: "粉紅色", idn: "Merah muda", emoji: "🌸", category: "adjectives", level: "basic" },
  { en: "Black", zh: "黑色", idn: "Hitam", emoji: "⚫", category: "adjectives", level: "basic" },
  { en: "White", zh: "白色", idn: "Putih", emoji: "⚪", category: "adjectives", level: "basic" },
  { en: "Brown", zh: "棕色", idn: "Cokelat", emoji: "🟤", category: "adjectives", level: "moderate" },
  { en: "Gray", zh: "灰色", idn: "Abu-abu", emoji: "🔘", category: "adjectives", level: "moderate" },
  { en: "Gold", zh: "金色", idn: "Emas", emoji: "🧈", category: "adjectives", level: "hard" },

  // --- SHAPES ---
  { en: "Circle", zh: "圓形", idn: "Lingkaran", emoji: "⭕", category: "school", level: "basic" },
  { en: "Square", zh: "正方形", idn: "Persegi", emoji: "🟦", category: "school", level: "basic" },
  { en: "Triangle", zh: "三角形", idn: "Segitiga", emoji: "🔺", category: "school", level: "moderate" },
  { en: "Star", zh: "星形", idn: "Bintang", emoji: "⭐", category: "school", level: "basic" },
  { en: "Heart", zh: "心形", idn: "Hati", emoji: "❤️", category: "school", level: "basic" },
  { en: "Diamond", zh: "菱形", idn: "Belah ketupat", emoji: "💎", category: "school", level: "hard" },
  { en: "Oval", zh: "橢圓形", idn: "Oval", emoji: "🥚", category: "school", level: "hard" },

  // --- HOUSEHOLD / KITCHEN ---
  { en: "Fridge", zh: "冰箱", idn: "Kulkas", emoji: "🧊", category: "household", level: "moderate" },
  { en: "Spoon", zh: "湯匙", idn: "Sendok", emoji: "🥄", category: "household", level: "basic" },
  { en: "Fork", zh: "叉子", idn: "Garpu", emoji: "🍴", category: "household", level: "basic" },
  { en: "Knife", zh: "刀子", idn: "Pisau", emoji: "🔪", category: "household", level: "moderate" },
  { en: "Plate", zh: "盤子", idn: "Piring", emoji: "🍽️", category: "household", level: "basic" },
  { en: "Cup", zh: "杯子", idn: "Gelas", emoji: "🥛", category: "household", level: "basic" },
  { en: "Bowl", zh: "碗", idn: "Mangkuk", emoji: "🥣", category: "household", level: "moderate" },
  { en: "Stove", zh: "爐灶", idn: "Kompor", emoji: "🔥", category: "household", level: "hard" },
  { en: "Washing machine", zh: "洗衣機", idn: "Mesin cuci", emoji: "🧺", category: "household", level: "hard" },
  { en: "Telephone", zh: "電話", idn: "Telepon", emoji: "☎️", category: "household", level: "moderate" },
  { en: "Television", zh: "電視", idn: "Televisi", emoji: "📺", category: "household", level: "moderate" },
  { en: "Lamp", zh: "燈", idn: "Lampu", emoji: "💡", category: "household", level: "basic" },
  { en: "Key", zh: "鑰匙", idn: "Kunci", emoji: "🔑", category: "household", level: "basic" },
  { en: "Door", zh: "門", idn: "Pintu", emoji: "🚪", category: "household", level: "basic" },
  { en: "Mirror", zh: "鏡子", idn: "Cermin", emoji: "🪞", category: "household", level: "moderate" },

  // --- ANIMALS (SEA & INSECTS) ---
  { en: "Dolphin", zh: "海豚", idn: "Lumba-lumba", emoji: "🐬", category: "animals", level: "moderate" },
  { en: "Octopus", zh: "章魚", idn: "Gurita", emoji: "🐙", category: "animals", level: "hard" },
  { en: "Crab", zh: "螃蟹", idn: "Kepiting", emoji: "🦀", category: "animals", level: "moderate" },
  { en: "Turtle", zh: "海龜", idn: "Kura-kura", emoji: "🐢", category: "animals", level: "moderate" },
  { en: "Spider", zh: "蜘蛛", idn: "Laba-laba", emoji: "🕷️", category: "animals", level: "moderate" },
  { en: "Ant", zh: "螞蟻", idn: "Semut", emoji: "🐜", category: "animals", level: "basic" },
  { en: "Mosquito", zh: "蚊子", idn: "Nyamuk", emoji: "🦟", category: "animals", level: "moderate" },
  { en: "Bat", zh: "蝙蝠", idn: "Kelelawar", emoji: "🦇", category: "animals", level: "hard" },
  { en: "Eagle", zh: "鷹", idn: "Elang", emoji: "🦅", category: "animals", level: "hard" },
  { en: "Duck", zh: "鴨子", idn: "Bebek", emoji: "🦆", category: "animals", level: "basic" },

  // --- FRUITS & VEGGIES (DETAILED) ---
  { en: "Grapes", zh: "葡萄", idn: "Anggur", emoji: "🍇", category: "fruits", level: "moderate" },
  { en: "Coconut", zh: "椰子", idn: "Kelapa", emoji: "🥥", category: "fruits", level: "moderate" },
  { en: "Avocado", zh: "酪梨", idn: "Alpukat", emoji: "🥑", category: "fruits", level: "hard" },
  { en: "Eggplant", zh: "茄子", idn: "Terong", emoji: "🍆", category: "vegetables", level: "moderate" },
  { en: "Onion", zh: "洋蔥", idn: "Bawang", emoji: "🧅", category: "vegetables", level: "moderate" },
  { en: "Garlic", zh: "大蒜", idn: "Bawang putih", emoji: "🧄", category: "vegetables", level: "hard" },
  { en: "Potato", zh: "土豆", idn: "Kentang", emoji: "🥔", category: "vegetables", level: "basic" },
  { en: "Mushroom", zh: "蘑菇", idn: "Jamur", emoji: "🍄", category: "vegetables", level: "moderate" },

  // --- VERBS (DAILY ROUTINE) ---
  { en: "Wash", zh: "洗", idn: "Cuci", emoji: "🧼", category: "verbs", level: "basic" },
  { en: "Brush", zh: "刷", idn: "Sikat", emoji: "🪥", category: "verbs", level: "basic" },
  { en: "Cook", zh: "烹飪", idn: "Masak", emoji: "🍳", category: "verbs", level: "moderate" },
  { en: "Help", zh: "幫助", idn: "Bantu", emoji: "🤝", category: "verbs", level: "moderate" },
  { en: "Play", zh: "玩", idn: "Main", emoji: "🧸", category: "verbs", level: "basic" },
  { en: "Buy", zh: "買", idn: "Beli", emoji: "🛒", category: "verbs", level: "moderate" },
  { en: "Give", zh: "給", idn: "Beri", emoji: "🎁", category: "verbs", level: "basic" },
  { en: "Take", zh: "拿", idn: "Ambil", emoji: "🤲", category: "verbs", level: "basic" },
  { en: "Think", zh: "思考", idn: "Pikir", emoji: "🤔", category: "verbs", level: "hard" },
  { en: "Learn", zh: "學習", idn: "Belajar", emoji: "🧠", category: "verbs", level: "moderate" },

  // --- NATURE & WEATHER (ADVANCED) ---
  { en: "Lightning", zh: "閃電", idn: "Kilat", emoji: "⚡", category: "nature", level: "hard" },
  { en: "Thunder", zh: "雷聲", idn: "Guntur", emoji: "⛈️", category: "nature", level: "hard" },
  { en: "Fog", zh: "霧", idn: "Kabut", emoji: "🌫️", category: "nature", level: "hard" },
  { en: "Ice", zh: "冰", idn: "Es", emoji: "🧊", category: "nature", level: "moderate" },
  { en: "Island", zh: "島嶼", idn: "Pulau", emoji: "🏝️", category: "nature", level: "hard" },
  { en: "Forest", zh: "森林", idn: "Hutan", emoji: "🌲", category: "nature", level: "moderate" },
  { en: "River", zh: "河流", idn: "Sungai", emoji: "🏞️", category: "nature", level: "moderate" },
  { en: "Beach", zh: "海灘", idn: "Pantai", emoji: "🏖️", category: "nature", level: "basic" },
  { en: "Sand", zh: "沙子", idn: "Pasir", emoji: "🏖️", category: "nature", level: "moderate" },
  { en: "Stone", zh: "石頭", idn: "Batu", emoji: "🪨", category: "nature", level: "basic" },

  // --- ADJECTIVES (OPPOSITES) ---
  { en: "Strong", zh: "強壯", idn: "Kuat", emoji: "💪", category: "adjectives", level: "moderate" },
  { en: "Weak", zh: "虛弱", idn: "Lemah", emoji: "🎈", category: "adjectives", level: "hard" },
  { en: "Clean", zh: "乾淨", idn: "Bersih", emoji: "✨", category: "adjectives", level: "basic" },
  { en: "Dirty", zh: "髒", idn: "Kotor", emoji: "💩", category: "adjectives", level: "basic" },
  { en: "New", zh: "新", idn: "Baru", emoji: "🆕", category: "adjectives", level: "basic" },
  { en: "Old", zh: "舊", idn: "Lama", emoji: "📜", category: "adjectives", level: "basic" },
  { en: "Rich", zh: "富有", idn: "Kaya", emoji: "💰", category: "adjectives", level: "hard" },
  { en: "Poor", zh: "貧窮", idn: "Miskin", emoji: "🏚️", category: "adjectives", level: "hard" },
  { en: "Quiet", zh: "安靜", idn: "Diam", emoji: "🤫", category: "adjectives", level: "moderate" },
  { en: "Loud", zh: "吵鬧", idn: "Berisik", emoji: "📢", category: "adjectives", level: "moderate" }
];

// COMBINE BATCHES
const batch3 = [
  // --- TIME & CALENDAR (Add "Nature" or "School" to your HTML category list!) ---
  { en: "Monday", zh: "星期一", idn: "Senin", emoji: "📅", category: "school", level: "moderate" },
  { en: "Tuesday", zh: "星期二", idn: "Selasa", emoji: "📅", category: "school", level: "moderate" },
  { en: "Wednesday", zh: "星期三", idn: "Rabu", emoji: "📅", category: "school", level: "moderate" },
  { en: "Thursday", zh: "星期四", idn: "Kamis", emoji: "📅", category: "school", level: "moderate" },
  { en: "Friday", zh: "星期五", idn: "禮拜五", idn: "Jumat", emoji: "📅", category: "school", level: "moderate" },
  { en: "Saturday", zh: "星期六", idn: "Sabtu", emoji: "🎉", category: "school", level: "moderate" },
  { en: "Sunday", zh: "星期日", idn: "Minggu", emoji: "⛪", category: "school", level: "moderate" },
  { en: "Morning", zh: "早上", idn: "Pagi", emoji: "🌅", category: "nature", level: "basic" },
  { en: "Afternoon", zh: "下午", idn: "Siang", emoji: "☀️", category: "nature", level: "basic" },
  { en: "Evening", zh: "晚上", idn: "Malam", emoji: "🌙", category: "nature", level: "basic" },
  { en: "Today", zh: "今天", idn: "Hari ini", emoji: "📌", category: "school", level: "moderate" },
  { en: "Yesterday", zh: "昨天", idn: "Kemarin", emoji: "⏳", category: "school", level: "hard" },
  { en: "Tomorrow", zh: "明天", idn: "Besok", emoji: "⏩", category: "school", level: "hard" },

  // --- CLOTHING (Add "Household" to your HTML category list!) ---
  { en: "Shirt", zh: "襯衫", idn: "Kemeja", emoji: "👕", category: "household", level: "moderate" },
  { en: "Pants", zh: "褲子", idn: "Celana", emoji: "👖", category: "household", level: "basic" },
  { en: "Dress", zh: "連衣裙", zh: "連身裙", idn: "Gaun", emoji: "👗", category: "household", level: "moderate" },
  { en: "Shoes", zh: "鞋子", idn: "Sepatu", emoji: "👟", category: "household", level: "basic" },
  { en: "Socks", zh: "襪子", idn: "Kaos kaki", emoji: "🧦", category: "household", level: "basic" },
  { en: "Hat", zh: "帽子", idn: "Topi", emoji: "🧢", category: "household", level: "basic" },
  { en: "Jacket", zh: "夾克", idn: "Jaket", emoji: "🧥", category: "household", level: "moderate" },
  { en: "Umbrella", zh: "雨傘", idn: "Payung", emoji: "🌂", category: "household", level: "moderate" },
  { en: "Glasses", zh: "眼鏡", idn: "Kacamata", emoji: "👓", category: "household", level: "hard" },

  // --- PREPOSITIONS / POSITIONS (Categorized as Adjectives for kids) ---
  { en: "On", zh: "在上面", idn: "Di atas", emoji: "🔝", category: "adjectives", level: "basic" },
  { en: "Under", zh: "在下面", idn: "Di bawah", emoji: "👇", category: "adjectives", level: "basic" },
  { en: "In front", zh: "在前面", idn: "Di depan", emoji: "⏩", category: "adjectives", level: "moderate" },
  { en: "Behind", zh: "在後面", idn: "Di belakang", emoji: "⏪", category: "adjectives", level: "moderate" },
  { en: "Next to", zh: "在旁邊", idn: "Di sebelah", emoji: "↔️", category: "adjectives", level: "hard" },

  // --- ADVANCED WORKFORCE ---
  { en: "Dentist", zh: "牙醫", idn: "Dokter gigi", emoji: "🦷", category: "workforce", level: "moderate" },
  { en: "Scientist", zh: "科學家", idn: "Ilmuwan", emoji: "🧪", category: "workforce", level: "hard" },
  { en: "Engineer", zh: "工程師", idn: "Insinyur", emoji: "🏗️", category: "workforce", level: "hard" },
  { en: "Baker", zh: "烘焙師", idn: "Tukang roti", emoji: "🥖", category: "workforce", level: "moderate" },
  { en: "Driver", zh: "司機", idn: "Sopir", emoji: "👨‍ steering_wheel:", emoji: "🚗", category: "workforce", level: "basic" },
  { en: "Soldier", zh: "軍人", idn: "Tentara", emoji: "🪖", category: "workforce", level: "hard" },
  { en: "Lawyer", zh: "律師", idn: "Pengacara", emoji: "⚖️", category: "workforce", level: "hard" },
  { en: "Farmer", zh: "農夫", idn: "Petani", emoji: "👨‍🌾", category: "workforce", level: "basic" },

  // --- MORE ANIMALS (Traditional Chinese Check) ---
  { en: "Bear", zh: "熊", idn: "Beruang", emoji: "🐻", category: "animals", level: "basic" },
  { en: "Wolf", zh: "狼", idn: "Serigala", emoji: "🐺", category: "animals", level: "moderate" },
  { en: "Deer", zh: "鹿", idn: "Rusa", emoji: "🦌", category: "animals", level: "moderate" },
  { en: "Horse", zh: "馬", idn: "Kuda", emoji: "🐎", category: "animals", level: "basic" },
  { en: "Sheep", zh: "綿羊", idn: "Domba", emoji: "🐑", category: "animals", level: "basic" },
  { en: "Goat", zh: "山羊", idn: "Kambing", emoji: "🐐", category: "animals", level: "moderate" },
  { en: "Camel", zh: "駱駝", idn: "Unta", emoji: "🐫", category: "animals", level: "hard" },

  // --- MORE HOUSEHOLD ITEMS ---
  { en: "Sofa", zh: "沙發", idn: "Sofa", emoji: "🛋️", category: "household", level: "basic" },
  { en: "Curtain", zh: "窗簾", idn: "Gorden", emoji: "🖼️", category: "household", level: "hard" },
  { en: "Blanket", zh: "毯子", idn: "Selimut", emoji: "🛌", category: "household", level: "moderate" },
  { en: "Pillow", zh: "枕頭", idn: "Bantal", emoji: "☁️", category: "household", level: "basic" },
  { en: "Soap", zh: "肥皂", idn: "Sabun", emoji: "🧼", category: "household", level: "basic" },
  { en: "Towel", zh: "毛巾", idn: "Handuk", emoji: "🛁", category: "household", level: "moderate" },
  { en: "Comb", zh: "梳子", idn: "Sisir", emoji: "🪮", category: "household", level: "moderate" }
];

// COMBINE BATCHES
const batch4 = [
  // --- NUMBERS (Essential for Level: Basic) ---
  { en: "One", zh: "一", idn: "Satu", emoji: "1️⃣", category: "school", level: "basic" },
  { en: "Two", zh: "二", idn: "Dua", emoji: "2️⃣", category: "school", level: "basic" },
  { en: "Three", zh: "三", idn: "Tiga", emoji: "3️⃣", category: "school", level: "basic" },
  { en: "Four", zh: "四", idn: "Empat", emoji: "4️⃣", category: "school", level: "basic" },
  { en: "Five", zh: "五", idn: "Lima", emoji: "5️⃣", category: "school", level: "basic" },
  { en: "Six", zh: "六", idn: "Enam", emoji: "6️⃣", category: "school", level: "basic" },
  { en: "Seven", zh: "七", idn: "Tujuh", emoji: "7️⃣", category: "school", level: "basic" },
  { en: "Eight", zh: "八", idn: "Delapan", emoji: "8️⃣", category: "school", level: "basic" },
  { en: "Nine", zh: "九", idn: "Sembilan", emoji: "9️⃣", category: "school", level: "basic" },
  { en: "Ten", zh: "十", idn: "Sepuluh", emoji: "🔟", category: "school", level: "basic" },
  { en: "Hundred", zh: "百", idn: "Seratus", emoji: "💯", category: "school", level: "moderate" },
  { en: "Thousand", zh: "千", idn: "Seribu", emoji: "🔢", category: "school", level: "hard" },

  // --- SCHOOL SUBJECTS ---
  { en: "Mathematics", zh: "數學", idn: "Matematika", emoji: "➕", category: "school", level: "moderate" },
  { en: "Science", zh: "科學", idn: "Sains", emoji: "🧪", category: "school", level: "moderate" },
  { en: "History", zh: "歷史", idn: "Sejarah", emoji: "📜", category: "school", level: "hard" },
  { en: "Geography", zh: "地理", idn: "Geografi", emoji: "🌍", category: "school", level: "hard" },
  { en: "Music", zh: "音樂", idn: "Musik", emoji: "🎵", category: "school", level: "basic" },
  { en: "Art", zh: "美術", idn: "Seni", emoji: "🎨", category: "school", level: "basic" },
  { en: "Physical Education", zh: "體育", idn: "Olahraga", emoji: "🏃", category: "school", level: "moderate" },
  { en: "Language", zh: "語言", idn: "Bahasa", emoji: "🗣️", category: "school", level: "moderate" },

  // --- ELECTRONIC DEVICES (Household/School) ---
  { en: "Tablet", zh: "平板電腦", idn: "Tablet", emoji: "📱", category: "household", level: "moderate" },
  { en: "Laptop", zh: "筆記型電腦", idn: "Laptop", emoji: "💻", category: "household", level: "moderate" },
  { en: "Headphones", zh: "耳機", idn: "Headphone", emoji: "🎧", category: "household", level: "moderate" },
  { en: "Camera", zh: "相機", idn: "Kamera", emoji: "📷", category: "household", level: "moderate" },
  { en: "Mouse", zh: "滑鼠", idn: "Mouse", emoji: "🖱️", category: "school", level: "moderate" },
  { en: "Keyboard", zh: "鍵盤", idn: "Keyboard", emoji: "⌨️", category: "school", level: "hard" },
  { en: "Printer", zh: "印表機", idn: "Printer", emoji: "🖨️", category: "school", level: "hard" },
  { en: "Battery", zh: "電池", idn: "Baterai", emoji: "🔋", category: "household", level: "moderate" },

  // --- SPORTS & HOBBIES ---
  { en: "Soccer", zh: "足球", idn: "Sepak bola", emoji: "⚽", category: "verbs", level: "basic" },
  { en: "Basketball", zh: "籃球", idn: "Bola basket", emoji: "🏀", category: "verbs", level: "moderate" },
  { en: "Tennis", zh: "網球", idn: "Tenis", emoji: "🎾", category: "verbs", level: "moderate" },
  { en: "Swimming", zh: "游泳", idn: "Berenang", emoji: "🏊", category: "verbs", level: "basic" },
  { en: "Running", zh: "跑步", idn: "Berlari", emoji: "🏃", category: "verbs", level: "basic" },
  { en: "Cycling", zh: "騎自行車", idn: "Bersepeda", emoji: "🚲", category: "verbs", level: "moderate" },
  { en: "Fishing", zh: "釣魚", idn: "Memancing", emoji: "🎣", category: "verbs", level: "moderate" },
  { en: "Hiking", zh: "徒步旅行", idn: "Mendaki", emoji: "🥾", category: "verbs", level: "hard" },
  { en: "Cooking", zh: "烹飪", idn: "Memasak", emoji: "👨‍🍳", category: "verbs", level: "moderate" },
  { en: "Photography", zh: "攝影", idn: "Fotografi", emoji: "📸", category: "verbs", level: "hard" },

  // --- MORE ADJECTIVES (Traditional Chinese Check) ---
  { en: "Heavy", zh: "重", idn: "Berat", emoji: "🏋️", category: "adjectives", level: "moderate" },
  { en: "Light", zh: "輕", idn: "Ringan", emoji: "🍃", category: "adjectives", level: "moderate" },
  { en: "Hard", zh: "硬", idn: "Keras", emoji: "💎", category: "adjectives", level: "moderate" },
  { en: "Soft", zh: "軟", idn: "Lembut", emoji: "🧸", category: "adjectives", level: "moderate" },
  { en: "Expensive", zh: "貴", idn: "Mahal", emoji: "💎", category: "adjectives", level: "hard" },
  { en: "Cheap", zh: "便宜", idn: "Murah", emoji: "🏷️", category: "adjectives", level: "moderate" },
  { en: "Full", zh: "飽", idn: "Kenyang", emoji: "😋", category: "adjectives", level: "basic" },
  { en: "Empty", zh: "空", idn: "Kosong", emoji: "🫙", category: "adjectives", level: "moderate" },

  // --- WORKFORCE (Traditional Chinese Check) ---
  { en: "Postman", zh: "郵差", idn: "Tukang pos", emoji: "📮", category: "workforce", level: "moderate" },
  { en: "Carpenter", zh: "木工", idn: "Tukang kayu", emoji: "🪚", category: "workforce", level: "hard" },
  { en: "Mechanic", zh: "技工", idn: "Montir", emoji: "🔧", category: "workforce", level: "hard" },
  { en: "Waiter", zh: "服務生", idn: "Pelayan", emoji: "🤵", category: "workforce", level: "moderate" },
  { en: "Dancer", zh: "舞者", idn: "Penari", emoji: "💃", category: "workforce", level: "moderate" },
  { en: "Musician", zh: "音樂家", idn: "Musisi", emoji: "🎻", category: "workforce", level: "hard" }
];

// COMBINE BATCHES
const batch5 = [
  // --- HEALTH & BODY (Level: Moderate/Hard) ---
  { en: "Stomach", zh: "肚子", idn: "Perut", emoji: "肚子", emoji: "🤰", category: "nature", level: "moderate" },
  { en: "Back", zh: "背", idn: "Punggung", emoji: "🚶", category: "nature", level: "moderate" },
  { en: "Shoulder", zh: "肩膀", idn: "Bahu", emoji: "💪", category: "nature", level: "moderate" },
  { en: "Knee", zh: "膝蓋", idn: "Lutut", emoji: "🦵", category: "nature", level: "moderate" },
  { en: "Finger", zh: "手指", idn: "Jari", emoji: "☝️", category: "nature", level: "basic" },
  { en: "Toe", zh: "腳趾", idn: "Jari kaki", emoji: "🦶", category: "nature", level: "moderate" },
  { en: "Medicine", zh: "藥", idn: "Obat", emoji: "💊", category: "nature", level: "moderate" },
  { en: "Bandage", zh: "繃帶", idn: "Pembalut", emoji: "🩹", category: "nature", level: "hard" },
  { en: "Fever", zh: "發燒", idn: "Demam", emoji: "🤒", category: "nature", level: "moderate" },
  { en: "Cough", zh: "咳嗽", idn: "Batuk", emoji: "😷", category: "nature", level: "moderate" },
  { en: "Sneeze", zh: "打噴嚏", idn: "Bersin", emoji: "🤧", category: "nature", level: "hard" },

  // --- PUBLIC PLACES (Add "Transportation" or "Workforce" category) ---
  { en: "Hospital", zh: "醫院", idn: "Rumah sakit", emoji: "🏥", category: "workforce", level: "moderate" },
  { en: "Post Office", zh: "郵局", idn: "Kantor pos", emoji: "🏣", category: "workforce", level: "moderate" },
  { en: "Bank", zh: "銀行", idn: "Bank", emoji: "🏦", category: "workforce", level: "moderate" },
  { en: "Library", zh: "圖書館", idn: "Perpustakaan", emoji: "📚", category: "school", level: "moderate" },
  { en: "Supermarket", zh: "超市", idn: "Supermarket", emoji: "🛒", category: "household", level: "moderate" },
  { en: "Park", zh: "公園", idn: "Taman", emoji: "🌳", category: "nature", level: "basic" },
  { en: "Museum", zh: "博物館", idn: "Museum", emoji: "🏛️", category: "school", level: "hard" },
  { en: "Bakery", zh: "麵包店", idn: "Toko roti", emoji: "🍞", category: "household", level: "moderate" },
  { en: "Zoo", zh: "動物園", idn: "Kebun binatang", emoji: "🦁", category: "animals", level: "basic" },
  { en: "Cinema", zh: "電影院", idn: "Bioskop", emoji: "🎬", category: "household", level: "hard" },

  // --- KITCHEN INGREDIENTS (Add to "Fruits" or "Vegetables" category) ---
  { en: "Salt", zh: "鹽", idn: "Garam", emoji: "🧂", category: "household", level: "moderate" },
  { en: "Sugar", zh: "糖", idn: "Gula", emoji: "🍭", category: "household", level: "moderate" },
  { en: "Oil", zh: "油", idn: "Minyak", emoji: "🍾", category: "household", level: "moderate" },
  { en: "Flour", zh: "麵粉", idn: "Tepung", emoji: "🥡", category: "household", level: "hard" },
  { en: "Honey", zh: "蜂蜜", idn: "Madu", emoji: "🍯", category: "household", level: "moderate" },
  { en: "Butter", zh: "奶油", idn: "Mentega", emoji: "🧈", category: "household", level: "moderate" },
  { en: "Cheese", zh: "起司", idn: "Keju", emoji: "🧀", category: "household", level: "moderate" },
  { en: "Egg", zh: "雞蛋", idn: "Telur", emoji: "🥚", category: "household", level: "basic" },
  { en: "Pepper", zh: "胡椒", idn: "Lada", emoji: "🌶️", category: "household", level: "hard" },

  // --- ABSTRACT FEELINGS & ADJECTIVES ---
  { en: "Brave", zh: "勇敢", idn: "Berani", emoji: "🦁", category: "adjectives", level: "hard" },
  { en: "Kind", zh: "善良", idn: "Baik hati", emoji: "❤️", category: "adjectives", level: "moderate" },
  { en: "Funny", zh: "有趣", idn: "Lucu", emoji: "😂", category: "adjectives", level: "basic" },
  { en: "Smart", zh: "聰明", idn: "Pintar", emoji: "🎓", category: "adjectives", level: "moderate" },
  { en: "Bored", zh: "無聊", idn: "Bosan", emoji: "😑", category: "adjectives", level: "moderate" },
  { en: "Surprised", zh: "驚訝", idn: "Terkejut", emoji: "😮", category: "adjectives", level: "moderate" },
  { en: "Nervous", zh: "緊張", idn: "Gugup", emoji: "😟", category: "adjectives", level: "hard" },
  { en: "Busy", zh: "忙碌", idn: "Sibuk", emoji: "📅", category: "adjectives", level: "moderate" },
  { en: "Easy", zh: "簡單", idn: "Mudah", emoji: "✅", category: "adjectives", level: "basic" },
  { en: "Difficult", zh: "困難", idn: "Sulit", emoji: "🧩", category: "adjectives", level: "hard" },

  // --- VERBS (ADVANCED) ---
  { en: "Understand", zh: "理解", idn: "Paham", emoji: "💡", category: "verbs", level: "hard" },
  { en: "Remember", zh: "記得", idn: "Ingat", emoji: "🧠", category: "verbs", level: "hard" },
  { en: "Forget", zh: "忘記", idn: "Lupa", emoji: "❓", category: "verbs", level: "moderate" },
  { en: "Believe", zh: "相信", idn: "Percaya", emoji: "🙏", category: "verbs", level: "hard" },
  { en: "Hope", zh: "希望", idn: "Berharap", emoji: "🌟", category: "verbs", level: "moderate" },
  { en: "Wait", zh: "等待", idn: "Tunggu", emoji: "⏳", category: "verbs", level: "moderate" },
  { en: "Search", zh: "尋找", idn: "Cari", emoji: "🔍", category: "verbs", level: "moderate" },
  { en: "Find", zh: "找到", idn: "Temu", emoji: "📍", category: "verbs", level: "moderate" }
];

// COMBINE ALL BATCHES
const batch6 = [
  // --- ANIMALS ---
  { en: "Gorilla", zh: "大猩猩", idn: "Gorila", emoji: "🦍", category: "animals", level: "moderate" },
  { en: "Leopard", zh: "豹", idn: "Macan Tutul", emoji: "🐆", category: "animals", level: "hard" },
  { en: "Wolf", zh: "狼", idn: "Serigala", emoji: "🐺", category: "animals", level: "moderate" },
  { en: "Fox", zh: "狐狸", idn: "Rubah", emoji: "🦊", category: "animals", level: "basic" },
  { en: "Deer", zh: "鹿", idn: "Rusa", emoji: "🦌", category: "animals", level: "basic" },
  { en: "Otter", zh: "水獺", idn: "Berang-berang", emoji: "🦦", category: "animals", level: "hard" },
  { en: "Bat", zh: "蝙蝠", idn: "Kelelawar", emoji: "🦇", category: "animals", level: "moderate" },
  { en: "Eagle", zh: "鷹", idn: "Elang", emoji: "🦅", category: "animals", level: "moderate" },
  { en: "Owl", zh: "貓頭鷹", idn: "Burung Hantu", emoji: "🦉", category: "animals", level: "moderate" },
  { en: "Parrot", zh: "鸚鵡", idn: "Burung Kakaktua", emoji: "🦜", category: "animals", level: "basic" },
  { en: "Crab", zh: "螃蟹", idn: "Kepiting", emoji: "🦀", category: "animals", level: "basic" },
  { en: "Lobster", zh: "龍蝦", idn: "Lobster", emoji: "🦞", category: "animals", level: "hard" },
  { en: "Octopus", zh: "章魚", idn: "Gurita", emoji: "🐙", category: "animals", level: "moderate" },
  { en: "Dolphin", zh: "海豚", idn: "Lumba-lumba", emoji: "🐬", category: "animals", level: "basic" },
  { en: "Whale", zh: "鯨魚", idn: "Paus", emoji: "🐳", category: "animals", level: "moderate" },

  // --- FRUITS ---
  { en: "Peach", zh: "桃子", idn: "Persik", emoji: "🍑", category: "fruits", level: "moderate" },
  { en: "Cherry", zh: "櫻桃", idn: "Ceri", emoji: "🍒", category: "fruits", level: "basic" },
  { en: "Coconut", zh: "椰子", idn: "Kelapa", emoji: "🥥", category: "fruits", level: "basic" },
  { en: "Pomegranate", zh: "石榴", idn: "Delima", emoji: "🍅", category: "fruits", level: "hard" },
  { en: "Fig", zh: "無花果", idn: "Ara", emoji: "🥯", category: "fruits", level: "hard" },
  { en: "Apricot", zh: "杏子", idn: "Aprikot", emoji: "🍑", category: "fruits", level: "hard" },
  { en: "Blueberry", zh: "藍莓", idn: "Bluberi", emoji: "🫐", category: "fruits", level: "moderate" },
  { en: "Raspberry", zh: "覆盆子", idn: "Rasberi", emoji: "🍇", category: "fruits", level: "hard" },
  { en: "Plum", zh: "李子", idn: "Plum", emoji: "🟣", category: "fruits", level: "moderate" },
  { en: "Guava", zh: "番石榴", idn: "Jambu Biji", emoji: "🍐", category: "fruits", level: "moderate" },

  // --- VEGETABLES ---
  { en: "Lettuce", zh: "生菜", idn: "Selada", emoji: "🥬", category: "vegetables", level: "basic" },
  { en: "Spinach", zh: "菠菜", idn: "Bayam", emoji: "🍃", category: "vegetables", level: "moderate" },
  { en: "Celery", zh: "芹菜", idn: "Seledri", emoji: "🌿", category: "vegetables", level: "moderate" },
  { en: "Asparagus", zh: "蘆筍", idn: "Asparagus", emoji: "🎋", category: "vegetables", level: "hard" },
  { en: "Zucchini", zh: "小南瓜", idn: "Zukini", emoji: "🥒", category: "vegetables", level: "hard" },
  { en: "Cauliflower", zh: "花椰菜", idn: "Kembang Kol", emoji: "🥦", category: "vegetables", level: "moderate" },
  { en: "Sweet Potato", zh: "地瓜", idn: "Ubi Jalar", emoji: "🍠", category: "vegetables", level: "basic" },
  { en: "Garlic", zh: "大蒜", idn: "Bawang Putih", emoji: "🧄", category: "vegetables", level: "basic" },
  { en: "Onion", zh: "洋蔥", idn: "Bawang Bombay", emoji: "🧅", category: "vegetables", level: "basic" },
  { en: "Beetroot", zh: "甜菜根", idn: "Bit", emoji: "🥔", category: "vegetables", level: "moderate" },

  // --- HOUSEHOLD ---
  { en: "Refrigerator", zh: "冰箱", idn: "Kulkas", emoji: "🧊", category: "household", level: "basic" },
  { en: "Microwave", zh: "微波爐", idn: "Oven Mikrogelombang", emoji: "🍲", category: "household", level: "moderate" },
  { en: "Washing Machine", zh: "洗衣機", idn: "Mesin Cuci", emoji: "🧺", category: "household", level: "moderate" },
  { en: "Wardrobe", zh: "衣櫃", idn: "Lemari Pakaian", emoji: "👗", category: "household", level: "basic" },
  { en: "Mirror", zh: "鏡子", idn: "Cermin", emoji: "🪞", category: "household", level: "basic" },
  { en: "Curtain", zh: "窗簾", idn: "Gorden", emoji: "🖼️", category: "household", level: "moderate" },
  { en: "Pillow", zh: "枕頭", idn: "Bantal", emoji: "🛌", category: "household", level: "basic" },
  { en: "Blanket", zh: "毯子", idn: "Selimut", emoji: "🧶", category: "household", level: "basic" },
  { en: "Toaster", zh: "烤麵包機", idn: "Pemanggang Roti", emoji: "🍞", category: "household", level: "basic" },
  { en: "Iron", zh: "熨斗", idn: "Setrika", emoji: "🔌", category: "household", level: "moderate" },

  // --- SCHOOL ---
  { en: "Backpack", zh: "書包", idn: "Ransel", emoji: "🎒", category: "school", level: "basic" },
  { en: "Notebook", zh: "筆記本", idn: "Buku Catatan", emoji: "📓", category: "school", level: "basic" },
  { en: "Calculator", zh: "計算機", idn: "Kalkulator", emoji: "🔢", category: "school", level: "moderate" },
  { en: "Dictionary", zh: "字典", idn: "Kamus", emoji: "📖", category: "school", level: "hard" },
  { en: "Uniform", zh: "校服", idn: "Seragam", emoji: "👕", category: "school", level: "moderate" },
  { en: "Blackboard", zh: "黑板", idn: "Papan Tulis", emoji: "🏫", category: "school", level: "basic" },
  { en: "Textbook", zh: "教科書", idn: "Buku Pelajaran", emoji: "📚", category: "school", level: "moderate" },
  { en: "Glue", zh: "膠水", idn: "Lem", emoji: "🧪", category: "school", level: "basic" },
  { en: "Compass", zh: "圓規", idn: "Jangka", emoji: "📐", category: "school", level: "hard" },
  { en: "Exam", zh: "考試", idn: "Ujian", emoji: "📝", category: "school", level: "hard" },

  // --- NATURE ---
  { en: "Mountain", zh: "山", idn: "Gunung", emoji: "⛰️", category: "nature", level: "basic" },
  { en: "Waterfall", zh: "瀑布", idn: "Air Terjun", emoji: "⛲", category: "nature", level: "moderate" },
  { en: "Desert", zh: "沙漠", idn: "Gurun", emoji: "🏜️", category: "nature", level: "hard" },
  { en: "Island", zh: "島嶼", idn: "Pulau", emoji: "🏝️", category: "nature", level: "moderate" },
  { en: "Cave", zh: "山洞", idn: "Gua", emoji: "🕳️", category: "nature", level: "hard" },
  { en: "Volcano", zh: "火山", idn: "Gunung Berapi", emoji: "🌋", category: "nature", level: "hard" },
  { en: "Rainbow", zh: "彩虹", idn: "Pelangi", emoji: "🌈", category: "nature", level: "basic" },
  { en: "Thunder", zh: "打雷", idn: "Guntur", emoji: "⚡", category: "nature", level: "moderate" },
  { en: "Valley", zh: "山谷", idn: "Lembah", emoji: "🏞️", category: "nature", level: "hard" },
  { en: "Forest", zh: "森林", idn: "Hutan", emoji: "🌲", category: "nature", level: "basic" },

  // --- TRANSPORTATION ---
  { en: "Airplane", zh: "飛機", idn: "Pesawat Terbang", emoji: "✈️", category: "transportation", level: "basic" },
  { en: "Helicopter", zh: "直升機", idn: "Helikopter", emoji: "🚁", category: "transportation", level: "hard" },
  { en: "Submarine", zh: "潛水艇", idn: "Kapal Selam", emoji: "🚢", category: "transportation", level: "hard" },
  { en: "Motorcycle", zh: "摩托車", idn: "Sepeda Motor", emoji: "🏍️", category: "transportation", level: "moderate" },
  { en: "Ambulance", zh: "救護車", idn: "Ambulans", emoji: "🚑", category: "transportation", level: "moderate" },
  { en: "Taxi", zh: "計程車", idn: "Taksi", emoji: "🚕", category: "transportation", level: "basic" },
  { en: "Rocket", zh: "火箭", idn: "Roket", emoji: "🚀", category: "transportation", level: "hard" },
  { en: "Scooter", zh: "踏板車", idn: "Skuter", emoji: "🛴", category: "transportation", level: "basic" },
  { en: "Truck", zh: "卡車", idn: "Truk", emoji: "🚚", category: "transportation", level: "basic" },
  { en: "Train", zh: "火車", idn: "Kereta Api", emoji: "🚆", category: "transportation", level: "basic" },

  // --- WORKFORCE ---
  { en: "Scientist", zh: "科學家", idn: "Ilmuwan", emoji: "🧪", category: "workforce", level: "hard" },
  { en: "Pilot", zh: "飛行員", idn: "Pilot", emoji: "👨‍✈️", category: "workforce", level: "moderate" },
  { en: "Astronaut", zh: "宇航員", idn: "Astronot", emoji: "👨‍🚀", category: "workforce", level: "hard" },
  { en: "Lawyer", zh: "律師", idn: "Pengacara", emoji: "⚖️", category: "workforce", level: "hard" },
  { en: "Artist", zh: "藝術家", idn: "Seniman", emoji: "🎨", category: "workforce", level: "moderate" },
  { en: "Chef", zh: "廚師", idn: "Koki", emoji: "👨‍🍳", category: "workforce", level: "basic" },
  { en: "Farmer", zh: "農民", idn: "Petani", emoji: "👨‍🌾", category: "workforce", level: "basic" },
  { en: "Firefighter", zh: "消防員", idn: "Pemadam Kebakaran", emoji: "👨‍🚒", category: "workforce", level: "moderate" },
  { en: "Nurse", zh: "護士", idn: "Perawat", emoji: "👩‍⚕️", category: "workforce", level: "moderate" },
  { en: "Mechanic", zh: "機修工", idn: "Mekanik", emoji: "👨‍🔧", category: "workforce", level: "moderate" },

  // --- ADJECTIVES ---
  { en: "Expensive", zh: "貴", idn: "Mahal", emoji: "💰", category: "adjectives", level: "moderate" },
  { en: "Cheap", zh: "便宜", idn: "Murah", emoji: "🏷️", category: "adjectives", level: "basic" },
  { en: "Heavy", zh: "重", idn: "Berat", emoji: "🏋️", category: "adjectives", level: "moderate" },
  { en: "Light", zh: "輕", idn: "Ringan", emoji: "🎈", category: "adjectives", level: "basic" },
  { en: "Bright", zh: "明亮", idn: "Terang", emoji: "✨", category: "adjectives", level: "basic" },
  { en: "Dark", zh: "黑暗", idn: "Gelap", emoji: "🌑", category: "adjectives", level: "basic" },
  { en: "Deep", zh: "深", idn: "Dalam", emoji: "🕳️", category: "adjectives", level: "hard" },
  { en: "Shallow", zh: "淺", idn: "Dangkal", emoji: "📏", category: "adjectives", level: "hard" },
  { en: "Strong", zh: "強壯", idn: "Kuat", emoji: "💪", category: "adjectives", level: "basic" },
  { en: "Weak", zh: "虛弱", idn: "Lemah", emoji: "🤒", category: "adjectives", level: "moderate" },

  // --- VERBS ---
  { en: "Learn", zh: "學習", idn: "Belajar", emoji: "📖", category: "verbs", level: "moderate" },
  { en: "Think", zh: "思考", idn: "Berpikir", emoji: "🤔", category: "verbs", level: "moderate" },
  { en: "Celebrate", zh: "慶祝", idn: "Merayakan", emoji: "🥳", category: "verbs", level: "moderate" },
  { en: "Build", zh: "建造", idn: "Membangun", emoji: "🏗️", category: "verbs", level: "hard" },
  { en: "Destroy", zh: "破壞", idn: "Menghancurkan", emoji: "💥", category: "verbs", level: "hard" },
  { en: "Travel", zh: "旅行", idn: "Bepergian", emoji: "🧳", category: "verbs", level: "moderate" },
  { en: "Imagine", zh: "想像", idn: "Membayangkan", emoji: "💭", category: "verbs", level: "hard" },
  { en: "Explore", zh: "探索", idn: "Menjelajah", emoji: "🧭", category: "verbs", level: "hard" },
  { en: "Create", zh: "創造", idn: "Menciptakan", emoji: "🎨", category: "verbs", level: "hard" },
  { en: "Follow", zh: "跟隨", idn: "Mengikuti", emoji: "🚶", category: "verbs", level: "moderate" }
];
// COMBINE ALL BATCHES
const batch7 = [
  // --- ANIMALS ---
  { en: "Gorilla", zh: "大猩猩", idn: "Gorila", emoji: "🦍", category: "animals", level: "moderate" },
  { en: "Leopard", zh: "豹", idn: "Macan Tutul", emoji: "🐆", category: "animals", level: "hard" },
  { en: "Wolf", zh: "狼", idn: "Serigala", emoji: "🐺", category: "animals", level: "moderate" },
  { en: "Deer", zh: "鹿", idn: "Rusa", emoji: "🦌", category: "animals", level: "basic" },
  { en: "Otter", zh: "水獺", idn: "Berang-berang", emoji: "🦦", category: "animals", level: "hard" },
  { en: "Bat", zh: "蝙蝠", idn: "Kelelawar", emoji: "🦇", category: "animals", level: "moderate" },
  { en: "Eagle", zh: "鷹", idn: "Elang", emoji: "🦅", category: "animals", level: "moderate" },
  { en: "Owl", zh: "貓頭鷹", idn: "Burung Hantu", emoji: "🦉", category: "animals", level: "moderate" },

  // --- FRUITS ---
  { en: "Pomegranate", zh: "石榴", idn: "Delima", emoji: "🍅", category: "fruits", level: "hard" },
  { en: "Fig", zh: "無花果", idn: "Ara", emoji: "🥯", category: "fruits", level: "hard" },
  { en: "Apricot", zh: "杏子", idn: "Aprikot", emoji: "🍑", category: "fruits", level: "hard" },
  { en: "Blueberry", zh: "藍莓", idn: "Bluberi", emoji: "🍇", category: "fruits", level: "moderate" },
  { en: "Raspberry", zh: "覆盆子", idn: "Rasberi", emoji: "🍇", category: "fruits", level: "hard" },
  { en: "Guava", zh: "番石榴", idn: "Jambu Biji", emoji: "🍐", category: "fruits", level: "moderate" },
  { en: "Cranberry", zh: "蔓越莓", idn: "Kranberi", emoji: "🍒", category: "fruits", level: "hard" },

  // --- VEGETABLES ---
  { en: "Asparagus", zh: "蘆筍", idn: "Asparagus", emoji: "🎋", category: "vegetables", level: "hard" },
  { en: "Zucchini", zh: "小南瓜", idn: "Zukini", emoji: "🥒", category: "vegetables", level: "hard" },
  { en: "Turnip", zh: "蕪菁", idn: "Lobak Cina", emoji: "🧶", category: "vegetables", level: "moderate" },
  { en: "Celery", zh: "芹菜", idn: "Seledri", emoji: "🌿", category: "vegetables", level: "moderate" },
  { en: "Pumpkin", zh: "南瓜", idn: "Labu", emoji: "🎃", category: "vegetables", level: "basic" },

  // --- HOUSEHOLD ---
  { en: "Wardrobe", zh: "衣櫃", idn: "Lemari Pakaian", emoji: "👗", category: "household", level: "basic" },
  { en: "Curtain", zh: "窗簾", idn: "Gorden", emoji: "🖼️", category: "household", level: "moderate" },
  { en: "Pillow", zh: "枕頭", idn: "Bantal", emoji: "🛌", category: "household", level: "basic" },
  { en: "Blanket", zh: "毯子", idn: "Selimut", emoji: "🧶", category: "household", level: "basic" },
  { en: "Toaster", zh: "烤麵包機", idn: "Pemanggang Roti", emoji: "🍞", category: "household", level: "basic" },
  { en: "Mirror", zh: "鏡子", idn: "Cermin", emoji: "🪞", category: "household", level: "basic" },
  { en: "Iron", zh: "熨斗", idn: "Setrika", emoji: "🔌", category: "household", level: "moderate" },

  // --- SCHOOL ---
  { en: "Dictionary", zh: "字典", idn: "Kamus", emoji: "📖", category: "school", level: "hard" },
  { en: "Calculator", zh: "計算機", idn: "Kalkulator", emoji: "🔢", category: "school", level: "moderate" },
  { en: "Uniform", zh: "校服", idn: "Seragam", emoji: "👕", category: "school", level: "moderate" },
  { en: "Compass", zh: "圓規", idn: "Jangka", emoji: "📐", category: "school", level: "hard" },
  { en: "Exam", zh: "考試", idn: "Ujian", emoji: "📝", category: "school", level: "hard" },
  { en: "Map", zh: "地圖", idn: "Peta", emoji: "🗺️", category: "school", level: "basic" },

  // --- NATURE ---
  { en: "Waterfall", zh: "瀑布", idn: "Air Terjun", emoji: "⛲", category: "nature", level: "moderate" },
  { en: "Desert", zh: "沙漠", idn: "Gurun", emoji: "🏜️", category: "nature", level: "hard" },
  { en: "Cave", zh: "山洞", idn: "Gua", emoji: "🕳️", category: "nature", level: "hard" },
  { en: "Volcano", zh: "火山", idn: "Gunung Berapi", emoji: "🌋", category: "nature", level: "hard" },
  { en: "Thunder", zh: "打雷", idn: "Guntur", emoji: "⚡", category: "nature", level: "moderate" },
  { en: "Valley", zh: "山谷", idn: "Lembah", emoji: "🏞️", category: "nature", level: "hard" },
  { en: "Canyon", zh: "峽谷", idn: "Ngarai", emoji: "⛰️", category: "nature", level: "hard" },

  // --- TRANSPORTATION ---
  { en: "Helicopter", zh: "直升機", idn: "Helikopter", emoji: "🚁", category: "transportation", level: "hard" },
  { en: "Submarine", zh: "潛水艇", idn: "Kapal Selam", emoji: "🚢", category: "transportation", level: "hard" },
  { en: "Ambulance", zh: "救護車", idn: "Ambulans", emoji: "🚑", category: "transportation", level: "moderate" },
  { en: "Rocket", zh: "火箭", idn: "Roket", emoji: "🚀", category: "transportation", level: "hard" },
  { en: "Scooter", zh: "踏板車", idn: "Skuter", emoji: "🛴", category: "transportation", level: "basic" },
  { en: "Ferry", zh: "渡輪", idn: "Feri", emoji: "⛴️", category: "transportation", level: "moderate" },

  // --- WORKFORCE ---
  { en: "Scientist", zh: "科學家", idn: "Ilmuwan", emoji: "🧪", category: "workforce", level: "hard" },
  { en: "Astronaut", zh: "宇航員", idn: "Astronot", emoji: "👨‍🚀", category: "workforce", level: "hard" },
  { en: "Lawyer", zh: "律師", idn: "Pengacara", emoji: "⚖️", category: "workforce", level: "hard" },
  { en: "Pilot", zh: "飛行員", idn: "Pilot", emoji: "👨‍✈️", category: "workforce", level: "moderate" },
  { en: "Mechanic", zh: "機修工", idn: "Mekanik", emoji: "👨‍🔧", category: "workforce", level: "moderate" },
  { en: "Judge", zh: "法官", idn: "Hakim", emoji: "👨‍⚖️", category: "workforce", level: "hard" },

  // --- ADJECTIVES ---
  { en: "Expensive", zh: "貴", idn: "Mahal", emoji: "💰", category: "adjectives", level: "moderate" },
  { en: "Cheap", zh: "便宜", idn: "Murah", emoji: "🏷️", category: "adjectives", level: "basic" },
  { en: "Heavy", zh: "重", idn: "Berat", emoji: "🏋️", category: "adjectives", level: "moderate" },
  { en: "Light", zh: "輕", idn: "Ringan", emoji: "🎈", category: "adjectives", level: "basic" },
  { en: "Bright", zh: "明亮", idn: "Terang", emoji: "✨", category: "adjectives", level: "basic" },
  { en: "Dark", zh: "黑暗", idn: "Gelap", emoji: "🌑", category: "adjectives", level: "basic" },
  { en: "Deep", zh: "深", idn: "Dalam", emoji: "🕳️", category: "adjectives", level: "hard" },
  { en: "Shallow", zh: "淺", idn: "Dangkal", emoji: "📏", category: "adjectives", level: "hard" },
  { en: "Narrow", zh: "狹窄", idn: "Sempit", emoji: "🛣️", category: "adjectives", level: "moderate" },
  { en: "Wide", zh: "寬闊", idn: "Lebar", emoji: "↔️", category: "adjectives", level: "moderate" },

  // --- VERBS ---
  { en: "Imagine", zh: "想像", idn: "Membayangkan", emoji: "💭", category: "verbs", level: "hard" },
  { en: "Explore", zh: "探索", idn: "Menjelajah", emoji: "🧭", category: "verbs", level: "hard" },
  { en: "Create", zh: "創造", idn: "Menciptakan", emoji: "🎨", category: "verbs", level: "hard" },
  { en: "Destroy", zh: "破壞", idn: "Menghancurkan", emoji: "💥", category: "verbs", level: "hard" },
  { en: "Celebrate", zh: "慶祝", idn: "Merayakan", emoji: "🥳", category: "verbs", level: "moderate" },
  { en: "Protect", zh: "保護", idn: "Melindungi", emoji: "🛡️", category: "verbs", level: "moderate" },
  { en: "Succeed", zh: "成功", idn: "Berhasil", emoji: "🏆", category: "verbs", level: "hard" },
  { en: "Fail", zh: "失敗", idn: "Gagal", emoji: "❌", category: "verbs", level: "moderate" },
  { en: "Borrow", zh: "借", idn: "Meminjam", emoji: "📚", category: "verbs", level: "moderate" },
  { en: "Lend", zh: "借出", idn: "Meminjamkan", emoji: "🤝", category: "verbs", level: "moderate" }
];
// COMBINE ALL BATCHES
const batch8 = [
  { en: "Starfruit", zh: "楊桃", idn: "Belimbing", emoji: "⭐", category: "fruits", level: "moderate" },
  { en: "Kale", zh: "羽衣甘藍", idn: "Kale", emoji: "🥬", category: "vegetables", level: "hard" },
  { en: "Hedgehog", zh: "刺蝟", idn: "Landak", emoji: "🦔", category: "animals", level: "moderate" },
  { en: "Stapler", zh: "訂書機", idn: "Stapler", emoji: "🖇️", category: "school", level: "basic" },
  { en: "Toaster", zh: "烤麵包機", idn: "Pemanggang Roti", emoji: "🍞", category: "household", level: "basic" }
];
// COMBINE ALL BATCHES
const vocab = [...batch1, ...batch2, ...batch3, ...batch4, ...batch5, ...batch6, ...batch7, ...batch8];
