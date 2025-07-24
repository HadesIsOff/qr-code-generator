class QRStudio {
    constructor() {
        this.currentType = 'text';
        this.currentQRCode = null;
        this.history = this.loadHistory();
        this.templates = this.getTemplates();
        this.isGenerating = false;
        this.init();
    }

    init() {
        this.waitForDependencies().then(() => {
            this.setupEventListeners();
            this.renderRecentList();
            this.validateCurrentInput();
        });
    }

    waitForDependencies() {
        return new Promise((resolve) => {
            if (typeof QRCode !== 'undefined') {
                console.log('QRCode library loaded successfully');
                resolve();
            } else {
                console.error('QRCode library not found');
                resolve(); // Continue anyway, will show error in generateQRCode
            }
        });
    }

    setupEventListeners() {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => this.switchType(btn.dataset.type));
        });

        document.querySelectorAll('.template-card').forEach(card => {
            card.addEventListener('click', () => this.applyTemplate(card.dataset.template));
        });

        document.getElementById('generate-btn').addEventListener('click', () => this.generateQRCode());
        document.getElementById('download-btn')?.addEventListener('click', () => this.downloadQRCode());
        document.getElementById('copy-btn')?.addEventListener('click', () => this.copyToClipboard());
        document.getElementById('save-btn')?.addEventListener('click', () => this.saveToHistory());
        document.getElementById('share-btn')?.addEventListener('click', () => this.shareQRCode());
        document.getElementById('history-btn')?.addEventListener('click', () => this.toggleHistory());

        document.querySelectorAll('input, textarea, select').forEach(input => {
            input.addEventListener('input', () => this.validateCurrentInput());
        });

        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                const generateBtn = document.getElementById('generate-btn');
                if (!generateBtn.disabled) {
                    generateBtn.click();
                }
            }
        });
    }

    getTemplates() {
        return {
            business: {
                type: 'vcard',
                data: {
                    name: 'John Smith',
                    org: 'Tech Solutions Inc.',
                    phone: '+1 (555) 123-4567',
                    email: 'john@techsolutions.com',
                    url: 'https://techsolutions.com'
                }
            },
            wifi: {
                type: 'wifi',
                data: {
                    ssid: 'MyOfficeWiFi',
                    password: 'SecurePassword123',
                    security: 'WPA',
                    hidden: false
                }
            },
            social: {
                type: 'url',
                data: {
                    url: 'https://linkedin.com/in/yourprofile'
                }
            },
            contact: {
                type: 'text',
                data: {
                    text: 'Contact John Smith\nPhone: +1 (555) 123-4567\nEmail: john@example.com'
                }
            }
        };
    }

    applyTemplate(templateName) {
        const template = this.templates[templateName];
        if (!template) return;

        this.switchType(template.type);
        
        setTimeout(() => {
            Object.entries(template.data).forEach(([key, value]) => {
                const element = document.getElementById(`${template.type}-${key}`);
                if (element) {
                    element.value = value;
                    if (element.type === 'checkbox') {
                        element.checked = value;
                    }
                }
            });
            this.validateCurrentInput();
        }, 50);
    }

    switchType(type) {
        this.currentType = type;
        
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-type="${type}"]`).classList.add('active');

        document.querySelectorAll('.input-group').forEach(group => group.classList.remove('active'));
        document.querySelector(`.${type}-input`).classList.add('active');

        this.validateCurrentInput();
    }

    validateCurrentInput() {
        const generateBtn = document.getElementById('generate-btn');
        let isValid = false;
        let content = '';

        switch(this.currentType) {
            case 'text':
                content = document.getElementById('text-content').value.trim();
                isValid = content.length > 0;
                break;
            case 'url':
                content = document.getElementById('url-content').value.trim();
                isValid = content.length > 0 && this.isValidURL(content);
                break;
            case 'wifi':
                const ssid = document.getElementById('wifi-ssid').value.trim();
                isValid = ssid.length > 0;
                break;
            case 'email':
                const email = document.getElementById('email-to').value.trim();
                isValid = this.isValidEmail(email);
                break;
            case 'vcard':
                const name = document.getElementById('vcard-name').value.trim();
                isValid = name.length > 0;
                break;
        }

        generateBtn.disabled = !isValid || this.isGenerating;
    }

    isValidURL(string) {
        try {
            if (!string.startsWith('http://') && !string.startsWith('https://')) {
                string = 'https://' + string;
            }
            new URL(string);
            return true;
        } catch {
            return false;
        }
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    getQRContent() {
        switch(this.currentType) {
            case 'text':
                return document.getElementById('text-content').value.trim();
            
            case 'url':
                let url = document.getElementById('url-content').value.trim();
                if (!url.startsWith('http://') && !url.startsWith('https://')) {
                    url = 'https://' + url;
                }
                return url;
            
            case 'wifi':
                const ssid = document.getElementById('wifi-ssid').value.trim();
                const password = document.getElementById('wifi-password').value;
                const security = document.getElementById('wifi-security').value;
                const hidden = document.getElementById('wifi-hidden').checked;
                
                if (security === 'nopass') {
                    return `WIFI:T:nopass;S:${ssid};H:${hidden};;`;
                } else {
                    return `WIFI:T:${security};S:${ssid};P:${password};H:${hidden};;`;
                }
            
            case 'email':
                const emailTo = document.getElementById('email-to').value.trim();
                const subject = document.getElementById('email-subject').value.trim();
                const body = document.getElementById('email-body').value.trim();
                
                let mailto = `mailto:${emailTo}`;
                const params = [];
                
                if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
                if (body) params.push(`body=${encodeURIComponent(body)}`);
                
                if (params.length > 0) {
                    mailto += '?' + params.join('&');
                }
                
                return mailto;
            
            case 'vcard':
                const name = document.getElementById('vcard-name').value.trim();
                const org = document.getElementById('vcard-org').value.trim();
                const phone = document.getElementById('vcard-phone').value.trim();
                const email = document.getElementById('vcard-email').value.trim();
                const vcardUrl = document.getElementById('vcard-url').value.trim();
                
                let vcard = 'BEGIN:VCARD\nVERSION:3.0\n';
                if (name) vcard += `FN:${name}\n`;
                if (org) vcard += `ORG:${org}\n`;
                if (phone) vcard += `TEL:${phone}\n`;
                if (email) vcard += `EMAIL:${email}\n`;
                if (vcardUrl) vcard += `URL:${vcardUrl}\n`;
                vcard += 'END:VCARD';
                
                return vcard;
            
            default:
                return '';
        }
    }

    generateQRCode() {
        if (this.isGenerating) return;
        
        if (typeof QRCode === 'undefined') {
            this.showNotification('QR Code library not loaded. Please refresh the page.', 'error');
            console.error('QRCode library is not defined');
            return;
        }
        
        const content = this.getQRContent();
        if (!content) {
            this.showNotification('Please enter valid content', 'error');
            return;
        }

        this.isGenerating = true;
        const generateBtn = document.getElementById('generate-btn');
        const originalContent = generateBtn.innerHTML;
        generateBtn.innerHTML = '<span class="loading"></span><span class="btn-text">Generating...</span>';
        generateBtn.disabled = true;

        try {
            const size = parseInt(document.getElementById('qr-size').value);
            const errorCorrectionLevel = document.getElementById('error-correction').value;
            
            let correctLevel;
            switch(errorCorrectionLevel) {
                case 'L': correctLevel = QRCode.CorrectLevel.L; break;
                case 'M': correctLevel = QRCode.CorrectLevel.M; break;
                case 'Q': correctLevel = QRCode.CorrectLevel.Q; break;
                case 'H': correctLevel = QRCode.CorrectLevel.H; break;
                default: correctLevel = QRCode.CorrectLevel.M;
            }
            
            const qrPreview = document.getElementById('qr-preview');
            qrPreview.innerHTML = '';
            
            const qrContainer = document.createElement('div');
            qrContainer.style.display = 'flex';
            qrContainer.style.alignItems = 'center';
            qrContainer.style.justifyContent = 'center';
            qrPreview.appendChild(qrContainer);

            const qrcode = new QRCode(qrContainer, {
                text: content,
                width: size,
                height: size,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: correctLevel
            });

            this.currentQRCode = { type: 'qrcode', data: qrcode, element: qrContainer };
            
            qrPreview.classList.add('has-qr');
            
            this.updatePreviewInfo(content, size, this.currentType);
            this.showDownloadActions();
            this.showPreviewActions();
            
            this.showNotification('QR Code generated successfully!', 'success');
            
        } catch (error) {
            console.error('Error generating QR code:', error);
            this.showNotification('Error generating QR code. Please try again.', 'error');
        } finally {
            this.isGenerating = false;
            generateBtn.innerHTML = originalContent;
            this.validateCurrentInput();
        }
    }

    updatePreviewInfo(content, size, type) {
        document.getElementById('info-type').textContent = type.toUpperCase();
        document.getElementById('info-size').textContent = `${size}x${size}px`;
        document.getElementById('info-data').textContent = content.length > 50 ? 
            content.substring(0, 50) + '...' : content;
        document.getElementById('preview-info').style.display = 'flex';
    }

    showDownloadActions() {
        document.getElementById('download-actions').style.display = 'flex';
    }

    showPreviewActions() {
        document.getElementById('preview-actions').style.display = 'flex';
    }

    downloadQRCode() {
        if (!this.currentQRCode) {
            this.showNotification('No QR code to download', 'error');
            return;
        }

        try {
            const link = document.createElement('a');
            link.download = `qr-code-${this.currentType}-${Date.now()}.png`;
            
            const canvas = this.currentQRCode.element.querySelector('canvas');
            const img = this.currentQRCode.element.querySelector('img');
            
            if (canvas) {
                link.href = canvas.toDataURL('image/png');
            } else if (img) {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                link.href = canvas.toDataURL('image/png');
            } else {
                throw new Error('No QR code image found');
            }
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            this.showNotification('QR Code downloaded successfully!', 'success');
        } catch (error) {
            console.error('Error downloading QR code:', error);
            this.showNotification('Error downloading QR code', 'error');
        }
    }

    async copyToClipboard() {
        if (!this.currentQRCode) {
            this.showNotification('No QR code to copy', 'error');
            return;
        }

        try {
            const canvas = this.currentQRCode.element.querySelector('canvas');
            
            if (canvas && navigator.clipboard && canvas.toBlob) {
                canvas.toBlob(async (blob) => {
                    try {
                        const item = new ClipboardItem({ 'image/png': blob });
                        await navigator.clipboard.write([item]);
                        this.showNotification('QR Code copied to clipboard!', 'success');
                    } catch (error) {
                        this.fallbackCopy();
                    }
                });
            } else {
                this.fallbackCopy();
            }
        } catch (error) {
            console.error('Error copying QR code:', error);
            this.showNotification('Error copying QR code', 'error');
        }
    }

    fallbackCopy() {
        try {
            const canvas = this.currentQRCode.element.querySelector('canvas');
            const img = this.currentQRCode.element.querySelector('img');
            
            let textToCopy = '';
            if (canvas) {
                textToCopy = canvas.toDataURL();
            } else if (img) {
                textToCopy = img.src;
            } else {
                throw new Error('No QR code image found');
            }
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                this.showNotification('QR Code data copied to clipboard!', 'success');
            }).catch(() => {
                this.showNotification('Copy not supported in this browser', 'error');
            });
        } catch (error) {
            this.showNotification('Copy not supported in this browser', 'error');
        }
    }

    saveToHistory() {
        if (!this.currentQRCode) return;

        const historyItem = {
            id: Date.now(),
            type: this.currentType,
            content: this.getQRContent(),
            timestamp: new Date().toISOString(),
            size: parseInt(document.getElementById('qr-size').value)
        };

        this.history.unshift(historyItem);
        this.history = this.history.slice(0, 20);
        this.saveHistory();
        this.renderRecentList();
        this.showNotification('QR Code saved to history!', 'success');
    }

    shareQRCode() {
        if (!this.currentQRCode) return;

        if (navigator.share && this.currentQRCode.type === 'canvas') {
            this.currentQRCode.data.toBlob(async (blob) => {
                try {
                    const file = new File([blob], 'qr-code.png', { type: 'image/png' });
                    await navigator.share({
                        title: 'QR Code',
                        text: 'Check out this QR code!',
                        files: [file]
                    });
                } catch (error) {
                    this.fallbackShare();
                }
            });
        } else {
            this.fallbackShare();
        }
    }

    fallbackShare() {
        const content = this.getQRContent();
        const shareText = `Check out this QR code: ${content}`;
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(shareText).then(() => {
                this.showNotification('Share text copied to clipboard!', 'success');
            });
        } else {
            this.showNotification('Sharing not supported in this browser', 'error');
        }
    }

    loadHistory() {
        try {
            return JSON.parse(localStorage.getItem('qr-studio-history') || '[]');
        } catch {
            return [];
        }
    }

    saveHistory() {
        try {
            localStorage.setItem('qr-studio-history', JSON.stringify(this.history));
        } catch (error) {
            console.warn('Could not save history to localStorage:', error);
        }
    }

    renderRecentList() {
        const recentList = document.getElementById('recent-list');
        
        if (this.history.length === 0) {
            recentList.innerHTML = '<div class="empty-state"><span>No recent QR codes</span></div>';
            return;
        }

        const recentItems = this.history.slice(0, 5).map(item => {
            const date = new Date(item.timestamp).toLocaleDateString();
            const preview = item.content.substring(0, 30) + (item.content.length > 30 ? '...' : '');
            
            return `
                <div class="recent-item" data-id="${item.id}">
                    <div class="recent-info">
                        <div class="recent-type">${item.type.toUpperCase()}</div>
                        <div class="recent-content">${preview}</div>
                        <div class="recent-date">${date}</div>
                    </div>
                </div>
            `;
        }).join('');

        recentList.innerHTML = recentItems;

        document.querySelectorAll('.recent-item').forEach(item => {
            item.addEventListener('click', () => {
                const id = parseInt(item.dataset.id);
                this.loadFromHistory(id);
            });
        });
    }

    loadFromHistory(id) {
        const item = this.history.find(h => h.id === id);
        if (!item) return;

        this.switchType(item.type);
        
        setTimeout(() => {
            switch(item.type) {
                case 'text':
                    document.getElementById('text-content').value = item.content;
                    break;
                case 'url':
                    document.getElementById('url-content').value = item.content;
                    break;
                case 'wifi':
                    if (item.content.includes('WIFI:')) {
                        const parts = item.content.split(';');
                        const ssid = parts.find(p => p.startsWith('S:'))?.substring(2) || '';
                        const password = parts.find(p => p.startsWith('P:'))?.substring(2) || '';
                        const security = parts.find(p => p.startsWith('T:'))?.substring(2) || 'WPA';
                        
                        document.getElementById('wifi-ssid').value = ssid;
                        document.getElementById('wifi-password').value = password;
                        document.getElementById('wifi-security').value = security;
                    }
                    break;
                case 'email':
                    if (item.content.startsWith('mailto:')) {
                        const url = new URL(item.content);
                        document.getElementById('email-to').value = url.pathname;
                        document.getElementById('email-subject').value = url.searchParams.get('subject') || '';
                        document.getElementById('email-body').value = url.searchParams.get('body') || '';
                    }
                    break;
                case 'vcard':
                    const lines = item.content.split('\n');
                    lines.forEach(line => {
                        if (line.startsWith('FN:')) {
                            document.getElementById('vcard-name').value = line.substring(3);
                        } else if (line.startsWith('ORG:')) {
                            document.getElementById('vcard-org').value = line.substring(4);
                        } else if (line.startsWith('TEL:')) {
                            document.getElementById('vcard-phone').value = line.substring(4);
                        } else if (line.startsWith('EMAIL:')) {
                            document.getElementById('vcard-email').value = line.substring(6);
                        } else if (line.startsWith('URL:')) {
                            document.getElementById('vcard-url').value = line.substring(4);
                        }
                    });
                    break;
            }

            if (item.size) {
                document.getElementById('qr-size').value = item.size;
            }
            
            this.validateCurrentInput();
            this.showNotification('Loaded from history', 'success');
        }, 50);
    }

    toggleHistory() {
        const sidebar = document.querySelector('.sidebar');
        const workspace = document.querySelector('.workspace');
        const overlay = document.getElementById('sidebar-overlay');

        if (window.innerWidth < 1200) {
            sidebar.classList.toggle('show');
            overlay.classList.toggle('show');
            
            if (sidebar.classList.contains('show')) {
                this.showNotification('History panel shown', 'success');
                overlay.addEventListener('click', () => this.closeHistory(), { once: true });
            } else {
                this.showNotification('History panel hidden', 'success');
            }
        } else {
            if (sidebar.style.display === 'none' || window.getComputedStyle(sidebar).display === 'none') {
                sidebar.style.display = 'flex';
                workspace.style.gridTemplateColumns = '320px 1fr 420px';
                this.showNotification('History panel shown', 'success');
            } else {
                sidebar.style.display = 'none';
                workspace.style.gridTemplateColumns = '1fr 420px';
                this.showNotification('History panel hidden', 'success');
            }
        }
    }

    closeHistory() {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        
        if (window.innerWidth < 1200) {
            sidebar.classList.remove('show');
            overlay.classList.remove('show');
        } else {
            sidebar.style.display = 'none';
            document.querySelector('.workspace').style.gridTemplateColumns = '1fr 420px';
        }
    }

    showNotification(message, type = 'success') {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.className = `notification ${type}`;
        
        setTimeout(() => notification.classList.add('show'), 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new QRStudio();
}); 