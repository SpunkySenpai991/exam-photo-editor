// Theme Management
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Load saved theme or use system preference
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    }
}

// Update theme icon
function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.textContent = '☀️';
    } else {
        themeIcon.textContent = '🌙';
    }
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

// Initialize theme on page load
loadTheme();

// Theme toggle event listener
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Exam specifications database - Extended with more exams
const examSpecs = {
    // Engineering & Science
    jee: {
        name: "JEE Main",
        photo: { width: 200, height: 230, format: "jpg", maxSize: 50, ratio: "200:230" },
        signature: { width: 300, height: 80, format: "jpg", maxSize: 30, ratio: "300:80" }
    },
    jee_advanced: {
        name: "JEE Advanced",
        photo: { width: 200, height: 230, format: "jpg", maxSize: 50, ratio: "200:230" },
        signature: { width: 300, height: 80, format: "jpg", maxSize: 30, ratio: "300:80" }
    },
    gate: {
        name: "GATE",
        photo: { width: 240, height: 320, format: "jpg", maxSize: 100, ratio: "3:4" },
        signature: { width: 320, height: 100, format: "jpg", maxSize: 50, ratio: "320:100" }
    },
    neet: {
        name: "NEET UG",
        photo: { width: 200, height: 230, format: "jpg", maxSize: 50, ratio: "200:230" },
        signature: { width: 300, height: 80, format: "jpg", maxSize: 30, ratio: "300:80" }
    },

    // University & Higher Education
    cuet: {
        name: "CUET (UG)",
        photo: { width: 200, height: 230, format: "jpg", maxSize: 50, ratio: "200:230" },
        signature: { width: 300, height: 80, format: "jpg", maxSize: 30, ratio: "300:80" }
    },
    ugc_net: {
        name: "UGC NET",
        photo: { width: 200, height: 230, format: "jpg", maxSize: 50, ratio: "200:230" },
        signature: { width: 300, height: 80, format: "jpg", maxSize: 30, ratio: "300:80" }
    },
    cat: {
        name: "CAT",
        photo: { width: 240, height: 320, format: "jpg", maxSize: 100, ratio: "3:4" },
        signature: { width: 240, height: 80, format: "jpg", maxSize: 50, ratio: "3:1" }
    },
    clat: {
        name: "CLAT",
        photo: { width: 200, height: 230, format: "jpg", maxSize: 50, ratio: "200:230" },
        signature: { width: 300, height: 80, format: "jpg", maxSize: 30, ratio: "300:80" }
    },
    ctet: {
        name: "CTET",
        photo: { width: 200, height: 230, format: "jpg", maxSize: 50, ratio: "200:230" },
        signature: { width: 300, height: 80, format: "jpg", maxSize: 30, ratio: "300:80" }
    },

    // Government & Civil Services
    upsc: {
        name: "UPSC Civil Services",
        photo: { width: 300, height: 400, format: "jpg", maxSize: 100, ratio: "3:4" },
        signature: { width: 300, height: 100, format: "jpg", maxSize: 50, ratio: "3:1" }
    },
    uppsc: {
        name: "UPPSC",
        photo: { width: 200, height: 230, format: "jpg", maxSize: 50, ratio: "200:230" },
        signature: { width: 300, height: 80, format: "jpg", maxSize: 30, ratio: "300:80" }
    },
    bpsc: {
        name: "BPSC",
        photo: { width: 200, height: 230, format: "jpg", maxSize: 50, ratio: "200:230" },
        signature: { width: 300, height: 80, format: "jpg", maxSize: 30, ratio: "300:80" }
    },
    mppsc: {
        name: "MPPSC",
        photo: { width: 200, height: 230, format: "jpg", maxSize: 50, ratio: "200:230" },
        signature: { width: 300, height: 80, format: "jpg", maxSize: 30, ratio: "300:80" }
    },
    rpsc: {
        name: "RPSC",
        photo: { width: 200, height: 230, format: "jpg", maxSize: 50, ratio: "200:230" },
        signature: { width: 300, height: 80, format: "jpg", maxSize: 30, ratio: "300:80" }
    },

    // Banking & Insurance
    ibps: {
        name: "IBPS PO/Clerk",
        photo: { width: 200, height: 230, format: "jpg", maxSize: 50, ratio: "200:230" },
        signature: { width: 300, height: 80, format: "jpg", maxSize: 30, ratio: "300:80" }
    },
    sbi: {
        name: "SBI PO/Clerk",
        photo: { width: 200, height: 230, format: "jpg", maxSize: 50, ratio: "200:230" },
        signature: { width: 300, height: 80, format: "jpg", maxSize: 30, ratio: "300:80" }
    },
    rbi: {
        name: "RBI Grade B",
        photo: { width: 200, height: 230, format: "jpg", maxSize: 50, ratio: "200:230" },
        signature: { width: 300, height: 80, format: "jpg", maxSize: 30, ratio: "300:80" }
    },
    lic: {
        name: "LIC AAO",
        photo: { width: 200, height: 230, format: "jpg", maxSize: 50, ratio: "200:230" },
        signature: { width: 300, height: 80, format: "jpg", maxSize: 30, ratio: "300:80" }
    },

    // SSC & Railway
    ssc: {
        name: "SSC CGL/CHSL",
        photo: { width: 200, height: 230, format: "jpg", maxSize: 50, ratio: "200:230" },
        signature: { width: 300, height: 80, format: "jpg", maxSize: 30, ratio: "300:80" }
    },
    rrb_ntpc: {
        name: "RRB NTPC",
        photo: { width: 200, height: 230, format: "jpg", maxSize: 50, ratio: "200:230" },
        signature: { width: 300, height: 80, format: "jpg", maxSize: 30, ratio: "300:80" }
    },
    rrb_je: {
        name: "RRB JE",
        photo: { width: 200, height: 230, format: "jpg", maxSize: 50, ratio: "200:230" },
        signature: { width: 300, height: 80, format: "jpg", maxSize: 30, ratio: "300:80" }
    },
    rrb_group_d: {
        name: "RRB Group D",
        photo: { width: 200, height: 230, format: "jpg", maxSize: 50, ratio: "200:230" },
        signature: { width: 300, height: 80, format: "jpg", maxSize: 30, ratio: "300:80" }
    },

    // Defence
    nda: {
        name: "NDA & NA",
        photo: { width: 200, height: 230, format: "jpg", maxSize: 50, ratio: "200:230" },
        signature: { width: 300, height: 80, format: "jpg", maxSize: 30, ratio: "300:80" }
    },
    cds: {
        name: "CDS",
        photo: { width: 200, height: 230, format: "jpg", maxSize: 50, ratio: "200:230" },
        signature: { width: 300, height: 80, format: "jpg", maxSize: 30, ratio: "300:80" }
    },
    afcat: {
        name: "AFCAT",
        photo: { width: 200, height: 230, format: "jpg", maxSize: 50, ratio: "200:230" },
        signature: { width: 300, height: 80, format: "jpg", maxSize: 30, ratio: "300:80" }
    }
};

