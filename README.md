# Fintech Icons Argentina

Plataforma web + API de iconos SVG del ecosistema fintech de Argentina.

- **Sitio**: https://piposeimandi.github.io/fintech-icons-ar/
- **JSON API**: https://piposeimandi.github.io/fintech-icons-ar/icons.json
- **Repo**: https://github.com/piposeimandi/fintech-icons-ar

## Atribución

Esta plataforma utiliza iconos originales creados por **Santiago Galan** ([@sgalanb](https://github.com/sgalanb)).

- **Repo original**: https://github.com/sgalanb/fintech-icons-argentina
- **Sitio web**: https://icons.com.ar

Gracias Santiago por crear y compartir esta colección. Si te sirve, dale un star al repo original.

## Descripción

Colección de +450 iconos SVG relacionados con el mundo fintech de Argentina: acciones, CEDEARs, bancos, billeteras digitales, gerentes de FCI, monedas y más.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000/fintech-icons-ar](http://localhost:3000/fintech-icons-ar)

## Scripts

- `npm run dev` — servidor de desarrollo
- `npm run import` — importa/actualiza los iconos desde icons.com.ar a `data/icons.json`
- `npm run build` — build de producción (copia `data/icons.json` a `public/icons.json`)

## Datos

Los iconos viven en `data/icons.json`. Cada icono tiene:

```json
{
  "id": "GGAL",
  "name": "Grupo Financiero Galicia",
  "type": "Acciones",
  "tags": [],
  "svg": "<svg ...>...</svg>"
}
```

## API pública

El listado completo de iconos se sirve como JSON estático:

```
GET /fintech-icons-ar/icons.json
```

Respuesta:

```json
{
  "metadata": { "name": "...", "version": "...", "source": "...", "attribution": "..." },
  "icons": [{ "id": "...", "name": "...", "type": "...", "tags": [], "svg": "..." }]
}
```

El filtrado por nombre y tipo se hace en el cliente (el sitio es 100% estático).

## Deploy en GitHub Pages

1. Hacer push a `main`
2. En Settings → Pages, seleccionar "GitHub Actions" como source
3. El workflow construye y despliega automáticamente
4. URL: `https://piposeimandi.github.io/fintech-icons-ar/`

## Licencia

Los logos y marcas comerciales son propiedad de sus respectivos dueños.
