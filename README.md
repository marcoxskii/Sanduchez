# 🥪 Proyecto "Sanduchez"

## Descripción

El proyecto "Sanduchez" es una aplicación CRUD diseñada para gestionar los productos de una tienda de sanduches. La aplicación está dividida en varias partes que se ejecutan en contenedores Docker, permitiendo una arquitectura modular y escalable. A continuación, se detalla la configuración y uso de las diferentes herramientas y tecnologías empleadas en este proyecto.

## 🏗️ Arquitectura del Sistema

El sistema está compuesto por cinco servicios principales, cada uno desplegado en un contenedor Docker:

1. **Angular (Frontend)**
2. **Wildfly con Jakarta (Backend)**
3. **PostgreSQL (Base de Datos)**
4. **PgAdmin (Herramienta de Administración de Base de Datos)**
5. **Swagger (Documentación de API)**

## 🚀 Servicios

### 1. Angular (Frontend)

El frontend está desarrollado en Angular. Proporciona una interfaz de usuario interactiva y receptiva. El Dockerfile para este servicio se encuentra en el directorio `SanduchezAng`.

#### Comandos para Angular 🌐

Para construir y ejecutar la imagen Docker del frontend, usa los siguientes comandos:

```sh
cd SanduchezAng
npm install
ng build
docker build -t sanduchezang-app .
docker run -d -p 80:80 sanduchezang-app
```

### 2. Wildfly con Jakarta (Backend) 💻
El backend está implementado con Jakarta EE y se despliega en un servidor Wildfly. Este servicio expone una API RESTful para interactuar con la base de datos PostgreSQL.

Para construir y ejecutar la imagen Docker del backend, usa los siguientes comandos:

```sh
cd SanduchezAPI/sanduchez/src/main/docker
mvn verify
mvn clean package docker:build
```

### 3. PostgreSQL (Base de Datos) 🗄️
La base de datos está gestionada por PostgreSQL, donde se almacenan los datos de los productos.

### 4. PgAdmin (Herramienta de Administración de Base de Datos) 🛠️
PgAdmin es una herramienta gráfica para la administración de PostgreSQL. Permite gestionar la base de datos de manera visual y sencilla.

### 5. Swagger (Documentación de API) 📑
Swagger se utiliza para documentar la API RESTful. Facilita la comprensión y prueba de los endpoints disponibles.

## 🛠️ Uso del Proyecto

## 1. Construir y ejecutar los servicios:
Para poner en marcha todos los servicios definidos en el archivo docker-compose.yml, ejecuta el siguiente comando:

```sh
docker-compose up -d
```

## 2. Acceder a los servicios:
Angular (Frontend):
```sh
http://localhost:80
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

## 🌐 Despliegue en Kubernetes

Para desplegar los servicios en un clúster de Kubernetes, sigue los siguientes pasos:

### 1. Crear los archivos de configuración de Kubernetes

Asegúrate de tener los archivos de configuración YAML para cada servicio en el directorio `. Estos archivos deben definir los deployments y services necesarios.

### 2. Aplicar los archivos de configuración

Para desplegar los servicios en el clúster de Kubernetes, usa los siguientes comandos:

```sh
kubectl apply -f angular-deployment.yaml
kubectl apply -f wildfly-deployment.yaml
kubectl apply -f postgresql-deployment.yaml
kubectl apply -f pgadmin-deployment.yaml
kubectl apply -f swagger-deployment.yaml
```

### 3. Verificar los pods y servicios

Para verificar que los pods y servicios están corriendo correctamente, usa los siguientes comandos:

```sh
kubectl get pods
kubectl get services
minikube service sanduchez-frontend
kubectl logs -f <pod-name>
```
### 4. Escalar los servicios

Para escalar los servicios y manejar una mayor carga, puedes ajustar el número de réplicas de los pods. Usa el siguiente comando para escalar un servicio específico:

```sh
kubectl scale deployment <deployment-name> --replicas=<number-of-replicas>
```

Por ejemplo, para escalar el frontend de Angular a 3 réplicas, usa:

```sh
kubectl scale deployment sanduchez-frontend --replicas=3
kubectl scale deployment sanduchez-backend --replicas=3
```

Verifica que el escalado se haya realizado correctamente:

```sh
kubectl get deployments
```
