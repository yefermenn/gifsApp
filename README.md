# GifsApp

GifsApp es una aplicación web de búsqueda y exploración de GIFs que construí con Angular 21 y la API pública de Giphy. El proyecto nació como una forma de practicar Angular de manera más completa, no solamente consumiendo una API, sino también entendiendo mejor cómo organizar una aplicación, compartir información entre componentes y aprovechar las herramientas que ofrece el framework.

La aplicación permite descubrir GIFs en tendencia, buscar contenido por texto y conservar un historial de consultas para volver a consultar resultados anteriores.

## ¿Qué ofrece la aplicación?

La experiencia del usuario está organizada en tres vistas principales:

- **Trending:** muestra una colección de GIFs populares obtenidos desde la API de Giphy.
- **Search:** permite buscar GIFs por palabras clave y mostrar los resultados de la consulta.
- **History:** muestra los resultados almacenados de búsquedas anteriores, utilizando la ruta correspondiente a cada consulta.

Además, la interfaz incluye un menú lateral para navegar entre estas secciones y conserva el historial de búsquedas en el almacenamiento local del navegador.

## Características principales

- Consumo de la API de Giphy para obtener GIFs.
- Búsqueda por texto con resultados paginados.
- Estrategia de **scroll infinito** para cargar más GIFs a medida que el usuario avanza por la lista.
- Conservación de la posición del scroll al cargar nuevos resultados.
- Referencia a una etiqueta del DOM para controlar el comportamiento del scroll y detectar cuándo es necesario solicitar más información.
- Servicio encargado de mantener la altura del scroll y ayudar a conservar la posición de desplazamiento.
- Vista de GIFs en tendencia.
- Historial de búsquedas persistente mediante `localStorage`.
- Arquitectura basada en componentes standalone de Angular.
- Gestión de estado mediante **signals** y flujos reactivos con **RxJS**.
- Navegación con rutas anidadas y carga diferida de páginas.

## Lo que aprendí con este proyecto

Este proyecto no solamente me sirvió para construir una aplicación que consume una API, sino también para entender mejor varios conceptos de Angular a través de problemas reales que tuve que resolver durante el desarrollo.

Uno de los aprendizajes que más me ayudó fue entender **para qué sirven realmente los servicios en Angular**. Al principio podía entenderlos como una forma de separar lógica, pero con este proyecto pude ver su utilidad de una manera mucho más práctica. La necesidad de mantener información y lógica relacionada con el scroll fuera de los componentes me llevó a crear un servicio encargado de conservar la altura del scroll y ayudar a mantener la posición del usuario mientras se cargaban nuevos resultados.

También aprendí a trabajar con una estrategia de **scroll infinito**. En lugar de cargar todos los resultados de una sola vez, la aplicación utiliza la referencia a una etiqueta de la interfaz para controlar cuándo el usuario se aproxima al final de la lista y, en ese momento, solicitar más GIFs. Esto me permitió entender mejor cómo interactuar desde Angular con elementos del DOM y cómo combinar esa referencia con la lógica de paginación de la API.

Otro aprendizaje importante fue comprender que cargar nuevos elementos no debería significar necesariamente que el usuario pierda el lugar en el que estaba navegando. Por eso implementé una estrategia para conservar la altura del scroll mediante un servicio. Esto me ayudó a entender mejor cómo compartir y preservar información entre diferentes partes de una aplicación y, al mismo tiempo, a comprender de una forma más concreta el propósito de los servicios.

Además, durante el desarrollo aprendí y practiqué:

- El uso de **standalone components** en Angular.
- El manejo de estado mediante **signals**.
- El uso de **RxJS** para trabajar con flujos reactivos.
- La comunicación con APIs mediante `HttpClient`.
- El uso de **Angular Router** y rutas anidadas.
- La carga diferida de páginas.
- La separación de responsabilidades entre componentes, servicios, interfaces y mappers.
- La persistencia de información utilizando `localStorage`.
- El trabajo con respuestas de APIs externas y su transformación hacia modelos propios de la aplicación.

En general, este proyecto me ayudó a pasar de simplemente conocer conceptos de Angular a entender mejor **cuándo y por qué utilizarlos**. Muchas de las decisiones de arquitectura surgieron de problemas que aparecieron mientras construía la aplicación, lo que hizo que el aprendizaje fuera mucho más práctico.

## Tecnologías utilizadas

- Angular 21
- TypeScript
- RxJS
- Angular Router
- Angular HttpClient
- Giphy API
- Signals de Angular

## Estructura del proyecto

La aplicación sigue una organización modular dentro de la carpeta `src`:

- `src/app`: contiene la configuración general de la app, las rutas y el componente raíz.
- `src/app/gifs/pages`: define las vistas principales de la aplicación: Trending, Search y History.
- `src/app/gifs/components`: agrupa los componentes reutilizables como la lista de GIFs y el menú lateral.
- `src/app/gifs/services`: contiene los servicios relacionados con la comunicación con Giphy, el historial y la lógica necesaria para mantener el estado del scroll.
- `src/app/gifs/interfaces` y `mapper`: definen los modelos de datos y la transformación de las respuestas de la API.
- `src/environments`: almacena la configuración del entorno, incluyendo la URL base de Giphy y la API key.

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

- `npm start`: inicia el servidor de desarrollo.
- `npm run build`: compila la aplicación para producción.
- `npm test`: ejecuta las pruebas de la app.
- `npm run watch`: compila en modo observación para desarrollo.

## Configuración de la API

La aplicación utiliza la configuración definida en `src/environments/environment.ts`. Allí se incluyen:

- La URL base de la API de Giphy.
- La API key utilizada para las solicitudes.

Si deseas usar otra cuenta o un entorno distinto, puedes actualizar esos valores.

## Flujo de uso

1. Al iniciar la app, se carga la vista de Trending con GIFs populares.
2. Desde la vista de Search, el usuario escribe una consulta y presiona Enter para obtener resultados.
3. Los GIFs se muestran progresivamente mediante la estrategia de scroll infinito.
4. Cuando el usuario se acerca al final de la lista, la aplicación utiliza la referencia a la etiqueta correspondiente para detectar que debe cargar más resultados.
5. Mientras se agregan nuevos GIFs, se conserva la posición del scroll utilizando el servicio encargado de mantener su altura.
6. Cada búsqueda se guarda en el historial y queda disponible desde la ruta correspondiente.
7. El usuario puede volver a ver resultados anteriores desde el historial sin tener que volver a consultar la API.

## Notas importantes

- El historial de búsquedas se almacena en `localStorage` del navegador.
- La aplicación es totalmente frontend y no requiere un backend propio.
- Las peticiones se realizan directamente desde el cliente hacia la API de Giphy.
- La estrategia de scroll infinito depende de la paginación proporcionada por la API.

## Estado del proyecto

Este proyecto funciona como una demostración práctica de una aplicación Angular moderna con componentes standalone, signals, RxJS, servicios, enrutamiento, consumo de APIs externas y una estrategia de scroll infinito.

Más que ser solamente una aplicación para buscar GIFs, lo considero un proyecto de aprendizaje en el que pude entender mejor cómo estructurar una aplicación Angular y, sobre todo, cómo los diferentes conceptos del framework empiezan a tener sentido cuando aparecen necesidades concretas durante el desarrollo.
