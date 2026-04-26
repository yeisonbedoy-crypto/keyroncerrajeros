# SEO Servicios por Ciudad — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Cubrir la matriz completa servicio × ciudad para El Vendrell, Calafell y Cunit — 15 páginas de servicio con H1 específico por ciudad + 3 zonas enriquecidas con enlaces internos.

**Architecture:** Las 5 páginas de servicio existentes se reasignan a El Vendrell (edición de H1, title y meta). A partir de ellas se generan 10 páginas nuevas (5 Calafell + 5 Cunit) copiando la estructura y sustituyendo los datos de ciudad. Las 3 páginas de zona reciben una sección de servicios con enlaces internos.

**Tech Stack:** HTML estático, JSON-LD, geo meta tags, TailwindCSS (clases existentes, sin cambios de estilo).

**Ejecución:** Punto por punto — una tarea por sesión para controlar tokens.

---

## Archivos afectados

### Modificar (existentes)
- `servicios/cambio-de-bombines.html` → reasignar a El Vendrell
- `servicios/cerraduras-antibumping.html` → reasignar a El Vendrell
- `servicios/apertura-de-vehiculos.html` → reasignar a El Vendrell
- `servicios/cierres-metalicos.html` → reasignar a El Vendrell

### Crear (nuevas — Calafell)
- `servicios/apertura-de-puertas-calafell.html`
- `servicios/cambio-de-bombines-calafell.html`
- `servicios/cerraduras-antibumping-calafell.html`
- `servicios/apertura-de-vehiculos-calafell.html`
- `servicios/cierres-metalicos-calafell.html`

### Crear (nuevas — Cunit)
- `servicios/apertura-de-puertas-cunit.html`
- `servicios/cambio-de-bombines-cunit.html`
- `servicios/cerraduras-antibumping-cunit.html`
- `servicios/apertura-de-vehiculos-cunit.html`
- `servicios/cierres-metalicos-cunit.html`

### Modificar (zonas)
- `zonas/el-vendrell.html` → añadir sección servicios
- `zonas/calafell.html` → añadir sección servicios
- `zonas/cunit.html` → añadir sección servicios

---

## Referencia de datos por ciudad

| Campo | El Vendrell | Calafell | Cunit |
|---|---|---|---|
| Tiempo llegada | 20 minutos | 30 minutos | 20 minutos |
| geo.placename | El Vendrell, Tarragona | Calafell, Tarragona | Cunit, Tarragona |
| geo.position | 41.2188;1.5356 | 41.1985;1.5685 | 41.2053;1.6335 |
| ICBM | 41.2188, 1.5356 | 41.1985, 1.5685 | 41.2053, 1.6335 |
| postalCode JSON-LD | 43700 | 43820 | 43881 |

---

## FASE 1 — Actualizar páginas existentes a El Vendrell

---

### Tarea 1: cambio-de-bombines.html → El Vendrell

**Archivo:** `servicios/cambio-de-bombines.html`

- [ ] **Paso 1: Actualizar `<title>`**

Buscar la línea con `<title>` y sustituir por:
```html
<title>Cambio de Bombines El Vendrell 24h | Keyron Cerrajeros</title>
```
(54 caracteres ✅)

- [ ] **Paso 2: Actualizar `<meta name="description">`**

```html
<meta name="description" content="Cambio de bombines antibumping en El Vendrell. Cilindros UNE EN 1303, llaves incopiables, escudo antitaladro. Instalación el mismo día. ☎ +34 627 682 821">
```
(172 caracteres — recortar si supera 155 en el editor)

Versión ≤ 155:
```html
<meta name="description" content="Cambio de bombines antibumping en El Vendrell. Cilindros UNE EN 1303, llaves incopiables. Instalación el mismo día. ☎ +34 627 682 821">
```

- [ ] **Paso 3: Actualizar H1**

Localizar el `<h1>` y sustituir el texto interior por:
```
Cambio de Bombines en El Vendrell —
Instalación el Mismo Día, 7 Días a la Semana.
```
(mantener los `<br class="hidden md:block"/>` y el `<span style="color:#e9c176;">` del original)

- [ ] **Paso 4: Actualizar JSON-LD — orden de areaServed**

En el script JSON-LD de tipo `Service`, asegurarse de que `areaServed` tiene **El Vendrell en primera posición**:
```json
"areaServed": [
  {"@type": "City", "name": "El Vendrell", "postalCode": "43700"},
  {"@type": "City", "name": "Calafell", "postalCode": "43820"},
  ...
]
```

- [ ] **Paso 5: Verificar checklist SEO**

