# Diseño SEO: Páginas de Servicio por Ciudad — Keyron Cerrajeros

**Fecha:** 2026-04-22  
**Proyecto:** keyroncerrajeros.es  
**Ciudades objetivo:** El Vendrell, Calafell, Cunit  
**Servicios:** 5 (apertura puertas, cambio bombines, cerraduras antibumping, apertura vehículos, cierres metálicos)

---

## Objetivo

Cubrir la matriz completa servicio × ciudad para las 3 ciudades principales, de forma que Google pueda posicionar cada combinación de búsqueda del tipo "cambio de bombines Calafell" con una página dedicada y un H1 específico.

---

## Arquitectura final (15 páginas de servicio)

### El Vendrell — 5 páginas existentes, edición menor

| URL | H1 actual | Acción |
|---|---|---|
| `/servicios/apertura-de-puertas.html` | Apertura de Puertas sin Rotura en El Vendrell | Sin cambios ✅ |
| `/servicios/cambio-de-bombines.html` | Cambio de Bombines en Calafell | Actualizar H1, title y meta a El Vendrell |
| `/servicios/cerraduras-antibumping.html` | Cerraduras Antibumping en Cunit | Actualizar H1, title y meta a El Vendrell |
| `/servicios/apertura-de-vehiculos.html` | Apertura de Coches en Segur de Calafell | Actualizar H1, title y meta a El Vendrell |
| `/servicios/cierres-metalicos.html` | Cierres Metálicos en Coma-ruga | Actualizar H1, title y meta a El Vendrell |

**Criterio:** El Vendrell es la sede y la ciudad con mayor volumen de búsqueda. Las URLs existentes se conservan para no perder historial SEO.

### Calafell — 5 páginas nuevas

| URL | H1 objetivo |
|---|---|
| `/servicios/apertura-de-puertas-calafell.html` | Apertura de Puertas sin Rotura en Calafell — Disponibles 24 Horas |
| `/servicios/cambio-de-bombines-calafell.html` | Cambio de Bombines en Calafell — Instalación el Mismo Día |
| `/servicios/cerraduras-antibumping-calafell.html` | Cerraduras Antibumping en Calafell — Técnicos Disponibles Día y Noche |
| `/servicios/apertura-de-vehiculos-calafell.html` | Apertura de Coches en Calafell — Llegamos a Cualquier Hora |
| `/servicios/cierres-metalicos-calafell.html` | Cierres Metálicos en Calafell — Urgencias Comerciales Sin Horarios |

### Cunit — 5 páginas nuevas

| URL | H1 objetivo |
|---|---|
| `/servicios/apertura-de-puertas-cunit.html` | Apertura de Puertas sin Rotura en Cunit — Disponibles 24 Horas |
| `/servicios/cambio-de-bombines-cunit.html` | Cambio de Bombines en Cunit — Instalación el Mismo Día |
| `/servicios/cerraduras-antibumping-cunit.html` | Cerraduras Antibumping en Cunit — Técnicos Disponibles Día y Noche |
| `/servicios/apertura-de-vehiculos-cunit.html` | Apertura de Coches en Cunit — Llegamos a Cualquier Hora |
| `/servicios/cierres-metalicos-cunit.html` | Cierres Metálicos en Cunit — Urgencias Comerciales Sin Horarios |

---

## Cambios adicionales — Páginas de zona

Las páginas `/zonas/el-vendrell.html`, `/zonas/calafell.html` y `/zonas/cunit.html` recibirán una nueva sección "Servicios disponibles en [ciudad]" con tarjetas enlazando a cada una de sus 5 páginas de servicio correspondientes.

**Ejemplo para zonas/calafell.html:**
```
Servicios disponibles en Calafell
├── Apertura de puertas en Calafell → /servicios/apertura-de-puertas-calafell.html
├── Cambio de bombines en Calafell → /servicios/cambio-de-bombines-calafell.html
├── Cerraduras antibumping en Calafell → /servicios/cerraduras-antibumping-calafell.html
├── Apertura de vehículos en Calafell → /servicios/apertura-de-vehiculos-calafell.html
└── Cierres metálicos en Calafell → /servicios/cierres-metalicos-calafell.html
```