// Global variables
let selectedExam = null;
let uploadedPhoto = null;
let uploadedSign = null;
let processingMode = 'both'; // 'both', 'photo', 'signature'
let imageQuality = 0.92;

// DOM Elements
const examSelect = document.getElementById('examSelect');
const examInfo = document.getElementById('examInfo');
const photoReq = document.getElementById('photoReq');
const signReq = document.getElementById('signReq');
const modeSection = document.getElementById('modeSection');
const uploadSection = document.getElementById('uploadSection');
const processSection = document.getElementById('processSection');
const downloadSection = document.getElementById('downloadSection');

const photoUploadBox = document.getElementById('photoUploadBox');
const signUploadBox = document.getElementById('signUploadBox');
const photoDropZone = document.getElementById('photoDropZone');
const signDropZone = document.getElementById('signDropZone');
const photoUpload = document.getElementById('photoUpload');
const signUpload = document.getElementById('signUpload');
const photoPreview = document.getElementById('photoPreview');
const signPreview = document.getElementById('signPreview');
const photoImg = document.getElementById('photoImg');
const signImg = document.getElementById('signImg');
const photoSize = document.getElementById('photoSize');
const signSize = document.getElementById('signSize');

const qualitySlider = document.getElementById('qualitySlider');
const qualityValue = document.getElementById('qualityValue');

const processBtn = document.getElementById('processBtn');
const processingMsg = document.getElementById('processingMsg');
const resetBtn = document.getElementById('resetBtn');
const downloadAllBtn = document.getElementById('downloadAllBtn');

const downloadPhoto = document.getElementById('downloadPhoto');
const downloadSign = document.getElementById('downloadSign');
const processedPhoto = document.getElementById('processedPhoto');
const processedSign = document.getElementById('processedSign');
const processedPhotoInfo = document.getElementById('processedPhotoInfo');
const processedSignInfo = document.getElementById('processedSignInfo');
const photoDownloadItem = document.getElementById('photoDownloadItem');
const signDownloadItem = document.getElementById('signDownloadItem');
const downloadGrid = document.getElementById('downloadGrid');
const sizeWarnings = document.getElementById('sizeWarnings');

