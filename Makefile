dev: 
	docker-compose -f docker-compose-dev.yml up -d
stop:
	docker-compose -f docker-compose-dev.yml stop
down:
	docker-compose -f docker-compose-dev.yml down