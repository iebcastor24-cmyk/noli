document.querySelectorAll('.project-item').forEach(item => {
  const img = item.querySelector('.project-pic');
  const descDiv = item.querySelector('.project-description');

  img.addEventListener('click', () => {
    // Hide all other descriptions first
    document.querySelectorAll('.project-description').forEach(d => d.classList.remove('show'));

    // Set the content with name in bold and description below
    const name = img.dataset.name || "";
    const description = img.dataset.description || "";
    descDiv.innerHTML = `<span class="project-name">${name}</span>${description}`;
    descDiv.classList.add('show');
  });
});