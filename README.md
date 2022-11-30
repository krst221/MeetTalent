# MeetTalent

Proyecto final del Bootcamp de Desarrollo Web Fullstack realizado con React y Redux sobre una página para crear y encontrar trabajo, similar a Linkedin.

## Contenido

### Accediendo a la página

Página principal del sitio web donde se nos permite: Hacer login con cuenta de usuario o empresa, recuperar la contraseña si la hemos olvidado o crear una nueva cuenta de usuario o empresa.

#### Registro de cuenta

Tanto si nos registramos como usuario o como empresa, se nos lleva a un formulario donde introduciremos los respectivos campos (todos necesarios), incluida una contraseña con validación (8 carácteres, mayúscula, minúscula, número y carácter especial) que hay que introducir dos veces, y un checkbox conforme hemos leído los términos y condiciones.

Si el registro ha sido correcto se nos redigirá a la página de login para que iniciemos sesión con nuestra nueva cuenta.

#### Recuperación de contraseña

Si hemos olvidado la contraseña, no pasa nada! (siempre y cuando recordemos el mail asociado). En esta página se nos pedirá que introduzcamos el mail de la cuenta dos veces, y si existe en la base de datos y está bien introducido se nos redigirá a la página de Nueva contraseña, en donde podremos reemplazarla. Por motivos de seguridad esta página está securizada, y sólo podremos acceder a ella si hemos introducido un mail correcto previamente.

#### Login
 
Una vez hagamos login y este sea exitoso se nos redigirá al Home del usuario/empresa, en donde podremos navegar al resto de páginas. Todo este entorno está securizado, si intentamos acceder a cualquiera de los siguientes endpoints sin estar logeados se nos redigirá a la página de Login.


### Home

Ya dentro del entorno de MeetTalent nos encontramos con nuestro nombre de usuario, foto de perfil (si es la primera vez que iniciamos sesión tendremos una imagen por defecto) y una pestaña para acceder al detalle de tu cuenta para ver y editar todos los campos, además de un navbar debajo donde podremos acceder al resto de páginas.

Si hemos iniciado sesión como usuario y estamos apuntados a una o más candidaturas nos aparecerá una nueva pestaña para acceder a la página de Candidaturas activas del usuario.

#### Mi cuenta

Aquí podemos ver el detalle de nuestra cuenta de usuario (muchos campos no están completados, ya que el registro sólo contempla la información básica), y haciendo click en el lapiz podemos editar la imagen (introduciendo una URL válida), el resto de campos incluido el mail y añadir tanto palabras clave como la formación académica.

Si hemos iniciado sesión como una cuenta de empresa nos aparecerán menos campos, y el diseño se ajusta para que se vea como una tarjeta centrada.

##### Edición de campos

Una vez dentro del modo de edición nos aparecerá una etiqueta para editar al lado de cada campo, simplemente hacemos click en la que nos interese y podremos editar/añadir información de dicho campo. Por ejemplo, en la ubicación podemos añadir información complementaria como el código postal o la dirección completa, y eliminar estos campos en cualquier momento.

##### Añadir palabras clave/formación

Las palabras clave son las palabras que te definen mejor a ti y a tu perfil. Simplemente escribiendo la palabra deseada se añadirá a la lista. Si queremos eliminar una palabra clave bastará con hacer click encima. Los colores se alternan entre palabras clave, y se reorganizan al añadir o eliminar campos.

De la misma manera, podremos añadir nuestra formación y eliminarla si nos hemos equivocado o no queremos que aparezca de nuevo simplemente haciendo click.

### Candidaturas

Como hemos mencionado anteriormente, si estamos inscritos a una o más ofertas aquí podremos ver nuestras candidaturas activas. Se nos muestra el detalle de cada oferta (nombre, el proceso de selección, vacantes, gente inscrita, ubicación de la oferta..) y podemos filtrarlas por el nombre. 

En el momento en el que un proceso de selección se termina y la candidatura se cierra, se eliminará de la página. Única y exclusivamente se muestran las candidaturas activas.


### Candidatos

Aquí aparece una lista de todos los usuarios inscritos en la base de datos, mostrando una tarjeta campos clave como la imagen de perfil, el nombre, la edad (si está definida) y la ubicación por ciudad. Haciendo click en cada tarjeta nos lleva al perfil detallado del respectivo usuario.

