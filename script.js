// Check for URL parameters on load
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    let memberId = urlParams.get('id');
    
    if (memberId) {
        // Strip THP- if present in URL
        memberId = memberId.replace('THP-', '');
        document.getElementById('ref-code').value = memberId;
        // Optionally update the page title or header
        const namePlaceholder = document.querySelector('.hero h1');
        if (namePlaceholder) {
            namePlaceholder.innerText = "ยินดีต้อนรับสู่ครอบครัวเดียวกัน";
        }
    }
};

function copyToClipboard(id, btnId) {
    const input = document.getElementById(id);
    const btn = document.getElementById(btnId);

    // Select the text
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices

    // Copy to clipboard
    try {
        navigator.clipboard.writeText(input.value).then(() => {
            handleSuccess(btn);
        }).catch(err => {
            // Fallback for older browsers
            document.execCommand('copy');
            handleSuccess(btn);
        });
    } catch (err) {
        document.execCommand('copy');
        handleSuccess(btn);
    }
}

function handleSuccess(btn) {
    const originalText = btn.innerText;
    btn.innerText = 'คัดลอกแล้ว!';
    btn.classList.add('copied');

    setTimeout(() => {
        btn.innerText = originalText;
        btn.classList.remove('copied');
    }, 2000);
}