Comprobar manualmente:
- [ ] "El Vendrell" aparece en title ✅
- [ ] "El Vendrell" aparece en meta description ✅
- [ ] "El Vendrell" aparece en H1 ✅
- [ ] Title ≤ 60 caracteres ✅
- [ ] Meta ≤ 155 caracteres ✅
- [ ] Teléfono `+34 627 682 821` presente en meta ✅

- [ ] **Paso 6: Commit**

```bash
git add servicios/cambio-de-bombines.html
git commit -m "seo: reasignar cambio-de-bombines a El Vendrell"
```

---

### Tarea 2: cerraduras-antibumping.html → El Vendrell

**Archivo:** `servicios/cerraduras-antibumping.html`

- [ ] **Paso 1: Actualizar `<title>`**

```html
<title>Cerraduras Antibumping El Vendrell 24h | Keyron Cerrajeros</title>
```
(58 caracteres ✅)

- [ ] **Paso 2: Actualizar `<meta name="description">`**

```html
<meta name="description" content="Instalación cerraduras antibumping en El Vendrell. Protección bumping, ganzuado y taladro. Mul-T-Lock, TESA Abloy, CISA. Presupuesto cerrado. ☎ +34 627 682 821">
```
(≤ 155 caracteres — verificar con contador)

- [ ] **Paso 3: Actualizar H1**

```
Cerraduras Antibumping en El Vendrell —
Técnicos Disponibles Día y Noche.
```

- [ ] **Paso 4: Actualizar JSON-LD — areaServed primer elemento**

```json
{"@type": "City", "name": "El Vendrell", "postalCode": "43700"}
```

- [ ] **Paso 5: Verificar checklist SEO**

- [ ] "El Vendrell" en title, meta y H1 ✅
- [ ] Title ≤ 60 caracteres ✅
- [ ] Meta ≤ 155 caracteres ✅

- [ ] **Paso 6: Commit**

```bash
git add servicios/cerraduras-antibumping.html
git commit -m "seo: reasignar cerraduras-antibumping a El Vendrell"
```

---

### Tarea 3: apertura-de-vehiculos.html → El Vendrell

**Archivo:** `servicios/apertura-de-vehiculos.html`

- [ ] **Paso 1: Actualizar `<title>`**

```html
<title>Apertura de Coches El Vendrell 24h | Keyron Cerrajeros</title>
```
(55 caracteres ✅)

- [ ] **Paso 2: Actualizar `<meta name="description">`**

```html
<meta name="description" content="Cerrajero de coches en El Vendrell: abrimos tu vehículo sin rayar en 20 min. Presupuesto cerrado. Calafell, Cunit y Baix Penedès. ☎ +34 627 682 821">
```

- [ ] **Paso 3: Actualizar H1**

```
Apertura de Coches en El Vendrell —
Llegamos a Cualquier Hora.
```

- [ ] **Paso 4: Actualizar JSON-LD — areaServed primer elemento**

```json
{"@type": "City", "name": "El Vendrell", "postalCode": "43700"}
```

- [ ] **Paso 5: Verificar checklist SEO**

- [ ] "El Vendrell" en title, meta y H1 ✅
- [ ] Title ≤ 60 caracteres ✅
- [ ] Meta ≤ 155 caracteres ✅

- [ ] **Paso 6: Commit**

```bash
git add servicios/apertura-de-vehiculos.html
git commit -m "seo: reasignar apertura-de-vehiculos a El Vendrell"
```

---

### Tarea 4: cierres-metalicos.html → El Vendrell

**Archivo:** `servicios/cierres-metalicos.html`

- [ ] **Paso 1: Actualizar `<title>`**

```html
<title>Cierres Metálicos El Vendrell 24h | Keyron Cerrajeros</title>
```
(54 caracteres ✅)

- [ ] **Paso 2: Actualizar `<meta name="description">`**

```html
<meta name="description" content="Reparamos y motorizamos cierres metálicos en El Vendrell. Urgencias comerciales sin horarios. Presupuesto cerrado por teléfono. ☎ +34 627 682 821">
```

- [ ] **Paso 3: Actualizar H1**

```
Cierres Metálicos en El Vendrell —
Urgencias Comerciales Sin Horarios.
```

- [ ] **Paso 4: Actualizar JSON-LD — areaServed primer elemento**

```json
{"@type": "City", "name": "El Vendrell", "postalCode": "43700"}
```

- [ ] **Paso 5: Verificar checklist SEO**

- [ ] "El Vendrell" en title, meta y H1 ✅
- [ ] Title ≤ 60 caracteres ✅
- [ ] Meta ≤ 155 caracteres ✅

- [ ] **Paso 6: Commit**

