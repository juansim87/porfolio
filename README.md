# Proyecto Final del Módulo de CSS

## Objetivo

Desarrollar una página web estilizada que demuestre tu conocimiento de CSS, incluyendo la capacidad de crear un diseño adaptable, bien estructurado y visualmente atractivo. Este proyecto debe reflejar una comprensión sólida del modelo de caja, Flexbox, diseño responsive, y los principios básicos de una arquitectura CSS efectiva.

Tendrás libertad para elegir el propósito y contenido de tu sitio web. Al igual que en el proyecto de HTML, debes comunicar tu idea al mentor para su aprobación antes de comenzar. Puedes inspirarte en las ideas propuestas en el proyecto anterior o crear una web completamente nueva.

## Requisitos Específicos del Proyecto

### 1. Idea y Planteamiento

El paso previo a cualquier desarrollo es pensar bien la idea y anotar que funcionalidades tendrá. Cuando hablamos de funcionalidades es como pensar en el usuario. Este pequeño ejercicio lo practicarás y aprenderás al detalle más adelante en el próximo bloque. Un ejemplo es algo como:

-   El usuario debe poder entrar en la web
-   El usuario debe poder hacer click en la barra de navegación y ver otras páginas
-   El usuario debe poder ver la pantalla en movil, tablet y escritorio
-   El usuario debe poder ver los productos de la tienda.

Cuando tengas la idea de la web que quieras programar, el siguiente paso es verificar con tu mentor (Juan) que sea una idea viable. Para ello contacta por discord o whatsapp y una vez validada tu idea por parte del mentor, pasarás a plantearla en papel.

### 2. Planteamiento en Papel o Digital

Como siempre, una buena web empieza por pensar la estructura de la misma. Para ello, plantea en papel todas las partes de tu web. Nav, header, main, footer y sus partes internas. Ya lo has hecho muchas veces.

En este planteamiento, es recomendable que empieces a pensar en elementos y contenedores de manera que en el momento de programar, ya tengas claro que elementos y estructura vas a utilizar.

Todos sabemos que una vez puesto en práctica tu planteamiento, el diseño es muy posible que vaya teniendo modificaciones una vez llevado a la práctica.

### 3. Estructura HTML

El proyecto debe partir de una estructura HTML clara y semántica, como se abordó en el proyecto de HTML. Asegúrate de que los elementos HTML estén bien organizados y sean compatibles con los estilos que aplicarás en CSS.

### 4. Modelo de Caja (Box Model)

-   Aplica el modelo de caja en todos los elementos clave necesarios. Utiliza propiedades como `padding`, `margin`, `containers con width` etc. para manipular el espacio y crear diseños limpios y bien organizados.
-   Asegúrate de que el contenido esté bien alineado y tenga un buen espaciado visual.

### 5. Flexbox

-   Implementa Flexbox para crear una estructura flexible en mobile first. Debes usar Flexbox en al menos dos secciones diferentes de tu sitio. Por ejemplo, en la barra de navegación y una galería de imágenes o productos.
-   Usa propiedades como `justify-content`, `align-items`, `flex-wrap`, y `flex-direction` para controlar la alineación de los elementos.

### 6. Diseño responsivo con Mobile First (Media Queries)

-   Tu proyecto debe ser completamente adaptable a diferentes tamaños de pantalla. Utiliza `media queries` para ajustar el diseño en pantallas pequeñas (mobile-first), tabletas y escritorios.
-   Aplica técnicas de responsive como la modificación de `width`, `padding`, `font-size`, y `display` para diferentes dispositivos.

### 7. Imágenes Responsivas

-   Utiliza imágenes que se adapten correctamente a diferentes tamaños de pantalla. Usa `width: 100%` para asegurar que las imágenes no se desborden en pantallas pequeñas.
-   Si es posible, utiliza el atributo `srcset` para proporcionar imágenes de diferentes resoluciones para mejorar el rendimiento. Esto es opcional.

### 8. Barra de Navegación

-   Crea una barra de navegación responsiva que cambie su diseño dependiendo del tamaño de pantalla. Por ejemplo, puede cambiar a un menú tipo "hamburguesa" en pantallas más pequeñas.
-   Aplica estilos con Flexbox para organizar los enlaces y asegurar que se alineen correctamente.

### 9. Tipografías Personalizadas

