# Sanduchez

## 🚀 Parte Angular

El **frontend** de este CRUD está diseñado en **Angular**. Es una aplicación sencilla para gestionar los **Sanduches** de nuestra marca "**Sanduchez®**". Utilizamos un `Dockerfile` para construir una imagen que nos permite ejecutar la aplicación dentro de un contenedor y exponerla en el **puerto 80**.

### 🛠️ Construcción y Ejecución del Frontend

Para construir la imagen y ejecutarla en un contenedor Docker, sigue estos pasos:

1. **Construir la imagen** usando el Dockerfile dentro de la carpeta del frontend:
    ```sh
   docker build -t sanduchezang-app .
   ```
2. **Ejecutar el contenedor y exponer el puerto 80**
   ```sh
   docker run -d -p 80:80 sanduchezang-app
   ```

Esto levantará la aplicación Angular en tu navegador localmente en http://localhost.
  
