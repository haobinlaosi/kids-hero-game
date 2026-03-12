// ============ 游戏数据定义 ============

const CHARACTERS = {
  leidi: {
    name: '乐迪',
    desc: '超级飞侠',
    img: 'icons/leidi.png',
    html: `<div class="character"><img class="char-img" src="icons/leidi.png" alt="乐迪"></div>`
  },
  diga: {
    name: '迪迦',
    desc: '奥特曼',
    img: 'icons/dijia.png',
    html: `<div class="character"><img class="char-img" src="icons/dijia.png" alt="迪迦"></div>`
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
  hat: {
    label: '帽子',
    icon: '🎩',
    items: [
      { id: 'hat_crown', name: '皇冠', icon: '👑', price: 15 },
      { id: 'hat_cap', name: '棒球帽', icon: '🧢', price: 10 },
      { id: 'hat_top', name: '礼帽', icon: '🎩', price: 20 },
      { id: 'hat_helmet', name: '头盔', icon: '⛑️', price: 25 },
      { id: 'hat_party', name: '派对帽', icon: '🥳', price: 15 },
      { id: 'hat_ribbon', name: '蝴蝶结', icon: '🎀', price: 10 }
    ]
  },
  cape: {
    label: '披风',
    icon: '🦸',
    items: [
      { id: 'cape_hero', name: '英雄披风', icon: '🦸', price: 30 },
      { id: 'cape_wing', name: '天使翅膀', icon: '🪽', price: 35 },
      { id: 'cape_rainbow', name: '彩虹披风', icon: '🌈', price: 40 },
      { id: 'cape_star', name: '星光斗篷', icon: '✨', price: 25 },
      { id: 'cape_fire', name: '烈焰披风', icon: '🔥', price: 35 }
    ]
  },
  weapon: {
    label: '武器',
    icon: '⚔️',
    items: [
      { id: 'wp_sword', name: '宝剑', icon: '⚔️', price: 20 },
      { id: 'wp_wand', name: '魔法棒', icon: '🪄', price: 25 },
      { id: 'wp_shield', name: '盾牌', icon: '🛡️', price: 20 },
      { id: 'wp_bow', name: '弓箭', icon: '🏹', price: 30 },
      { id: 'wp_star', name: '飞镖', icon: '💫', price: 15 },
      { id: 'wp_trident', name: '三叉戟', icon: '🔱', price: 35 }
    ]
  },
  bg: {
    label: '背景',
    icon: '🏞️',
    items: [
      { id: 'bg_star', name: '星空', icon: '⭐', price: 20 },
      { id: 'bg_rainbow', name: '彩虹', icon: '🌈', price: 25 },
      { id: 'bg_moon', name: '月亮', icon: '🌙', price: 15 },
      { id: 'bg_sun', name: '太阳', icon: '☀️', price: 15 },
      { id: 'bg_mountain', name: '高山', icon: '🏔️', price: 30 },
      { id: 'bg_ocean', name: '大海', icon: '🌊', price: 30 }
    ]
  }
};

// ============ 应用主类 ============

const app = {
  // 状态
  data: null,
  currentPage: 'home',
  pinBuffer: '',
  pinCallback: null,
  pendingBuyItem: null,
  shopCategory: 'hat',
  dressCategory: 'hat',

  // ---- 初始化 ----
  init() {
    this.loadData();
    this.renderHome();
    this.updateAllPoints();
  },

  // ---- 数据管理 ----
  loadData() {
    const saved = localStorage.getItem('babyTaskGame');
    if (saved) {
      this.data = JSON.parse(saved);
    } else {
      this.data = {
        currentCharacter: 'leidi',
        points: 0,
        ownedItems: [],
        equippedItems: { hat: null, cape: null, weapon: null, bg: null },
        taskHistory: [],
        parentPin: null // 首次使用时设置
      };
      this.saveData();
    }
  },

  saveData() {
    localStorage.setItem('babyTaskGame', JSON.stringify(this.data));
  },

  // ---- 页面导航 ----
  goToPage(page) {
    if (page === 'task') {
      // 任务页需要密码
      this.requirePin(() => {
        this.showPage('task');
        this.renderTasks();
      });
      return;
    }

    this.showPage(page);

    if (page === 'home') this.renderHome();
    if (page === 'shop') this.renderShop();
    if (page === 'dress') this.renderDress();
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
    ['home-points', 'task-points', 'shop-points', 'dress-points'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = pts;
    });
  },

  animatePoints(amount, x, y) {
    // 浮动积分数字
    const el = document.createElement('div');
    el.className = 'float-points';
    el.textContent = '+' + amount;
    el.style.left = (x || window.innerWidth / 2 - 30) + 'px';
    el.style.top = (y || window.innerHeight / 2) + 'px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);

    // 积分显示弹跳
    document.querySelectorAll('.points-display').forEach(pd => {
      pd.classList.remove('bounce');
      void pd.offsetWidth;
      pd.classList.add('bounce');
    });
  },

  // ---- 角色系统 ----
  renderCharacter(containerId, large) {
    const container = document.getElementById(containerId);
    const charData = CHARACTERS[this.data.currentCharacter];
    const equipped = this.data.equippedItems;

    let equipHTML = '';
    if (equipped.bg) {
      const item = this.findItem(equipped.bg);
      if (item) equipHTML += `<div class="equip-bg">${item.icon}</div>`;
    }
    if (equipped.cape) {
      const item = this.findItem(equipped.cape);
      if (item) equipHTML += `<div class="equip-cape">${item.icon}</div>`;
    }
    if (equipped.hat) {
      const item = this.findItem(equipped.hat);
      if (item) equipHTML += `<div class="equip-hat">${item.icon}</div>`;
    }
    if (equipped.weapon) {
      const item = this.findItem(equipped.weapon);
      if (item) equipHTML += `<div class="equip-weapon">${item.icon}</div>`;
    }

    const charHTML = charData.html.replace(
      'class="character',
      `class="character${large ? ' large' : ''}`
    );

    container.innerHTML = `<div style="position:relative;display:inline-block">${equipHTML}${charHTML}</div>`;
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

  switchCharacter() {
    const chars = Object.keys(CHARACTERS);
    const idx = chars.indexOf(this.data.currentCharacter);
    this.data.currentCharacter = chars[(idx + 1) % chars.length];
    this.saveData();
    this.renderHome();
  },

  // ---- 首页 ----
  renderHome() {
    this.renderCharacter('home-character-stage', false);
    const char = CHARACTERS[this.data.currentCharacter];
    document.getElementById('home-character-name').textContent = char.name + ' · ' + char.desc;
  },

  // ---- 密码系统 ----
  requirePin(callback) {
    if (!this.data.parentPin) {
      // 首次使用，设置密码
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
          // 密码错误
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
        if (result !== false) {
          this.closePin();
        }
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

    // 任务列表
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = TASKS.map(task => `
      <div class="task-item">
        <div class="task-icon">${task.icon}</div>
        <div class="task-info">
          <div class="task-name">${task.name}</div>
          <div class="task-reward">&#9733; +${task.points} 积分</div>
        </div>
        <button class="task-done-btn" onclick="app.completeTask('${task.id}', event)">&#10003;</button>
      </div>
    `).join('');

    // 今日完成记录
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
      task: task.name,
      points: task.points,
      date: new Date().toISOString().slice(0, 10),
      time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
    });
    this.saveData();
    this.updateAllPoints();

    // 积分动画
    const rect = event.target.getBoundingClientRect();
    this.animatePoints(task.points, rect.left, rect.top);

    // 庆祝效果
    this.celebrate();

    // 刷新今日记录
    this.renderTasks();
  },

  // ---- 商店系统 ----
  renderShop() {
    // 渲染分类标签
    const tabs = document.getElementById('shop-tabs');
    tabs.innerHTML = Object.entries(SHOP_ITEMS).map(([key, cat]) => `
      <button class="shop-tab ${key === this.shopCategory ? 'active' : ''}"
              onclick="app.switchShopTab('${key}')">${cat.icon} ${cat.label}</button>
    `).join('');

    // 渲染道具
    const grid = document.getElementById('shop-grid');
    const items = SHOP_ITEMS[this.shopCategory].items;
    grid.innerHTML = items.map(item => {
      const owned = this.data.ownedItems.includes(item.id);
      return `
        <div class="shop-item ${owned ? 'owned' : ''}"
             onclick="app.tryBuy('${item.id}')">
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

  tryBuy(itemId) {
    if (this.data.ownedItems.includes(itemId)) return;

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
      // 积分不够
      document.getElementById('buy-name').textContent = '积分不够哦~';
      document.getElementById('buy-name').style.color = '#FF6B6B';
      setTimeout(() => {
        document.getElementById('buy-name').style.color = '';
        this.closeBuy();
      }, 1000);
      return;
    }

    this.data.points -= item.price;
    this.data.ownedItems.push(item.id);
    this.saveData();
    this.updateAllPoints();
    this.closeBuy();
    this.celebrate();
    this.renderShop();
  },

  // ---- 换装系统 ----
  renderDress() {
    this.renderCharacter('dress-character-stage', true);

    // 渲染分类标签
    const tabs = document.getElementById('dress-tabs');
    tabs.innerHTML = Object.entries(SHOP_ITEMS).map(([key, cat]) => `
      <button class="dress-tab ${key === this.dressCategory ? 'active' : ''}"
              onclick="app.switchDressTab('${key}')">${cat.icon} ${cat.label}</button>
    `).join('');

    // 渲染已拥有的道具
    const container = document.getElementById('dress-items');
    const ownedInCategory = SHOP_ITEMS[this.dressCategory].items.filter(
      item => this.data.ownedItems.includes(item.id)
    );

    if (ownedInCategory.length === 0) {
      container.innerHTML = '<div class="dress-empty">还没有这类道具，去商店看看吧~</div>';
    } else {
      const equippedId = this.data.equippedItems[this.dressCategory];
      container.innerHTML = ownedInCategory.map(item => `
        <div class="dress-item ${item.id === equippedId ? 'equipped' : ''}"
             onclick="app.equipItem('${item.id}')">
          <div class="dress-item-icon">${item.icon}</div>
          <div class="dress-item-name">${item.name}</div>
        </div>
      `).join('');

      // 如果当前分类有装备，显示卸下按钮
      if (equippedId) {
        container.innerHTML += `
          <div style="grid-column:1/-1;text-align:center;padding:8px">
            <button class="btn-unequip" onclick="app.unequipCategory('${this.dressCategory}')">卸下当前${SHOP_ITEMS[this.dressCategory].label}</button>
          </div>
        `;
      }
    }
  },

  switchDressTab(category) {
    this.dressCategory = category;
    this.renderDress();
  },

  equipItem(itemId) {
    const category = this.findItemCategory(itemId);
    if (!category) return;

    // 如果已装备，点击则卸下
    if (this.data.equippedItems[category] === itemId) {
      this.data.equippedItems[category] = null;
    } else {
      this.data.equippedItems[category] = itemId;
    }
    this.saveData();
    this.renderDress();
  },

  unequipCategory(category) {
    this.data.equippedItems[category] = null;
    this.saveData();
    this.renderDress();
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

    setTimeout(() => {
      container.innerHTML = '';
    }, 2000);
  }
};

// ---- 启动 ----
document.addEventListener('DOMContentLoaded', () => app.init());
