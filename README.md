# 🎯 Professional QR Code Generator

A modern, feature-rich QR code generator built with vanilla JavaScript. Create custom QR codes for various content types with a sleek dark theme interface.

![QR Generator Preview](https://via.placeholder.com/800x400/8b5cf6/ffffff?text=QR+Generator+Preview)

## ✨ Features

### 🔧 Multiple QR Code Types
- **Text** - Generate QR codes for plain text content
- **URL** - Create QR codes for websites and links
- **WiFi** - Share WiFi credentials instantly
- **Email** - Generate mailto QR codes with subject and message

### 🎨 Customization Options
- **Size Selection** - Choose from Small (200x200) to Extra Large (500x500)
- **Error Correction** - Adjustable error correction levels (7% to 30%)
- **Modern UI** - Beautiful black and purple theme
- **Responsive Design** - Works perfectly on all devices

### 📱 User Experience
- **Real-time Validation** - Input validation with visual feedback
- **Download Support** - Save QR codes as PNG files
- **Copy to Clipboard** - Quick copy functionality
- **Keyboard Shortcuts** - Ctrl/Cmd + Enter to generate
- **Toast Notifications** - User-friendly status messages

## 🚀 Live Demo

[View Live Demo](https://hadesisoff.github.io/qr-code-generator)

## 📸 Screenshots

### Desktop View
![Desktop Screenshot](https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Desktop+View)

### Mobile View
![Mobile Screenshot](https://via.placeholder.com/300x500/1a1a1a/ffffff?text=Mobile+View)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - ES6+ features and modern APIs
- **QRCode.js** - Reliable QR code generation library
- **Inter Font** - Clean, professional typography

## 📦 Installation & Setup

### Quick Start
1. Clone the repository:
   ```bash
   git clone https://github.com/HadesIsOff/qr-code-generator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd qr-code-generator
   ```

3. Open `index.html` in your browser or serve with a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

4. Visit `http://localhost:8000` in your browser

### GitHub Pages Deployment
1. Fork this repository
2. Go to Settings → Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/" root
5. Your site will be available at `https://hadesisoff.github.io/qr-code-generator`

## 📝 Usage Guide

### Creating QR Codes

1. **Select Content Type**
   - Click on the type buttons (Text, URL, WiFi, Email)

2. **Enter Your Content**
   - Fill in the required fields for your selected type
   - The generate button will enable when valid content is entered

3. **Customize (Optional)**
   - Choose your preferred size and error correction level

4. **Generate & Download**
   - Click "Generate QR Code" or press Ctrl/Cmd + Enter
   - Use "Download" to save as PNG or "Copy" to clipboard

### Content Type Examples

#### Text QR Code
```
Hello, World!
Meeting at 3 PM in Conference Room B
Contact: +1 (555) 123-4567
```

#### URL QR Code
```
https://example.com
github.com/username/project
youtube.com/watch?v=dQw4w9WgXcQ
```

#### WiFi QR Code
```
Network: MyHomeWiFi
Password: SuperSecure123
Security: WPA/WPA2
```

#### Email QR Code
```
To: contact@example.com
Subject: Hello from QR Code
Message: This email was sent via QR code!
```

## 🎨 Customization

### Changing Colors
The color scheme is defined in CSS custom properties:

```css
:root {
    --primary-bg: #0a0a0a;
    --secondary-bg: #1a1a1a;
    --primary-purple: #8b5cf6;
    --light-purple: #a78bfa;
    --dark-purple: #7c3aed;
}
```

### Adding New QR Types
1. Add a new button in the HTML type selector
2. Create corresponding input fields
3. Add validation logic in JavaScript
4. Implement content formatting in `getQRContent()`

## 🔧 Browser Support

- **Chrome** 60+ ✅
- **Firefox** 60+ ✅
- **Safari** 12+ ✅
- **Edge** 79+ ✅

## 📱 Mobile Support

- **iOS Safari** 12+ ✅
- **Chrome Mobile** 60+ ✅
- **Samsung Internet** 8+ ✅

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Test thoroughly
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Coding Standards
- Use ES6+ JavaScript features
- Follow consistent indentation (2 spaces)
- Add JSDoc comments for functions
- Test on multiple browsers
- Ensure mobile responsiveness

## 📋 Roadmap

- [ ] **Color Customization** - Custom QR code colors
- [ ] **Logo Embedding** - Add logos to QR codes
- [ ] **Batch Generation** - Generate multiple QR codes
- [ ] **QR Code History** - Save generated codes locally
- [ ] **API Integration** - URL shortening service
- [ ] **Export Formats** - SVG, PDF export options
- [ ] **Analytics** - QR code scan tracking

## 🐛 Known Issues

- Clipboard copy may not work in some older browsers
- Large QR codes may take longer to generate on slower devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**RayanMarketing**
- GitHub: [@HadesIsOff](https://github.com/HadesIsOff)
- Portfolio: [github.com/HadesIsOff](https://github.com/HadesIsOff)

## 🙏 Acknowledgments

- [QRCode.js](https://github.com/davidshimjs/qrcodejs) for QR code generation
- [Inter Font](https://rsms.me/inter/) for beautiful typography
- Inspiration from modern design systems

## ⭐ Show Your Support

If this project helped you, please give it a ⭐ star on GitHub!

---

<div align="center">
  <strong>Made with ❤️ by RayanMarketing</strong>
</div> 