```bash
git add servicios/cierres-metalicos.html
git commit -m "seo: reasignar cierres-metalicos a El Vendrell"
```

---

## FASE 2 — Crear páginas de Calafell

> **Instrucción general para todas las tareas de esta fase:**
> Copiar la página de El Vendrell equivalente, guardarla con el nuevo nombre, y aplicar los cambios indicados. Ciudad: **Calafell** · Tiempo: **30 minutos** · Geo: `41.1985;1.5685` · CP: `43820`

---

### Tarea 5: apertura-de-puertas-calafell.html

**Base:** copiar `servicios/apertura-de-puertas.html` → `servicios/apertura-de-puertas-calafell.html`

- [ ] **Paso 1: Copiar archivo base**

```bash
cp servicios/apertura-de-puertas.html servicios/apertura-de-puertas-calafell.html
```

- [ ] **Paso 2: `<title>`**

```html
<title>Apertura de Puertas Calafell sin Rotura | Keyron Cerrajeros</title>
```
(59 caracteres ✅)

- [ ] **Paso 3: `<meta name="description">`**

```html
<meta name="description" content="Apertura de puertas en Calafell sin rotura — técnica no destructiva. Cerrajero urgente en 30 min con precio cerrado. ☎ +34 627 682 821">
```

- [ ] **Paso 4: Geo metas**

```html
<meta name="geo.placename" content="Calafell, Tarragona">
<meta name="geo.position" content="41.1985;1.5685">
<meta name="ICBM" content="41.1985, 1.5685">
```

- [ ] **Paso 5: H1**

```
Apertura de Puertas sin Rotura en Calafell —
Disponibles las 24 Horas.
```

- [ ] **Paso 6: Párrafo introductorio**

Sustituir "El Vendrell" por "Calafell" en todo el párrafo. Cambiar "20 minutos" por "30 minutos". Verificar que "Calafell" aparece al menos 3 veces en las primeras 100 palabras del body.

- [ ] **Paso 7: Trust bar — tiempo**

Cambiar `< 20 min` por `< 30 min` en el trust bar.

- [ ] **Paso 8: JSON-LD — areaServed**

Mover Calafell a primera posición:
```json
"areaServed": [
  {"@type": "City", "name": "Calafell", "postalCode": "43820"},
  {"@type": "City", "name": "El Vendrell", "postalCode": "43700"},
  ...
]
```

- [ ] **Paso 9: JSON-LD — BreadcrumbList**

Actualizar el último ítem del breadcrumb:
```json
{"@type": "ListItem", "position": 3, "name": "Apertura de Puertas Calafell", "item": "https://www.keyroncerrajeros.es/servicios/apertura-de-puertas-calafell.html"}
```

- [ ] **Paso 10: Sustituir todas las menciones de ciudad en FAQ y sección "¿Por qué elegirnos?"**

Reemplazar "El Vendrell" → "Calafell" en el resto del documento (sección why-us, FAQ, CTA final).

- [ ] **Paso 11: Verificar checklist SEO**

- [ ] "Calafell" en title, meta, H1 ✅
- [ ] "Calafell" ≥ 3 veces en primeras 100 palabras ✅
- [ ] Tiempo "30 min" en trust bar y meta ✅
- [ ] Geo coordinates actualizadas ✅
- [ ] JSON-LD areaServed con Calafell primero ✅
- [ ] Title ≤ 60 caracteres ✅
- [ ] Meta ≤ 155 caracteres ✅

- [ ] **Paso 12: Commit**

```bash
git add servicios/apertura-de-puertas-calafell.html
git commit -m "seo: crear apertura-de-puertas-calafell"
```

---

### Tarea 6: cambio-de-bombines-calafell.html

**Base:** copiar `servicios/cambio-de-bombines.html` (ya actualizado a El Vendrell en Tarea 1)

- [ ] **Paso 1: Copiar archivo base**

```bash
cp servicios/cambio-de-bombines.html servicios/cambio-de-bombines-calafell.html
```

- [ ] **Paso 2: `<title>`**

```html
<title>Cambio de Bombines Calafell 24h | Keyron Cerrajeros</title>
```
(51 caracteres ✅)

- [ ] **Paso 3: `<meta name="description">`**

```html
<meta name="description" content="Cambio de bombines antibumping en Calafell. Cilindros UNE EN 1303, llaves incopiables, escudo antitaladro. Instalación el mismo día. ☎ +34 627 682 821">
```

- [ ] **Paso 4: Geo metas**

```html
<meta name="geo.placename" content="Calafell, Tarragona">
<meta name="geo.position" content="41.1985;1.5685">
<meta name="ICBM" content="41.1985, 1.5685">
```

