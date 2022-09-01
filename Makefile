dev: 
	docker-compose -f docker-compose-dev.yml --env-file ./.env.dev up -d
dev-build: 
	docker-compose -f docker-compose-dev.yml --env-file ./.env.dev up -d --build
stop:
	docker-compose -f docker-compose-dev.yml --env-file ./.env.dev stop
down:
	docker-compose -f docker-compose-dev.yml --env-file ./.env.dev down
log-server:
	docker container logs -f server-dev
log-client:
	docker container logs -f client-dev