// ================================
// 🎮 STATE MANAGEMENT
// ================================
const state = {
    selectedAvatar: null,
    selectedPath: null,
    currentScreen: 'welcome'
};

// ================================
// 🎬 DOM ELEMENTS
// ================================
const screens = {
    welcome: document.getElementById('welcomeScreen'),
    avatar: document.getElementById('avatarScreen'),
    path: document.getElementById('pathScreen')
};

const startBtn = document.getElementById('startBtn');
const backToAvatarBtn = document.getElementById('backToAvatar');
const avatarCards = document.querySelectorAll('.avatar-card');
const pathCards = document.querySelectorAll('.path-card');
const successModal = document.getElementById('successModal');
const closeModalBtn = document.getElementById('closeModal');
const selectedAvatarDisplay = document.getElementById('selectedAvatarDisplay');

// ================================
// 🔄 SCREEN NAVIGATION
// ================================
function showScreen(screenName) {
    // Hide all screens
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });

    // Show target screen with animation
    setTimeout(() => {
        screens[screenName].classList.add('active');
        state.currentScreen = screenName;

        // Add entrance sound effect (optional)
        playTransitionSound();
    }, 300);
}

function playTransitionSound() {
    // Create a simple positive beep sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
}

// ================================
// 👥 AVATAR SELECTION
// ================================
function setupAvatarSelection() {
    avatarCards.forEach(card => {
        card.addEventListener('click', function () {
            // Remove previous selection
            avatarCards.forEach(c => c.classList.remove('selected'));

            // Add selection to clicked card
            this.classList.add('selected');

            // Store selected avatar
            state.selectedAvatar = this.dataset.avatar;

            // Add shake animation to card
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);

            // Play selection sound
            playSelectionSound();

            // Auto-advance to path selection after 1 second
            setTimeout(() => {
                showPathScreen();
            }, 1000);
        });

        // Add keyboard support
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

function playSelectionSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 1000;
    oscillator.type = 'square';

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.15);
}

function showPathScreen() {
    // Update the selected avatar display
    updateSelectedAvatarDisplay();
    showScreen('path');
}

function updateSelectedAvatarDisplay() {
    if (state.selectedAvatar) {
        const avatarImg = document.querySelector(`[data-avatar="${state.selectedAvatar}"] .avatar-image img`).cloneNode();
        selectedAvatarDisplay.innerHTML = '';
        selectedAvatarDisplay.appendChild(avatarImg);
    }
}

// ================================
// 🛤️ PATH SELECTION
// ================================
function setupPathSelection() {
    pathCards.forEach(card => {
        const startButton = card.querySelector('.btn-secondary');

        startButton.addEventListener('click', function (e) {
            e.stopPropagation();

            const pathType = card.dataset.path;
            state.selectedPath = pathType;

            // Show success modal
            showSuccessModal(pathType);

            // Play success sound
            playSuccessSound();
        });

        // Hover effects for path cards
        card.addEventListener('mouseenter', function () {
            const icon = this.querySelector('.path-icon');
            icon.style.animation = 'none';
            setTimeout(() => {
                icon.style.animation = '';
            }, 10);
        });
    });
}

function playSuccessSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Create a cheerful ascending tone
    const frequencies = [523.25, 659.25, 783.99]; // C, E, G

    frequencies.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = freq;
        oscillator.type = 'sine';

        const startTime = audioContext.currentTime + (index * 0.1);
        gainNode.gain.setValueAtTime(0.15, startTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);

        oscillator.start(startTime);
        oscillator.stop(startTime + 0.3);
    });
}

// ================================
// 🎊 SUCCESS MODAL
// ================================
function showSuccessModal(pathType) {
    const pathNames = {
        python: 'Python Coding',
        ai: 'AI & Machine Learning',
        web: 'Web Development',
        games: 'Game Development',
        robotics: 'Robotics',
        scratch: 'Scratch Programming'
    };

    const pathEmojis = {
        python: '🐍',
        ai: '🤖',
        web: '🌐',
        games: '🎮',
        robotics: '🤖',
        scratch: '🎨'
    };

    const message = `You've chosen ${pathNames[pathType]} ${pathEmojis[pathType]}! Get ready for an amazing coding adventure!`;
    document.getElementById('successMessage').textContent = message;

    successModal.classList.add('active');

    // Add confetti effect
    createConfetti();
}

function hideSuccessModal() {
    successModal.classList.remove('active');
}