- [ ] **Paso 5: H1**

```
Cambio de Bombines en Calafell —
Instalación el Mismo Día, 7 Días a la Semana.
```

- [ ] **Paso 6: Sustituir ciudad y tiempo en todo el documento**

- "El Vendrell" → "Calafell" en párrafo intro, FAQ, sección why-us, CTA
- "20 minutos" → "30 minutos" donde aparezca en contexto de tiempo de llegada

- [ ] **Paso 7: JSON-LD — areaServed con Calafell primero + BreadcrumbList**

```json
"areaServed": [
  {"@type": "City", "name": "Calafell", "postalCode": "43820"},
  {"@type": "City", "name": "El Vendrell", "postalCode": "43700"},
  ...
]
```
BreadcrumbList último ítem: `"Cambio de Bombines Calafell"` con URL `...cambio-de-bombines-calafell.html`

- [ ] **Paso 8: Verificar checklist SEO**

- [ ] "Calafell" en title, meta, H1 ✅
- [ ] Geo actualizadas ✅
- [ ] JSON-LD correcto ✅
- [ ] Title ≤ 60 / Meta ≤ 155 ✅

- [ ] **Paso 9: Commit**

```bash
git add servicios/cambio-de-bombines-calafell.html
git commit -m "seo: crear cambio-de-bombines-calafell"
```

---

### Tarea 7: cerraduras-antibumping-calafell.html

**Base:** copiar `servicios/cerraduras-antibumping.html` (actualizado en Tarea 2)

- [ ] **Paso 1:** `cp servicios/cerraduras-antibumping.html servicios/cerraduras-antibumping-calafell.html`

- [ ] **Paso 2: `<title>`**

```html
<title>Cerraduras Antibumping Calafell 24h | Keyron Cerrajeros</title>
```
(55 caracteres ✅)

- [ ] **Paso 3: `<meta name="description">`**

```html
<meta name="description" content="Instalación cerraduras antibumping en Calafell. Protección bumping, ganzuado y taladro. Mul-T-Lock, TESA Abloy, CISA. Presupuesto cerrado. ☎ +34 627 682 821">
```

- [ ] **Paso 4: Geo metas** → `41.1985;1.5685` / `41.1985, 1.5685` / `Calafell, Tarragona`

- [ ] **Paso 5: H1**

```
Cerraduras Antibumping en Calafell —
Técnicos Disponibles Día y Noche.
```

- [ ] **Paso 6:** Sustituir "El Vendrell" → "Calafell" y "20 minutos" → "30 minutos" en todo el documento.

- [ ] **Paso 7: JSON-LD** → Calafell primero en areaServed. BreadcrumbList: `"Cerraduras Antibumping Calafell"` / URL `...cerraduras-antibumping-calafell.html`

- [ ] **Paso 8: Verificar checklist SEO** (mismos puntos que tareas anteriores)

- [ ] **Paso 9: Commit**

```bash
git add servicios/cerraduras-antibumping-calafell.html
git commit -m "seo: crear cerraduras-antibumping-calafell"
```

---

### Tarea 8: apertura-de-vehiculos-calafell.html

**Base:** copiar `servicios/apertura-de-vehiculos.html` (actualizado en Tarea 3)

- [ ] **Paso 1:** `cp servicios/apertura-de-vehiculos.html servicios/apertura-de-vehiculos-calafell.html`

- [ ] **Paso 2: `<title>`**

```html
<title>Apertura de Coches Calafell 24h | Keyron Cerrajeros</title>
```
(51 caracteres ✅)

- [ ] **Paso 3: `<meta name="description">`**

```html
<meta name="description" content="Cerrajero de coches en Calafell: abrimos tu vehículo sin rayar en 30 min. Presupuesto cerrado. El Vendrell, Cunit y Baix Penedès. ☎ +34 627 682 821">
```

- [ ] **Paso 4: Geo metas** → `41.1985;1.5685` / `Calafell, Tarragona`

- [ ] **Paso 5: H1**

```
Apertura de Coches en Calafell —
Llegamos a Cualquier Hora.
```

- [ ] **Paso 6:** Sustituir "El Vendrell" → "Calafell" y tiempo "20" → "30" en todo el documento.

- [ ] **Paso 7: JSON-LD** → Calafell primero. BreadcrumbList: `"Apertura de Coches Calafell"` / URL `...apertura-de-vehiculos-calafell.html`

- [ ] **Paso 8: Verificar checklist SEO**

- [ ] **Paso 9: Commit**

```bash
git add servicios/apertura-de-vehiculos-calafell.html
git commit -m "seo: crear apertura-de-vehiculos-calafell"
```

