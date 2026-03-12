// ============ 游戏数据定义 ============

const CHARACTERS = {
  leidi: {
    name: '乐迪',
    desc: '超级飞侠',
    img: 'icons/leidi.png'
  },
  diga: {
    name: '迪迦',
    desc: '奥特曼',
    img: 'icons/dijia.png'
  }
};

const TASKS = [
  { id: 'brush', name: '刷牙', icon: '🪥', points: 5 },
  { id: 'tidy', name: '收拾玩具', icon: '🧸', points: 5 },
  { id: 'eat', name: '自己吃饭', icon: '🍚', points: 10 },
  { id: 'chore', name: '帮忙做家务', icon: '🧹', points: 15 },
  { id: 'sleep', name: '早睡早起', icon: '🌙', points: 10 },
  { id: 'study', name: '看书学习', icon: '📖', points: 10 },
  { id: 'exercise', name: '运动锻炼', icon: '⚽', points: 10 },
  { id: 'polite', name: '礼貌待人', icon: '👋', points: 5 }
];

const SHOP_ITEMS = {
  furniture: {
    label: '家具', icon: '🛋️',
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
    label: '墙饰', icon: '🖼️',
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
    label: '地板墙纸', icon: '🎨',
    items: [
      { id: 'fl_star', name: '星空', icon: '⭐', price: 35, bg: 'linear-gradient(135deg, #0c0c3e, #1a1a5e)' },
      { id: 'fl_rainbow', name: '彩虹', icon: '🌈', price: 40, bg: 'linear-gradient(135deg, #ff9a9e, #fad0c4, #a1c4fd)' },
      { id: 'fl_grass', name: '草地', icon: '🌿', price: 30, bg: 'linear-gradient(135deg, #56ab2f, #a8e063)' },
      { id: 'fl_ocean', name: '海洋', icon: '🌊', price: 40, bg: 'linear-gradient(135deg, #006994, #00b4d8)' },
      { id: 'fl_cloud', name: '云朵天空', icon: '☁️', price: 35, bg: 'linear-gradient(135deg, #89CFF0, #B9E0FF)' },
      { id: 'fl_sunset', name: '晚霞', icon: '🌅', price: 40, bg: 'linear-gradient(135deg, #f12711, #f5af19)' },
      { id: 'fl_candy', name: '糖果屋', icon: '🍬', price: 35, bg: 'linear-gradient(135deg, #ff9ff3, #feca57, #48dbfb)' },
      { id: 'fl_space', name: '太空', icon: '🪐', price: 50, bg: 'linear-gradient(135deg, #0a0a2e, #1e003e, #0a0a2e)' }
    ]
  },
  special: {
    label: '特殊装饰', icon: '✨',
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
  loadData() {
    const saved = localStorage.getItem('babyTaskGame_v2');
    if (saved) {
      this.data = JSON.parse(saved);
    } else {
      // 尝试迁移旧数据的积分
      let oldPoints = 0;
      const oldSaved = localStorage.getItem('babyTaskGame');
      if (oldSaved) {
        try { oldPoints = JSON.parse(oldSaved).points || 0; } catch(e) {}
      }
      this.data = {
        currentCharacter: 'leidi',
        points: oldPoints,
        houses: {
          leidi: { items: [], floor: null },
          diga: { items: [], floor: null }
        },
        battle: {
          currentMonster: null,
          lastFreeAttackDate: null,
          trophies: []
        },
        taskHistory: [],
        parentPin: null
      };
      this.saveData();
    }
    // 数据兼容性修复
    if (!this.data.battle) {
      this.data.battle = { currentMonster: null, lastFreeAttackDate: null, trophies: [] };
    }
    if (!this.data.battle.trophies) this.data.battle.trophies = [];
    if (!this.data.houses) {
      this.data.houses = { leidi: { items: [], floor: null }, diga: { items: [], floor: null } };
    }
    // 确保有怪兽
    if (!this.data.battle.currentMonster) {
      this.spawnMonster();
    }
  },

  saveData() {
    localStorage.setItem('babyTaskGame_v2', JSON.stringify(this.data));
  },

  // ---- 页面导航 ----
  goToPage(page) {
    if (page === 'task') {
      this.requirePin(() => {
        this.showPage('task');
        this.renderTasks();
      });
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

  // ---- 积分显示 ----
  updateAllPoints() {
    const pts = this.data.points;
    ['home-points', 'task-points', 'shop-points', 'house-points', 'battle-points'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = pts;
    });
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
      pd.classList.remove('bounce');
      void pd.offsetWidth;
      pd.classList.add('bounce');
    });
  },

  // ---- 角色系统 ----
  renderCharacterImg(containerId, large) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const charData = CHARACTERS[this.data.currentCharacter];
    const cls = large ? 'character large' : 'character';
    container.innerHTML = `<div class="${cls}"><img class="char-img" src="${charData.img}" alt="${charData.name}"></div>`;
  },

  switchCharacter() {
    const chars = Object.keys(CHARACTERS);
    const idx = chars.indexOf(this.data.currentCharacter);
    this.data.currentCharacter = chars[(idx + 1) % chars.length];
    this.saveData();
    this.renderHome();
  },

  // ---- 首页 ----
  renderHome() {
    this.renderCharacterImg('home-character-stage', false);
    const char = CHARACTERS[this.data.currentCharacter];
    document.getElementById('home-character-name').textContent = char.name + ' · ' + char.desc;
  },

  // ---- 密码系统 ----
  requirePin(callback) {
    if (!this.data.parentPin) {
      document.getElementById('pin-title').textContent = '请设置家长密码（4位数字）';
      this.pinCallback = (pin) => {
        this.data.parentPin = pin;
        this.saveData();
        callback();
      };
    } else {
      document.getElementById('pin-title').textContent = '请输入家长密码';
      this.pinCallback = (pin) => {
        if (pin === this.data.parentPin) {
          callback();
        } else {
          const display = document.getElementById('pin-display');
          display.classList.add('pin-error');
          setTimeout(() => {
            display.classList.remove('pin-error');
            this.pinBuffer = '';
            this.updatePinDots();
          }, 400);
          return false;
        }
      };
    }
    this.pinBuffer = '';
    this.updatePinDots();
    document.getElementById('pin-modal').classList.add('show');
  },

  pinInput(num) {
    if (this.pinBuffer.length >= 4) return;
    this.pinBuffer += num;
    this.updatePinDots();
    if (this.pinBuffer.length === 4) {
      setTimeout(() => {
        const result = this.pinCallback(this.pinBuffer);
        if (result !== false) this.closePin();
      }, 200);
    }
  },

  pinDelete() {
    this.pinBuffer = this.pinBuffer.slice(0, -1);
    this.updatePinDots();
  },

  updatePinDots() {
    const dots = document.querySelectorAll('#pin-display .pin-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('filled', i < this.pinBuffer.length);
    });
  },

  closePin() {
    document.getElementById('pin-modal').classList.remove('show');
    this.pinBuffer = '';
    this.pinCallback = null;
  },

  // ---- 任务系统 ----
  renderTasks() {
    const today = new Date().toISOString().slice(0, 10);
    const todayTasks = this.data.taskHistory.filter(t => t.date === today);

    document.getElementById('task-list').innerHTML = TASKS.map(task => `
      <div class="task-item">
        <div class="task-icon">${task.icon}</div>
        <div class="task-info">
          <div class="task-name">${task.name}</div>
          <div class="task-reward">&#9733; +${task.points} 积分</div>
        </div>
        <button class="task-done-btn" onclick="app.completeTask('${task.id}', event)">&#10003;</button>
      </div>
    `).join('');

    const todayList = document.getElementById('today-list');
    if (todayTasks.length === 0) {
      todayList.innerHTML = '<div class="today-empty">今天还没有完成任务哦~</div>';
    } else {
      todayList.innerHTML = todayTasks.map(t => `
        <div class="today-item">
          <span class="check">&#10003;</span>
          <span>${t.task}</span>
          <span style="margin-left:auto;color:#B8860B">+${t.points}</span>
        </div>
      `).join('');
    }
  },

  completeTask(taskId, event) {
    const task = TASKS.find(t => t.id === taskId);
    if (!task) return;
    this.data.points += task.points;
    this.data.taskHistory.push({
      task: task.name, points: task.points,
      date: new Date().toISOString().slice(0, 10),
      time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
    });
    this.saveData();
    this.updateAllPoints();
    const rect = event.target.getBoundingClientRect();
    this.animatePoints(task.points, rect.left, rect.top);
    this.celebrate();
    this.renderTasks();
  },

  // ---- 小屋系统 ----
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

    document.getElementById('house-title').textContent = char.name + '的小屋';

    // 房间背景
    const room = document.getElementById('house-room');
    const floorItem = house.floor ? this.findItem(house.floor) : null;
    if (floorItem && floorItem.bg) {
      room.style.background = floorItem.bg;
    } else {
      room.style.background = '';
    }

    // 角色
    const heroDiv = document.getElementById('house-character');
    heroDiv.innerHTML = `<img class="char-img" src="${char.img}" alt="${char.name}" style="width:80px;height:100px;object-fit:contain">`;

    // 装饰物品
    const itemsDiv = document.getElementById('house-items');
    const ownedItems = house.items.map(id => this.findItem(id)).filter(Boolean);
    if (ownedItems.length === 0) {
      itemsDiv.innerHTML = '<div class="house-empty">小屋还空空的，去商店买些装饰吧~</div>';
    } else {
      itemsDiv.innerHTML = ownedItems.map(item =>
        `<div class="house-item-placed">${item.icon}<div class="house-item-label">${item.name}</div></div>`
      ).join('');
    }
  },

  // ---- 商店系统 ----
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
    const ownedIds = [...house.items, house.floor].filter(Boolean);

    grid.innerHTML = items.map(item => {
      const owned = ownedIds.includes(item.id);
      return `
        <div class="shop-item ${owned ? 'owned' : ''}" onclick="app.tryBuy('${item.id}')">
          <div class="shop-item-icon">${item.icon}</div>
          <div class="shop-item-name">${item.name}</div>
          <div class="shop-item-price">${owned ? '已拥有' : '&#9733; ' + item.price}</div>
        </div>
      `;
    }).join('');
  },

  switchShopTab(category) {
    this.shopCategory = category;
    this.renderShop();
  },

  findItem(itemId) {
    for (const cat of Object.values(SHOP_ITEMS)) {
      const found = cat.items.find(i => i.id === itemId);
      if (found) return found;
    }
    return null;
  },

  findItemCategory(itemId) {
    for (const [key, cat] of Object.entries(SHOP_ITEMS)) {
      if (cat.items.find(i => i.id === itemId)) return key;
    }
    return null;
  },

  tryBuy(itemId) {
    const charId = this.data.currentCharacter;
    const house = this.data.houses[charId];
    const allOwned = [...house.items, house.floor].filter(Boolean);
    if (allOwned.includes(itemId)) return;

    const item = this.findItem(itemId);
    if (!item) return;

    this.pendingBuyItem = item;
    document.getElementById('buy-preview').textContent = item.icon;
    document.getElementById('buy-name').textContent = item.name;
    document.getElementById('buy-price-num').textContent = item.price;
    document.getElementById('buy-modal').classList.add('show');
  },

  closeBuy() {
    document.getElementById('buy-modal').classList.remove('show');
    this.pendingBuyItem = null;
  },

  confirmBuy() {
    const item = this.pendingBuyItem;
    if (!item) return;

    if (this.data.points < item.price) {
      document.getElementById('buy-name').textContent = '积分不够哦~';
      document.getElementById('buy-name').style.color = '#FF6B6B';
      setTimeout(() => {
        document.getElementById('buy-name').style.color = '';
        this.closeBuy();
      }, 1000);
      return;
    }

    this.data.points -= item.price;
    const charId = this.data.currentCharacter;
    const house = this.data.houses[charId];
    const category = this.findItemCategory(item.id);

    if (category === 'floor') {
      house.floor = item.id;
    } else {
      house.items.push(item.id);
    }

    this.saveData();
    this.updateAllPoints();
    this.closeBuy();
    this.celebrate();
    this.renderShop();
  },

  // ---- 打怪兽系统 ----
  getToday() {
    return new Date().toISOString().slice(0, 10);
  },

  spawnMonster() {
    const defeated = this.data.battle.trophies.map(t => t.id);
    let available = MONSTERS.filter(m => !defeated.includes(m.id));
    if (available.length === 0) available = MONSTERS; // 全打完了重新来
    const m = available[Math.floor(Math.random() * available.length)];
    this.data.battle.currentMonster = { ...m, hp: m.maxHp };
    this.saveData();
  },

  canFreeAttack() {
    return this.data.battle.lastFreeAttackDate !== this.getToday();
  },

  renderBattle() {
    const monster = this.data.battle.currentMonster;
    if (!monster) { this.spawnMonster(); return this.renderBattle(); }

    document.getElementById('monster-name').textContent = monster.name;
    document.getElementById('monster-icon').textContent = monster.icon;
    const pct = Math.max(0, (monster.hp / monster.maxHp) * 100);
    document.getElementById('monster-hp-bar').style.width = pct + '%';
    document.getElementById('monster-hp-text').textContent = `HP: ${monster.hp} / ${monster.maxHp}`;

    // 英雄
    const char = CHARACTERS[this.data.currentCharacter];
    document.getElementById('battle-hero').innerHTML =
      `<img class="char-img" src="${char.img}" alt="${char.name}" style="width:80px;height:100px;object-fit:contain">`;

    // 攻击按钮
    const canFree = this.canFreeAttack();
    document.getElementById('battle-actions').innerHTML = `
      <button class="atk-btn atk-normal ${canFree ? '' : 'disabled'}" onclick="app.attack('normal')">
        <span class="atk-icon">&#128074;</span>
        <span class="atk-label">普通攻击</span>
        <span class="atk-cost">${canFree ? '免费(每日1次)' : '今日已用'}</span>
        <span class="atk-dmg">伤害 1</span>
      </button>
      <button class="atk-btn atk-strong" onclick="app.attack('strong')">
        <span class="atk-icon">&#9889;</span>
        <span class="atk-label">强力攻击</span>
        <span class="atk-cost">&#9733; 10 积分</span>
        <span class="atk-dmg">伤害 3</span>
      </button>
      <button class="atk-btn atk-ultimate" onclick="app.attack('ultimate')">
        <span class="atk-icon">&#128165;</span>
        <span class="atk-label">必杀技</span>
        <span class="atk-cost">&#9733; 25 积分</span>
        <span class="atk-dmg">伤害 8</span>
      </button>
    `;

    // 战利品墙
    this.renderTrophies();
  },

  attack(type) {
    if (this.battleAnimating) return;
    const monster = this.data.battle.currentMonster;
    if (!monster || monster.hp <= 0) return;

    let damage = 0;
    let cost = 0;

    if (type === 'normal') {
      if (!this.canFreeAttack()) return;
      damage = 1;
      this.data.battle.lastFreeAttackDate = this.getToday();
    } else if (type === 'strong') {
      cost = 10;
      damage = 3;
    } else if (type === 'ultimate') {
      cost = 25;
      damage = 8;
    }

    if (cost > 0 && this.data.points < cost) {
      this.showBattleLog('积分不够哦~', '#FF6B6B');
      return;
    }

    if (cost > 0) {
      this.data.points -= cost;
    }

    monster.hp = Math.max(0, monster.hp - damage);
    this.saveData();
    this.updateAllPoints();

    // 动画
    this.battleAnimating = true;
    const monsterEl = document.getElementById('battle-monster');
    const heroEl = document.getElementById('battle-hero');

    heroEl.classList.add('hero-attack');
    setTimeout(() => {
      heroEl.classList.remove('hero-attack');
      monsterEl.classList.add(type === 'ultimate' ? 'monster-hit-big' : 'monster-hit');

      // 显示伤害数字
      this.showDamageNumber(damage, monsterEl);

      setTimeout(() => {
        monsterEl.classList.remove('monster-hit', 'monster-hit-big');
        this.battleAnimating = false;

        // 更新HP
        const pct = Math.max(0, (monster.hp / monster.maxHp) * 100);
        document.getElementById('monster-hp-bar').style.width = pct + '%';
        document.getElementById('monster-hp-text').textContent = `HP: ${monster.hp} / ${monster.maxHp}`;

        // 更新按钮状态
        this.renderBattle();

        // 检查是否击败
        if (monster.hp <= 0) {
          this.monsterDefeated();
        }
      }, 400);
    }, 300);

    if (cost > 0) {
      this.animatePoints(-cost, window.innerWidth / 2, 60, true);
    }
    const labels = { normal: '普通攻击', strong: '强力攻击', ultimate: '必杀技' };
    this.showBattleLog(`${labels[type]}！造成 ${damage} 点伤害！`, type === 'ultimate' ? '#e84393' : '#0984e3');
  },

  showDamageNumber(damage, target) {
    const el = document.createElement('div');
    el.className = 'damage-number';
    el.textContent = '-' + damage;
    target.appendChild(el);
    setTimeout(() => el.remove(), 800);
  },

  showBattleLog(msg, color) {
    const log = document.getElementById('battle-log');
    log.innerHTML = `<div class="battle-log-msg" style="color:${color || '#333'}">${msg}</div>`;
  },

  monsterDefeated() {
    const monster = this.data.battle.currentMonster;
    this.data.battle.trophies.push({
      id: monster.id,
      name: monster.name,
      icon: monster.icon,
      defeatedDate: this.getToday()
    });
    this.data.battle.currentMonster = null;
    this.saveData();
    this.celebrate();

    // 显示胜利弹窗
    document.getElementById('victory-text').textContent =
      `你打败了 ${monster.name}！战利品已加入战利品墙！`;
    document.getElementById('victory-modal').classList.add('show');
  },

  closeVictory() {
    document.getElementById('victory-modal').classList.remove('show');
    this.spawnMonster();
    this.renderBattle();
  },

  renderTrophies() {
    const wall = document.getElementById('trophy-wall');
    const trophies = this.data.battle.trophies;
    if (trophies.length === 0) {
      wall.innerHTML = '<div class="trophy-empty">还没有战利品，去打败怪兽吧！</div>';
    } else {
      wall.innerHTML = trophies.map(t => `
        <div class="trophy-item">
          <div class="trophy-icon">${t.icon}</div>
          <div class="trophy-name">${t.name}</div>
          <div class="trophy-date">${t.defeatedDate}</div>
        </div>
      `).join('');
    }
  },

  // ---- 庆祝效果 ----
  celebrate() {
    const container = document.getElementById('celebration');
    const colors = ['#FF6B6B', '#FFE066', '#55efc4', '#74b9ff', '#fd79a8', '#a29bfe'];
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.top = '-10px';
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 0.5 + 's';
      confetti.style.animationDuration = (1 + Math.random()) + 's';
      confetti.style.width = (6 + Math.random() * 8) + 'px';
      confetti.style.height = (6 + Math.random() * 8) + 'px';
      container.appendChild(confetti);
    }
    setTimeout(() => { container.innerHTML = ''; }, 2000);
  }
};

// ---- 启动 ----
document.addEventListener('DOMContentLoaded', () => app.init());
