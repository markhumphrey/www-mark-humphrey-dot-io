FROM nginx:latest

# add nginx configuration files
COPY nginx.conf /etc/nginx/nginx.conf
COPY markhumphrey.io /etc/nginx/sites-available/markhumphrey.io
RUN mkdir /etc/nginx/sites-enabled/
RUN ln -s /etc/nginx/sites-available/markhumphrey.io /etc/nginx/sites-enabled/markhumphrey.io

# add static assets
COPY app /usr/share/nginx/html/static
