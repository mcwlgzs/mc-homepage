# 🤝 贡献指南

感谢您对本项目的关注！我们欢迎任何形式的贡献，包括但不限于：

## 🎯 贡献类型

- 🐛 **Bug 修复**：修复现有功能的问题
- ✨ **新功能**：添加新的功能特性
- 📚 **文档改进**：完善文档、注释或示例
- 🎨 **界面优化**：改进用户界面和用户体验
- 🚀 **性能优化**：提升网站性能和加载速度
- 🔍 **SEO 优化**：改进搜索引擎优化
- 🌐 **国际化**：添加多语言支持

## 📋 贡献流程

### 1. 准备工作
```bash
# Fork 本项目到你的 GitHub 账号
# 克隆你的 Fork 到本地
git clone https://github.com/yourusername/mc-homepage.git
cd mc-homepage

# 添加上游仓库
git remote add upstream https://github.com/mcwlgzs/mc-homepage.git
```

### 2. 创建分支
```bash
# 从 main 分支创建新的功能分支
git checkout -b feature/your-feature-name

# 或者修复分支
git checkout -b fix/your-fix-name
```

### 3. 开发和测试
- 进行你的修改
- 确保代码符合项目规范
- 在多个浏览器中测试
- 检查响应式设计

### 4. 提交更改
```bash
# 添加修改的文件
git add .

# 提交更改（使用语义化提交信息）
git commit -m "feat: add new feature description"

# 推送到你的 Fork
git push origin feature/your-feature-name
```

### 5. 创建 Pull Request
1. 在 GitHub 上打开你的 Fork
2. 点击 "New Pull Request"
3. 选择你的分支和目标分支
4. 填写 PR 描述
5. 提交 Pull Request

## 📝 代码规范

### HTML 规范
- 使用语义化标签
- 保持良好的缩进（2个空格）
- 添加必要的 aria 属性
- 确保 alt 属性的完整性

### CSS 规范
- 遵循 BEM 命名规范
- 使用 CSS 自定义属性
- 保持选择器的简洁性
- 添加必要的注释

### JavaScript 规范
- 使用 ES6+ 语法
- 保持函数的单一职责
- 添加错误处理
- 使用有意义的变量名

## 🎨 设计规范

### 颜色使用
- 主色调：`#3b82f6` (蓝色)
- 次要色调：`#8b5cf6` (紫色)
- 成功色：`#10b981` (绿色)
- 警告色：`#f59e0b` (橙色)
- 错误色：`#ef4444` (红色)

### 响应式断点
- 手机：`< 640px`
- 平板：`640px - 768px`
- 笔记本：`768px - 1024px`
- 桌面：`> 1024px`

## 📋 提交信息规范

使用语义化提交信息：

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Type 类型
- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式化
- `refactor`: 代码重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

### 示例
```
feat(ui): add back to top button
fix(seo): correct sitemap.xml format
docs(readme): update installation guide
style(css): improve button hover effects
```

## 🧪 测试清单

在提交 PR 之前，请确保：

- [ ] 代码在主流浏览器中正常工作
- [ ] 响应式设计在不同设备上表现良好
- [ ] 所有链接和功能正常工作
- [ ] SEO 相关功能正常
- [ ] 无控制台错误
- [ ] 代码符合项目规范
- [ ] 文档已更新（如需要）

## 🐛 报告问题

如果你发现了 Bug，请：

1. 检查是否已有相关 Issue
2. 创建新的 Issue
3. 提供详细的问题描述
4. 包含复现步骤
5. 提供浏览器和设备信息

## 💡 功能建议

如果你有新功能建议：

1. 创建 Feature Request Issue
2. 详细描述功能需求
3. 说明使用场景
4. 提供设计思路（如有）

## 📞 联系方式

如果你有任何问题，可以通过以下方式联系：

- 📧 邮箱：mcwlgzs@qq.com
- 💬 GitHub Discussions
- 🐛 GitHub Issues

## 🙏 致谢

感谢每一位贡献者的付出！你们的贡献让这个项目变得更好。

---

再次感谢您的贡献！🎉
