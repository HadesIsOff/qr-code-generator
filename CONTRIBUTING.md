# Contributing to QR Code Generator

Thank you for your interest in contributing to the QR Code Generator! This document provides guidelines and information for contributors.

## 🎯 Ways to Contribute

### 🐛 Bug Reports
- Use the GitHub issue tracker
- Include detailed steps to reproduce
- Provide browser/device information
- Include screenshots if applicable

### 💡 Feature Requests
- Check existing issues first
- Describe the feature clearly
- Explain the use case and benefits
- Consider implementation complexity

### 🔧 Code Contributions
- Fork the repository
- Create a feature branch
- Follow coding standards
- Test thoroughly
- Submit a pull request

## 🛠️ Development Setup

### Prerequisites
- Modern web browser
- Text editor or IDE
- Basic knowledge of HTML, CSS, JavaScript

### Getting Started
1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/your-username/qr-code-generator.git
   ```
3. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. Make your changes
5. Test thoroughly
6. Commit and push your changes

## 📋 Coding Standards

### HTML
- Use semantic HTML5 elements
- Include proper accessibility attributes
- Maintain consistent indentation (2 spaces)
- Use meaningful class names

### CSS
- Follow BEM methodology for class naming
- Use CSS custom properties for colors
- Ensure responsive design
- Maintain consistent spacing

### JavaScript
- Use ES6+ features
- Follow consistent naming conventions
- Add JSDoc comments for functions
- Handle errors gracefully
- Use meaningful variable names

### Example Code Style
```javascript
/**
 * Validates email address format
 * @param {string} email - The email address to validate
 * @returns {boolean} True if valid email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
```

## 🧪 Testing Guidelines

### Manual Testing
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Test on mobile devices
- Verify all QR code types work correctly
- Test download and copy functionality
- Check responsive design

### Test Cases to Cover
1. **Text QR Codes**
   - Empty text (should disable button)
   - Long text content
   - Special characters

2. **URL QR Codes**
   - Valid URLs (with/without protocol)
   - Invalid URLs
   - Long URLs

3. **WiFi QR Codes**
   - Different security types
   - Special characters in passwords
   - Empty SSID

4. **Email QR Codes**
   - Valid/invalid email addresses
   - Optional subject and body
   - Special characters

## 📝 Pull Request Process

### Before Submitting
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Tested on multiple browsers
- [ ] Documentation updated if needed
- [ ] No console errors

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Tested on mobile

## Screenshots
Include screenshots for UI changes
```

## 🎨 Design Guidelines

### Color Scheme
Use the established color variables:
```css
--primary-purple: #8b5cf6
--light-purple: #a78bfa
--dark-purple: #7c3aed
```

### Typography
- Use Inter font family
- Maintain consistent font weights
- Ensure proper contrast ratios

### UI Components
- Follow existing button styles
- Maintain consistent spacing
- Use smooth transitions
- Ensure accessibility

## 🚀 Release Process

### Version Numbering
We follow [Semantic Versioning](https://semver.org/):
- MAJOR: Breaking changes
- MINOR: New features
- PATCH: Bug fixes

### Release Checklist
- [ ] All tests pass
- [ ] Documentation updated
- [ ] Version number bumped
- [ ] Changelog updated
- [ ] GitHub release created

## 📞 Getting Help

### Communication Channels
- GitHub Issues for bugs and features
- GitHub Discussions for questions
- Email: [your-email@example.com]

### Resources
- [MDN Web Docs](https://developer.mozilla.org/)
- [QRCode.js Documentation](https://github.com/davidshimjs/qrcodejs)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

## 🏆 Recognition

Contributors will be:
- Added to the project README
- Mentioned in release notes
- Given credit in documentation

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to make this project better! 🙏 