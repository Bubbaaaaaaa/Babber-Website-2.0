const rizzLines = {
    romantic: [
        "Your smile could end wars fr.",
        "Every time you talk, my brain forgets how to function.",
        "You make life feel like a movie.",
        "Your laugh is my new addiction.",
        "You’re the reason the sun shows up.",
        "If loving you is wrong, I don’t wanna be right.",
        "You make my heart do parkour.",
        "You’re my favorite plot twist.",
        "I’d pause my game for you… that’s real love.",
        "You’re the human version of comfort.",
        "You shine harder than my GPU on max settings.",
        "Your eyes got more sparkle than enchanted armor.",
        "I don’t chase… except you. You’re worth sprinting.",
        "When you walked in, the whole vibe upgraded.",
        "You're the reason I smile at my phone like an idiot.",
        "You make me forget every bad day instantly.",
        "I don’t need flowers, I just need you.",
        "Your presence is my favorite place.",
        "I’d respawn next to you every time.",
        "You’re the softest W I’ve ever taken.",
        "Lowkey? You’re everything.",
        "You make chaos feel calm.",
        "If souls had DLC, you’d be the premium version.",
        "You and I? That’s main-character energy.",
        "I’d fold a fitted sheet for you… that’s commitment."
    ],
    nerd: [
        "Girl, are you WiFi? Because I’m feeling a strong connection.",
        "You must be JavaScript, because you add meaning to my functions.",
        "My love for you is like pi—never ending.",
        "Are you a rare drop? Because I’ve been grinding for you.",
        "Your smile hits harder than a crit.",
        "Are you a keyboard? Because you're my type.",
        "I'd give you all my hearts, even in hardcore mode.",
        "If beauty was an equation, you'd be the solution.",
        "Are you quantum physics? Because I can't explain you.",
        "I'd share my legendary loot with you.",
        "You're the reason my RAM stays full of thoughts.",
        "Are you an algorithm? You optimize my heart.",
        "You must be a glitch—because you break my logic.",
        "I'd travel infinite chunks just to see you.",
        "You compute my happiness to 100%.",
        "You're rarer than a shiny Pokémon.",
        "Are you redstone? You power me up.",
        "I'd code you into my life permanently.",
        "You had me at Hello World.",
        "You’re the update I never skip.",
        "Your aura has more XP than anything.",
        "I want you like gamers want 144 FPS.",
        "Are you a boss fight? You got my heart sweating.",
        "You must be a beacon—you boost everything around me.",
        "Your voice has legendary-tier sound quality."
    ],
    business: [
        "Let’s merge—our companies AND our lives.",
        "Your value skyrockets on my personal stock market.",
        "You’re the kind of asset I never wanna sell.",
        "If you were a contract, I’d sign instantly.",
        "We have natural synergy.",
        "I'd invest all my time into you.",
        "You raise my profits by existing.",
        "You're the deal I’d never renegotiate.",
        "We could build an empire together.",
        "You increase my productivity by 200%.",
        "Your presence is straight revenue.",
        "I'd put you on my vision board.",
        "You got CEO energy, I’m tryna be co-founder.",
        "If attraction was currency, you’d be a billionaire.",
        "Let’s form a lifetime partnership.",
        "You boost my morale better than any bonus.",
        "You’re worth more than all my assets combined.",
        "I'd promote you instantly.",
        "Our chemistry has insane ROI.",
        "I'd risk the whole company for you.",
        "Your smile is my best investment.",
        "You're the rarest limited-edition asset.",
        "I don’t need a business plan, I need you.",
        "You’re the only interest rate that matters.",
        "We could dominate the market—starting with my heart."
    ],
    funny: [
        "Are you a charger? Because I die without you.",
        "If you were a fruit, you'd be a fineapple.",
        "Are you a parking ticket? You got ‘FINE’ written all over.",
        "If we were in a movie, we'd be the bloopers.",
        "You got more drip than my sink.",
        "Are you Google? Because you got everything I'm searching for.",
        "You must be tired—you ran through my mind all day.",
        "Hold this. *hands over feelings*",
        "If being fine was a crime, you'd get life.",
        "Are you a balloon? You lift me up.",
        "I'd roast you but you're already hot.",
        "Love at first sight? Or walk by again?",
        "You're a snack—nah, the whole buffet.",
        "You’re a magician—you make people disappear.",
        "You're so cute it's disrespectful.",
        "Are you a mirror? I see us in the future.",
        "We'd be a thing… like WiFi and stability.",
        "Your smile is illegal in 32 countries.",
        "You're brighter than my LED setup.",
        "We'd be an OP duo.",
        "You look like trouble… my favorite.",
        "Are you bread? Cause I want a piece.",
        "I'd compliment you but you know you're perfect.",
        "You stole my heart—call the cops?",
        "We’d be a vibe together."
    ],
    gaming: [
        "You’re my final boss AND endgame romance.",
        "I'd drop all my loot for you.",
        "You respawned my faith in love.",
        "You’re the rarest drop I’ve seen.",
        "I'd cross lava for you.",
        "You shine harder than enchanted armor.",
        "Are you a shield? You protect my sanity.",
        "You're the W in my L moments.",
        "I'd lose all my hearts for you.",
        "I'd queue with you any day.",
        "Someone nerf you—you’re too OP.",
        "You crit-hit my heart.",
        "You give me more XP than mobs.",
        "I'd speedrun to you.",
        "I want you in my party forever.",
        "I'd drop my sword for you.",
        "Our matchmaking is perfect.",
        "You're my daily login reward.",
        "I'd grind for you forever.",
        "You’re the power-up I needed.",
        "I'd carry you IRL too.",
        "You must be enchanted—you got me glowing.",
        "You hit harder than a diamond axe crit.",
        "You're my favorite perk.",
        "You're a guaranteed W."
    ],
    sigma: [
        "I don’t chase. I attract. And you arrived perfectly.",
        "My silence speaks louder than most people.",
        "I walk alone… unless it’s with you.",
        "I don’t need attention—except yours.",
        "I stay calm but notice everything.",
        "I’m unbothered—but you bother me in a good way.",
        "I never break character… except for you.",
        "I don’t compete—I dominate quietly.",
        "I follow purpose. And maybe you.",
        "I stay lowkey, but I'd show up for you.",
        "I’m focused on my grind, you're a distraction.",
        "I'm the villain, but I'd treat you like royalty.",
        "I don’t flex—results flex for me.",
        "I don’t simp—I strategize.",
        "I own the room because I own my energy.",
        "Opening up is rare—feel special.",
        "My vibe is calm, heart loud.",
        "I’m not mysterious—I’m selective.",
        "I think alone but dream of you.",
        "I don’t fall… but you tripped me.",
        "You’re the only weakness I'd admit.",
        "I don’t wait—I observe.",
        "I don’t lose people—they lose me… except you.",
        "Stay close. My aura likes you.",
        "I walk like a king, but you? You’re the crown."
    ],
    sports: [
        "Are you a basketball? Because I can’t stop dribbling over you.",
        "You must be a goal—cause I’m aiming for you.",
        "You’re my MVP every season.",
        "I’d run laps just to see you.",
        "You hit harder than a home run.",
        "Our chemistry is undefeated.",
        "You got stamina? Cause I’m staying.",
        "You're the trophy I wanna win.",
        "You’re my championship ring.",
        "You’re a highlight reel moment.",
        "You’re quicker than a fast break.",
        "I’d cross the whole field for you.",
        "You hit different—no warmup needed.",
        "You’re my starting lineup.",
        "You’re the clutch shot of my life.",
        "We got team chemistry fr.",
        "I'd never bench you.",
        "You’re my favorite athlete.",
        "You make my heart sprint.",
        "You’re a perfect 10/10 score.",
        "You spike my energy instantly.",
        "With you, I’m undefeated.",
        "You got hall-of-fame vibes.",
        "You’re a walking highlight.",
        "We’d win every game together."
    ],
    darkHumor: [
        "You're dangerous… I like that.",
        "You scare me a little—keep going.",
        "I’d die for you. Literally. Let’s test it.",
        "You’re my favorite kind of problem.",
        "If looks could kill, I'd be gone already.",
        "I shouldn't like you—but here we are.",
        "You’re chaos in a pretty package.",
        "I'd haunt you if I died.",
        "You're a red flag… and I'm colorblind.",
        "I’d fall for you—off a building if needed.",
        "My heart stopped. Might be love. Might be cardiac arrest.",
        "You make danger look cute.",
        "You're toxic, but I'm immune.",
        "If you stab me, make it quick.",
        "You're so fine it should be illegal.",
        "I'd let you ruin my life respectfully.",
        "You're the reason I have trust issues… but I trust you.",
        "I fear nothing—except losing you.",
        "You look like trouble… take me with you.",
        "If loving you is wrong, arrest me.",
        "You're a villain… be mine.",
        "You give me heart attacks—in a good way.",
        "I’d survive anything… except seeing you with someone else.",
        "You're my favorite mistake.",
        "If love kills, bury me beautifully."
    ],
    slick: [
        "Your vibe smoother than fresh fade.",
        "You talk and my brain just melts.",
        "You walk like the world slows down for you.",
        "You got rhythm just by breathing.",
        "Your voice sounds like late-night radio.",
        "The way you look at me? Illegal.",
        "You move like you know you're fine.",
        "You’re too smooth for this planet.",
        "You could say anything and I'd agree.",
        "You make flirting look effortless.",
        "Your energy is silk.",
        "You got charisma on autoplay.",
        "You talk like honey drips off every word.",
        "One look from you and it’s wraps.",
        "You the definition of smooth operator.",
        "Your smile got motion blur.",
        "You got natural rizz patches installed.",
        "You glide, you don’t walk.",
        "Your aura got soft-glow filter IRL.",
        "Your presence feels like a slow jam.",
        "You got that silent confidence.",
        "People try. You achieve.",
        "You don’t flirt, you hypnotize.",
        "Your vibe is clean, your energy is premium.",
        "You don’t even try—you just win."
    ],
    meme: [
        "Are you Ohio? Because you’re built different.",
        "You got more rizz than NPCs in Ohio.",
        "I’m not a photographer but I can picture us very meme-able.",
        "Are you Sigma? Cause you got that grindset.",
        "You got that Skibidi aura.",
        "You’re a certified GOAT.",
        "You’re the W in my ratio.",
        "You’re my emotional support meme.",
        "You make my heart do the goofy ahh sound.",
        "No cap, you bussin.",
        "You hit harder than Vine in 2016.",
        "You’re a rare Pepe in a world of normies.",
        "I’m NPC-proof.",
        "You make me giggle like a minion.",
        "You built like a walking meme in the best way."
    ]
};