// ================================
// 🎉 CONFETTI EFFECT
// ================================
function createConfetti() {
    const colors = ['#FF6B9D', '#4FC3F7', '#66BB6A', '#FFA726', '#AB47BC', '#26C6DA'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.style.opacity = '0.8';

            document.body.appendChild(confetti);

            const duration = 2000 + Math.random() * 2000;
            const rotation = Math.random() * 360;
            const xMovement = (Math.random() - 0.5) * 200;

            confetti.animate([
                {
                    transform: `translate(0, 0) rotate(0deg)`,
                    opacity: 0.8
                },
                {
                    transform: `translate(${xMovement}px, 100vh) rotate(${rotation}deg)`,
                    opacity: 0
                }
            ], {
                duration: duration,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });

            setTimeout(() => {
                confetti.remove();
            }, duration);
        }, i * 30);
    }
}

// ================================
// 🎨 PARTICLE EFFECTS
// ================================
function createParticleEffect(x, y) {
    const colors = ['#FF6B9D', '#4FC3F7', '#66BB6A', '#FFA726'];
    const particleCount = 12;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '6px';
        particle.style.height = '6px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';

        document.body.appendChild(particle);

        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 50 + Math.random() * 50;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        particle.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(${tx}px, ${ty}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 600,
            easing: 'cubic-bezier(0.4, 0.0, 0.6, 1)'
        });

        setTimeout(() => {
            particle.remove();
        }, 600);
    }
}

// Add particle effects on button clicks
function setupParticleEffects() {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            createParticleEffect(x, y);
        });
    });
}

// ================================
// 🎯 EVENT LISTENERS
// ================================
function setupEventListeners() {
    // Start button
    startBtn.addEventListener('click', () => {
        showScreen('avatar');
    });

    // Back to avatar button
    backToAvatarBtn.addEventListener('click', () => {
        showScreen('avatar');
    });

    // Close modal button
    closeModalBtn.addEventListener('click', () => {
        hideSuccessModal();
    });

    // Close modal on outside click
    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) {
            hideSuccessModal();
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Escape key closes modal
        if (e.key === 'Escape' && successModal.classList.contains('active')) {
            hideSuccessModal();
        }

        // Enter key on modal
        if (e.key === 'Enter' && successModal.classList.contains('active')) {
            hideSuccessModal();
        }
    });
}

// ================================
// 🌟 INTERACTIVE ELEMENTS
// ================================
function setupInteractiveElements() {
    // Add hover sound effects
    const interactiveElements = document.querySelectorAll('.avatar-card, .path-card, .btn');

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function () {
            // Subtle hover sound
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.value = 600;
            oscillator.type = 'sine';

            gainNode.gain.setValueAtTime(0.03, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        });
    });
}

// ================================
// 💾 LOCAL STORAGE
// ================================
function saveProgress() {
    localStorage.setItem('kidsAcademy', JSON.stringify(state));
}

function loadProgress() {
    const saved = localStorage.getItem('kidsAcademy');
    if (saved) {
        const savedState = JSON.parse(saved);
        Object.assign(state, savedState);
    }
}

// ================================
// ✨ PAGE LOAD ANIMATION
// ================================
window.addEventListener('load', () => {
    // Small delay to allow CSS to load
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ================================
// 🚀 INITIALIZATION
// ================================
function init() {
    console.log('🌟 Choose Your Path Academy - Initializing...');

    // Load saved progress
    loadProgress();

    // Setup all event listeners
    setupEventListeners();
    setupAvatarSelection();
    setupPathSelection();
    setupParticleEffects();
    setupInteractiveElements();

    // Show welcome screen
    showScreen('welcome');

    console.log('✅ Academy ready! Let\'s learn and have fun!');
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ================================
// 🎨 ADDITIONAL FEATURES
// ================================

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Prevent accidental page refresh
window.addEventListener('beforeunload', (e) => {
    saveProgress();
});

// Add visibility change handler
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        saveProgress();
    }
});

// Console Easter Egg
console.log(
    '%c💻 Choose Your Path Academy - Code & AI! 🤖',
    'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; padding: 10px;'
);
console.log(
    '%cWhere every kid becomes a coding superhero! 🌟',
    'font-size: 16px; color: #FF6B9D; font-weight: bold;'
);
console.log(
    '%cKeep coding and building amazing things! 🚀',
    'font-size: 14px; color: #4FC3F7;'
);
