
document.querySelectorAll('.info-row').forEach(row => {
  const imgSrc = row.dataset.photo;
  if (!imgSrc) return;

  if (!row.querySelector('.photo-tooltip')) {
    const tooltip = document.createElement('div');
    tooltip.className = 'photo-tooltip';

    const img = document.createElement('img');
    img.alt = 'User photo';
    img.src = imgSrc;

    tooltip.appendChild(img);
    row.appendChild(tooltip);

    const showTooltip = () => {
      tooltip.style.opacity = '1';
      tooltip.style.transform = 'translateY(0)';
      tooltip.style.pointerEvents = 'auto';
    };

    const hideTooltip = () => {
      tooltip.style.opacity = '0';
      tooltip.style.transform = 'translateY(8px)';
      tooltip.style.pointerEvents = 'none';
    };

    row.addEventListener('mouseenter', showTooltip);
    row.addEventListener('mouseleave', hideTooltip);

    row.setAttribute('tabindex', '0');
    row.addEventListener('focus', showTooltip);
    row.addEventListener('blur', hideTooltip);

    row.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        hideTooltip();
        row.blur();
      }
    });
  }
});