Se pueden filtrar los candidatos tanto por nombre como por localización y trabajo. Simplemente haciendo click en el filtro que queremos activo, e introducir el parámetro de interés en la barra de busqueda.

### Creación de ofertas

Esta página está reservada para cuentas de empresa, si intentamos acceder como usuario se nos denegará el acceso, y se nos pedirá que iniciemos sesión como cuenta de empresa.
Aquí tenemos la opción de crear una oferta nueva de parte de nuestra empresa.

#### Duplicar oferta

Aquí nos aparecen cuatro pestañas con diferentes ofertas que podemos duplicar y usar como plantilla para la oferta que queremos introducir (podemos mantener todos los campos asignados a cada oferta o modificar los que queramos, menos el nombre). 
El criterio para mostrar las plantillas es el siguiente:
- Si no hay ninguna oferta en la BBDD se muestran cuatro modelos de oferta predefinidos.
- Cuando se introduce una oferta nueva en la BBDD esta reemplazará uno de los modelos predefinidos, y así sucesivamente hasta que hayan cuatro o más ofertas en la BBDD.
- En el caso de que hayan cuatro o más ofertas se mostrarán las cuatro más recientes.
Si no nos interesa usar ninguna oferta existente como plantilla, simplemente introducimos el nombre de nuestra oferta y le damos a comenzar.

#### Formulario de oferta

En el formulacio de creación de oferta tenemos un desplegable para cada campo (son todos requeridos), en donde se nos deja escoger entre diferentes opciones para completar el campo. Si hemos escogido una de las plantillas toda la información se autocompletará según la plantilla/oferta que hayamos elegido duplicar.
El campo Compañia siempre será equivalente al nombre de nuestra empresa, y por motivos obvios no se puede modificar.
Cuando hemos introducido todos los campos se nos lleva a una página de confirmación para que verifiquemos que todos los campos son correctos, y si es el caso aceptamos el formulario. Si todo ha ido bien se nos redigirá a la página de crear oferta, y nuestra nueva oferta aparecerá en la pestaña de Ofertas.

### Ofertas

En esta página nos aparecen todas las ofertas de la BBDD, tanto abiertas como cerradas. Arriba de todo tenemos un buscador para filtrar por nombre, y dos pestañas para que nos muestre solamente las ofertas abiertas o cerradas. 
Como hemos mencionado en la página de Candidaturas, cada tarjeta incluye información diversa sobre la oferta, aquí vamos a centrarnos en el proceso de selección, apuntarse a una oferta y cerrar una oferta.

#### Proceso de selección

El criterio del proceso de selección es el siguiente:

- Por defecto las ofertas tienen un plazo de un mes hasta que la candidatura se cierra, en cuyo caso el proceso pasa al 100% y se mueve automaticamente a la página de cerradas. Cada vez que un candidato se inscribe el proceso aumenta en un 2%, de modo que como máximo pueden haber 50 candidatos por oferta.
- Cuando una oferta se cierra, no puede volver a abrirse, y no pueden apuntarse más candidatos. Aparte, se eliminará la oferta de la lista de Candidaturas de todos los usuarios que estuvieran apuntados.

#### Apuntarse a una oferta

Como candidatos podemos apuntarnos a una oferta haciendo click en el + que aparece en la esquina superior derecha de la oferta. Sólo podemos apuntarnos si la oferta sigue abieta y si no nos hemos apuntado aún. Si intentamos apuntarnos a una oferta en la que ya estamos inscritos en + no aparece.

#### Cerrar una oferta

Como empresa podemos cerrar las ofertas que hemos creado en cualquier momento (sólo las que hemos creado, claro) haciendo click en el candado que aparece en la esquina superior derecha, en el mismo sitio donde aparecería el boton +.

## Futuras mejoras/implementaciones

- Añadir mensajería privada entre usuarios y empresas (en proceso).
- Filtrar usuarios por palabras clave o formación.
- Crear entrevistas de trabajo usando la plataforma ZOOM.

## Agradecimientos y contrbuciones

@DavidRodriguezDev por ayudarme con el proyecto, y encargarse sobretodo del diseño y alguna funcionalidad.
