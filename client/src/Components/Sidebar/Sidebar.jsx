import React from 'react';
import './Sidebar.css';

function Sidebar({
  searchTerm,
  setSearchTerm,
  categories,
  selectedCategory,
  setSelectedCategory,
  selectedRating,
  setSelectedRating,
}) {
  return (
    <aside className="sidebar">
      <h3>Filter</h3>

      <div className="filter-section">
        <h4>Search</h4>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="filter-section">
        <h4>Category</h4>
        <ul>
          <li
            onClick={() => setSelectedCategory('')}
            className={!selectedCategory ? 'active' : ''}
          >
            All
          </li>
          {categories.map((cat, i) => (
            <li
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? 'active' : ''}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-section">
        <h4>Rating</h4>
        {[4, 3, 2, 1].map((r) => (
          <div
            key={r}
            onClick={() => setSelectedRating(r)}
            className="rating-filter"
          >
            {'★'.repeat(r)}{'☆'.repeat(5 - r)}
            {selectedRating === r && <span> ✓</span>}
          </div>
        ))}
        <div
          onClick={() => setSelectedRating(0)}
          className="rating-filter"
        >
          All Ratings
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
