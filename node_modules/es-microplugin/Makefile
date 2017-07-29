.PHONY: compile test test-ci release

COVERALLS=node_modules/.bin/coveralls
HANDROLL=node_modules/.bin/handroll
ISTANBUL=node_modules/.bin/istanbul
MOCHA=node_modules/.bin/mocha
UGLIFYJS=node_modules/.bin/uglifyjs
_MOCHA=node_modules/.bin/_mocha

OUT=microplugin.js
OUT_MIN=microplugin.min.js
BANNER=/*! microplugin.js | https://github.com/brianreavis/microplugin.js | Apache License (v2) */

all: compile

compile:
	$(HANDROLL) src/index.js --format cjs --dest microplugin.js
	$(HANDROLL) src/index.js --format es  --dest microplugin.mjs
	$(UGLIFYJS) --mangle -b beautify=false,ascii-only=true --output $(OUT_MIN) $(OUT)
	@echo "$(BANNER)" | cat - $(OUT_MIN) > temp && mv temp $(OUT_MIN)
	@echo "`cat $(OUT_MIN) | gzip -9f | wc -c` bytes (gzipped)"

test:
	$(MOCHA) -R list

test-ci:
	$(MOCHA) -R tap

test-ci-coverage:
	@rm -rf coverage
	$(ISTANBUL) cover $(_MOCHA) --report lcovonly -- -R tap

	@echo
	@echo Sending report to coveralls.io...
	@cat ./coverage/lcov.info | $(COVERALLS)
	@rm -rf ./coverage
	@echo Done

release:
ifeq ($(strip $(version)),)
	@echo "\033[31mERROR:\033[0;39m No version provided."
	@echo "\033[1;30mmake release version=1.0.0\033[0;39m"
else
	sed -i.bak 's/"version": "[^"]*"/"version": "$(version)"/' package.json
	sed -i.bak 's/"version": "[^"]*"/"version": "$(version)"/' bower.json
	rm *.bak
	git add .
	git commit -a -m "Released $(version)."
	git tag v$(version)
	git push origin master
	git push origin --tags
	npm publish
	@echo "\033[32mv${version} released\033[0;39m"
endif
