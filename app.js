// ============ 游戏数据定义 ============

const CHARACTERS = {
  leidi: { name: '乐迪', desc: '超级飞侠', img: 'icons/leidi.png' },
  diga: { name: '迪迦', desc: '奥特曼', img: 'icons/dijia.png' }
};

const TASKS = [
  { id: 'brush', name: '刷牙', icon: '🪥', points: 5 },
  { id: 'tidy', name: '收拾玩具', icon: '🧸', points: 5 },
  { id: 'eat', name: '自己吃饭', icon: '🍚', points: 10 },
  { id: 'veggie', name: '吃青菜', icon: '🥦', points: 5 },
  { id: 'chore', name: '帮忙做家务', icon: '🧹', points: 15 },
  { id: 'early_sleep', name: '早睡', icon: '🌙', points: 10 },
  { id: 'early_rise', name: '早起', icon: '🌅', points: 10 },
  { id: 'study', name: '看书学习', icon: '📖', points: 10 },
  { id: 'english', name: '学英语', icon: '🔤', points: 5 },
  { id: 'exercise', name: '运动锻炼', icon: '⚽', points: 10 },
  { id: 'obey', name: '听话', icon: '👍', points: 5 },
  { id: 'hit', name: '打人', icon: '🚫', points: -5 }
];

