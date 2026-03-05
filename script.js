let currentDeck = [];
let currentIndex = 0;
let masterList = []; 

/**
 * 1. INITIALIZATION
 * Scans for every single array in your vocab.js file.
 */
function initApp() {
    masterList = [];
    let foundBatches = [];

    // We look for any array in the global window object
    for (let key in window) {
        try {
            if (Array.isArray(window[key]) && window[key].length > 0) {
                const firstItem = window[key][0];
                
                // If it looks like a vocab object (has 'en', 'zh', or 'category')
                if (firstItem && typeof firstItem === 'object' && (firstItem.en || firstItem.zh)) {
                    foundBatches.push(key);
                    
                    window[key].forEach(item => {
                        // Avoid duplicates
                        if (!masterList.some(m => m.en === item.en)) {
                            masterList.push(item);
                        }
                    });
                }
            }
        } catch (e) {
            // Skip variables that can't be accessed
            continue;
        }
    }

    console.log("Batches found:", foundBatches);
    console.log(`Total master list loaded: ${masterList.length} words.`);

    if (masterList.length > 0) {
        applyFilters(); 
    } else {
        // One final fallback: Check for a specific variable named 'vocab'
        if (typeof vocab !== 'undefined') {
            masterList = vocab;
            applyFilters();
        } else {
            alert("Critical Error: No vocabulary arrays found in vocab.js! Please check the Console (F12) for red Syntax Errors.");
        }
    }
}

/**
 * 2. NAVIGATION
 */
