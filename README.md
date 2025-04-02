#  Frontend: Recomendador de Películas con React
Este frontend es una interfaz web desarrollada con React.js que permite a los usuarios obtener recomendaciones de películas basadas en descripciones semánticas. La aplicación se conecta con una API en FastAPI, la cual utiliza inteligencia artificial para encontrar películas similares en función del contenido proporcionado por el usuario.

---

## Funcionalidad Principal
1. Entrada de Usuario
   - El usuario ingresa una breve descripción sobre una película que le gusta o el tipo de historia que desea ver.
   - Ejemplo: "Una historia de venganza con mucha acción"
2. Búsqueda y Recomendaciones
   - Al presionar el botón "Buscar", la aplicación envía la descripción a la API de FastAPI.
   - La API procesa la solicitud utilizando modelos de procesamiento del lenguaje natural (Sentence Transformers) y busca en la base de datos de películas almacenada en PostgreSQL con pgvector.
   - Se retorna una lista de películas con títulos y descripciones similares a la consulta del usuario.
3. Visualización de Resultados
   - Las películas recomendadas se muestran en una lista con su título y breve descripción.
   - Cada recomendación representa una película que coincide semánticamente con la descripción ingresada.

## Tecnologías Utilizadas
- React.js con Vite → Para una interfaz rápida y ligera.
- Axios → Para comunicarse con la API de FastAPI.
- FastAPI + PostgreSQL → Backend que gestiona la búsqueda semántica.
