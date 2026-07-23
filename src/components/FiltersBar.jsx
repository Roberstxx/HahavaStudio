import { categories, allTags, durationRanges, priceRanges } from '../data/services';
import './FiltersBar.css';

const FiltersBar = ({
  filters,
  updateFilter,
  toggleTag,
  clearFilters,
  hasActiveFilters,
  categoryCounts = {}
}) => {
  const totalServices = Object.values(categoryCounts).reduce((acc, count) => acc + count, 0);

  return (
    <aside className="filters-bar" role="search" aria-label="Filtros de servicios">
      <div className="filters-header">
        <div>
          <h3 className="filters-title">Encuentra tu servicio</h3>
          <p className="filters-subtitle">Busca por nombre o elige una categoría.</p>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="btn-clear-filters"
            aria-label="Limpiar todos los filtros"
            type="button"
          >
            Limpiar
          </button>
        )}
      </div>

      <div className="filter-group">
        <label htmlFor="search-input" className="filter-label">
          Buscar
        </label>
        <input
          id="search-input"
          type="search"
          className="input"
          placeholder="Buscar gel, cejas, corte..."
          value={filters.search}
          onChange={(e) => updateFilter('search', e.target.value)}
          aria-label="Buscar servicios por nombre o descripción"
        />
      </div>

      <div className="filter-group filter-group-categories">
        <span className="filter-label">Categorías</span>
        <div className="category-filter-scroll" role="group" aria-label="Filtrar por categoría">
          <button
            type="button"
            onClick={() => updateFilter('category', '')}
            className={`category-pill ${filters.category === '' ? 'active' : ''}`}
            aria-pressed={filters.category === ''}
          >
            <span>Todos</span>
            <small>{totalServices}</small>
          </button>

          {categories.map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => updateFilter('category', cat.id)}
              className={`category-pill ${filters.category === cat.id ? 'active' : ''}`}
              aria-pressed={filters.category === cat.id}
            >
              <span>{cat.name}</span>
              <small>{categoryCounts[cat.id] || 0}</small>
            </button>
          ))}
        </div>
      </div>

      <details className="advanced-filters">
        <summary>Filtros avanzados</summary>

        <div className="filter-group">
          <span className="filter-label">Etiquetas</span>
          <div className="filter-tags" role="group" aria-label="Filtrar por etiquetas">
            {allTags.map(tag => (
              <button
                key={tag.id}
                type="button"
                onClick={() => toggleTag(tag.id)}
                className={`tag-button ${filters.tags.includes(tag.id) ? 'active' : ''}`}
                aria-pressed={filters.tags.includes(tag.id)}
              >
                {tag.name}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <label htmlFor="duration-select" className="filter-label">
            Duración
          </label>
          <select
            id="duration-select"
            className="select"
            value={filters.duration}
            onChange={(e) => updateFilter('duration', e.target.value)}
            aria-label="Filtrar por duración"
          >
            <option value="">Cualquier duración</option>
            {durationRanges.map(range => (
              <option key={range.id} value={range.id}>
                {range.name}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="price-select" className="filter-label">
            Rango de precio
          </label>
          <select
            id="price-select"
            className="select"
            value={filters.priceRange}
            onChange={(e) => updateFilter('priceRange', e.target.value)}
            aria-label="Filtrar por precio"
          >
            <option value="">Cualquier precio</option>
            {priceRanges.map(range => (
              <option key={range.id} value={range.id}>
                {range.name}
              </option>
            ))}
          </select>
        </div>
      </details>
    </aside>
  );
};

export default FiltersBar;