---

### Tarea 9: cierres-metalicos-calafell.html

**Base:** copiar `servicios/cierres-metalicos.html` (actualizado en Tarea 4)

- [ ] **Paso 1:** `cp servicios/cierres-metalicos.html servicios/cierres-metalicos-calafell.html`

- [ ] **Paso 2: `<title>`**

```html
<title>Cierres Metálicos Calafell 24h | Keyron Cerrajeros</title>
```
(50 caracteres ✅)

- [ ] **Paso 3: `<meta name="description">`**

```html
<meta name="description" content="Reparamos y motorizamos cierres metálicos en Calafell. Urgencias comerciales sin horarios. Presupuesto cerrado por teléfono. ☎ +34 627 682 821">
```

- [ ] **Paso 4: Geo metas** → `41.1985;1.5685` / `Calafell, Tarragona`

- [ ] **Paso 5: H1**

```
Cierres Metálicos en Calafell —
Urgencias Comerciales Sin Horarios.
```

- [ ] **Paso 6:** Sustituir "El Vendrell" → "Calafell" y tiempo "20" → "30" en todo el documento.

- [ ] **Paso 7: JSON-LD** → Calafell primero. BreadcrumbList: `"Cierres Metálicos Calafell"` / URL `...cierres-metalicos-calafell.html`

- [ ] **Paso 8: Verificar checklist SEO**

- [ ] **Paso 9: Commit**

```bash
git add servicios/cierres-metalicos-calafell.html
git commit -m "seo: crear cierres-metalicos-calafell"
```

---

## FASE 3 — Crear páginas de Cunit

> **Instrucción general:** Copiar la página de El Vendrell equivalente. Ciudad: **Cunit** · Tiempo: **20 minutos** · Geo: `41.2053;1.6335` · CP: `43881`
> El tiempo de llegada es igual que El Vendrell (20 min) — solo cambia la ciudad y las coordenadas.

---

### Tarea 10: apertura-de-puertas-cunit.html

**Base:** copiar `servicios/apertura-de-puertas.html`

- [ ] **Paso 1:** `cp servicios/apertura-de-puertas.html servicios/apertura-de-puertas-cunit.html`

- [ ] **Paso 2: `<title>`**

```html
<title>Apertura de Puertas Cunit sin Rotura | Keyron Cerrajeros</title>
```
(56 caracteres ✅)

- [ ] **Paso 3: `<meta name="description">`**

```html
<meta name="description" content="Apertura de puertas en Cunit sin rotura — técnica no destructiva. Cerrajero urgente en 20 min con precio cerrado. ☎ +34 627 682 821">
```

- [ ] **Paso 4: Geo metas** → `41.2053;1.6335` / `41.2053, 1.6335` / `Cunit, Tarragona`

- [ ] **Paso 5: H1**

```
Apertura de Puertas sin Rotura en Cunit —
Disponibles las 24 Horas.
```

- [ ] **Paso 6:** Sustituir "El Vendrell" → "Cunit" en todo el documento. Tiempo se mantiene en 20 min.

- [ ] **Paso 7: JSON-LD** → Cunit (43881) primero en areaServed. BreadcrumbList: `"Apertura de Puertas Cunit"` / URL `...apertura-de-puertas-cunit.html`

- [ ] **Paso 8: Verificar checklist SEO**

- [ ] **Paso 9: Commit**

```bash
git add servicios/apertura-de-puertas-cunit.html
git commit -m "seo: crear apertura-de-puertas-cunit"
```

---

### Tarea 11: cambio-de-bombines-cunit.html

**Base:** copiar `servicios/cambio-de-bombines.html`

- [ ] **Paso 1:** `cp servicios/cambio-de-bombines.html servicios/cambio-de-bombines-cunit.html`

- [ ] **Paso 2: `<title>`**

```html
<title>Cambio de Bombines Cunit 24h | Keyron Cerrajeros</title>
```
(48 caracteres ✅)

- [ ] **Paso 3: `<meta name="description">`**

```html
<meta name="description" content="Cambio de bombines antibumping en Cunit. Cilindros UNE EN 1303, llaves incopiables, escudo antitaladro. Instalación el mismo día. ☎ +34 627 682 821">
```

- [ ] **Paso 4: Geo metas** → `41.2053;1.6335` / `Cunit, Tarragona`

- [ ] **Paso 5: H1**

```
Cambio de Bombines en Cunit —
Instalación el Mismo Día, 7 Días a la Semana.
```

- [ ] **Paso 6:** Sustituir "El Vendrell" → "Cunit" en todo el documento.

