// Game tag filtering functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterGroups = document.querySelectorAll('.game-filters-container');
  if (filterGroups.length === 0) return;
  
  const gameCards = document.querySelectorAll('.game-card');
  
  // Tracks the set of active filter values per filter group (e.g. "technical" -> Set of tag slugs)
  const activeFiltersByGroup = new Map();
  
  // Maps each filter group name to the data attribute on .game-card that holds its values
  const cardAttributeByGroup = {
    technical: 'technicalTags',
    design: 'designTags',
    team: 'teamTag',
    course: 'course'
  };
  
  // Groups without a "global" scope only affect cards within the matching
  // [data-filter-scope-container] element (e.g. the course filter only touches
  // cards in the Coursework section, leaving Personal/Game Jams untouched)
  const globalScope = 'global';
  
  function cardMatchesGroup(card, groupName, activeValues) {
    if (activeValues.size === 0) return true;
    
    const cardAttribute = cardAttributeByGroup[groupName];
    const cardValues = (card.dataset[cardAttribute] || '').split(' ').filter(Boolean);
    
    // ANY (OR) match within a filter group
    return cardValues.some(value => activeValues.has(value));
  }
  
  function applyFilters() {
    gameCards.forEach(card => {
      const cardScope = card.closest('[data-filter-scope-container]');
      const cardScopeName = cardScope ? cardScope.dataset.filterScopeContainer : globalScope;
      
      // ALL (AND) match across filter groups relevant to this card's scope
      const matchesAllGroups = Array.from(activeFiltersByGroup.entries()).every(([groupName, groupInfo]) => {
        const groupAppliesToCard = groupInfo.scope === globalScope || groupInfo.scope === cardScopeName;
        if (!groupAppliesToCard) return true;
        
        return cardMatchesGroup(card, groupName, groupInfo.activeValues);
      });
      
      card.classList.toggle('is-hidden', !matchesAllGroups);
    });
  }
  
  filterGroups.forEach(filterGroup => {
    const groupName = filterGroup.dataset.filterGroup;
    const groupScope = filterGroup.dataset.filterScope || globalScope;
    const isSingleSelect = filterGroup.dataset.filterSingleSelect === 'true';
    
    activeFiltersByGroup.set(groupName, { scope: groupScope, activeValues: new Set() });
    
    const filterButtons = filterGroup.querySelectorAll('.game-filter-btn');
    const clearButton = filterGroup.querySelector('.game-filter-clear');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filterValue = button.dataset.filterValue;
        const activeValues = activeFiltersByGroup.get(groupName).activeValues;
        const alreadyActive = activeValues.has(filterValue);
        
        if (isSingleSelect) {
          activeValues.clear();
          filterButtons.forEach(otherButton => otherButton.classList.remove('active'));
        }
        
        if (alreadyActive) {
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
        activeFiltersByGroup.get(groupName).activeValues.clear();
        filterButtons.forEach(button => button.classList.remove('active'));
        applyFilters();
      });
    }
  });
});