const SHOP_ITEMS = {
  furniture: {
    label: '家具', icon: '🛋️', zone: 'floor',
    items: [
      { id: 'f_sofa', name: '小沙发', icon: '🛋️', price: 20 },
      { id: 'f_table', name: '小桌子', icon: '🪑', price: 15 },
      { id: 'f_bed', name: '小床', icon: '🛏️', price: 25 },
      { id: 'f_shelf', name: '书架', icon: '📚', price: 20 },
      { id: 'f_tv', name: '电视', icon: '📺', price: 30 },
      { id: 'f_lamp', name: '台灯', icon: '💡', price: 15 },
      { id: 'f_bath', name: '浴缸', icon: '🛁', price: 30 },
      { id: 'f_piano', name: '钢琴', icon: '🎹', price: 35 },
      { id: 'f_computer', name: '电脑', icon: '💻', price: 25 },
      { id: 'f_fridge', name: '冰箱', icon: '🧊', price: 20 }
    ]
  },
  wallDecor: {
    label: '墙饰', icon: '🖼️', zone: 'wall',
    items: [
      { id: 'w_paint', name: '挂画', icon: '🖼️', price: 10 },
      { id: 'w_clock', name: '时钟', icon: '🕐', price: 15 },
      { id: 'w_photo', name: '照片墙', icon: '📷', price: 15 },
      { id: 'w_cert', name: '奖状', icon: '📜', price: 20 },
      { id: 'w_mirror', name: '镜子', icon: '🪞', price: 15 },
      { id: 'w_flag', name: '小旗帜', icon: '🚩', price: 10 },
      { id: 'w_map', name: '世界地图', icon: '🗺️', price: 20 },
      { id: 'w_note', name: '音符墙', icon: '🎵', price: 15 },
      { id: 'w_heart', name: '爱心墙', icon: '❤️', price: 10 },
      { id: 'w_star', name: '星星灯', icon: '🌟', price: 20 }
    ]
  },
  floor: {
    label: '地板墙纸', icon: '🎨', zone: 'bg',
    items: [
      { id: 'fl_star', name: '星空', icon: '⭐', price: 35, wallBg: '#1a1a3e', floorBg: '#0c0c2e' },
      { id: 'fl_rainbow', name: '彩虹', icon: '🌈', price: 40, wallBg: '#ffe0ec', floorBg: '#ffd0d0' },
      { id: 'fl_grass', name: '草地', icon: '🌿', price: 30, wallBg: '#c8e6c9', floorBg: '#4CAF50' },
      { id: 'fl_ocean', name: '海洋', icon: '🌊', price: 40, wallBg: '#b3e5fc', floorBg: '#0288d1' },
      { id: 'fl_cloud', name: '云朵天空', icon: '☁️', price: 35, wallBg: '#e3f2fd', floorBg: '#bbdefb' },
      { id: 'fl_sunset', name: '晚霞', icon: '🌅', price: 40, wallBg: '#ff8a65', floorBg: '#d84315' },
      { id: 'fl_candy', name: '糖果屋', icon: '🍬', price: 35, wallBg: '#f8bbd0', floorBg: '#f48fb1' },
      { id: 'fl_space', name: '太空', icon: '🪐', price: 50, wallBg: '#1a0033', floorBg: '#0d001a' }
    ]
  },
  special: {
    label: '特殊装饰', icon: '✨', zone: 'special',
    items: [
      { id: 's_tree', name: '圣诞树', icon: '🎄', price: 50 },
      { id: 's_balloon', name: '气球', icon: '🎈', price: 40 },
      { id: 's_lights', name: '彩灯', icon: '🎆', price: 45 },
      { id: 's_fountain', name: '喷泉', icon: '⛲', price: 60 },
      { id: 's_flower', name: '花园', icon: '🌸', price: 40 },
      { id: 's_rocket', name: '火箭', icon: '🚀', price: 55 },
      { id: 's_rainbow', name: '彩虹桥', icon: '🌈', price: 50 },
      { id: 's_trophy', name: '奖杯', icon: '🏆', price: 45 },
      { id: 's_castle', name: '小城堡', icon: '🏰', price: 60 },
      { id: 's_ferris', name: '摩天轮', icon: '🎡', price: 55 }
    ]
  },
  pet: {
    label: '宠物', icon: '🐾', zone: 'pet',
    items: [
      { id: 'p_dog', name: '小狗', icon: '🐕', price: 60, gif: 'gifs/dog.gif' },
      { id: 'p_cat', name: '小猫', icon: '🐈', price: 60, gif: 'gifs/cat.gif' },
      { id: 'p_rabbit', name: '兔子', icon: '🐰', price: 50, gif: 'gifs/rabbit.gif' },
      { id: 'p_hamster', name: '仓鼠', icon: '🐹', price: 45, gif: 'gifs/hamster.gif' },
      { id: 'p_bird', name: '小鸟', icon: '🐦', price: 50, gif: 'gifs/bird.gif' },
      { id: 'p_fish', name: '金鱼', icon: '🐟', price: 40, gif: 'gifs/gold_fish.gif' },
      { id: 'p_panda', name: '熊猫', icon: '🐼', price: 70, gif: 'gifs/panada.gif' },
      { id: 'p_dragon', name: '小恐龙', icon: '🦖', price: 80, gif: 'gifs/Tyrannosaurus_rex.gif' },
      { id: 'p_unicorn', name: '独角兽', icon: '🦄', price: 80, gif: 'gifs/unicorn.gif' }
    ]
  }
};

const MONSTERS = [
  { id: 'm1', name: '小怪兽', icon: '👾', maxHp: 10 },
  { id: 'm2', name: '火焰怪', icon: '🔥', maxHp: 10 },
  { id: 'm3', name: '冰霜怪', icon: '🥶', maxHp: 10 },
  { id: 'm4', name: '暗影怪', icon: '👿', maxHp: 10 },
  { id: 'm5', name: '雷电怪', icon: '⚡', maxHp: 10 },
  { id: 'm6', name: '巨石怪', icon: '🗿', maxHp: 10 },
  { id: 'm7', name: '毒蘑菇', icon: '🍄', maxHp: 10 },
  { id: 'm8', name: '幽灵怪', icon: '👻', maxHp: 10 }
];

// ============ 应用主类 ============

