# ixodocs - Ixopay & TokenEx Documentation Knowledge Base

## Como buscar documentacion
1. Lee `index.md` primero para orientarte en la base de conocimiento
2. Usa grep en `docs/` para buscar por keywords en contenido y frontmatter
3. Los archivos tienen frontmatter YAML con title, summary, tags y source_url
4. Archivos de 500-1500 palabras, un tema por archivo

## Estructura de documentacion
- `docs/ixopay/` - Ixopay Developer Hub, User Manual, Modules
- `docs/tokenex/` - TokenEx vault/tokenization documentation
- `index.md` - Mapa de navegacion maestro con descripciones keyword-rich

## Scripts
- `scripts/scrape.py` - Crawl4AI scraper para sitios Docusaurus
- `scripts/clean.py` - Limpieza markdown + frontmatter YAML
- `scripts/build_index.py` - Generador automatico de index.md
