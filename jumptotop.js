const btn = document.createElement('button');
btn.textContent = '↑';
Object.assign(btn.style, {
    position: 'fixed',
    bottom: '20px',
    right: '80px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    zIndex: '999',
    background: '#3535ff',
    color: '#fff'
});
btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.body.appendChild(btn);