- [ ] **Paso 7: JSON-LD** → Cunit (43881) primero. BreadcrumbList: `"Cambio de Bombines Cunit"` / URL `...cambio-de-bombines-cunit.html`

- [ ] **Paso 8: Verificar + Commit**

```bash
git add servicios/cambio-de-bombines-cunit.html
git commit -m "seo: crear cambio-de-bombines-cunit"
```

---

### Tarea 12: cerraduras-antibumping-cunit.html

**Base:** copiar `servicios/cerraduras-antibumping.html`

- [ ] **Paso 1:** `cp servicios/cerraduras-antibumping.html servicios/cerraduras-antibumping-cunit.html`

- [ ] **Paso 2: `<title>`**

```html
<title>Cerraduras Antibumping Cunit 24h | Keyron Cerrajeros</title>
```
(52 caracteres ✅)

- [ ] **Paso 3: `<meta name="description">`**

```html
<meta name="description" content="Instalación cerraduras antibumping en Cunit. Protección bumping, ganzuado y taladro. Mul-T-Lock, TESA Abloy, CISA. Presupuesto cerrado. ☎ +34 627 682 821">
```

- [ ] **Paso 4: Geo metas** → `41.2053;1.6335` / `Cunit, Tarragona`

- [ ] **Paso 5: H1**

```
Cerraduras Antibumping en Cunit —
Técnicos Disponibles Día y Noche.
```

- [ ] **Paso 6:** Sustituir "El Vendrell" → "Cunit".

- [ ] **Paso 7: JSON-LD** → Cunit primero. BreadcrumbList: `"Cerraduras Antibumping Cunit"` / URL `...cerraduras-antibumping-cunit.html`

- [ ] **Paso 8: Verificar + Commit**

```bash
git add servicios/cerraduras-antibumping-cunit.html
git commit -m "seo: crear cerraduras-antibumping-cunit"
```

---

### Tarea 13: apertura-de-vehiculos-cunit.html

**Base:** copiar `servicios/apertura-de-vehiculos.html`

- [ ] **Paso 1:** `cp servicios/apertura-de-vehiculos.html servicios/apertura-de-vehiculos-cunit.html`

- [ ] **Paso 2: `<title>`**

```html
<title>Apertura de Coches Cunit 24h | Keyron Cerrajeros</title>
```
(48 caracteres ✅)

- [ ] **Paso 3: `<meta name="description">`**

```html
<meta name="description" content="Cerrajero de coches en Cunit: abrimos tu vehículo sin rayar en 20 min. Presupuesto cerrado. El Vendrell, Calafell y Baix Penedès. ☎ +34 627 682 821">
```

- [ ] **Paso 4: Geo metas** → `41.2053;1.6335` / `Cunit, Tarragona`

- [ ] **Paso 5: H1**

```
Apertura de Coches en Cunit —
Llegamos a Cualquier Hora.
```

- [ ] **Paso 6:** Sustituir "El Vendrell" → "Cunit".

- [ ] **Paso 7: JSON-LD** → Cunit primero. BreadcrumbList: `"Apertura de Coches Cunit"` / URL `...apertura-de-vehiculos-cunit.html`

- [ ] **Paso 8: Verificar + Commit**

```bash
git add servicios/apertura-de-vehiculos-cunit.html
git commit -m "seo: crear apertura-de-vehiculos-cunit"
```

---

### Tarea 14: cierres-metalicos-cunit.html

**Base:** copiar `servicios/cierres-metalicos.html`

- [ ] **Paso 1:** `cp servicios/cierres-metalicos.html servicios/cierres-metalicos-cunit.html`

- [ ] **Paso 2: `<title>`**

```html
<title>Cierres Metálicos Cunit 24h | Keyron Cerrajeros</title>
```
(47 caracteres ✅)

- [ ] **Paso 3: `<meta name="description">`**

```html
<meta name="description" content="Reparamos y motorizamos cierres metálicos en Cunit. Urgencias comerciales sin horarios. Presupuesto cerrado por teléfono. ☎ +34 627 682 821">
```

- [ ] **Paso 4: Geo metas** → `41.2053;1.6335` / `Cunit, Tarragona`

- [ ] **Paso 5: H1**

```
Cierres Metálicos en Cunit —
Urgencias Comerciales Sin Horarios.
```

- [ ] **Paso 6:** Sustituir "El Vendrell" → "Cunit".

- [ ] **Paso 7: JSON-LD** → Cunit primero. BreadcrumbList: `"Cierres Metálicos Cunit"` / URL `...cierres-metalicos-cunit.html`

- [ ] **Paso 8: Verificar + Commit**

