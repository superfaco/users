#Cambiar extension a .cmd para ejecutar en windows
docker run -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_DATABASE=app_login -p 3306:3306 mysql