function changeCard(step) {
    if (currentDeck.length === 0) return;
    currentIndex += step;
    if (currentIndex >= currentDeck.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = currentDeck.length - 1;
    updateCard();
    const card = document.querySelector('.card');
    card.style.animation = 'none';
    card.offsetHeight; /* trigger reflow */
    card.style.animation = null; 

}

/**
 * 3. FILTERING
 * Using variables to remember selections fixes the "No Cards" bug.
 */
let currentSelectedLevel = 'all';
let currentSelectedCategory = 'all';

function applyFilters(level, category) {
    if (level !== undefined) currentSelectedLevel = level;
    if (category !== undefined) currentSelectedCategory = category;

    let filtered = [...masterList];

    // Filter by Category
    if (currentSelectedCategory !== 'all') {
        filtered = filtered.filter(item => item.category === currentSelectedCategory);
    }

    // Filter by Level
    if (currentSelectedLevel !== 'all') {
        filtered = filtered.filter(item => item.level === currentSelectedLevel);
    }

    // Update the footer label
    const label = document.getElementById('level-label');
    if (label) label.innerText = currentSelectedLevel.toUpperCase();

    currentDeck = filtered;
    currentIndex = 0;
    updateCard();
}

function filterByCategory(catName, e) {
    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Highlight the button that was just clicked
    if (e && e.currentTarget) {
        e.currentTarget.classList.add('active');
    }

    applyFilters(currentSelectedLevel, catName);
}

function filterByLevel(lvlName) {
    applyFilters(lvlName, currentSelectedCategory);
}

// You can delete the scrollCategories function entirely now!

/**
 * 4. UI UPDATE
 */
function updateCard() {
    // 1. Check if deck is empty
    if (!currentDeck || currentDeck.length === 0) {
        document.getElementById('primary-word').innerText = "No Cards";
        return;
    }

    // 2. Define the card once
    const card = currentDeck[currentIndex];
    const mainLang = document.getElementById('main-language').value;
    const transLang = document.getElementById('translate-language').value;

    // 3. Update the level tag (centered at top)
    const levelTag = document.getElementById('card-level-tag');
    if (levelTag && card.level) {
        levelTag.innerText = card.level.toUpperCase();
        if (card.level === 'basic') levelTag.style.borderColor = '#88d498';
        else if (card.level === 'moderate') levelTag.style.borderColor = '#ffb347';
        else if (card.level === 'hard') levelTag.style.borderColor = '#ff6961';
    }

    // 4. Update words and translations
    document.getElementById('primary-word').textContent = card[mainLang] || card.en;
    const translationElement = document.getElementById('zh-word');
    if (translationElement) {
        translationElement.textContent = card[transLang] || "";
    }

    // 5. Image & Emoji Logic
    const imgElement = document.getElementById('card-img');
    const emojiDisplay = document.getElementById('emoji-display');
    const safeName = card.en.replace(/[^a-zA-Z0-9 _]/g, "").trim();
    
    imgElement.src = `images/${safeName}.png`;
    emojiDisplay.innerText = card.emoji || "❓";

    imgElement.onload = () => {
        imgElement.style.display = 'block';
        emojiDisplay.style.display = 'none';
    };
    imgElement.onerror = () => {
        imgElement.style.display = 'none';
        emojiDisplay.style.display = 'block';
    };

    // 6. Update Counter
    document.getElementById('current-count').innerText = currentIndex + 1;
    document.getElementById('total-count').innerText = currentDeck.length;

    // 7. Restart Animation for the "Bubbly" look
    const cardElement = document.querySelector('.card');
    if (cardElement) {
        cardElement.style.animation = 'none';
        cardElement.offsetHeight; // trigger reflow
        cardElement.style.animation = ''; 
    }
}

/**
 * 5. SOUND
 */
function playSound() {
    const card = currentDeck[currentIndex];
    const mainLang = document.getElementById('main-language').value; 
    
    // 1. Create a "safe" filename (removes spaces/special characters)
    const safeName = card.en.replace(/[^a-zA-Z0-9 _]/g, "").trim();
    
    // 2. Build the path
    const audioPath = `sounds/${mainLang}/${safeName}.mp3`;
    console.log("Attempting to play:", audioPath); // This helps you debug!

    const audio = new Audio(audioPath);
    
    audio.play().catch(err => {
        console.warn("MP3 not found at " + audioPath + ". Using browser voice.");
        
        // 3. Fallback to browser voice so your kids still hear the word
        const utterance = new SpeechSynthesisUtterance(card[mainLang]);
        // Set the correct voice for the language
        if (mainLang === 'zh') utterance.lang = 'zh-TW';
        else if (mainLang === 'idn') utterance.lang = 'id-ID';
        else utterance.lang = 'en-US';
        
        window.speechSynthesis.speak(utterance);
    });
}

/**
 * 6. CATEGORY SCROLLING
 */
function scrollCategories(direction) {
    const container = document.getElementById('cat-scroll-container');
    if (container) {
        // Scrolls 150 pixels left or right
        container.scrollBy({ left: direction * 150, behavior: 'smooth' });
    }
}
/**
 * 7. SWIPE GESTURES FOR MOBILE
 */
let startX = 0;
let currentX = 0;
const card = document.querySelector('.card');

card.addEventListener('touchstart', (e) => {
    // If the user taps a button or an icon, don't start the swipe logic
    if (e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.classList.contains('play-icon')) {
        return; 
    }

    startX = e.touches[0].clientX;
    card.style.transition = 'none';
});

card.addEventListener('touchmove', (e) => {
    currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    
    // Move the card and rotate it slightly for a "bouncy" feel
    card.style.transform = `translateX(${diff}px) rotate(${diff / 20}deg)`;
});

card.addEventListener('touchend', (e) => {
    const diff = currentX - startX;
    const threshold = 100; // Distance needed to flip the card

    card.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

    if (Math.abs(diff) > threshold) {
        // Successful swipe
        card.style.transform = `translateX(${diff > 0 ? 1000 : -1000}px)`;
        setTimeout(() => {
            changeCard(diff > 0 ? -1 : 1);
            card.style.transform = 'translateX(0) rotate(0)';
        }, 200);
    } else {
        // Snap back if swipe wasn't far enough
        card.style.transform = 'translateX(0) rotate(0)';
    }
    startX = 0;
    currentX = 0;
});

// Ensure initApp runs after everything is loaded

window.onload = initApp;

