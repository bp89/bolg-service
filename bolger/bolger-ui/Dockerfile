# Dockerfile gets copied to ./dist as part of npm run copy.
# Take contents of dist and copy to nginx html directory
FROM nginx:1.13.8

# Assets
ADD ./dist/build /usr/share/nginx/html/

# nginx config
ADD ./docker/nginx.conf /etc/nginx/nginx.conf
ADD ./docker/nginx-selfsigned.crt /ssl/
ADD ./docker/nginx-selfsigned.key /ssl/
ADD ./docker/start-nginx-qa.sh /
RUN chmod +x ./start-nginx-qa.sh
