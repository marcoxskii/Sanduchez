# Sanduchez
## Parte Angular
El front de este crud esta diseñado en Angular, un crud sencillo para Sanduches de nuestra marca "Sanduchez®", utilizamos un Dockerfile que construye una imagen para poder ejecutarlo dentro del puerto 80.

Para construir esta imagen utilizamos el dockerfile dentro del front, creamos la imágen y la ejecutamos así:
```sh
docker build -t sanduchezang-app .
docker run -d -p 80:80 sanduchezang-app
```