-   Usa al menos una fuente personalizada, utilizando Google Fonts o una fuente importada a través de CSS. Aplica diferentes estilos de fuente, como `font-weight`, `font-style`, y `text-transform`.

### 10. Colores y Paletas

-   Define una paleta de colores coherente para tu sitio. Utiliza colores para distinguir encabezados, texto, fondos, botones y enlaces.
-   Aplica buenas prácticas en la combinación de colores, garantizando que el contraste sea adecuado para la accesibilidad.
-   Usa CSS Custom properties para las variables de tu proyecto



### 11. Pseudoelementos y Pseudoclases

-   Utiliza pseudoelementos (`::before`, `::after`) para agregar elementos decorativos, como iconos o flechas.
-   Aplica pseudoclases (`:hover`, `:focus`, `:nth-child`, etc.) para mejorar la interacción del usuario con elementos como botones, enlaces o formularios.

### 12. Formulario Estilizado

-   Crea al menos un formulario (de contacto o suscripción) y dale estilos personalizados. Incluye efectos de `hover` y `focus` en los campos y botones.

### 13. Animaciones y Transiciones (Opcional)

-   Usa transiciones CSS para crear animaciones suaves cuando los usuarios interactúen con los elementos del sitio. Por ejemplo, cambia el color de un botón al hacer hover con `transition`.
-   Puedes agregar una animación CSS simple utilizando `@keyframes` para dar vida a alguna sección de tu web.

## Requisitos Avanzados - Nivel Samurai

### 1. Diseño Mobile First

-   Desarrolla tu sitio web utilizando la metodología mobile-first, asegurándote de que el diseño pequeño sea el predeterminado y escale a medida que aumente el tamaño de pantalla. Lo hemos hecho muchas veces en clase.

### 2. Flexbox y Grid en Combinación

-   Implementa CSS Grid para una sección de tu sitio (por ejemplo, la disposición de artículos o una galería de imágenes), y combina su uso con Flexbox en otros elementos. Recuerda, GRID para crear cuadrículas y FLEXBOX para posicionar elementos.

### 3. Variables CSS

-   Usa variables CSS (`--color-principal`, `--font-principal`) para manejar los colores, fuentes y otros valores reutilizables en tu proyecto. Esto te permitirá mantener un código más limpio y fácil de mantener.

### 4. Arquitectura CSS con BEM (Bloque, Elemento, Modificador)

-   Utiliza la metodología BEM para organizar tus clases CSS de manera más eficiente y mantener el código estructurado y escalable.

### 5. SASS

-   Si te sientes cómodo con SASS, usa este preprocesador CSS para escribir tu código de manera más eficiente, aprovechando características como anidado, mixins y variables. MUY recomendado. Puedes usar los mixins y variables que hemos creado en clase.

## Ideas de Proyecto

Puedes reutilizar las ideas del proyecto de HTML, pero te proporciono algunas adicionales que puedes adaptar para este proyecto de CSS:

No obstante, la idea de tu proyecto es recomendable que sea tuya propia. Es decir, deberás crear una idea de web desde cero, luego plantearla en papel y por último programarla.

1. **Portfolio Personal Estilizado:** Un sitio para mostrar tus proyectos, con una galería responsiva usando Grid o Flexbox.
2. **Sitio Web de Noticias:** Un diseño tipo revista o blog de noticias con un layout flexible y bien organizado.
3. **Landing Page de Producto:** Una página de aterrizaje para promocionar un producto ficticio, con imágenes grandes y un diseño adaptable.
4. **Galería de Fotografías:** Crea una galería de imágenes responsiva con CSS Grid, que se ajuste a diferentes tamaños de pantalla.
5. **Tienda Online:** Desarrolla el frontend de una tienda online con un diseño responsive, donde los productos se ajusten a diferentes tamaños de pantalla.

## Instrucciones para la Entrega

-   El proyecto lo tendrás que subir a tu cuenta de Github de manera pública
- Tienes que hacer commits frecuentes. En la descripción de cada commit debes explicar los cambios que haces.
-   El código debe estar bien organizado y documentado. Esta documentación del proyecto puede consistir en los bocetos en papel.
-   Juega al "rol" descrito en el proyecto de HTML cuando entregues tu proyecto a tu mentor.
- Deberás tener al menos 3 páginas de HTML y una arquitectura de CSS como la que hemos visto en clase, separando estilos globales en diferentes archivos
