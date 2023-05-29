version: '3.8'

services:
  cons-adminer:
    image: adminer
    container_name: adminerairbnb
    ports:
      - 5000:8080
    networks:
      - node-network
    links:
      - mysql_db:db

  nest-api:
    container_name: nest-api
    build:
      context: .
    ports:
      - 3000:6969
    depends_on:
      - mysql_db
    env_file: .env
    networks:
      - node-network

  mysql_db:
    image: mysql
    container_name: mysql_db
    ports:
      - 3306:3306
    environment:
      - MYSQL_ROOT_PASSWORD=1234
      - MYSQL_DATABASE=db_capstone_airbnb
    env_file:
      - .env
    volumes:
      - mysql_db:/var/lib/mysql
    networks:
      - node-network

volumes:
  mysql_db:
    driver: local

networks:
  node-network: