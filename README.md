# Proyecto "Sanduchez"

## Descripción

El proyecto "Sanduchez" es una aplicación CRUD diseñada para gestionar los productos de una tienda de sanduches. La aplicación está dividida en varias partes que se ejecutan en contenedores Docker, permitiendo una arquitectura modular y escalable. A continuación, se detalla la configuración y uso de las diferentes herramientas y tecnologías empleadas en este proyecto.

## Arquitectura del Sistema

El sistema está compuesto por cinco servicios principales, cada uno desplegado en un contenedor Docker:

1. **Angular (Frontend)**
2. **Wildfly con Jakarta (Backend)**
3. **PostgreSQL (Base de Datos)**
4. **PgAdmin (Herramienta de Administración de Base de Datos)**
5. **Swagger (Documentación de API)**

## Servicios

### 1. Angular (Frontend)

El frontend está desarrollado en Angular. Proporciona una interfaz de usuario interactiva y receptiva. El Dockerfile para este servicio se encuentra en el directorio `SanduchezAng`.

#### Comandos para Angular

Para construir y ejecutar la imagen Docker del frontend, usa los siguientes comandos:

```sh
docker build -t sanduchezang-app .
docker run -d -p 80:80 sanduchezang-app
```

### 2. Wildfly con Jakarta (Backend)
El backend está implementado con Jakarta EE y se despliega en un servidor Wildfly. Este servicio expone una API RESTful para interactuar con la base de datos PostgreSQL.

### 3. PostgreSQL (Base de Datos)
La base de datos está gestionada por PostgreSQL, donde se almacenan los datos de los productos.

### 4. PgAdmin (Herramienta de Administración de Base de Datos)
PgAdmin es una herramienta gráfica para la administración de PostgreSQL. Permite gestionar la base de datos de manera visual y sencilla.

### 5. Swagger (Documentación de API)
Swagger se utiliza para documentar la API RESTful. Facilita la comprensión y prueba de los endpoints disponibles.

## Uso del Proyecto

## 1. Construir y ejecutar los servicios:
Para poner en marcha todos los servicios definidos en el archivo docker-compose.yml, ejecuta el siguiente comando:

```sh
docker-compose up -d
```

## 2. Acceder a los servicios:
Angular (Frontend):
```sh
http://localhost
```
Wildfly con Jakarta (Backend): 
```sh
http://localhost:8082
```
PostgreSQL: 
```sh
Conexión interna entre contenedores
```
PgAdmin: 
```sh
http://localhost:5050
```
Swagger: 
```sh
http://localhost:8888
```

