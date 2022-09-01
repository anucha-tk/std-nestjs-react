# ===================== dev =====================
dev: 
	docker-compose -f docker-compose-dev.yml --env-file ./.env.dev up -d
dev-build: 
	docker-compose -f docker-compose-dev.yml --env-file ./.env.dev up -d --build
dev-stop:
	docker-compose -f docker-compose-dev.yml --env-file ./.env.dev stop
dev-down:
	docker-compose -f docker-compose-dev.yml --env-file ./.env.dev down
log-server:
	docker container logs -f server-dev
log-client:
	docker container logs -f client-dev

# ===================== local =====================
local:
	docker-compose -f docker-compose-local.yml --env-file ./.env.local up -d
local-build:
	docker-compose -f docker-compose-local.yml --env-file ./.env.local up -d --build
local-stop:
	docker-compose -f docker-compose-local.yml --env-file ./.env.local stop
local-down:
	docker-compose -f docker-compose-local.yml --env-file ./.env.local down