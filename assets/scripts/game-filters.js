// Game tag filtering functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterGroups = document.querySelectorAll('.game-filters-container');
  if (filterGroups.length === 0) return;
  
  const gameCards = document.querySelectorAll('.game-card');
  
  // Tracks the set of active filter values per filter group (e.g. "technical" -> Set of tag slugs)
  const activeFiltersByGroup = new Map();
  
  // Maps each filter group name to the data attribute on .game-card that holds its values
  const cardAttributeByGroup = {
    technical: 'technicalTags'
  };
  
  function cardMatchesGroup(card, groupName, activeValues) {
    if (activeValues.size === 0) return true;
    
    const cardAttribute = cardAttributeByGroup[groupName];
    const cardValues = (card.dataset[cardAttribute] || '').split(' ').filter(Boolean);
    
    // ANY (OR) match within a filter group
    return cardValues.some(value => activeValues.has(value));
  }
  
  function applyFilters() {
    gameCards.forEach(card => {
      // ALL (AND) match across filter groups
      const matchesAllGroups = Array.from(activeFiltersByGroup.entries()).every(
        ([groupName, activeValues]) => cardMatchesGroup(card, groupName, activeValues)
      );
      
      card.classList.toggle('is-hidden', !matchesAllGroups);
    });
  }
  
  filterGroups.forEach(filterGroup => {
    const groupName = filterGroup.dataset.filterGroup;
    activeFiltersByGroup.set(groupName, new Set());
    
    const filterButtons = filterGroup.querySelectorAll('.game-filter-btn');
    const clearButton = filterGroup.querySelector('.game-filter-clear');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filterValue = button.dataset.filterValue;
        const activeValues = activeFiltersByGroup.get(groupName);
        
        if (activeValues.has(filterValue)) {
          activeValues.delete(filterValue);
          button.classList.remove('active');
        } else {
          activeValues.add(filterValue);
          button.classList.add('active');
        }
        
        applyFilters();
      });
    });
    
    if (clearButton) {
      clearButton.addEventListener('click', () => {
        activeFiltersByGroup.get(groupName).clear();
        filterButtons.forEach(button => button.classList.remove('active'));
        applyFilters();
      });
    }
  });
});
