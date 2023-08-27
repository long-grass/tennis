ANSIBLE=$$(python3 -m site --user-base)/bin/
tldr:
	@echo Available commands
	@echo ------------------
	@for i in `grep '^[[:alpha:]]*:' Makefile | tr -d \:`; do echo make $$i; done
	@for i in `ls makefiles`; do echo make $$i; done
new:
	ansible-playbook ../newsite.yml -i ../hosts
vars:
	@echo Available sites\:
	@ls files | awk -F".nginx.conf" '{ print $$1 }'
	@echo ""
	@ansible-playbook vars.yml -i ../hosts
include makefiles/*