const dropdown = document.getElementById('rizzDropdown');
const selected = dropdown.querySelector('.selected');
const optionsContainer = dropdown.querySelector('.options');
const counters = {};
Object.keys(rizzLines).forEach(k => counters[k] = 0);
const outputEl = document.getElementById('outputText');
const emojiMap = {
    romantic: ["❤️","💖","💘","💕","💝"],
    nerd: ["🤓","🧠","📚","🖥️","🔬"],
    business: ["💼","📄","📈","📝","📊"],
    funny: ["😂","🤣","😹","🤪","🙃"],
    gaming: ["🎮","🕹️","🖱️","⌨️","🖥️"],
    sigma: ["🦾","🪖","💎","🕶️","🔗"],
    sports: ["⚽","🏀","🏈","🏐","🥎"],
    darkHumor: ["☠️","💀","🩸","🕷️","🪦"],
    slick: ["😎","🕶️","🪄","💨","🖤"],
    meme: ["🫡","🤣","👀","🤡","💀"],
    chooseTopic: ["❓","🧐","🤔","🫥"]
};
let currentTopic = 'chooseTopic';
let emojiInterval;

function spawnEmoji() {
    const emojis = emojiMap[currentTopic];
    if(!emojis) return;
    const emoji = document.createElement('div');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = 'fixed';
    emoji.style.fontSize = "48px";
    emoji.style.left = Math.random() * 90 + "vw";
    emoji.style.bottom = "-60px";
    emoji.style.opacity = 1;
    emoji.style.pointerEvents = "none";
    document.body.appendChild(emoji);
    let bottom = -60;
    const riseSpeed = 1.8 + Math.random() * 0.5;
    function rise() {
        bottom += riseSpeed;
        emoji.style.bottom = bottom + "px";
        if(bottom > window.innerHeight / 2) emoji.style.opacity -= 0.02;
        if(emoji.style.opacity <= 0) emoji.remove();
        else requestAnimationFrame(rise);
    }
    rise();
}

