# API Murcia

La API Murcia proporciona información detallada sobre los centros educativos en la comunidad de Murcia en formato JSON. A continuación, se detallan los pasos para desplegar y utilizar esta API.

## Despliegue

1. **Instalación de Dependencias:**

   ```bash
   npm install
   ```

2. **Ejecución del Proyecto:**
   ```bash
   npm run start
   ```

## Uso

La API Murcia ofrece dos endpoints accesibles a través del dominio local, donde puedes consultar y obtener información en formato JSON.

### Endpoint 1: `/jsonFromFile`

Este endpoint devuelve la información de los centros educativos de Murcia desde un archivo local en formato JSON.

- **Método:** GET
- **URL:** `http://localhost:3001/jsonFromFile`

### Endpoint 2: `/jsonFromBody`

Este endpoint proporciona información detallada sobre los centros educativos de Murcia directamente desde el cuerpo de la solicitud.

- **Método:** POST
- **URL:** `http://localhost:3001/jsonFromBody`

  #### Parámetros de Solicitud:

  - `centros`: Lista de objetos que representan la información de los centros educativos.

  Ejemplo del cuerpo de la solicitud:

  ```json
  {
    "centros": [
      {
        // ... Detalles del primer centro educativo
      },
      {
        // ... Detalles del segundo centro educativo
      }
    ]
  }
  ```

  Recibirás una respuesta en formato JSON con la información detallada de los centros educativos de Murcia.
