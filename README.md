# stub-proxy

- тут мой докеркопоз ямл
- можешь под себя заточить
- образ этот залит. там соотв нода с гитом
- сервак подымается на локалхост и 9000 порт

```
version: '3'

networks:
  proxy_network:
    external: true

services:
  stubproxy_server:
    image: newbie39/alpine-node16-git
    user: "${UID}:${GID}"
    command: yarn serve
    environment:
      - EXPOSE_PORT=9000
    volumes:
      - ./server:/home/node/app
    working_dir: /home/node/app
    networks:
      - proxy_network
```