const app = {
  data: null,
  currentPage: 'home',
  pinBuffer: '',
  pinCallback: null,
  pendingBuyItem: null,
  shopCategory: 'furniture',
  battleAnimating: false,

  // ---- 初始化 ----
  init() {
    this.loadData();
    this.renderHome();
    this.updateAllPoints();
  },

  // ---- 数据管理 ----
  getDefaultHouse() {
    return { items: [], floor: null, pets: [] };
  },

  loadData() {
    const saved = localStorage.getItem('babyTaskGame_v3');
    if (saved) {
      this.data = JSON.parse(saved);
    } else {
      // 迁移旧数据积分
      let oldPoints = 0;
      for (const key of ['babyTaskGame_v2', 'babyTaskGame']) {
        const old = localStorage.getItem(key);
        if (old) { try { oldPoints = JSON.parse(old).points || 0; } catch(e) {} break; }
      }
      this.data = {
        currentCharacter: 'leidi',
        points: oldPoints,
        houses: {
          leidi: this.getDefaultHouse(),
          diga: this.getDefaultHouse()
        },
        battle: {
          currentMonster: null,
          lastFreeAttackDate: null,
          lastPetAttackDates: {},
          trophies: []
        },
        taskHistory: [],
        parentPin: null
      };
      this.saveData();
    }
    // 兼容性
    if (!this.data.battle) this.data.battle = { currentMonster: null, lastFreeAttackDate: null, lastPetAttackDates: {}, trophies: [] };
    if (!this.data.battle.trophies) this.data.battle.trophies = [];
    if (!this.data.battle.lastPetAttackDates) this.data.battle.lastPetAttackDates = {};
    if (!this.data.houses) this.data.houses = { leidi: this.getDefaultHouse(), diga: this.getDefaultHouse() };
    for (const k of Object.keys(CHARACTERS)) {
      if (!this.data.houses[k]) this.data.houses[k] = this.getDefaultHouse();
      if (!this.data.houses[k].pets) this.data.houses[k].pets = [];
    }
    if (!this.data.battle.currentMonster) this.spawnMonster();
  },

  saveData() {
    localStorage.setItem('babyTaskGame_v3', JSON.stringify(this.data));
  },

  // ---- 页面导航 ----
  goToPage(page) {
    if (page === 'task') {
      this.requirePin(() => { this.showPage('task'); this.renderTasks(); });
      return;
    }
    this.showPage(page);
    if (page === 'home') this.renderHome();
    if (page === 'house') this.renderHouse();
    if (page === 'shop') this.renderShop();
    if (page === 'battle') this.renderBattle();
  },

  showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    this.currentPage = page;
    this.updateAllPoints();
  },

  // ---- 积分 ----
  updateAllPoints() {
    const pts = this.data.points;
    document.querySelectorAll('.pts-val').forEach(el => { el.textContent = pts; });
  },

  animatePoints(amount, x, y, negative) {
    const el = document.createElement('div');
    el.className = 'float-points';
    el.textContent = (negative ? '' : '+') + amount;
    if (negative) el.style.color = '#FF6B6B';
    el.style.left = (x || window.innerWidth / 2 - 30) + 'px';
    el.style.top = (y || window.innerHeight / 2) + 'px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
    document.querySelectorAll('.points-display').forEach(pd => {
      pd.classList.remove('bounce'); void pd.offsetWidth; pd.classList.add('bounce');
    });
  },

  // ---- 角色 ----
  switchCharacter() {
    const chars = Object.keys(CHARACTERS);
    const idx = chars.indexOf(this.data.currentCharacter);
    this.data.currentCharacter = chars[(idx + 1) % chars.length];
    this.saveData();
    this.renderHome();
  },

  renderHome() {
    const char = CHARACTERS[this.data.currentCharacter];
    document.getElementById('home-character-stage').innerHTML =
      `<div class="character"><img class="char-img" src="${char.img}" alt="${char.name}"></div>`;
    document.getElementById('home-character-name').textContent = char.name + ' · ' + char.desc;
  },

  // ---- 密码 ----
  requirePin(callback) {
    if (!this.data.parentPin) {
      document.getElementById('pin-title').textContent = '请设置家长密码（4位数字）';
      this.pinCallback = (pin) => { this.data.parentPin = pin; this.saveData(); callback(); };
    } else {
      document.getElementById('pin-title').textContent = '请输入家长密码';
      this.pinCallback = (pin) => {
        if (pin === this.data.parentPin) { callback(); }
        else {
          const d = document.getElementById('pin-display');
          d.classList.add('pin-error');
          setTimeout(() => { d.classList.remove('pin-error'); this.pinBuffer = ''; this.updatePinDots(); }, 400);
          return false;
        }
      };
    }
    this.pinBuffer = '';
    this.updatePinDots();
    document.getElementById('pin-modal').classList.add('show');
  },
  pinInput(n) {
    if (this.pinBuffer.length >= 4) return;
    this.pinBuffer += n;
    this.updatePinDots();
    if (this.pinBuffer.length === 4) {
      setTimeout(() => { if (this.pinCallback(this.pinBuffer) !== false) this.closePin(); }, 200);
    }
  },
  pinDelete() { this.pinBuffer = this.pinBuffer.slice(0, -1); this.updatePinDots(); },
  updatePinDots() {
    document.querySelectorAll('#pin-display .pin-dot').forEach((d, i) => {
      d.classList.toggle('filled', i < this.pinBuffer.length);
    });
  },
  closePin() { document.getElementById('pin-modal').classList.remove('show'); this.pinBuffer = ''; this.pinCallback = null; },

  // ---- 任务 ----
  renderTasks() {
    const today = new Date().toISOString().slice(0, 10);
    const todayDone = this.data.taskHistory.filter(t => t.date === today);
    document.getElementById('task-list').innerHTML = TASKS.map(task => {
      const isPenalty = task.points < 0;
      return `<div class="task-item ${isPenalty ? 'task-penalty' : ''}">
        <div class="task-icon">${task.icon}</div>
        <div class="task-info"><div class="task-name">${task.name}</div><div class="task-reward ${isPenalty ? 'penalty' : ''}">${isPenalty ? '' : '&#9733; +'}${task.points} 积分</div></div>
        <button class="task-done-btn ${isPenalty ? 'task-penalty-btn' : ''}" onclick="app.completeTask('${task.id}',event)">${isPenalty ? '&#10007;' : '&#10003;'}</button>
      </div>`;
    }).join('');
    const tl = document.getElementById('today-list');
    tl.innerHTML = todayDone.length === 0 ? '<div class="today-empty">今天还没有完成任务哦~</div>'
      : todayDone.map(t => `<div class="today-item"><span class="check">&#10003;</span><span>${t.task}</span><span style="margin-left:auto;color:#B8860B">+${t.points}</span></div>`).join('');
  },
  completeTask(id, e) {
    const task = TASKS.find(t => t.id === id);
    if (!task) return;
    if (task.points < 0) {
      // 扣分：不低于0
      if (this.data.points <= 0) { this.showToast('积分已经是0了'); return; }
      const actual = Math.max(task.points, -this.data.points);
      this.data.points += actual;
      this.data.taskHistory.push({ task: task.name, points: actual, date: new Date().toISOString().slice(0, 10) });
      this.saveData(); this.updateAllPoints();
      this.animatePoints(actual, e.target.getBoundingClientRect().left, e.target.getBoundingClientRect().top, true);
      this.renderTasks();
    } else {
      this.data.points += task.points;
      this.data.taskHistory.push({ task: task.name, points: task.points, date: new Date().toISOString().slice(0, 10) });
      this.saveData(); this.updateAllPoints();
      this.animatePoints(task.points, e.target.getBoundingClientRect().left, e.target.getBoundingClientRect().top);
      this.celebrate(); this.renderTasks();
    }
  },

  // ---- 小屋 ----
  switchHouseCharacter() {
    const chars = Object.keys(CHARACTERS);
    const idx = chars.indexOf(this.data.currentCharacter);
    this.data.currentCharacter = chars[(idx + 1) % chars.length];
    this.saveData();
    this.renderHouse();
  },

  renderHouse() {
    const charId = this.data.currentCharacter;
    const char = CHARACTERS[charId];
    const house = this.data.houses[charId];
    const trophies = this.data.battle.trophies;

    document.getElementById('house-title').textContent = char.name + '的小屋';

    // 地板墙纸
    const floorItem = house.floor ? this.findItem(house.floor) : null;
    const wallEl = document.getElementById('room-wall');
    const floorEl = document.getElementById('room-floor');
    wallEl.style.background = floorItem ? floorItem.wallBg : '';
    floorEl.style.background = floorItem ? floorItem.floorBg : '';

    // 墙上装饰（左侧）
    const wallItems = house.items.filter(id => {
      const cat = this.findItemCategory(id);
      return cat === 'wallDecor';
    }).map(id => this.findItem(id)).filter(Boolean);
    document.getElementById('room-wall-decor').innerHTML = wallItems.map(i =>
      `<span class="room-deco-item">${i.icon}</span>`
    ).join('');

    // 战利品墙（右侧）
    document.getElementById('room-trophies').innerHTML = trophies.length === 0 ? '' :
      trophies.slice(-6).map(t => `<span class="room-trophy-item" title="${t.name} ${t.defeatedDate}">${t.icon}</span>`).join('');

    // 角色（中间）
    document.getElementById('room-character').innerHTML =
      `<img src="${char.img}" alt="${char.name}" style="width:90px;height:110px;object-fit:contain;filter:drop-shadow(0 3px 6px rgba(0,0,0,0.2))">`;

    // 宠物（角色两侧，有GIF的可点击）
    const pets = (house.pets || []).map(id => this.findItem(id)).filter(Boolean);
    document.getElementById('room-pet-left').innerHTML = pets[0]
      ? `<span class="room-pet ${pets[0].gif ? 'clickable' : ''}" ${pets[0].gif ? `onclick="app.showGif('${pets[0].gif}', '${pets[0].name}', 3000)"` : ''}>${pets[0].icon}</span>` : '';
    document.getElementById('room-pet-right').innerHTML = pets[1]
      ? `<span class="room-pet ${pets[1].gif ? 'clickable' : ''}" ${pets[1].gif ? `onclick="app.showGif('${pets[1].gif}', '${pets[1].name}', 3000)"` : ''}>${pets[1].icon}</span>` : '';

    // 地板家具
    const furnitureItems = house.items.filter(id => {
      const cat = this.findItemCategory(id);
      return cat === 'furniture';
    }).map(id => this.findItem(id)).filter(Boolean);
    document.getElementById('room-furniture').innerHTML = furnitureItems.map(i =>
      `<span class="room-furniture-item">${i.icon}</span>`
    ).join('');

    // 特殊装饰（角落）
    const specialItems = house.items.filter(id => {
      const cat = this.findItemCategory(id);
      return cat === 'special';
    }).map(id => this.findItem(id)).filter(Boolean);
    document.getElementById('room-special').innerHTML = specialItems.map(i =>
      `<span class="room-special-item">${i.icon}</span>`
    ).join('');
  },

  // ---- 商店 ----
  renderShop() {
    const tabs = document.getElementById('shop-tabs');
    tabs.innerHTML = Object.entries(SHOP_ITEMS).map(([key, cat]) => `
      <button class="shop-tab ${key === this.shopCategory ? 'active' : ''}"
              onclick="app.switchShopTab('${key}')">${cat.icon} ${cat.label}</button>
    `).join('');

    const grid = document.getElementById('shop-grid');
    const items = SHOP_ITEMS[this.shopCategory].items;
    const charId = this.data.currentCharacter;
    const house = this.data.houses[charId];
    const ownedIds = [...house.items, house.floor, ...(house.pets || [])].filter(Boolean);
    const char = CHARACTERS[charId];

    // 商店提示
    let notice = '';
    if (this.shopCategory === 'pet') {
      const petCount = (house.pets || []).length;
      notice = `<div class="shop-notice">${char.name}已有 ${petCount} 只宠物</div>`;
    }
    if (this.shopCategory === 'floor') {
      notice = `<div class="shop-notice">购买后立即应用到${char.name}的小屋</div>`;
    }

    grid.innerHTML = notice + items.map(item => {
      const owned = ownedIds.includes(item.id);
      return `<div class="shop-item ${owned ? 'owned' : ''}" onclick="app.tryBuy('${item.id}')">
        <div class="shop-item-icon">${item.icon}</div>
        <div class="shop-item-name">${item.name}</div>
        <div class="shop-item-price">${owned ? '已拥有' : '&#9733; ' + item.price}</div>
      </div>`;
    }).join('');
  },

  switchShopTab(cat) { this.shopCategory = cat; this.renderShop(); },

  findItem(id) {
    for (const cat of Object.values(SHOP_ITEMS)) {
      const f = cat.items.find(i => i.id === id);
      if (f) return f;
    }
    return null;
  },

  findItemCategory(id) {
    for (const [key, cat] of Object.entries(SHOP_ITEMS)) {
      if (cat.items.find(i => i.id === id)) return key;
    }
    return null;
  },

  tryBuy(itemId) {
    const charId = this.data.currentCharacter;
    const house = this.data.houses[charId];
    const allOwned = [...house.items, house.floor, ...(house.pets || [])].filter(Boolean);
    if (allOwned.includes(itemId)) return;

    const item = this.findItem(itemId);
    if (!item) return;

    const cat = this.findItemCategory(itemId);

    this.pendingBuyItem = item;
    document.getElementById('buy-preview').textContent = item.icon;
    document.getElementById('buy-name').textContent = item.name;
    document.getElementById('buy-price-num').textContent = item.price;
    document.getElementById('buy-modal').classList.add('show');
  },

  closeBuy() { document.getElementById('buy-modal').classList.remove('show'); this.pendingBuyItem = null; },

  confirmBuy() {
    const item = this.pendingBuyItem;
    if (!item) return;
    if (this.data.points < item.price) {
      document.getElementById('buy-name').textContent = '积分不够哦~';
      document.getElementById('buy-name').style.color = '#FF6B6B';
      setTimeout(() => { document.getElementById('buy-name').style.color = ''; this.closeBuy(); }, 1000);
      return;
    }
    this.data.points -= item.price;
    const charId = this.data.currentCharacter;
    const house = this.data.houses[charId];
    const cat = this.findItemCategory(item.id);

    if (cat === 'floor') {
      house.floor = item.id;
    } else if (cat === 'pet') {
      house.pets.push(item.id);
    } else {
      house.items.push(item.id);
    }

    this.saveData(); this.updateAllPoints(); this.closeBuy(); this.celebrate(); this.renderShop();

    // 如果购买的是有GIF的宠物，播放GIF动画
    if (cat === 'pet' && item.gif) {
      this.showGif(item.gif, `🎉 ${item.name}来啦！`, 3000);
    }
  },

  showToast(msg) {
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2000);
  },

  // ---- 打怪兽 ----
  getToday() { return new Date().toISOString().slice(0, 10); },

  spawnMonster() {
    const defeated = this.data.battle.trophies.map(t => t.id);
    let avail = MONSTERS.filter(m => !defeated.includes(m.id));
    if (avail.length === 0) avail = [...MONSTERS];
    const m = avail[Math.floor(Math.random() * avail.length)];
    this.data.battle.currentMonster = { ...m, hp: m.maxHp };
    this.saveData();
  },

  canFreeAttack() { return this.data.battle.lastFreeAttackDate !== this.getToday(); },

  canPetAttack(petId) {
    return this.data.battle.lastPetAttackDates[petId] !== this.getToday();
  },

  getCurrentPets() {
    const charId = this.data.currentCharacter;
    const house = this.data.houses[charId];
    return (house.pets || []).map(id => this.findItem(id)).filter(Boolean);
  },

  renderBattle() {
    const monster = this.data.battle.currentMonster;
    if (!monster) { this.spawnMonster(); return this.renderBattle(); }

    document.getElementById('monster-name').textContent = monster.name;
    document.getElementById('monster-icon').textContent = monster.icon;
    const pct = Math.max(0, (monster.hp / monster.maxHp) * 100);
    document.getElementById('monster-hp-bar').style.width = pct + '%';
    document.getElementById('monster-hp-text').textContent = `HP: ${monster.hp} / ${monster.maxHp}`;

    const char = CHARACTERS[this.data.currentCharacter];
    document.getElementById('battle-hero').innerHTML =
      `<img class="char-img" src="${char.img}" alt="${char.name}" style="width:80px;height:100px;object-fit:contain">`;

    const canFree = this.canFreeAttack();
    let actionsHTML = `
      <button class="atk-btn atk-normal ${canFree ? '' : 'disabled'}" onclick="app.attack('normal')">
        <span class="atk-icon">👊</span><span class="atk-label">普通攻击</span>
        <span class="atk-cost">${canFree ? '免费(每日1次)' : '今日已用'}</span><span class="atk-dmg">伤害 1</span>
      </button>
      <button class="atk-btn atk-strong" onclick="app.attack('strong')">
        <span class="atk-icon">⚡</span><span class="atk-label">强力攻击</span>
        <span class="atk-cost">&#9733; 10 积分</span><span class="atk-dmg">伤害 3</span>
      </button>
      <button class="atk-btn atk-ultimate" onclick="app.attack('ultimate')">
        <span class="atk-icon">💥</span><span class="atk-label">必杀技</span>
        <span class="atk-cost">&#9733; 25 积分</span><span class="atk-dmg">伤害 8</span>
      </button>`;
    document.getElementById('battle-actions').innerHTML = actionsHTML;

    // 宠物攻击按钮
    const pets = this.getCurrentPets();
    const petArea = document.getElementById('pet-actions');
    if (pets.length === 0) {
      petArea.innerHTML = '<div class="pet-hint">养宠物后，宠物也能帮你打怪兽哦！</div>';
    } else {
      petArea.innerHTML = '<div class="pet-actions-title">🐾 宠物助攻</div>' + pets.map(pet => {
        const canAtk = this.canPetAttack(pet.id);
        return `<button class="pet-atk-btn ${canAtk ? '' : 'disabled'}" onclick="app.petAttack('${pet.id}')">
          <span class="pet-atk-icon">${pet.icon}</span>
          <span class="pet-atk-info">${pet.name}${canAtk ? ' 攻击！' : ' (今日已攻击)'}</span>
          <span class="pet-atk-dmg">伤害 2</span>
        </button>`;
      }).join('');
    }
  },

  attack(type) {
    if (this.battleAnimating) return;
    const monster = this.data.battle.currentMonster;
    if (!monster || monster.hp <= 0) return;
    let damage = 0, cost = 0;
    if (type === 'normal') { if (!this.canFreeAttack()) return; damage = 1; this.data.battle.lastFreeAttackDate = this.getToday(); }
    else if (type === 'strong') { cost = 10; damage = 3; }
    else if (type === 'ultimate') { cost = 25; damage = 8; }
    if (cost > 0 && this.data.points < cost) { this.showBattleLog('积分不够哦~', '#FF6B6B'); return; }
    if (cost > 0) this.data.points -= cost;
    this.doAttackAnim(damage, type === 'ultimate', cost);
    const labels = { normal: '普通攻击', strong: '强力攻击', ultimate: '必杀技' };
    this.showBattleLog(`${labels[type]}！造成 ${damage} 点伤害！`, type === 'ultimate' ? '#e84393' : '#0984e3');
  },

  petAttack(petId) {
    if (this.battleAnimating) return;
    if (!this.canPetAttack(petId)) return;
    const monster = this.data.battle.currentMonster;
    if (!monster || monster.hp <= 0) return;
    const pet = this.findItem(petId);
    if (!pet) return;
    this.data.battle.lastPetAttackDates[petId] = this.getToday();
    // 如果宠物有GIF，先播放GIF再攻击
    if (pet.gif) {
      this.showBattleGif(pet.gif, 2000);
    }
    this.doAttackAnim(2, false, 0);
    this.showBattleLog(`${pet.icon} ${pet.name} 发动攻击！造成 2 点伤害！`, '#00b894');
  },

  doAttackAnim(damage, big, cost) {
    const monster = this.data.battle.currentMonster;
    monster.hp = Math.max(0, monster.hp - damage);
    this.saveData(); this.updateAllPoints();
    this.battleAnimating = true;
    const mEl = document.getElementById('battle-monster');
    const hEl = document.getElementById('battle-hero');
    hEl.classList.add('hero-attack');
    if (cost > 0) this.animatePoints(-cost, window.innerWidth / 2, 60, true);
    setTimeout(() => {
      hEl.classList.remove('hero-attack');
      mEl.classList.add(big ? 'monster-hit-big' : 'monster-hit');
      this.showDamageNumber(damage, mEl);
      setTimeout(() => {
        mEl.classList.remove('monster-hit', 'monster-hit-big');
        this.battleAnimating = false;
        this.renderBattle();
        if (monster.hp <= 0) this.monsterDefeated();
      }, 400);
    }, 300);
  },

  showDamageNumber(dmg, target) {
    const el = document.createElement('div');
    el.className = 'damage-number';
    el.textContent = '-' + dmg;
    target.appendChild(el);
    setTimeout(() => el.remove(), 800);
  },

  showBattleLog(msg, color) {
    document.getElementById('battle-log').innerHTML = `<div class="battle-log-msg" style="color:${color||'#333'}">${msg}</div>`;
  },

  monsterDefeated() {
    const m = this.data.battle.currentMonster;
    this.data.battle.trophies.push({ id: m.id, name: m.name, icon: m.icon, defeatedDate: this.getToday() });
    this.data.battle.currentMonster = null;
    this.saveData(); this.celebrate();
    document.getElementById('victory-text').textContent = `你打败了 ${m.name}！战利品已加入小屋墙上！`;
    document.getElementById('victory-modal').classList.add('show');
  },

  closeVictory() {
    document.getElementById('victory-modal').classList.remove('show');
    this.spawnMonster(); this.renderBattle();
  },

  // ---- GIF动画 ----
  showGif(gifUrl, text, duration) {
    const modal = document.getElementById('gif-modal');
    const img = document.getElementById('gif-image');
    const txt = document.getElementById('gif-text');
    // 先清空再设置src，强制重新加载GIF（不用时间戳参数，兼容微信）
    img.removeAttribute('src');
    void img.offsetHeight;
    img.src = gifUrl;
    txt.textContent = text || '';
    modal.classList.add('show');
    if (duration) {
      setTimeout(() => this.closeGif(), duration);
    }
  },

  closeGif() {
    const modal = document.getElementById('gif-modal');
    modal.classList.remove('show');
    document.getElementById('gif-image').removeAttribute('src');
  },

  // 在战斗区域内播放GIF覆盖动画
  showBattleGif(gifUrl, duration) {
    const battleArea = document.getElementById('battle-monster');
    const overlay = document.createElement('div');
    overlay.className = 'battle-gif-overlay';
    overlay.innerHTML = `<img src="${gifUrl}" alt="攻击动画" style="max-width:100%;max-height:100%;">`;
    battleArea.appendChild(overlay);
    setTimeout(() => overlay.remove(), duration || 2000);
  },

  // ---- 庆祝 ----
  celebrate() {
    const c = document.getElementById('celebration');
    const colors = ['#FF6B6B', '#FFE066', '#55efc4', '#74b9ff', '#fd79a8', '#a29bfe'];
    for (let i = 0; i < 30; i++) {
      const d = document.createElement('div');
      d.className = 'confetti';
      d.style.left = Math.random() * 100 + '%';
      d.style.top = '-10px';
      d.style.background = colors[Math.floor(Math.random() * colors.length)];
      d.style.animationDelay = Math.random() * 0.5 + 's';
      d.style.animationDuration = (1 + Math.random()) + 's';
      d.style.width = (6 + Math.random() * 8) + 'px';
      d.style.height = (6 + Math.random() * 8) + 'px';
      c.appendChild(d);
    }
    setTimeout(() => { c.innerHTML = ''; }, 2000);
  }
};

document.addEventListener('DOMContentLoaded', () => app.init());