Esto refuerza el enlazado interno y da a Google señales adicionales servicio+ciudad sin duplicar contenido.

---

## Estructura de cada página nueva

Cada página nueva sigue la misma estructura que las existentes:

1. `<title>` — [Servicio] [Ciudad] · [USP] | Keyron Cerrajeros (≤ 60 caracteres)
2. `<meta description>` — Con ciudad, tiempo de llegada y teléfono (≤ 155 caracteres)
3. Geo metas — geo.region, geo.placename, geo.position, ICBM con coordenadas de la ciudad
4. H1 — [Servicio] en [Ciudad] — [tagline específico ciudad]
5. Párrafo introductorio — Ciudad mencionada ×3 en primeras 100 palabras, tiempo de llegada y USP
6. Trust bar — < 20/30 min · Precio cerrado · Sin rotura · Homologados
7. Sección de servicios
8. Bloque "¿Por qué elegirnos en [Ciudad]?"
9. FAQ específica de ciudad (3-5 preguntas)
10. CTA final con teléfono
11. JSON-LD — Service + LocalBusiness + BreadcrumbList + FAQPage

### Tiempos de llegada por ciudad

| Ciudad | Tiempo en H1/copy | Zona |
|---|---|---|
| El Vendrell | < 20 minutos | Primaria |
| Calafell | 30 minutos | Secundaria |
| Cunit | 20 minutos | Secundaria |

### Coordenadas geo para metas

| Ciudad | geo.position | ICBM |
|---|---|---|
| El Vendrell | 41.2188;1.5356 | 41.2188, 1.5356 |
| Calafell | 41.1985;1.5685 | 41.1985, 1.5685 |
| Cunit | 41.2053;1.6335 | 41.2053, 1.6335 |

---

## Páginas base para generar las nuevas

Cada página nueva se construye a partir de la página de servicio equivalente de El Vendrell, sustituyendo ciudad, tiempo de llegada, geo metas y JSON-LD. El contenido técnico del servicio (materiales, marcas, proceso) se mantiene idéntico — lo que varía es el contexto local.

| Nueva página | Base |
|---|---|
| apertura-de-puertas-calafell.html | apertura-de-puertas.html |
| apertura-de-puertas-cunit.html | apertura-de-puertas.html |
| cambio-de-bombines-calafell.html | cambio-de-bombines.html (tras actualizar a El Vendrell) |
| cambio-de-bombines-cunit.html | cambio-de-bombines.html |
| cerraduras-antibumping-calafell.html | cerraduras-antibumping.html (tras actualizar a El Vendrell) |
| cerraduras-antibumping-cunit.html | cerraduras-antibumping.html |
| apertura-de-vehiculos-calafell.html | apertura-de-vehiculos.html (tras actualizar a El Vendrell) |
| apertura-de-vehiculos-cunit.html | apertura-de-vehiculos.html |
| cierres-metalicos-calafell.html | cierres-metalicos.html (tras actualizar a El Vendrell) |
| cierres-metalicos-cunit.html | cierres-metalicos.html |

---

## Orden de ejecución recomendado

1. **Actualizar las 4 páginas existentes** a El Vendrell (H1, title, meta, JSON-LD areaServed)
2. **Crear las 5 páginas de Calafell** basadas en las actualizadas de El Vendrell
3. **Crear las 5 páginas de Cunit** basadas en las actualizadas de El Vendrell
4. **Enriquecer las 3 páginas de zona** (El Vendrell, Calafell, Cunit) con sección de servicios

## Modo de ejecución

Se trabajará **punto por punto** — una página o grupo lógico por sesión — para controlar el uso de tokens y permitir revisión incremental antes de continuar.

---

## Métricas de éxito

- Cada combinación [servicio + ciudad] tiene una URL dedicada con H1 específico
- Todas las páginas pasan el checklist de calidad SEO del skill local-seo-copy
- Las páginas de zona enlazan internamente a todas sus páginas de servicio
- JSON-LD correcto en las 15 páginas de servicio + 3 zonas actualizadas
