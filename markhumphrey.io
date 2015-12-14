server {
    listen 80;
    server_name 192.168.99.100;

    location / {
        root /usr/share/nginx/html/static;
        try_files $uri $uri/ /index.html =404;
    }

    location /api {
        rewrite /api/(.+) /$1 break;
        include uwsgi_params;
        uwsgi_pass api:8080;
    }

}