function startEmojiFlow(){
    clearInterval(emojiInterval);
    emojiInterval = setInterval(spawnEmoji, 350);
}

optionsContainer.querySelectorAll('div').forEach(option => {
    option.addEventListener('click', e => {
        e.stopPropagation();
        selected.textContent = option.textContent;
        selected.dataset.value = option.dataset.value;
        dropdown.classList.remove('active');
        currentTopic = option.dataset.value;
        startEmojiFlow();
        counters[currentTopic] = 0;
        outputEl.textContent = rizzLines[currentTopic][0];
        counters[currentTopic]++;
    });
});

dropdown.addEventListener('click', e => {
    e.stopPropagation();
    dropdown.classList.toggle('active');
});

document.addEventListener('click', () => {
    dropdown.classList.remove('active');
});

const button = document.getElementById('rizzButton');
button.addEventListener('click', () => {
    const cat = selected.dataset.value || 'romantic';
    const list = rizzLines[cat] || rizzLines['romantic'];
    const idx = counters[cat] % list.length;
    outputEl.textContent = list[idx];
    counters[cat] = (idx + 1) % list.length;
});

const blueContainer = document.getElementById('blueLines');
const lines = [];

for (let i = 0; i < 120; i++) {
    const line = document.createElement('div');
    line.className = 'line';
    line.style.top = (Math.random() * 100) + 'vh';
    line.style.left = (Math.random() * 100) + 'vw';
    line.style.setProperty('--rot', Math.random() * 70 - 35);
    line._speed = 0.15 + Math.random() * 0.45;
    blueContainer.appendChild(line);
    lines.push(line);
}

function animateLines() {
    lines.forEach(l => {
        let left = parseFloat(l.style.left);
        left += l._speed;
        if (left > 105) left = -10;
        l.style.left = left + 'vw';
    });
    requestAnimationFrame(animateLines);
}
animateLines();
startEmojiFlow();