```bash
git add servicios/cierres-metalicos-cunit.html
git commit -m "seo: crear cierres-metalicos-cunit"
```

---

## FASE 4 — Enriquecer páginas de zona

> Añadir una sección HTML de servicios en cada página de zona. Insertar justo antes del cierre del `<main>` o antes del bloque FAQ, según la estructura de cada archivo.

---

### Tarea 15: zonas/el-vendrell.html — sección servicios

**Archivo:** `zonas/el-vendrell.html`

- [ ] **Paso 1: Localizar punto de inserción**

Buscar la sección `<!-- FAQ -->` o el último `</section>` antes del `<footer>`. Insertar el bloque antes de ese punto.

- [ ] **Paso 2: Insertar sección de servicios**

```html
<!-- Servicios disponibles en El Vendrell -->
<section class="py-16 px-6 max-w-5xl mx-auto">
  <h2 class="text-2xl font-bold tracking-tighter text-on-surface mb-8">
    Servicios disponibles en El Vendrell
  </h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <a href="/servicios/apertura-de-puertas.html"
       class="block p-5 border border-outline rounded-lg hover:border-primary transition-colors">
      <span class="font-semibold text-on-surface">Apertura de puertas</span>
      <p class="text-sm text-on-surface-variant mt-1">Sin rotura · 20 min</p>
    </a>
    <a href="/servicios/cambio-de-bombines.html"
       class="block p-5 border border-outline rounded-lg hover:border-primary transition-colors">
      <span class="font-semibold text-on-surface">Cambio de bombines</span>
      <p class="text-sm text-on-surface-variant mt-1">Antibumping · mismo día</p>
    </a>
    <a href="/servicios/cerraduras-antibumping.html"
       class="block p-5 border border-outline rounded-lg hover:border-primary transition-colors">
      <span class="font-semibold text-on-surface">Cerraduras antibumping</span>
      <p class="text-sm text-on-surface-variant mt-1">Mul-T-Lock, TESA Abloy</p>
    </a>
    <a href="/servicios/apertura-de-vehiculos.html"
       class="block p-5 border border-outline rounded-lg hover:border-primary transition-colors">
      <span class="font-semibold text-on-surface">Apertura de vehículos</span>
      <p class="text-sm text-on-surface-variant mt-1">Todas las marcas · 20 min</p>
    </a>
    <a href="/servicios/cierres-metalicos.html"
       class="block p-5 border border-outline rounded-lg hover:border-primary transition-colors">
      <span class="font-semibold text-on-surface">Cierres metálicos</span>
      <p class="text-sm text-on-surface-variant mt-1">Urgencias comerciales</p>
    </a>
  </div>
</section>
```

- [ ] **Paso 3: Verificar que los 5 enlaces son correctos y accesibles**

- [ ] **Paso 4: Commit**

```bash
git add zonas/el-vendrell.html
git commit -m "seo: añadir sección servicios en zona El Vendrell"
```

---

### Tarea 16: zonas/calafell.html — sección servicios

**Archivo:** `zonas/calafell.html`

- [ ] **Paso 1:** Localizar punto de inserción (igual que Tarea 15).

- [ ] **Paso 2: Insertar sección de servicios**

```html
<!-- Servicios disponibles en Calafell -->
<section class="py-16 px-6 max-w-5xl mx-auto">
  <h2 class="text-2xl font-bold tracking-tighter text-on-surface mb-8">
    Servicios disponibles en Calafell
  </h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <a href="/servicios/apertura-de-puertas-calafell.html"
       class="block p-5 border border-outline rounded-lg hover:border-primary transition-colors">
      <span class="font-semibold text-on-surface">Apertura de puertas</span>
      <p class="text-sm text-on-surface-variant mt-1">Sin rotura · 30 min</p>
    </a>
    <a href="/servicios/cambio-de-bombines-calafell.html"
       class="block p-5 border border-outline rounded-lg hover:border-primary transition-colors">
      <span class="font-semibold text-on-surface">Cambio de bombines</span>
      <p class="text-sm text-on-surface-variant mt-1">Antibumping · mismo día</p>
    </a>
    <a href="/servicios/cerraduras-antibumping-calafell.html"
       class="block p-5 border border-outline rounded-lg hover:border-primary transition-colors">
      <span class="font-semibold text-on-surface">Cerraduras antibumping</span>
      <p class="text-sm text-on-surface-variant mt-1">Mul-T-Lock, TESA Abloy</p>
    </a>
    <a href="/servicios/apertura-de-vehiculos-calafell.html"
       class="block p-5 border border-outline rounded-lg hover:border-primary transition-colors">
      <span class="font-semibold text-on-surface">Apertura de vehículos</span>
      <p class="text-sm text-on-surface-variant mt-1">Todas las marcas · 30 min</p>
    </a>
    <a href="/servicios/cierres-metalicos-calafell.html"
       class="block p-5 border border-outline rounded-lg hover:border-primary transition-colors">
      <span class="font-semibold text-on-surface">Cierres metálicos</span>
      <p class="text-sm text-on-surface-variant mt-1">Urgencias comerciales</p>
    </a>
  </div>
</section>
```