const removePhotoBtn = document.getElementById('removePhoto');
const removeSignBtn = document.getElementById('removeSign');

// Event Listeners
examSelect.addEventListener('change', handleExamSelection);
photoUpload.addEventListener('change', (e) => handleFileUpload(e, 'photo'));
signUpload.addEventListener('change', (e) => handleFileUpload(e, 'sign'));
processBtn.addEventListener('click', processImages);
resetBtn.addEventListener('click', resetForm);
downloadAllBtn.addEventListener('click', downloadAllAsZip);

// Quality slider
qualitySlider.addEventListener('input', (e) => {
    imageQuality = e.target.value / 100;
    qualityValue.textContent = `${e.target.value}%`;
});

// Remove buttons
removePhotoBtn.addEventListener('click', () => removeImage('photo'));
removeSignBtn.addEventListener('click', () => removeImage('sign'));

// Mode selection buttons
document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => handleModeSelection(btn.dataset.mode));
});

// Drag and drop setup
setupDragAndDrop(photoDropZone, 'photo');
setupDragAndDrop(signDropZone, 'signature');

// Handle exam selection
function handleExamSelection() {
    const examCode = examSelect.value;

    if (examCode && examSpecs[examCode]) {
        selectedExam = examSpecs[examCode];

        // Display requirements
        photoReq.innerHTML = `
            <strong>Dimensions:</strong> ${selectedExam.photo.width} x ${selectedExam.photo.height} pixels<br>
            <strong>Ratio:</strong> ${selectedExam.photo.ratio}<br>
            <strong>Format:</strong> ${selectedExam.photo.format.toUpperCase()}<br>
            <strong>Max Size:</strong> ${selectedExam.photo.maxSize} KB
        `;

        signReq.innerHTML = `
            <strong>Dimensions:</strong> ${selectedExam.signature.width} x ${selectedExam.signature.height} pixels<br>
            <strong>Ratio:</strong> ${selectedExam.signature.ratio}<br>
            <strong>Format:</strong> ${selectedExam.signature.format.toUpperCase()}<br>
            <strong>Max Size:</strong> ${selectedExam.signature.maxSize} KB
        `;

        examInfo.style.display = 'block';
        modeSection.style.display = 'block';

        // Reset mode and hide upload until mode is selected
        processingMode = null;
        document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
        uploadSection.style.display = 'none';
        processSection.style.display = 'none';
    } else {
        examInfo.style.display = 'none';
        modeSection.style.display = 'none';
        uploadSection.style.display = 'none';
        processSection.style.display = 'none';
    }
}

// Handle mode selection
function handleModeSelection(mode) {
    processingMode = mode;

    // Update active button
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
    });

    // Show/hide upload boxes based on mode
    const uploadGroup = document.querySelector('.upload-group');

    if (mode === 'photo') {
        photoUploadBox.classList.remove('hidden');
        signUploadBox.classList.add('hidden');
        uploadGroup.classList.add('single-mode');
    } else if (mode === 'signature') {
        photoUploadBox.classList.add('hidden');
        signUploadBox.classList.remove('hidden');
        uploadGroup.classList.add('single-mode');
    } else {
        photoUploadBox.classList.remove('hidden');
        signUploadBox.classList.remove('hidden');
        uploadGroup.classList.remove('single-mode');
    }

    uploadSection.style.display = 'block';
    checkProcessReady();
}

// Setup drag and drop
function setupDragAndDrop(dropZone, type) {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => {
            dropZone.classList.add('drag-over');
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => {
            dropZone.classList.remove('drag-over');
        });
    });

    dropZone.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            if (file.type.startsWith('image/')) {
                processDroppedFile(file, type);
            } else {
                alert('Please drop an image file!');
            }
        }
    });
}

// Process dropped file
function processDroppedFile(file, type) {
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            if (type === 'photo') {
                uploadedPhoto = img;
                photoImg.src = e.target.result;
                photoPreview.style.display = 'block';
                photoDropZone.style.display = 'none';
                photoSize.textContent = `Original: ${img.width} x ${img.height} px | ${(file.size / 1024).toFixed(2)} KB`;
            } else {
                uploadedSign = img;
                signImg.src = e.target.result;
                signPreview.style.display = 'block';
                signDropZone.style.display = 'none';
                signSize.textContent = `Original: ${img.width} x ${img.height} px | ${(file.size / 1024).toFixed(2)} KB`;
            }
            checkProcessReady();
        };
        img.src = e.target.result;
    };

    reader.readAsDataURL(file);
}

