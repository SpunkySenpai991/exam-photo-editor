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

// Exam specifications database
const examSpecs = {
    jee: {
        name: "JEE Main",
        photo: {
            width: 200,
            height: 230,
            format: "jpg",
            maxSize: 50,
            ratio: "200:230"
        },
        signature: {
            width: 300,
            height: 80,
            format: "jpg",
            maxSize: 30,
            ratio: "300:80"
        }
    },
    neet: {
        name: "NEET UG",
        photo: {
            width: 200,
            height: 230,
            format: "jpg",
            maxSize: 50,
            ratio: "200:230"
        },
        signature: {
            width: 300,
            height: 80,
            format: "jpg",
            maxSize: 30,
            ratio: "300:80"
        }
    },
    cuet: {
        name: "CUET (UG)",
        photo: {
            width: 200,
            height: 230,
            format: "jpg",
            maxSize: 50,
            ratio: "200:230"
        },
        signature: {
            width: 300,
            height: 80,
            format: "jpg",
            maxSize: 30,
            ratio: "300:80"
        }
    },
    gate: {
        name: "GATE",
        photo: {
            width: 240,
            height: 320,
            format: "jpg",
            maxSize: 100,
            ratio: "3:4"
        },
        signature: {
            width: 320,
            height: 100,
            format: "jpg",
            maxSize: 50,
            ratio: "320:100"
        }
    },
    cat: {
        name: "CAT",
        photo: {
            width: 240,
            height: 320,
            format: "jpg",
            maxSize: 100,
            ratio: "3:4"
        },
        signature: {
            width: 240,
            height: 80,
            format: "jpg",
            maxSize: 50,
            ratio: "3:1"
        }
    },
    upsc: {
        name: "UPSC Civil Services",
        photo: {
            width: 300,
            height: 400,
            format: "jpg",
            maxSize: 100,
            ratio: "3:4"
        },
        signature: {
            width: 300,
            height: 100,
            format: "jpg",
            maxSize: 50,
            ratio: "3:1"
        }
    },
    ssc: {
        name: "SSC CGL",
        photo: {
            width: 200,
            height: 230,
            format: "jpg",
            maxSize: 50,
            ratio: "200:230"
        },
        signature: {
            width: 300,
            height: 80,
            format: "jpg",
            maxSize: 30,
            ratio: "300:80"
        }
    },
    ibps: {
        name: "IBPS PO",
        photo: {
            width: 200,
            height: 230,
            format: "jpg",
            maxSize: 50,
            ratio: "200:230"
        },
        signature: {
            width: 300,
            height: 80,
            format: "jpg",
            maxSize: 30,
            ratio: "300:80"
        }
    },
    nda: {
        name: "NDA & NA",
        photo: {
            width: 200,
            height: 230,
            format: "jpg",
            maxSize: 50,
            ratio: "200:230"
        },
        signature: {
            width: 300,
            height: 80,
            format: "jpg",
            maxSize: 30,
            ratio: "300:80"
        }
    },
    clat: {
        name: "CLAT",
        photo: {
            width: 200,
            height: 230,
            format: "jpg",
            maxSize: 50,
            ratio: "200:230"
        },
        signature: {
            width: 300,
            height: 80,
            format: "jpg",
            maxSize: 30,
            ratio: "300:80"
        }
    }
};

// Global variables
let selectedExam = null;
let uploadedPhoto = null;
let uploadedSign = null;

// DOM Elements
const examSelect = document.getElementById('examSelect');
const examInfo = document.getElementById('examInfo');
const photoReq = document.getElementById('photoReq');
const signReq = document.getElementById('signReq');
const uploadSection = document.getElementById('uploadSection');
const processSection = document.getElementById('processSection');
const downloadSection = document.getElementById('downloadSection');

