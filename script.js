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
    
    // Check if the 🐢 Slow Mode checkbox is ticked
    const isSlow = document.getElementById('slow-mode').checked;
    
    const safeName = card.en.replace(/[^a-zA-Z0-9 _]/g, "").trim(); 
    const audioPath = `sounds/${mainLang}/${safeName}.mp3`;

    const audio = new Audio(audioPath);
    
    // Adjust speed for the MP3 file if slow mode is on
    if (isSlow) {
        audio.playbackRate = 0.6; 
    }

    audio.play().catch(err => {
        console.warn("MP3 not found. Using browser voice.");
        const utterance = new SpeechSynthesisUtterance(card[mainLang]);
        
        // Adjust speed for the browser voice if slow mode is on
        utterance.rate = isSlow ? 0.6 : 1.0; 

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

// Prevent blue highlighting/selection on the card content
card.style.userSelect = 'none';
card.style.webkitUserSelect = 'none';

card.addEventListener('touchstart', (e) => {
    // Check for buttons or anything that shouldn't start a swipe
    if (
        e.target.tagName === 'BUTTON' || 
        e.target.closest('button') || 
        e.target.classList.contains('nav-btn-bottom') // Added check for new buttons
    ) {
        startX = 0;
        return; 
    }

    startX = e.touches[0].clientX;
    currentX = startX;
    card.style.transition = 'none';
});

card.addEventListener('touchmove', (e) => {
    if (startX === 0) return; // Stay still if touching content

    currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    card.style.transform = `translateX(${diff}px) rotate(${diff / 20}deg)`;
});

card.addEventListener('touchend', (e) => {
    if (startX === 0) return;

    const diff = currentX - startX;
    const threshold = 150; // Higher threshold for toddlers

    card.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

    if (Math.abs(diff) > threshold) {
        card.style.transform = `translateX(${diff > 0 ? 1000 : -1000}px)`;
        setTimeout(() => {
            changeCard(diff > 0 ? -1 : 1);
            card.style.transform = 'translateX(0) rotate(0)';
        }, 200);
    } else {
        card.style.transform = 'translateX(0) rotate(0)';
    }
    startX = 0;
    currentX = 0;
});

// Ensure initApp runs after everything is loaded

window.onload = initApp;




