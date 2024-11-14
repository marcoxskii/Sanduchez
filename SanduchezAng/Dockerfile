# Usa una imagen de NGINX para servir la aplicación Angular
FROM nginx:alpine

# Copia los archivos compilados al directorio NGINX
COPY dist/sanduchez-ang/browser /usr/share/nginx/html

# Copia los certificados SSL
COPY /certificate.crt /etc/nginx/ssl/certificate.crt
COPY /private.key /etc/nginx/ssl/private.key

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 80
EXPOSE 443

# Comando para configurar NGINX para usar SSL
RUN apk add --no-cache openssl && \
    mkdir -p /etc/nginx/conf.d && \
    echo 'server { \
        listen 80; \
        server_name localhost; \
        return 301 https://$host$request_uri; \
    } \
    server { \
        listen 443 ssl; \
        server_name localhost; \
        ssl_certificate /etc/nginx/ssl/certificate.crt; \
        ssl_certificate_key /etc/nginx/ssl/private.key; \
        ssl_protocols TLSv1.2 TLSv1.3; \
        ssl_ciphers HIGH:!aNULL:!MD5; \
        location / { \
            root /usr/share/nginx/html; \
            index index.html index.htm; \
            try_files $uri $uri/ /index.html; \
        } \
    }' > /etc/nginx/conf.d/default.conf

# Comando para ejecutar NGINX
CMD ["nginx", "-g", "daemon off;"]