// Handle file upload
function handleFileUpload(event, type) {
    const file = event.target.files[0];
    if (!file) return;

    // Check if file is an image
    if (!file.type.startsWith('image/')) {
        alert('Please upload an image file!');
        return;
    }

    processDroppedFile(file, type);
}

// Remove image
function removeImage(type) {
    if (type === 'photo') {
        uploadedPhoto = null;
        photoImg.src = '';
        photoPreview.style.display = 'none';
        photoDropZone.style.display = 'flex';
        photoUpload.value = '';
    } else {
        uploadedSign = null;
        signImg.src = '';
        signPreview.style.display = 'none';
        signDropZone.style.display = 'flex';
        signUpload.value = '';
    }
    checkProcessReady();
}

// Check if ready to process
function checkProcessReady() {
    let ready = false;

    if (processingMode === 'photo' && uploadedPhoto) {
        ready = true;
    } else if (processingMode === 'signature' && uploadedSign) {
        ready = true;
    } else if (processingMode === 'both' && uploadedPhoto && uploadedSign) {
        ready = true;
    }

    if (ready && selectedExam) {
        processSection.style.display = 'block';
    } else {
        processSection.style.display = 'none';
    }
}

// Resize image to exact dimensions
function resizeImage(img, targetWidth, targetHeight, format) {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        canvas.width = targetWidth;
        canvas.height = targetHeight;

        const ctx = canvas.getContext('2d');

        // Fill with white background (important for JPG)
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, targetWidth, targetHeight);

        // Calculate scaling to cover the entire canvas while maintaining aspect ratio
        const scale = Math.max(targetWidth / img.width, targetHeight / img.height);
        const scaledWidth = img.width * scale;
        const scaledHeight = img.height * scale;

        // Center the image
        const x = (targetWidth - scaledWidth) / 2;
        const y = (targetHeight - scaledHeight) / 2;

        // Draw image
        ctx.drawImage(img, x, y, scaledWidth, scaledHeight);

        // Convert to blob with quality adjustment
        const mimeType = format === 'jpg' ? 'image/jpeg' : `image/${format}`;

        canvas.toBlob((blob) => {
            resolve(blob);
        }, mimeType, imageQuality);
    });
}

// Process images
async function processImages() {
    if (!selectedExam) {
        alert('Please select an exam!');
        return;
    }

    // Validate based on mode
    if (processingMode === 'photo' && !uploadedPhoto) {
        alert('Please upload a photo!');
        return;
    } else if (processingMode === 'signature' && !uploadedSign) {
        alert('Please upload a signature!');
        return;
    } else if (processingMode === 'both' && (!uploadedPhoto || !uploadedSign)) {
        alert('Please upload both photo and signature!');
        return;
    }

    // Show processing message
    processBtn.style.display = 'none';
    processingMsg.style.display = 'block';

    try {
        let processedPhotoBlob = null;
        let processedSignBlob = null;
        let warnings = [];

        // Process photo if needed
        if (processingMode === 'photo' || processingMode === 'both') {
            processedPhotoBlob = await resizeImage(
                uploadedPhoto,
                selectedExam.photo.width,
                selectedExam.photo.height,
                selectedExam.photo.format
            );

            processedPhoto.src = URL.createObjectURL(processedPhotoBlob);
            processedPhoto.blob = processedPhotoBlob;

            const photoSizeKB = (processedPhotoBlob.size / 1024).toFixed(2);
            processedPhotoInfo.textContent = `${selectedExam.photo.width} x ${selectedExam.photo.height} px | ${photoSizeKB} KB`;

            if (processedPhotoBlob.size / 1024 > selectedExam.photo.maxSize) {
                processedPhotoInfo.classList.add('warning');
                warnings.push(`Photo size (${photoSizeKB} KB) exceeds the maximum allowed (${selectedExam.photo.maxSize} KB). Try reducing the quality.`);
            } else {
                processedPhotoInfo.classList.remove('warning');
            }
        }

        // Process signature if needed
        if (processingMode === 'signature' || processingMode === 'both') {
            processedSignBlob = await resizeImage(
                uploadedSign,
                selectedExam.signature.width,
                selectedExam.signature.height,
                selectedExam.signature.format
            );

            processedSign.src = URL.createObjectURL(processedSignBlob);
            processedSign.blob = processedSignBlob;

            const signSizeKB = (processedSignBlob.size / 1024).toFixed(2);
            processedSignInfo.textContent = `${selectedExam.signature.width} x ${selectedExam.signature.height} px | ${signSizeKB} KB`;

            if (processedSignBlob.size / 1024 > selectedExam.signature.maxSize) {
                processedSignInfo.classList.add('warning');
                warnings.push(`Signature size (${signSizeKB} KB) exceeds the maximum allowed (${selectedExam.signature.maxSize} KB). Try reducing the quality.`);
            } else {
                processedSignInfo.classList.remove('warning');
            }
        }

        // Show/hide download items based on mode
        if (processingMode === 'photo') {
            photoDownloadItem.classList.remove('hidden');
            signDownloadItem.classList.add('hidden');
            downloadGrid.classList.add('single-mode');
            downloadAllBtn.style.display = 'none';
        } else if (processingMode === 'signature') {
            photoDownloadItem.classList.add('hidden');
            signDownloadItem.classList.remove('hidden');
            downloadGrid.classList.add('single-mode');
            downloadAllBtn.style.display = 'none';
        } else {
            photoDownloadItem.classList.remove('hidden');
            signDownloadItem.classList.remove('hidden');
            downloadGrid.classList.remove('single-mode');
            downloadAllBtn.style.display = 'flex';
        }

        // Show warnings if any
        if (warnings.length > 0) {
            sizeWarnings.innerHTML = `<strong>⚠️ Warning:</strong><br>${warnings.join('<br>')}`;
            sizeWarnings.style.display = 'block';
        } else {
            sizeWarnings.style.display = 'none';
        }

        // Show download section
        processingMsg.style.display = 'none';
        downloadSection.style.display = 'block';

        // Scroll to download section
        downloadSection.scrollIntoView({ behavior: 'smooth' });

    } catch (error) {
        alert('Error processing images. Please try again.');
        console.error(error);
        processBtn.style.display = 'block';
        processingMsg.style.display = 'none';
    }
}

