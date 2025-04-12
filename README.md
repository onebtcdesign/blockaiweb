# Blockai - Web3 开发服务平台

Blockai 是一个专注于加密货币/Web3 行业的平台，为区块链项目提供一站式产品设计、全栈开发和运营服务。网站采用现代加密风格设计，具有强烈的科技感和赛博朋克视觉效果。

## 项目特点

* **现代设计**：赛博朋克风格，结合渐变、霓虹效果和动态背景
* **响应式布局**：完美适配从移动设备到桌面显示器的各种屏幕尺寸
* **交互体验**：丰富的动画和交互元素，提供沉浸式用户体验
* **高性能**：基于 Next.js 15 构建，提供卓越的加载性能和 SEO 优化
* **模块化组件**：基于组件的设计，便于维护和扩展

## 技术栈

* **框架**：Next.js 15 (App Router)
* **语言**：TypeScript
* **样式**：TailwindCSS
* **动画**：CSS 动画 & Canvas API
* **状态管理**：React Hooks
* **部署**：Vercel

## 核心模块

网站包含以下核心模块：

### 1\. 首页介绍部分

突出 Blockai 作为加密行业专业服务平台的特色，包括：

* 动态背景效果（网格和粒子动画）
* 视觉冲击力强的标题
* 服务介绍
* 行动号召按钮

### 2\. 服务模块

展示 Blockai 的核心服务：

* 加密项目设计
* 全栈开发
* 一站式开发
* 项目协作

每项服务包含详细描述和特点。

### 3\. 案例研究模块

展示 Blockai 过去的项目案例：

* 类别筛选功能
* 水平滚动展示
* 案例详情弹出效果
* 技术标签展示

### 4\. 团队介绍模块

展示 Blockai 的核心团队成员：

* 成员个人资料
* 专业领域和技能
* 社交媒体链接

### 5\. 技术框架模块

展示 Blockai 使用的技术栈：

* 前端技术
* 后端技术
* 区块链技术

包括技术描述和优势。

### 6\. FAQ 模块

常见问题解答：

* 手风琴效果的问答展示
* 分类的常见问题

### 7\. 联系模块

提供多种联系方式：

* 联系表单
* 社交媒体链接
* 电子邮件和即时通讯工具

## 运行项目

### 前提条件

* Node.js 18.0 或更高版本
* npm 或 yarn 包管理器

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
```

然后在浏览器中访问 <http://localhost:3000>

### 构建项目

```bash
npm run build
# 或
yarn build
```

### 启动生产服务器

```bash
npm run start
# 或
yarn start
```

## 部署到 Vercel

项目可以轻松部署到 Vercel 平台：

### 使用 Vercel CLI 部署

1. 全局安装 Vercel CLI:
```bash
npm install -g vercel
```

2. 登录 Vercel:
```bash
vercel login
```

3. 部署项目:
```bash
vercel
```

### 通过 GitHub 仓库部署

1. 将项目推送到 GitHub 仓库
2. 在 Vercel 控制台新建项目
3. 导入 GitHub 仓库
4. 配置环境变量（如有需要）
5. 点击部署

### 部署配置

项目已包含 `vercel.json` 文件，其中预配置了最佳的部署设置，包括：

- 构建命令和输出目录
- 区域优化
- 安全头信息
- URL 清理

## 项目结构

```
blockai/
├── app/                  # 主应用目录
│   ├── layout.tsx        # 全局布局
│   ├── page.tsx          # 首页
│   └── globals.css       # 全局样式
├── components/           # 组件目录
│   ├── Header.tsx        # 导航头部
│   ├── Hero.tsx          # 首页主视觉
│   ├── Services.tsx      # 服务模块
│   ├── CaseStudies.tsx   # 案例展示
│   ├── Team.tsx          # 团队介绍
│   ├── Technology.tsx    # 技术框架
│   ├── Faq.tsx           # 常见问题
│   ├── Contact.tsx       # 联系方式
│   └── Footer.tsx        # 页脚
├── public/               # 静态资源
├── vercel.json           # Vercel 部署配置
├── next.config.js        # Next.js 配置
└── README.md             # 项目文档
```

## 未来计划

* 添加多语言支持
* 集成 Web3 钱包连接
* 实现案例研究详情页面
* 添加博客/新闻模块
* 开发管理员管理系统

## 贡献

欢迎提出问题和 PR 来改进项目！

## 许可证

MIT
