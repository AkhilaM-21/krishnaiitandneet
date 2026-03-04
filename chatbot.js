/* ============================================================
   Krishna Academy — Smart Chatbot Widget
   No API key needed. Knowledge-base powered responses.
============================================================ */
(function () {
    'use strict';

    /* ---------- KNOWLEDGE BASE ---------- */
    const KB = [
        {
            patterns: ['hello', 'hi', 'hey', 'namaste', 'good morning', 'good evening', 'good afternoon', 'hii', 'helo'],
            reply: "Namaste! 🙏 Welcome to **Krishna Academy**! I'm your academic assistant.\n\nI can help you with:\n• 📚 Course details (IIT-JEE / NEET)\n• 💰 Fees & batches\n• 📋 Admission process\n• 📍 Location & timings\n\nWhat would you like to know?"
        },
        {
            patterns: ['course', 'courses', 'programs', 'program', 'what do you teach', 'subjects', 'stream'],
            reply: "We offer **3 flagship programs**:\n\n🔵 **IIT-JEE (Main & Advanced)** — Physics, Chemistry, Maths\n🟢 **NEET (UG)** — Physics, Chemistry, Biology\n🟠 **Dropper Batch** — Intensive revision for repeaters\n\nEach program has 1-Year and 2-Year options with recorded lectures, DPPs, and mock tests.\n\nType **IIT-JEE** or **NEET** for specific details!"
        },
        {
            patterns: ['iit', 'iit-jee', 'jee', 'jee main', 'jee advanced', 'engineering', 'btech'],
            reply: "🔵 **IIT-JEE Program** at Krishna Academy:\n\n📖 Subjects: Physics, Chemistry, Mathematics\n📅 Duration: 1 Year / 2 Year batch\n✅ Covers JEE Main + Advanced + BITSAT\n✅ AI-powered mock test analysis\n✅ Advanced problem-solving sessions\n✅ IITian faculty\n\n🎯 **15+ years** of producing IIT toppers!\n\nWant to know about fees or admission?"
        },
        {
            patterns: ['neet', 'medical', 'mbbs', 'doctor', 'biology', 'aiims'],
            reply: "🟢 **NEET (UG) Program** at Krishna Academy:\n\n📖 Subjects: Physics, Chemistry, Biology\n📅 Duration: 1 Year / 2 Year batch\n✅ NCERT-centric approach\n✅ Biology mastery special sessions\n✅ Target batch for AIIMS aspirants\n✅ Regular mock assessments\n\n🏆 **5000+ NEET selections** till date!\n\nWant admission details or fee structure?"
        },
        {
            patterns: ['dropper', 'repeater', 'drop', 'gap year', 'second attempt'],
            reply: "🟠 **Dropper Batch** — Built for serious candidates!\n\n📖 Intensive revision of entire syllabus\n✅ Strategy-focused sessions\n✅ Doubt clearing every day\n✅ Time management coaching\n✅ Exam temperament building\n\n⚡ Many of our toppers cracked IIT/NEET in their **dropper year**!\n\nJoin a free counselling session to know more."
        },
        {
            patterns: ['fee', 'fees', 'price', 'cost', 'charges', 'how much', 'tuition', 'payment'],
            reply: "💰 **Fee Structure** (approximate):\n\n🔵 IIT-JEE (2 Year): ₹1,20,000 – ₹1,80,000\n🟢 NEET (2 Year): ₹1,10,000 – ₹1,70,000\n🟠 Dropper Batch: ₹80,000 – ₹1,20,000\n\n✅ EMI options available\n✅ Merit scholarships up to **80%**\n✅ Sibling discount available\n\nFor exact fee, book a **free counselling call** at 📞 +91 98765 43210"
        },
        {
            patterns: ['scholarship', 'discount', 'concession', 'merit', 'financial aid'],
            reply: "🎓 **Scholarship Programs** at Krishna Academy:\n\n🏅 **Merit Scholarship**: Up to **80% off** based on entrance test score\n👨‍👩‍👧 **Sibling Discount**: Special benefit for siblings enrolled together\n🌟 **Early Bird Discount**: Enroll early and save up to 15%\n💼 **Financial Aid**: Case-by-case basis for deserving students\n\nAppear in our FREE **Scholarship Test** to qualify!\n\nCall us at 📞 +91 98765 43210 to register."
        },
        {
            patterns: ['admission', 'admit', 'enroll', 'join', 'registration', 'register', 'apply', 'how to join'],
            reply: "📋 **Admission Process** — Simple 3 steps:\n\n1️⃣ **Counselling** — Free call with our academic advisor\n2️⃣ **Assessment Test** — Short aptitude + subject test\n3️⃣ **Enroll** — Fill form, pay fee, get batch allotted\n\n📞 Call: **+91 98765 43210**\n📧 Email: **info@krishnaacademy.com**\n🌐 Or drop your query on our Contact page\n\nShall I connect you to our Contact page?"
        },
        {
            patterns: ['contact', 'phone', 'number', 'call', 'email', 'reach', 'helpline', 'whatsapp'],
            reply: "📞 **Contact Krishna Academy**:\n\n📱 Helpline: **+91 98765 43210**\n📧 Email: **info@krishnaacademy.com**\n⏰ Hours: **Mon – Sat, 9 AM – 6 PM**\n📍 Address: 123 Education Hub, Sector 4, Tech City\n\nYou can also visit our [Contact Page](contact.html) for the enquiry form!"
        },
        {
            patterns: ['address', 'location', 'where', 'place', 'office', 'branch', 'centre', 'center'],
            reply: "📍 **Our Location:**\n\n123 Education Hub, Ground Floor,\nSector 4, Tech City,\nState — 400010, India\n\n⏰ Office Hours: Mon – Sat, 9 AM – 6 PM\n\n📞 +91 98765 43210\n\nWe'd love to welcome you for a **free campus visit** anytime during office hours!"
        },
        {
            patterns: ['timing', 'time', 'schedule', 'batch timing', 'class hours', 'session', 'when'],
            reply: "⏰ **Class Timings at Krishna Academy:**\n\n🌅 **Morning Batch**: 6:30 AM – 9:30 AM\n☀️ **Day Batch**: 10:00 AM – 1:00 PM\n🌆 **Evening Batch**: 3:30 PM – 6:30 PM\n\n📅 Classes: Monday to Saturday\n🏫 Sunday: Doubt sessions + Mock tests\n\nFor batch availability, call **+91 98765 43210**"
        },
        {
            patterns: ['faculty', 'teacher', 'professor', 'mentor', 'staff', 'tutor', 'expert'],
            reply: "👨‍🏫 **World-Class Faculty:**\n\n🔬 **Prof. R. Kumar** — IIT Bombay alumnus, 15+ yrs (Physics)\n🧪 **Dr. S. Mehta** — AIIMS graduate, 12+ yrs (Biology)\n📐 **Prof. A. Gupta** — IIT Delhi alumnus, 10+ yrs (Maths)\n💊 **Dr. P. Singh** — MBBS, 11+ yrs (Chemistry)\n\nAll teachers are **IIT/AIIMS alumni** with proven track records. Each student gets **1-on-1 mentorship** sessions!"
        },
        {
            patterns: ['result', 'results', 'success', 'selection', 'toppers', 'rank', 'achievement', 'records', 'review'],
            reply: "🏆 **Krishna Academy's Track Record:**\n\n📊 **5000+** IIT-JEE & NEET Selections\n🥇 **Top 100 AIR** — 14 students in last 3 years\n🏅 **95%** Success Rate overall\n📅 **15+ Years** of Excellence\n👨‍🎓 **100+** Expert faculty\n\nOur students have secured seats in **IIT Bombay, IIT Delhi, AIIMS Delhi** and more top institutions!"
        },
        {
            patterns: ['study material', 'material', 'notes', 'books', 'dpp', 'practice paper'],
            reply: "📚 **Study Resources at Krishna Academy:**\n\n📖 **Proprietary Booklets** — Concept + Practice\n📝 **Daily Practice Problems (DPPs)** — Topic-wise\n🎥 **Recorded Lectures** — 24/7 access on portal\n📊 **AI Test Analytics** — Performance tracking\n📱 **Digital Portal** — e-notes, e-DPPs, videos\n🧪 **Question Banks** — Chapter-wise + previous years\n\nAll included in your batch fee — **no hidden charges!**"
        },
        {
            patterns: ['online', 'offline', 'hybrid', 'mode', 'remote', 'distance'],
            reply: "🎓 **Learning Modes at Krishna Academy:**\n\n🏫 **Offline (Classroom)**: At our campus, best for focus\n💻 **Online**: Live + recorded lectures on our portal\n🔄 **Hybrid**: Attend physically + watch recordings any time\n\nAll modes include:\n✅ Live doubt sessions\n✅ Recorded backup for missed classes\n✅ Online mock test platform\n\nHybrid is our most popular option!"
        },
        {
            patterns: ['thank', 'thanks', 'thankyou', 'ty', 'great', 'awesome', 'nice', 'good', 'helpful', 'ok', 'okay'],
            reply: "You're welcome! 😊\n\nIs there anything else I can help you with about **Krishna Academy**?\n\n📞 For personalised guidance, call: **+91 98765 43210**\n📧 Email: **info@krishnaacademy.com**\n\n*Wishing you great success in your journey!* 🌟"
        },
        {
            patterns: ['bye', 'goodbye', 'see you', 'cya', 'take care', 'later'],
            reply: "Goodbye! 👋 Best of luck with your preparation!\n\nRemember — **Krishna Academy** is always here to guide you towards your dream college. 🎓\n\nFeel free to chat anytime! 😊"
        }
    ];

    const DEFAULT_REPLY = "I'm not sure about that, but our team can help you better! 😊\n\n📞 Call us: **+91 98765 43210**\n📧 Email: **info@krishnaacademy.com**\n\nYou can also ask me about:\n• Courses • Fees • Admission • Faculty • Timings";

    /* ---------- MATCH FUNCTION ---------- */
    function getReply(input) {
        const lower = input.toLowerCase().trim();
        for (const item of KB) {
            if (item.patterns.some(p => lower.includes(p))) {
                return item.reply;
            }
        }
        return DEFAULT_REPLY;
    }

    /* ---------- FORMAT TEXT (bold markdown) ---------- */
    function formatText(text) {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" style="color:#A5B4FC;text-decoration:underline">$1</a>')
            .replace(/\n/g, '<br>');
    }

    /* ---------- BUILD UI ---------- */
    const html = `
  <div id="ka-chat-wrapper">
    <!-- Toggle Button -->
    <button id="ka-chat-toggle" aria-label="Open Chat">
      <span class="ka-toggle-icon-open"><i class="fa-solid fa-comments"></i></span>
      <span class="ka-toggle-icon-close" style="display:none"><i class="fa-solid fa-xmark"></i></span>
      <span class="ka-pulse-ring"></span>
    </button>

    <!-- Chat Window -->
    <div id="ka-chat-window" style="display:none">
      <!-- Header -->
      <div class="ka-chat-header">
        <div class="ka-chat-header-left">
          <div class="ka-chat-avatar"><i class="fa-solid fa-robot"></i></div>
          <div>
            <div class="ka-chat-name">Krishna AI</div>
            <div class="ka-chat-status"><span class="ka-status-dot"></span> Online</div>
          </div>
        </div>
        <button class="ka-chat-close" id="ka-chat-close-btn" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
      </div>

      <!-- Messages -->
      <div class="ka-chat-messages" id="ka-chat-messages"></div>

      <!-- Quick chips -->
      <div class="ka-quick-chips" id="ka-quick-chips">
        <button class="ka-chip" data-query="What courses do you offer?">📚 Courses</button>
        <button class="ka-chip" data-query="What are the fees?">💰 Fees</button>
        <button class="ka-chip" data-query="IIT-JEE details">🔵 IIT-JEE</button>
        <button class="ka-chip" data-query="NEET details">🟢 NEET</button>
        <button class="ka-chip" data-query="How to enroll?">📋 Admission</button>
        <button class="ka-chip" data-query="Contact info">📞 Contact</button>
      </div>

      <!-- Input -->
      <div class="ka-chat-input-row">
        <input type="text" id="ka-chat-input" class="ka-chat-input" placeholder="Ask me anything…" autocomplete="off" maxlength="200">
        <button id="ka-chat-send" class="ka-chat-send" aria-label="Send">
          <i class="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  </div>`;

    /* ---------- CSS ---------- */
    const css = `
  #ka-chat-wrapper{position:fixed;bottom:28px;right:28px;z-index:99999;font-family:'Inter',sans-serif}
  #ka-chat-toggle{position:relative;width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#6366F1,#A855F7);border:none;cursor:pointer;box-shadow:0 8px 30px rgba(99,102,241,.5);display:flex;align-items:center;justify-content:center;transition:all .35s cubic-bezier(.4,0,.2,1)}
  #ka-chat-toggle:hover{transform:scale(1.1);box-shadow:0 12px 40px rgba(99,102,241,.7)}
  #ka-chat-toggle i{font-size:1.35rem;color:#fff}
  .ka-pulse-ring{position:absolute;inset:-6px;border-radius:50%;border:2.5px solid rgba(99,102,241,.5);animation:ka-pulse 2.2s ease-in-out infinite}
  @keyframes ka-pulse{0%{transform:scale(1);opacity:1}100%{transform:scale(1.5);opacity:0}}
  #ka-chat-window{position:absolute;bottom:76px;right:0;width:360px;background:#fff;border-radius:20px;box-shadow:0 24px 70px rgba(0,0,0,.18);overflow:hidden;display:flex;flex-direction:column;animation:ka-slide-up .3s cubic-bezier(.4,0,.2,1)}
  @keyframes ka-slide-up{from{opacity:0;transform:translateY(20px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
  .ka-chat-header{background:linear-gradient(115deg,#1E1B4B,#4C1D95);padding:16px 18px;display:flex;align-items:center;justify-content:space-between}
  .ka-chat-header-left{display:flex;align-items:center;gap:11px}
  .ka-chat-avatar{width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;font-size:1.1rem;color:#fff;border:2px solid rgba(255,255,255,.25)}
  .ka-chat-name{font-family:'Outfit',sans-serif;font-weight:700;font-size:1rem;color:#fff}
  .ka-chat-status{display:flex;align-items:center;gap:5px;font-size:.73rem;color:rgba(255,255,255,.6);margin-top:2px}
  .ka-status-dot{width:7px;height:7px;border-radius:50%;background:#10B981;display:inline-block;animation:ka-blink-dot 2s ease-in-out infinite}
  @keyframes ka-blink-dot{0%,100%{opacity:1}50%{opacity:.4}}
  .ka-chat-close{background:rgba(255,255,255,.12);border:none;color:rgba(255,255,255,.7);width:32px;height:32px;border-radius:50%;cursor:pointer;font-size:.9rem;display:flex;align-items:center;justify-content:center;transition:.2s}
  .ka-chat-close:hover{background:rgba(255,255,255,.25);color:#fff}
  .ka-chat-messages{height:300px;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;background:#F8FAFC;scroll-behavior:smooth}
  .ka-chat-messages::-webkit-scrollbar{width:4px}
  .ka-chat-messages::-webkit-scrollbar-thumb{background:#D1D5DB;border-radius:4px}
  .ka-msg{max-width:82%;word-wrap:break-word;font-size:.88rem;line-height:1.6;animation:ka-msg-in .25s ease}
  @keyframes ka-msg-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
  .ka-msg-bot{align-self:flex-start;background:#fff;color:#0F172A;border-radius:4px 16px 16px 16px;padding:10px 14px;box-shadow:0 2px 8px rgba(0,0,0,.07);border:1px solid #E2E8F0}
  .ka-msg-user{align-self:flex-end;background:linear-gradient(135deg,#6366F1,#A855F7);color:#fff;border-radius:16px 4px 16px 16px;padding:10px 14px}
  .ka-typing{display:flex;align-items:center;gap:5px;padding:10px 14px;background:#fff;border-radius:4px 16px 16px 16px;box-shadow:0 2px 8px rgba(0,0,0,.07);border:1px solid #E2E8F0;align-self:flex-start}
  .ka-typing span{width:7px;height:7px;border-radius:50%;background:#A855F7;display:inline-block;animation:ka-dot 1.3s ease-in-out infinite}
  .ka-typing span:nth-child(2){animation-delay:.2s}
  .ka-typing span:nth-child(3){animation-delay:.4s}
  @keyframes ka-dot{0%,80%,100%{transform:scale(.8);opacity:.5}40%{transform:scale(1.1);opacity:1}}
  .ka-quick-chips{display:flex;flex-wrap:wrap;gap:7px;padding:10px 14px;background:#fff;border-top:1px solid #F1F5F9}
  .ka-chip{background:#F1F5F9;border:1.5px solid #E2E8F0;border-radius:50px;padding:5px 12px;font-size:.78rem;font-weight:600;color:#4B5563;cursor:pointer;transition:all .2s;white-space:nowrap}
  .ka-chip:hover{background:linear-gradient(135deg,#6366F1,#A855F7);color:#fff;border-color:transparent;transform:translateY(-2px)}
  .ka-chat-input-row{display:flex;align-items:center;gap:8px;padding:10px 14px;background:#fff;border-top:1px solid #F1F5F9}
  .ka-chat-input{flex:1;border:1.5px solid #E2E8F0;border-radius:50px;padding:9px 15px;font-size:.88rem;outline:none;font-family:inherit;color:#0F172A;background:#F8FAFC;transition:.25s}
  .ka-chat-input:focus{border-color:#6366F1;background:#fff;box-shadow:0 0 0 4px rgba(99,102,241,.1)}
  .ka-chat-send{width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,#6366F1,#A855F7);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .25s}
  .ka-chat-send:hover{transform:scale(1.1);box-shadow:0 4px 14px rgba(99,102,241,.5)}
  .ka-chat-send i{color:#fff;font-size:.88rem}
  @media(max-width:480px){#ka-chat-window{width:calc(100vw - 20px);right:-14px;bottom:72px}#ka-chat-wrapper{bottom:16px;right:16px}}`;

    /* ---------- INJECT ---------- */
    const styleEl = document.createElement('style');
    styleEl.textContent = css;
    document.head.appendChild(styleEl);

    const container = document.createElement('div');
    container.innerHTML = html;
    document.body.appendChild(container.firstElementChild);

    /* ---------- REFS ---------- */
    const toggle = document.getElementById('ka-chat-toggle');
    const window_ = document.getElementById('ka-chat-window');
    const closeBtn = document.getElementById('ka-chat-close-btn');
    const msgBox = document.getElementById('ka-chat-messages');
    const input_ = document.getElementById('ka-chat-input');
    const sendBtn = document.getElementById('ka-chat-send');
    const chips = document.querySelectorAll('.ka-chip');
    const openIcon = document.querySelector('.ka-toggle-icon-open');
    const closeIcon = document.querySelector('.ka-toggle-icon-close');

    let isOpen = false;

    /* ---------- HELPERS ---------- */
    function appendMsg(text, type) {
        const div = document.createElement('div');
        div.className = 'ka-msg ka-msg-' + type;
        div.innerHTML = type === 'bot' ? formatText(text) : text;
        msgBox.appendChild(div);
        msgBox.scrollTop = msgBox.scrollHeight;
        return div;
    }

    function showTyping() {
        const t = document.createElement('div');
        t.className = 'ka-typing'; t.id = 'ka-typing';
        t.innerHTML = '<span></span><span></span><span></span>';
        msgBox.appendChild(t);
        msgBox.scrollTop = msgBox.scrollHeight;
    }

    function hideTyping() {
        const t = document.getElementById('ka-typing');
        if (t) t.remove();
    }

    function sendMessage(text) {
        text = (text || input_.value).trim();
        if (!text) return;
        input_.value = '';
        appendMsg(text, 'user');
        document.getElementById('ka-quick-chips').style.display = 'none';
        showTyping();
        setTimeout(() => {
            hideTyping();
            appendMsg(getReply(text), 'bot');
        }, 700 + Math.random() * 500);
    }

    /* ---------- EVENTS ---------- */
    function openChat() {
        isOpen = true;
        window_.style.display = 'flex';
        openIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        if (!msgBox.children.length) {
            setTimeout(() => {
                appendMsg("Namaste! 🙏 I'm **Krishna AI**, your academic assistant!\n\nAsk me anything about our **IIT-JEE / NEET** programs, fees, admissions, or faculty. Let's get started! 🚀", 'bot');
            }, 200);
        }
        input_.focus();
    }

    function closeChat() {
        isOpen = false;
        window_.style.display = 'none';
        openIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }

    toggle.addEventListener('click', () => isOpen ? closeChat() : openChat());
    closeBtn.addEventListener('click', closeChat);
    sendBtn.addEventListener('click', () => sendMessage());
    input_.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(); });
    chips.forEach(c => c.addEventListener('click', () => sendMessage(c.dataset.query)));
})();
