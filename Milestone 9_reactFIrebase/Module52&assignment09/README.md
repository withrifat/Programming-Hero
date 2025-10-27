# ToyTopia — Kids Toy Store Platform

![Project Status](https://img.shields.io/badge/status-complete-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![React](https://img.shields.io/badge/react-%5E19.1.1-blue)
![Firebase](https://img.shields.io/badge/firebase-%5E12.4.0-orange)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%5E4.1.15-38bdf8)

[Live Demo](https://kidzstore-9b893.web.app/) | [GitHub Repository](https://github.com/USERNAME/REPO)

## 🎯 About
ToyTopia is a modern React-based e-commerce platform for kids' toys, featuring a sleek UI, secure authentication, and an intuitive shopping experience. Built with Firebase and Tailwind CSS, it offers a responsive design across all devices.

## ✨ Key Features

### Authentication & Security
- Email/Password and Google Sign-in integration
- Protected routes for authenticated users
- Secure profile management
- Password reset functionality
- Form validation and secure data handling

### User Experience
- Responsive design (mobile, tablet, desktop)
- Interactive toy catalog with search and filters
- Animated page transitions with AOS
- Custom 404 page with interactive ghost animation
- Password visibility toggle
- Toast notifications for user feedback

### Product Management
- Detailed toy listings with images
- Category-based browsing
- Dynamic product ratings
- Seller information display
- Product availability tracking

### UI/UX Features
- Modern, clean interface with Tailwind CSS
- Smooth animations and transitions
- Interactive image slider (Swiper)
- Loading states and error handling
- Responsive navigation with mobile support

## 🖼️ Screenshots

<details>
<summary>Click to expand screenshots</summary>

### Home Page
![Home Page](/screenshots/home.png)

### Product Catalog
![Product Catalog](/screenshots/catalog.png)

### Profile Management
![Profile](/screenshots/profile.png)

### Authentication
![Auth](/screenshots/auth.png)
</details>

## 🛠️ Technical Stack

### Frontend
- React 19.1.1
- React Router DOM 7.9.4
- Tailwind CSS 4.1.15
- DaisyUI
- AOS (Animate on Scroll)
- Swiper
- React Toastify

### Backend & Services
- Firebase Authentication
- Firebase Hosting
- Firebase Storage

### Development Tools
- Vite 7.1.7
- ESLint
- PostCSS
- Git

## 🚀 Quick Start

1. **Clone and Install**
```bash
git clone https://github.com/USERNAME/REPO.git
cd toytopia
npm install
```

2. **Environment Setup**
Create `.env.local`:
```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id
```

3. **Development**
```bash
npm run dev
```

4. **Build**
```bash
npm run build
```

## 📁 Project Structure
```
src/
├── components/         # Reusable UI components
├── pages/             # Page components
├── contexts/          # Auth context
├── firebase/          # Firebase configuration
├── hooks/             # Custom hooks
├── routes/            # Route definitions
└── Layout/            # Layout components
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [React Icons](https://react-icons.github.io/react-icons/)