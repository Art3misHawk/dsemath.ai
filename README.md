# 🧮 dsemath.ai

<div align="center">



**An AI-Powered SAAS for DSE students to practice and learn maths with questions & papers generation and comprehensive topic coverage**

[![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-green?style=flat&logo=supabase)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

[🚀 Live Demo](#) • [📚 Documentation](#features) • [🤝 Contributing](#contributing) • [📖 Wiki](#)

</div>

---

## ✨ What is dsemath.ai?
 dsemath.ai is a comprehensive mathematics learning platform designed specifically for Hong Kong DSE (Diploma of Secondary Education) students. It combines **artificial intelligence** with **structured learning** to provide personalized math practice experiences from Junior Form to Form 6.

### 🎯 **Core Mission**
Revolutionize mathematics education by providing intelligent, adaptive, and comprehensive practice tools that help students master DSE mathematics concepts effectively.

---

## 🌟 Features

<table>
<tr>
<td width="50%">

### 🤖 **AI-Powered Question Generation**
- Intelligent question creation based on topic difficulty
- Adaptive learning algorithms
- Personalized practice sessions
- Real-time feedback and explanations

</td>
<td width="50%">

### 📊 **Comprehensive Question Bank**
- 800+ carefully curated questions
- Complete coverage from Junior to Form 6
- Topic-wise organization
- Real-time progress tracking

</td>
</tr>
<tr>
<td width="50%">

### 🎨 **Modern UI/UX Design**
- Beautiful, intuitive interface
- Responsive design for all devices
- Dark/Light theme support
- Smooth animations and transitions

</td>
<td width="50%">

### 📈 **Advanced Analytics**
- Performance tracking and insights
- Topic mastery visualization
- Progress reports and statistics
- Leaderboard system

</td>
</tr>
</table>

---

## 🏗️ Technical Architecture

```mermaid
graph TB
    A[Frontend - Next.js 15] --> B[API Routes]
    B --> C[Supabase Database]
    B --> D[AI Question Generator]
    A --> E[Topic Management System]
    E --> F[Question Bank]
    F --> C
    G[Authentication] --> C
    H[Real-time Updates] --> C
```

### **Tech Stack**

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | Next.js | 15.4.6 |
| **Language** | TypeScript | 5.9.2 |
| **Database** | Supabase | Latest |
| **Styling** | Tailwind CSS | 4.1.12 |
| **UI Components** | Radix UI | Latest |
| **State Management** | React Hooks | Built-in |

---

### **Question Management**

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/questions` | GET | Fetch questions with filtering |
| `/api/questions/by-topic` | GET | Get questions grouped by topic |
| `/api/questions/counts` | GET | Get question counts per topic |
| `/api/dev/math-topics` | GET | Get topics with real counts |

### **Example Usage**

```javascript
// Fetch questions for a specific topic
const response = await fetch('/api/questions?topic_id=f4-quadratic&limit=10');
const data = await response.json();

// Get question counts for all topics
const counts = await fetch('/api/questions/counts');
const topicCounts = await counts.json();
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **🍴 Fork the repository**
2. **🌿 Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **💻 Make your changes**
4. **✅ Commit your changes** (`git commit -m 'Add amazing feature'`)
5. **📤 Push to the branch** (`git push origin feature/amazing-feature`)
6. **🔄 Open a Pull Request**

### **Development Guidelines**

- Follow TypeScript best practices
- Maintain responsive design principles
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Hong Kong DSE Curriculum** - For comprehensive topic structure
- **Next.js Team** - For the amazing framework
- **Appwrite** - For backend infrastructure
- **Radix UI** - For accessible component primitives
- **Tailwind CSS** - For utility-first styling

---

<div align="center">

**Built with ❤️ for DSE Mathematics Students**

[![GitHub stars](https://img.shields.io/github/stars/Art3misHawk/dsemath.ai?style=social)](https://github.com/Art3misHawk/dsemath.ai/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Art3misHawk/dsemath.ai?style=social)](https://github.com/Art3misHawk/dsemath.ai/network/members)
[![GitHub issues](https://img.shields.io/github/issues/Art3misHawk/dsemath.ai)](https://github.com/Art3misHawk/dsemath.ai/issues)

[⭐ Star this repo](https://github.com/Art3misHawk/dsemath.ai) • [🐛 Report Bug](https://github.com/Art3misHawk/dsemath.ai/issues) • [✨ Request Feature](https://github.com/Art3misHawk/dsemath.ai/issues)

</div>
