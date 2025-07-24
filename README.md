# 🚀 Professional QR Code Generator: Elevate Your Digital Presence

**Transforming digital interactions with powerful, customizable QR codes.**

This modern, feature-rich QR code generator, built with pure JavaScript, empowers you to effortlessly create high-quality QR codes for a myriad of applications. Designed with a sleek, intuitive dark-themed interface, it offers unparalleled flexibility and a seamless user experience, making QR code generation both efficient and enjoyable.

![QR Studio Preview](assets/qr-code-text-1753346511168.png)

## ✨ Unrivaled Features & Capabilities

Discover the comprehensive suite of features that set this QR code generator apart:

### 🔗 Versatile QR Code Types

Beyond basic text, generate specialized QR codes for diverse content, ensuring your audience connects with your information precisely as intended:

- **Text**: Encode plain text messages, notes, or short announcements.
- **URL**: Direct users instantly to websites, landing pages, or online resources.
- **WiFi**: Simplify network access by generating QR codes that automatically connect devices to your Wi-Fi network.
- **Email**: Create `mailto` QR codes pre-filled with recipient, subject, and message for effortless communication.

### 🎨 Advanced Customization for Perfect Branding

Tailor your QR codes to match your aesthetic and functional requirements:

- **Size Selection**: Choose from a range of precise dimensions (e.g., Small (200x200) to Extra Large (500x500)) to fit any display or print need.
- **Error Correction**: Adjust error correction levels (7% to 30%) to ensure scannability even if the QR code is partially damaged or obscured.
- **Modern UI/UX**: Experience a visually stunning black and purple theme that is both professional and easy on the eyes.
- **Responsive Design**: Flawlessly adapts to any screen size, from desktops to mobile devices, providing a consistent experience across all platforms.

### 💡 Intelligent User Experience

Designed with the user in mind, every interaction is streamlined and intuitive:

- **Real-time Validation**: Receive instant visual feedback on input validity, preventing errors and speeding up the generation process.
- **Download Support**: Easily save your generated QR codes as high-resolution PNG files for immediate use.
- **Copy to Clipboard**: Quickly copy the generated QR code image to your clipboard for pasting into other applications.
- **Keyboard Shortcuts**: Boost your productivity with shortcuts like `Ctrl/Cmd + Enter` to instantly generate QR codes.
- **Toast Notifications**: Stay informed with subtle, user-friendly status messages for successful operations or important alerts.

## 🌐 Live Demonstration

Experience the power and simplicity of the QR code generator firsthand:

