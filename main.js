// This function just counts what is in your HTML right now
function updateCounts() {
    const columns = document.querySelectorAll('.column');

    columns.forEach(column => {
        const header = column.querySelector('h4');
        const tasks = column.querySelectorAll('.task-card');
        
        // Get the name (TODO, DOING, etc.)
        const name = header.innerText.split('(')[0].trim();
        
        // Set the header to the actual count of cards present
        header.innerText = `${name} (${tasks.length})`;
    });
}

// make task cards keyboard-accessible and clickable
function enableTaskClicks() {
  document.querySelectorAll('.task-card').forEach(card => {
    card.setAttribute('role', 'button');
    card.tabIndex = 0;
    
    const titleEl = card.querySelector('h3');
    const title = titleEl ? titleEl.innerText : 'Task';

    function onOpen() {
      alert(title);
    }

    card.addEventListener('click', onOpen);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onOpen();
      }
    });
  });
}

// Run when page opens
document.addEventListener('DOMContentLoaded', () => {
  updateCounts();
  enableTaskClicks();
});