- [ ] **Paso 3: Verificar los 5 enlaces.**

- [ ] **Paso 4: Commit**

```bash
git add zonas/calafell.html
git commit -m "seo: añadir sección servicios en zona Calafell"
```

---

### Tarea 17: zonas/cunit.html — sección servicios

**Archivo:** `zonas/cunit.html`

- [ ] **Paso 1:** Localizar punto de inserción.

- [ ] **Paso 2: Insertar sección de servicios**

```html
<!-- Servicios disponibles en Cunit -->
<section class="py-16 px-6 max-w-5xl mx-auto">
  <h2 class="text-2xl font-bold tracking-tighter text-on-surface mb-8">
    Servicios disponibles en Cunit
  </h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <a href="/servicios/apertura-de-puertas-cunit.html"
       class="block p-5 border border-outline rounded-lg hover:border-primary transition-colors">
      <span class="font-semibold text-on-surface">Apertura de puertas</span>
      <p class="text-sm text-on-surface-variant mt-1">Sin rotura · 20 min</p>
    </a>
    <a href="/servicios/cambio-de-bombines-cunit.html"
       class="block p-5 border border-outline rounded-lg hover:border-primary transition-colors">
      <span class="font-semibold text-on-surface">Cambio de bombines</span>
      <p class="text-sm text-on-surface-variant mt-1">Antibumping · mismo día</p>
    </a>
    <a href="/servicios/cerraduras-antibumping-cunit.html"
       class="block p-5 border border-outline rounded-lg hover:border-primary transition-colors">
      <span class="font-semibold text-on-surface">Cerraduras antibumping</span>
      <p class="text-sm text-on-surface-variant mt-1">Mul-T-Lock, TESA Abloy</p>
    </a>
    <a href="/servicios/apertura-de-vehiculos-cunit.html"
       class="block p-5 border border-outline rounded-lg hover:border-primary transition-colors">
      <span class="font-semibold text-on-surface">Apertura de vehículos</span>
      <p class="text-sm text-on-surface-variant mt-1">Todas las marcas · 20 min</p>
    </a>
    <a href="/servicios/cierres-metalicos-cunit.html"
       class="block p-5 border border-outline rounded-lg hover:border-primary transition-colors">
      <span class="font-semibold text-on-surface">Cierres metálicos</span>
      <p class="text-sm text-on-surface-variant mt-1">Urgencias comerciales</p>
    </a>
  </div>
</section>
```

- [ ] **Paso 3: Verificar los 5 enlaces.**

- [ ] **Paso 4: Commit**

```bash
git add zonas/cunit.html
git commit -m "seo: añadir sección servicios en zona Cunit"
```

---

## Resumen de tareas

| # | Tarea | Fase | Tipo |
|---|---|---|---|
| 1 | cambio-de-bombines → El Vendrell | Fase 1 | Editar |
| 2 | cerraduras-antibumping → El Vendrell | Fase 1 | Editar |
| 3 | apertura-de-vehiculos → El Vendrell | Fase 1 | Editar |
| 4 | cierres-metalicos → El Vendrell | Fase 1 | Editar |
| 5 | apertura-de-puertas-calafell | Fase 2 | Crear |
| 6 | cambio-de-bombines-calafell | Fase 2 | Crear |
| 7 | cerraduras-antibumping-calafell | Fase 2 | Crear |
| 8 | apertura-de-vehiculos-calafell | Fase 2 | Crear |
| 9 | cierres-metalicos-calafell | Fase 2 | Crear |
| 10 | apertura-de-puertas-cunit | Fase 3 | Crear |
| 11 | cambio-de-bombines-cunit | Fase 3 | Crear |
| 12 | cerraduras-antibumping-cunit | Fase 3 | Crear |
| 13 | apertura-de-vehiculos-cunit | Fase 3 | Crear |
| 14 | cierres-metalicos-cunit | Fase 3 | Crear |
| 15 | zonas/el-vendrell → sección servicios | Fase 4 | Editar |
| 16 | zonas/calafell → sección servicios | Fase 4 | Editar |
| 17 | zonas/cunit → sección servicios | Fase 4 | Editar |