// Download handlers
downloadPhoto.addEventListener('click', () => {
    if (processedPhoto.blob) {
        downloadImage(processedPhoto.blob, `${examSelect.value}_photo.${selectedExam.photo.format}`);
    }
});

downloadSign.addEventListener('click', () => {
    if (processedSign.blob) {
        downloadImage(processedSign.blob, `${examSelect.value}_signature.${selectedExam.signature.format}`);
    }
});

// Download image function
function downloadImage(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Download all as ZIP
async function downloadAllAsZip() {
    if (typeof JSZip === 'undefined') {
        alert('ZIP library not loaded. Please refresh the page and try again.');
        return;
    }

    const zip = new JSZip();
    const examCode = examSelect.value;

    if (processedPhoto.blob) {
        zip.file(`${examCode}_photo.${selectedExam.photo.format}`, processedPhoto.blob);
    }

    if (processedSign.blob) {
        zip.file(`${examCode}_signature.${selectedExam.signature.format}`, processedSign.blob);
    }

    try {
        const content = await zip.generateAsync({ type: 'blob' });
        downloadImage(content, `${examCode}_documents.zip`);
    } catch (error) {
        alert('Error creating ZIP file. Please download files individually.');
        console.error(error);
    }
}

// Reset form
function resetForm() {
    // Reset variables
    selectedExam = null;
    uploadedPhoto = null;
    uploadedSign = null;
    processingMode = null;
    imageQuality = 0.92;

    // Reset form elements
    examSelect.value = '';
    photoUpload.value = '';
    signUpload.value = '';
    qualitySlider.value = 92;
    qualityValue.textContent = '92%';

    // Reset mode buttons
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));

    // Reset upload boxes
    photoUploadBox.classList.remove('hidden');
    signUploadBox.classList.remove('hidden');
    document.querySelector('.upload-group').classList.remove('single-mode');

    // Hide sections
    examInfo.style.display = 'none';
    modeSection.style.display = 'none';
    uploadSection.style.display = 'none';
    processSection.style.display = 'none';
    downloadSection.style.display = 'none';
    photoPreview.style.display = 'none';
    signPreview.style.display = 'none';
    processingMsg.style.display = 'none';
    processBtn.style.display = 'block';
    sizeWarnings.style.display = 'none';

    // Show drop zones
    photoDropZone.style.display = 'flex';
    signDropZone.style.display = 'flex';

    // Reset download grid
    downloadGrid.classList.remove('single-mode');
    photoDownloadItem.classList.remove('hidden');
    signDownloadItem.classList.remove('hidden');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
