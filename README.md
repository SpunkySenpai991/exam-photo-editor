# Exam Photo & Signature Editor

A simple, mobile-friendly web application that automatically resizes photos and signatures according to different competitive exam requirements.

## Features

- **10+ Exam Formats Supported**: JEE Main, NEET, CUET, GATE, CAT, UPSC, SSC, IBPS, NDA, CLAT
- **Automatic Resizing**: Converts photos and signatures to exact pixel requirements
- **Format Conversion**: Automatically converts to required format (JPG/PNG)
- **Mobile-Friendly**: Works perfectly on phones, tablets, and desktops
- **Privacy First**: All processing happens in your browser - no uploads to any server
- **Instant Download**: Get your processed images immediately

## How to Use

1. **Open the website** - Simply open `index.html` in your browser
2. **Select your exam** - Choose from the dropdown menu
3. **View requirements** - See the exact specifications for your exam
4. **Upload files** - Upload your photo and signature
5. **Process** - Click "Process Images"
6. **Download** - Download your formatted images

## Supported Exams & Specifications

### JEE Main, NEET, CUET, SSC, IBPS, NDA, CLAT
- **Photo**: 200x230 pixels, JPG, Max 50KB
- **Signature**: 300x80 pixels, JPG, Max 30KB

### GATE
- **Photo**: 240x320 pixels (3:4 ratio), JPG, Max 100KB
- **Signature**: 320x100 pixels, JPG, Max 50KB

### CAT
- **Photo**: 240x320 pixels (3:4 ratio), JPG, Max 100KB
- **Signature**: 240x80 pixels (3:1 ratio), JPG, Max 50KB

### UPSC Civil Services
- **Photo**: 300x400 pixels (3:4 ratio), JPG, Max 100KB
- **Signature**: 300x100 pixels (3:1 ratio), JPG, Max 50KB

## Testing Locally

1. Download all files (index.html, style.css, script.js)
2. Keep them in the same folder
3. Double-click `index.html` to open in your browser
4. Test on your phone by accessing the file

## Deployment Options

### Option 1: GitHub Pages (FREE & EASY)

1. **Create a GitHub account** (if you don't have one)
   - Go to https://github.com
   - Click "Sign up"

2. **Create a new repository**
   - Click the "+" icon → "New repository"
   - Name it: `exam-photo-editor`
   - Make it public
   - Click "Create repository"

3. **Upload your files**
   - Click "uploading an existing file"
   - Drag and drop: `index.html`, `style.css`, `script.js`
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"

5. **Your website is live!**
   - URL will be: `https://yourusername.github.io/exam-photo-editor`
   - Wait 2-3 minutes for it to be live

### Option 2: Netlify (FREE with Custom Domain)

1. **Create account** at https://www.netlify.com
2. **Drag and drop** your folder to Netlify
3. **Get instant URL** like: `yoursite.netlify.app`
4. **Add custom domain** (optional): Settings → Domain Management

### Option 3: Vercel (FREE)

1. **Create account** at https://vercel.com
2. **Import project** from GitHub or upload files
3. **Deploy** - Get instant URL
4. **Custom domain** available

### Option 4: InfinityFree (FREE Hosting)

1. Go to https://www.infinityfree.net
2. Create account and set up hosting
3. Upload files via File Manager
4. Get free subdomain or connect custom domain

## Custom Domain Setup

### Buy a domain (₹99-500/year):
- **Namecheap**: https://www.namecheap.com
- **GoDaddy**: https://www.godaddy.com
- **Hostinger**: https://www.hostinger.in

### Popular domain examples:
- `examphotoeditor.com`
- `photoresize.in`
- `examimagetools.com`

### Connect domain to hosting:
1. In your domain provider, go to DNS settings
2. Add the nameservers from your hosting provider
3. Wait 24-48 hours for DNS propagation

## File Structure

```
exam-photo-editor/
│
├── index.html          # Main HTML file
├── style.css           # Styling and responsive design
├── script.js           # Image processing logic
└── README.md           # Documentation
```

## How It Works

1. **Client-Side Processing**: All image processing happens in your browser using HTML5 Canvas API
2. **No Server Required**: No backend needed - pure HTML/CSS/JavaScript
3. **Privacy**: Your images never leave your device
4. **Instant Results**: Fast processing without uploads

## Browser Support

- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Future Enhancements (Coming Soon)

- PDF conversion support
- Bulk processing (multiple photos at once)
- Crop tool before resizing
- Background removal
- More exam formats
- Save preferences

## Troubleshooting

**Q: Image quality is poor?**
- Use high-resolution source images for best results

**Q: File size too large?**
- The tool automatically compresses to meet size requirements

**Q: Not working on mobile?**
- Ensure you're using a modern browser (Chrome/Safari)

**Q: Can I add more exams?**
- Yes! Edit `script.js` and add specifications to `examSpecs` object

## Support

For issues or questions:
- Check browser console for errors
- Ensure all 3 files are in same folder
- Use latest browser version

## License

Free to use for students. Feel free to modify and share!

---

**Made with ❤️ for students**

All processing happens locally - your privacy is protected!
