const buttons = document.querySelectorAll('.season-btn');
const panels = document.querySelectorAll('.season-panel');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const selected = Number(button.dataset.season);

        buttons.forEach((btn) => {
            btn.classList.remove('bg-blush', 'text-[#1b1018]');
            btn.classList.add('bg-transparent', 'text-white');
            btn.classList.remove('active');
        });

        button.classList.add('bg-blush', 'text-[#1b1018]');
        button.classList.remove('bg-transparent', 'text-white');
        button.classList.add('active');

        panels.forEach((panel) => {
            panel.classList.toggle('hidden', Number(panel.dataset.panel) !== selected);
        });
    });
});