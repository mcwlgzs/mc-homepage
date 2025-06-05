/*!
 * 沐辰个人主页 - 自定义光标效果 (Muchen Personal Homepage - Custom Cursor Effects)
 *
 * Copyright (c) 2025 沐辰 (MC)
 *
 * 项目描述：为个人主页提供自定义光标效果和交互动画
 * 作者：沐辰 (MC)
 * 邮箱：mcwlgzs@qq.com
 * 网站：https://mcwl.net
 * GitHub：https://github.com/mcwlgzs/mc-homepage
 *
 * 本文件基于 MIT 许可证开源，详情请查看项目根目录的 LICENSE 文件
 *
 * 功能特性：
 * - 自定义光标样式和动画
 * - 平滑的光标跟随效果
 * - 交互元素的悬停反馈
 * - 响应式设计，移动端自动隐藏
 *
 * 最后更新：2025年
 */

var CURSOR;

Math.lerp = (a, b, n) => (1 - n) * a + n * b;

const getStyle = (el, attr) => {
    try {
        return window.getComputedStyle
            ? window.getComputedStyle(el)[attr]
            : el.currentStyle[attr];
    } catch (e) { }
    return "";
};

class Cursor {
    constructor() {
        this.pos = { curr: null, prev: null };
        this.pt = [];
        this.create();
        this.init();
        this.render();
    }

    move(left, top) {
        this.cursor.style["left"] = `${left}px`;
        this.cursor.style["top"] = `${top}px`;
    }

    create() {
        if (!this.cursor) {
            this.cursor = document.createElement("div");
            this.cursor.id = "cursor";
            this.cursor.classList.add("hidden");
            document.body.append(this.cursor);
        }

        var el = document.getElementsByTagName('*');
        for (let i = 0; i < el.length; i++)
            if (getStyle(el[i], "cursor") == "pointer")
                this.pt.push(el[i].outerHTML);
        document.body.appendChild((this.scr = document.createElement("style")));
        this.scr.innerHTML = `* {cursor: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' width='8px' height='8px'><circle cx='4' cy='4' r='4' opacity='.5'/></svg>") 4 4, auto !important}`;
    }

    refresh() {
        this.scr.remove();
        this.cursor.classList.remove("hover");
        this.cursor.classList.remove("active");
        this.pos = { curr: null, prev: null };
        this.pt = [];
        this.create();
        this.init();
        this.render();
    }

    init() {
        document.onmouseover = e => this.pt.includes(e.target.outerHTML) && this.cursor.classList.add("hover");
        document.onmouseout = e => this.pt.includes(e.target.outerHTML) && this.cursor.classList.remove("hover");
        document.onmousemove = e => { (this.pos.curr == null) && this.move(e.clientX - 8, e.clientY - 8); this.pos.curr = { x: e.clientX - 8, y: e.clientY - 8 }; this.cursor.classList.remove("hidden"); };
        document.onmouseenter = e => this.cursor.classList.remove("hidden");
        document.onmouseleave = e => this.cursor.classList.add("hidden");
        document.onmousedown = e => this.cursor.classList.add("active");
        document.onmouseup = e => this.cursor.classList.remove("active");
    }

    render() {
        if (this.pos.prev) {
            this.pos.prev.x = Math.lerp(this.pos.prev.x, this.pos.curr.x, 0.15);
            this.pos.prev.y = Math.lerp(this.pos.prev.y, this.pos.curr.y, 0.15);
            this.move(this.pos.prev.x, this.pos.prev.y);
        } else {
            this.pos.prev = this.pos.curr;
        }
        requestAnimationFrame(() => this.render());
    }
}

// 初始化光标
window.addEventListener('DOMContentLoaded', () => {
    CURSOR = new Cursor();
});

document.addEventListener('DOMContentLoaded', function() {
    // 创建自定义光标元素
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    // 创建光标跟随效果
    const cursorTrail = document.createElement('div');
    cursorTrail.className = 'cursor-trail';
    document.body.appendChild(cursorTrail);

    // 添加自定义光标样式
    const style = document.createElement('style');
    style.textContent = `
        .custom-cursor {
            width: 20px;
            height: 20px;
            border: 2px solid var(--primary-color);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: transform 0.2s ease;
            transform: translate(-50%, -50%);
        }

        .cursor-trail {
            width: 8px;
            height: 8px;
            background-color: var(--primary-color);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9998;
            mix-blend-mode: difference;
            transition: transform 0.1s ease, width 0.2s ease, height 0.2s ease;
            transform: translate(-50%, -50%);
        }

        .custom-cursor.hover {
            transform: translate(-50%, -50%) scale(1.5);
            background-color: rgba(59, 130, 246, 0.1);
            mix-blend-mode: normal;
        }

        .cursor-trail.hover {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0.5;
        }

        @media (max-width: 768px) {
            .custom-cursor, .cursor-trail {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);

    // 光标移动逻辑
    let cursorX = 0;
    let cursorY = 0;
    let trailX = 0;
    let trailY = 0;

    document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
    });

    // 平滑的跟随效果
    function updateTrailPosition() {
        const dx = cursorX - trailX;
        const dy = cursorY - trailY;
        
        trailX += dx * 0.2;
        trailY += dy * 0.2;
        
        cursorTrail.style.left = trailX + 'px';
        cursorTrail.style.top = trailY + 'px';
        
        requestAnimationFrame(updateTrailPosition);
    }
    updateTrailPosition();

    // 为可交互元素添加悬停效果
    const interactiveElements = document.querySelectorAll('a, button, .tilt-card, .skill-tag');

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorTrail.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorTrail.classList.remove('hover');
        });
    });

    // 点击效果
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        cursorTrail.style.transform = 'translate(-50%, -50%) scale(0.3)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorTrail.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});