const photoUpload = document.getElementById('photoUpload');
const signUpload = document.getElementById('signUpload');
const photoPreview = document.getElementById('photoPreview');
const signPreview = document.getElementById('signPreview');
const photoImg = document.getElementById('photoImg');
const signImg = document.getElementById('signImg');
const photoSize = document.getElementById('photoSize');
const signSize = document.getElementById('signSize');

const processBtn = document.getElementById('processBtn');
const processingMsg = document.getElementById('processingMsg');
const resetBtn = document.getElementById('resetBtn');

const downloadPhoto = document.getElementById('downloadPhoto');
const downloadSign = document.getElementById('downloadSign');
const processedPhoto = document.getElementById('processedPhoto');
const processedSign = document.getElementById('processedSign');

// Event Listeners
examSelect.addEventListener('change', handleExamSelection);
photoUpload.addEventListener('change', (e) => handleFileUpload(e, 'photo'));
signUpload.addEventListener('change', (e) => handleFileUpload(e, 'sign'));
processBtn.addEventListener('click', processImages);
resetBtn.addEventListener('click', resetForm);

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
        uploadSection.style.display = 'block';
    } else {
        examInfo.style.display = 'none';
        uploadSection.style.display = 'none';
        processSection.style.display = 'none';
    }
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

    const reader = new FileReader();

    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            if (type === 'photo') {
                uploadedPhoto = img;
                photoImg.src = e.target.result;
                photoPreview.style.display = 'block';
                photoSize.textContent = `Original: ${img.width} x ${img.height} px | ${(file.size / 1024).toFixed(2)} KB`;
            } else {
                uploadedSign = img;
                signImg.src = e.target.result;
                signPreview.style.display = 'block';
                signSize.textContent = `Original: ${img.width} x ${img.height} px | ${(file.size / 1024).toFixed(2)} KB`;
            }

            // Show process button if both files uploaded
            if (uploadedPhoto && uploadedSign) {
                processSection.style.display = 'block';
            }
        };
        img.src = e.target.result;
    };

    reader.readAsDataURL(file);
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

        // Start with high quality
        let quality = 0.92;

        function tryConvert() {
            canvas.toBlob((blob) => {
                resolve(blob);
            }, mimeType, quality);
        }

        tryConvert();
    });
}

// Process images
async function processImages() {
    if (!uploadedPhoto || !uploadedSign || !selectedExam) {
        alert('Please upload both photo and signature!');
        return;
    }

    // Show processing message
    processBtn.style.display = 'none';
    processingMsg.style.display = 'block';

    try {
        // Process photo
        const processedPhotoBlob = await resizeImage(
            uploadedPhoto,
            selectedExam.photo.width,
            selectedExam.photo.height,
            selectedExam.photo.format
        );

        // Process signature
        const processedSignBlob = await resizeImage(
            uploadedSign,
            selectedExam.signature.width,
            selectedExam.signature.height,
            selectedExam.signature.format
        );

        // Display processed images
        processedPhoto.src = URL.createObjectURL(processedPhotoBlob);
        processedSign.src = URL.createObjectURL(processedSignBlob);

        // Store blobs for download
        processedPhoto.blob = processedPhotoBlob;
        processedSign.blob = processedSignBlob;

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
    downloadImage(processedPhoto.blob, `${examSelect.value}_photo.${selectedExam.photo.format}`);
});

downloadSign.addEventListener('click', () => {
    downloadImage(processedSign.blob, `${examSelect.value}_signature.${selectedExam.signature.format}`);
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

// Reset form
function resetForm() {
    // Reset variables
    selectedExam = null;
    uploadedPhoto = null;
    uploadedSign = null;

    // Reset form
    examSelect.value = '';
    photoUpload.value = '';
    signUpload.value = '';

    // Hide sections
    examInfo.style.display = 'none';
    uploadSection.style.display = 'none';
    processSection.style.display = 'none';
    downloadSection.style.display = 'none';
    photoPreview.style.display = 'none';
    signPreview.style.display = 'none';
    processingMsg.style.display = 'none';
    processBtn.style.display = 'block';

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
