# Usa una imagen de NGINX para servir la aplicación Angular
FROM nginx:alpine

# Copia los archivos compilados al directorio NGINX
COPY dist/sanduchez-ang/browser /usr/share/nginx/html

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 80

# Comando para ejecutar NGINX
CMD ["nginx", "-g", "daemon off;"]