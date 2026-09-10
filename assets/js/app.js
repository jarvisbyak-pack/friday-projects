const CONFIG = {
    // Replace with actual n8n webhook URL
    API_URL: 'https://n8n.your-domain.com/webhook/friday-projects'
};

document.getElementById('submitBtn').addEventListener('click', async () => {
    const status = document.getElementById('status');
    const path = document.getElementById('repoPath').value;
    const content = document.getElementById('fileContent').value;

    status.textContent = 'Processing...';
    status.className = '';

    try {
        const response = await fetch(CONFIG.API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ path, content })
        });

        if (!response.ok) throw new Error('Failed to communicate with Friday');

        status.textContent = 'Success! File updated.';
        status.className = 'success';
    } catch (err) {
        status.textContent = `Error: ${err.message}`;
        status.className = 'error';
    }
});