[🌐 View Live Demo](https://hadesisoff.github.io/qr-code-generator)

![QR Studio Preview](assets/qr-code-text-1753346511168.png)

## 📸 Visual Showcase

Explore the intuitive interface and powerful capabilities through these detailed screenshots:

### Desktop View - Comprehensive QR Studio Interface

![QR Studio Desktop Interface](assets/qr-code-text-1753346511168.png)

*A closer look at the professional QR Studio interface, meticulously designed for optimal workflow:*

- **Left Panel**: Provides quick access to templates and a history of recently generated QR codes, enhancing efficiency.
- **Center Panel**: Features a multi-type QR generator with extensive customization options, allowing for precise control over your QR codes.
- **Right Panel**: Displays a live preview of your QR code, alongside convenient download and sharing capabilities.
- **Modern Dark Theme**: A sleek, professional dark theme optimized for extended use and reduced eye strain, ideal for business and creative professionals.

## 🛠️ Core Technologies Underpinning the Project

Built with robust and modern web technologies to ensure performance, reliability, and maintainability:

- **HTML5**: Provides a semantic and accessible foundation for the application's structure.
- **CSS3**: Utilizes advanced styling techniques, including CSS Grid and Flexbox, for a responsive and visually appealing layout.
- **Vanilla JavaScript (ES6+)**: Leverages modern JavaScript features and APIs for dynamic functionality and a smooth user experience.
- **QRCode.js**: Integrates the highly reliable and efficient `QRCode.js` library by davidshimjs for accurate QR code generation.
- **Geist Font**: Incorporates the clean, professional `Geist` typeface for superior readability and a modern aesthetic.

## 📦 Getting Started: Installation & Setup

Follow these simple steps to get the QR code generator up and running on your local machine:

### Quick Start Guide

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/HadesIsOff/qr-code-generator.git
    ```

2.  **Navigate to the Project Directory**:
    ```bash
    cd qr-code-generator
    ```

3.  **Open `index.html` or Serve Locally**:
    You can open the `index.html` file directly in your web browser, or for a more robust development environment, serve it using a local web server. Examples:

    ```bash
    # Using Python's built-in HTTP server
    python -m http.server 8000
    
    # Using Node.js with http-server (install via `npm install -g http-server`)
    npx http-server
    
    # Using PHP's built-in web server
    php -S localhost:8000
    ```

4.  **Access in Browser**:
    Once served, open your web browser and navigate to `http://localhost:8000` (or the port you specified).

### Deploying with GitHub Pages

Easily deploy your own version of the QR code generator using GitHub Pages:

1.  **Fork this Repository**: Click the 'Fork' button on the top right of the GitHub repository page.
2.  **Access Settings**: Go to your forked repository's `Settings` tab.
3.  **Navigate to Pages**: In the left sidebar, select `Pages`.
4.  **Configure Deployment**: Under 'Build and deployment', choose `Deploy from a branch`.
5.  **Select Branch**: Select `main` as your branch and `/` (root) as your folder.
6.  **Publish**: Click `Save`. Your site will typically be available within a few minutes at `https://your-github-username.github.io/qr-code-generator`.

## 📝 Comprehensive Usage Guide

Master the QR code generator with this step-by-step guide:

### Creating Your First QR Code

1.  **Select Content Type**: Begin by clicking on the desired content type button (e.g., `Text`, `URL`, `WiFi`, `Email`) located in the interface.

2.  **Enter Your Content**: Fill in the required fields corresponding to your selected type. The 'Generate' button will automatically become active once valid content is provided.

3.  **Customize (Optional)**: Fine-tune your QR code by selecting your preferred size and error correction level from the available options.

4.  **Generate & Download**: Click the `Generate QR Code` button or use the `Ctrl/Cmd + Enter` keyboard shortcut. You can then use the `Download` button to save the QR code as a PNG image or `Copy` to quickly place it on your clipboard.

### Practical Content Type Examples

To illustrate the versatility of the generator, here are examples for each content type:

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

## 🎨 Advanced Customization: Personalize Your QR Codes

Beyond the basic options, you can further customize the appearance of your QR codes:

### Adjusting Color Scheme

The primary color scheme is easily modifiable via CSS custom properties defined in the `:root` selector of your stylesheet:

```css
:root {
    --primary-bg: #0a0a0a; /* Main background color */
    --secondary-bg: #1a1a1a; /* Secondary background color */
    --primary-purple: #8b5cf6; /* Main accent purple */
    --light-purple: #a78bfa; /* Lighter shade of purple */
    --dark-purple: #7c3aed; /* Darker shade of purple */
}
```

By changing these values, you can quickly adapt the application's theme to your specific branding or preference.

### Extending Functionality: Adding New QR Types

For developers looking to expand the generator's capabilities, adding new QR code types involves a few straightforward steps:

1.  **HTML Integration**: Add a new button element within the HTML type selector section of `index.html`.
2.  **Input Field Creation**: Create the necessary input fields in the HTML to capture data specific to your new QR type.
3.  **JavaScript Validation**: Implement robust validation logic in your JavaScript file to ensure the integrity of the input data.
4.  **Content Formatting**: Modify the `getQRContent()` function in JavaScript to correctly format the input data into a string suitable for QR code generation.

## 🖥️ Browser & Mobile Compatibility

This QR code generator is rigorously tested and optimized for broad compatibility across modern web browsers and mobile devices, ensuring a consistent experience for all users.

### Desktop Browser Support

-   **Google Chrome**: Version 60+ ✅
-   **Mozilla Firefox**: Version 60+ ✅
-   **Apple Safari**: Version 12+ ✅
-   **Microsoft Edge**: Version 79+ ✅

### Mobile Device Support

-   **iOS Safari**: Version 12+ ✅
-   **Chrome Mobile**: Version 60+ ✅
-   **Samsung Internet**: Version 8+ ✅

## 🤝 Contributing to the Project

We welcome and encourage contributions from the community! Whether it's a bug fix, a new feature, or an improvement to the documentation, your input is valuable. Please feel free to submit a Pull Request.

### Development Setup for Contributors

To contribute effectively, follow these steps to set up your development environment:

1.  **Fork the Repository**: Start by forking the `qr-code-generator` repository to your GitHub account.
2.  **Create a Feature Branch**: Create a new branch for your specific feature or bug fix:
    ```bash
    git checkout -b feature/your-amazing-feature-name
    ```
3.  **Implement Your Changes**: Make your desired code modifications and additions.
4.  **Thorough Testing**: Ensure your changes are fully tested and do not introduce any regressions.
5.  **Commit Your Changes**: Commit your work with a clear and descriptive message:
    ```bash
    git commit -m 'feat: Add your amazing feature'
    ```
6.  **Push to Your Branch**: Push your local branch to your forked repository on GitHub:
    ```bash
    git push origin feature/your-amazing-feature-name
    ```
7.  **Open a Pull Request**: Navigate to the original `qr-code-generator` repository on GitHub and open a Pull Request from your feature branch.

### Adhering to Coding Standards

To maintain code quality and consistency, please adhere to the following guidelines:

-   **JavaScript**: Utilize modern ES6+ JavaScript features.
-   **Indentation**: Maintain consistent indentation using 2 spaces.
-   **Documentation**: Add JSDoc comments for all functions and complex code blocks.
-   **Cross-Browser Testing**: Ensure your changes function correctly across multiple web browsers.
-   **Responsiveness**: Verify that your contributions maintain mobile responsiveness.

## 📋 Project Roadmap

Our vision for the QR code generator includes continuous improvement and the addition of exciting new features. Here's a glimpse of what's planned:

-   [x] **QR Code History**: ✅ Implemented local storage for saving generated QR codes, allowing easy access to past creations.
-   [x] **Quick Templates**: ✅ Introduced business, WiFi, social, and contact templates for rapid QR code generation.
-   [x] **Professional UI**: ✅ Developed a modern dark theme with a fully responsive design, enhancing user experience.
-   [ ] **Color Customization**: Future plans include allowing users to customize QR code colors and integrate branding elements.
-   [ ] **Logo Embedding**: Enable the embedding of logos directly into the center of QR codes for enhanced brand recognition.
-   [ ] **Batch Generation**: Develop functionality to generate multiple QR codes simultaneously, ideal for large-scale needs.
-   [ ] **Export Formats**: Expand export options to include SVG and PDF formats for greater versatility.
-   [ ] **Analytics Dashboard**: Integrate a dashboard for tracking QR code scan statistics and analytics.
-   [ ] **API Integration**: Explore integration with URL shortening services and other relevant APIs.

## 🐛 Known Limitations & Issues

While continuously striving for perfection, please be aware of the following known issues:

-   **Clipboard Copy**: The 'Copy to Clipboard' functionality may exhibit inconsistent behavior in some older browser versions.
-   **Performance with Large Codes**: Generating very large QR codes might experience slightly longer processing times on devices with slower processors.

## 📄 License Information

This project is proudly licensed under the **MIT License**. For full details, please refer to the [LICENSE](LICENSE) file included in the repository.

## 👤 Author & Acknowledgment

### Author

**Hades**
-   GitHub: [@HadesIsOff](https://github.com/HadesIsOff)
-   Portfolio: [github.com/HadesIsOff](https://github.com/HadesIsOff)

### Special Acknowledgments

We extend our gratitude to the following projects and resources that have been instrumental in the development of this QR code generator:

-   [QRCode.js](https://github.com/davidshimjs/qrcodejs): The robust JavaScript library that powers the core QR code generation functionality.
-   [Inter Font](https://rsms.me/inter/): For providing the elegant and highly readable `Inter` typeface, contributing significantly to the application's aesthetic.
-   **Modern Design Systems**: Inspiration drawn from contemporary UI/UX principles and design systems to create an intuitive and visually appealing interface.

## ⭐ Show Your Support

If you find this project helpful or inspiring, please consider giving it a ⭐ star on GitHub! Your support motivates continued development and improvement.

---

<div align="center">
  <strong>Made with ❤️ by Hades</strong>
</div>


