# GifsApp

GifsApp es una aplicación web de búsqueda y exploración de GIFs construida con Angular 21 y la API pública de Giphy. La app permite descubrir GIFs en tendencia, buscar contenido por texto y conservar un historial de consultas para revisitar resultados anteriores.

## ¿Qué ofrece la aplicación?

La experiencia del usuario está organizada en tres vistas principales:

- Trending: muestra una colección de GIFs populares obtenidos desde la API de Giphy.
- Search: permite buscar GIFs por palabras clave y mostrar resultados en tiempo real al ejecutar la búsqueda.
- History: muestra los resultados almacenados de búsquedas previas, usando la ruta correspondiente a cada consulta.

Además, la interfaz incluye un menú lateral con navegación entre estas secciones y conserva el historial de búsquedas en el almacenamiento local del navegador.

## Características principales

- Consumo de la API de Giphy para obtener GIFs.
- Búsqueda por texto con resultados paginados por la respuesta de la API.
- Vista de gifs en tendencia.
- Historial de búsquedas persistente mediante localStorage.
- Arquitectura basada en componentes standalone de Angular.
- Gestión de estado con signals y flujos reactivos con RxJS.
- Navegación con rutas anidadas y carga diferida de páginas.

## Tecnologías utilizadas

- Angular 21
- TypeScript
- RxJS
- Angular Router
- Angular HttpClient
- Giphy API
- Signals de Angular

## Estructura del proyecto

La aplicación sigue una organización modular dentro de la carpeta src:

- src/app: contiene la configuración general de la app, las rutas y el componente raíz.
- src/app/gifs/pages: define las vistas principales de la aplicación: Trending, Search y History.
- src/app/gifs/components: agrupa los componentes reutilizables como la lista de GIFs y el menú lateral.
- src/app/gifs/services: contiene el servicio principal que gestiona la comunicación con Giphy y el historial.
- src/app/gifs/interfaces y mapper: definen los modelos de datos y la transformación de respuestas de la API.
- src/environments: almacena la configuración del entorno, incluyendo la URL base de Giphy y la API key.

## Requisitos previos

- Node.js 20 o superior
- npm 10 o superior

## Instalación

1. Clona el repositorio.
2. Instala las dependencias:

```bash
npm install
```

3. Inicia la aplicación en modo desarrollo:

```bash
npm start
```

4. Abre tu navegador en:

```text
http://localhost:4200/
```

## Scripts disponibles

- npm start: inicia el servidor de desarrollo.
- npm run build: compila la aplicación para producción.
- npm test: ejecuta las pruebas de la app.
- npm run watch: compila en modo observación para desarrollo.

## Configuración de la API

La aplicación utiliza la configuración definida en [src/environments/environment.ts](src/environments/environment.ts). Allí se incluyen:

- la URL base de la API de Giphy
- la API key utilizada para las solicitudes

Si deseas usar otra cuenta o un entorno distinto, puedes actualizar esos valores.

## Flujo de uso

1. Al iniciar la app, se carga la vista de Trending con GIFs populares.
2. Desde la vista de Search, el usuario escribe una consulta y presiona Enter para obtener resultados.
3. Cada búsqueda se guarda en el historial y queda disponible desde la ruta correspondiente.
4. El usuario puede volver a ver resultados anteriores desde el historial sin tener que volver a consultar la API.

## Notas importantes

- El historial de búsquedas se almacena en localStorage del navegador.
- La aplicación es totalmente frontend y no requiere un backend propio.
- Las peticiones se realizan directamente desde el cliente hacia la API de Giphy.

## Estado del proyecto

Este proyecto funciona como una demostración práctica de una aplicación Angular moderna con componentes standalone, signals, enrutamiento y consumo de APIs externas.
