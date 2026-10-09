# Fintech Icons Argentina

Plataforma web + API de iconos SVG del ecosistema fintech de Argentina.

## Atribución

Esta plataforma utiliza iconos originales creados por **Santiago Galan** ([@sgalanb](https://github.com/sgalanb)).

- **Repo original**: https://github.com/sgalanb/fintech-icons-argentina
- **Sitio web**: https://icons.com.ar

Gracias Santiago por crear y compartir esta colección. Si te sirve, dale un star al repo original.

## Descripción

Colección de iconos SVG relacionados con el mundo fintech de Argentina: bancos, billeteras digitales, criptomonedas, CEDEARs, acciones y más.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000/fintech-icons-ar](http://localhost:3000/fintech-icons-ar)

## Datos

Los iconos viven en `data/icons.json`. Cada icono tiene:

```json
{
  "id": "mercado-pago",
  "name": "Mercado Pago",
  "type": "Bancos y Billeteras",
  "tags": ["billetera", "pago"],
  "svg": "<svg ...>...</svg>"
}
```

## Deploy en GitHub Pages

1. Crear un repositorio en GitHub con este contenido
2. En Settings → Pages, seleccionar "GitHub Actions" como source
3. Hacer push a `main` — el workflow construye y despliega automáticamente
4. La URL será `https://<usuario>.github.io/fintech-icons-ar/`

## API (JSON estático)

Los iconos están disponibles como JSON estático en `public/icons.json` (generado en build).

## Licencia

Los logos y marcas comerciales son propiedad de sus respectivos dueños.
