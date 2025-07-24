class QRGenerator {
    constructor() {
        this.currentType = 'text';
        this.currentQRCode = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.showActiveInput();
    }

    setupEventListeners() {
        const typeBtns = document.querySelectorAll('.type-btn');
        const generateBtn = document.getElementById('generate-btn');
        const downloadBtn = document.getElementById('download-btn');
        const copyBtn = document.getElementById('copy-btn');

        typeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.switchType(btn.dataset.type);
            });
        });

        generateBtn.addEventListener('click', () => {
            this.generateQRCode();
        });

        downloadBtn.addEventListener('click', () => {
            this.downloadQRCode();
        });

        copyBtn.addEventListener('click', () => {
            this.copyToClipboard();
        });

        this.setupInputListeners();
    }

    setupInputListeners() {
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                this.validateInputs();
            });
        });
    }

    switchType(type) {
        this.currentType = type;
        
        document.querySelectorAll('.type-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-type="${type}"]`).classList.add('active');

        document.querySelectorAll('.input-group').forEach(group => {
            group.classList.remove('active');
        });
        document.querySelector(`.${type}-input`).classList.add('active');

        this.validateInputs();
    }

    showActiveInput() {
        document.querySelector('.text-input').classList.add('active');
        this.validateInputs();
    }

    validateInputs() {
        const generateBtn = document.getElementById('generate-btn');
        let isValid = false;

        switch(this.currentType) {
            case 'text':
                const textContent = document.getElementById('text-content').value.trim();
                isValid = textContent.length > 0;
                break;
            case 'url':
                const urlContent = document.getElementById('url-content').value.trim();
                isValid = this.isValidURL(urlContent);
                break;
            case 'wifi':
                const wifiSSID = document.getElementById('wifi-ssid').value.trim();
                isValid = wifiSSID.length > 0;
                break;
            case 'email':
                const emailTo = document.getElementById('email-to').value.trim();
                isValid = this.isValidEmail(emailTo);
                break;
        }

        generateBtn.disabled = !isValid;
    }

    isValidURL(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
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
                
                if (security === 'nopass') {
                    return `WIFI:T:nopass;S:${ssid};;`;
                } else {
                    return `WIFI:T:${security};S:${ssid};P:${password};;`;
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
            
            default:
                return '';
        }
    }

    async generateQRCode() {
        const content = this.getQRContent();
        if (!content) {
            this.showToast('Please enter valid content', 'error');
            return;
        }

        const generateBtn = document.getElementById('generate-btn');
        const originalText = generateBtn.innerHTML;
        generateBtn.innerHTML = '<span class="loading"></span>Generating...';
        generateBtn.disabled = true;

        try {
            const size = parseInt(document.getElementById('qr-size').value);
            const errorCorrectionLevel = document.getElementById('error-correction').value;
            
            const options = {
                width: size,
                height: size,
                errorCorrectionLevel: errorCorrectionLevel,
                type: 'image/png',
                quality: 0.92,
                margin: 2,
                color: {
                    dark: '#000000',
                    light: '#FFFFFF'
                }
            };

            const qrPreview = document.getElementById('qr-preview');
            qrPreview.innerHTML = '';
            
            const canvas = document.createElement('canvas');
            await QRCode.toCanvas(canvas, content, options);
            
            qrPreview.appendChild(canvas);
            qrPreview.classList.add('has-qr');
            
            this.currentQRCode = canvas;
            
            document.getElementById('download-section').style.display = 'flex';
            
            this.showToast('QR Code generated successfully!');
            
        } catch (error) {
            console.error('Error generating QR code:', error);
            this.showToast('Error generating QR code. Please try again.', 'error');
        } finally {
            generateBtn.innerHTML = originalText;
            generateBtn.disabled = false;
            this.validateInputs();
        }
    }

    downloadQRCode() {
        if (!this.currentQRCode) {
            this.showToast('No QR code to download', 'error');
            return;
        }

        try {
            const canvas = this.currentQRCode;
            const link = document.createElement('a');
            link.download = `qr-code-${this.currentType}-${Date.now()}.png`;
            link.href = canvas.toDataURL();
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            this.showToast('QR Code downloaded successfully!');
        } catch (error) {
            console.error('Error downloading QR code:', error);
            this.showToast('Error downloading QR code', 'error');
        }
    }

    async copyToClipboard() {
        if (!this.currentQRCode) {
            this.showToast('No QR code to copy', 'error');
            return;
        }

        try {
            const canvas = this.currentQRCode;
            
            if (navigator.clipboard && canvas.toBlob) {
                canvas.toBlob(async (blob) => {
                    try {
                        const item = new ClipboardItem({ 'image/png': blob });
                        await navigator.clipboard.write([item]);
                        this.showToast('QR Code copied to clipboard!');
                    } catch (error) {
                        this.fallbackCopy(canvas);
                    }
                });
            } else {
                this.fallbackCopy(canvas);
            }
        } catch (error) {
            console.error('Error copying QR code:', error);
            this.showToast('Error copying QR code', 'error');
        }
    }

    fallbackCopy(canvas) {
        try {
            const dataURL = canvas.toDataURL();
            const textarea = document.createElement('textarea');
            textarea.value = dataURL;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            
            this.showToast('QR Code data copied to clipboard!');
        } catch (error) {
            this.showToast('Copy not supported in this browser', 'error');
        }
    }

    showToast(message, type = 'success') {
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new QRGenerator();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        const generateBtn = document.getElementById('generate-btn');
        if (!generateBtn.disabled) {
            generateBtn.click();
        }
    }
});

window.addEventListener('beforeunload', (e) => {
    const hasQRCode = document.querySelector('.qr-preview.has-qr');
    if (hasQRCode) {
        e.preventDefault();
        e.returnValue = '';
    }
}); 