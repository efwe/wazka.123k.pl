#!/usr/bin/env bash
git diff --quiet || (echo 'please commit' && exit 1)
ssh fw@pluskwa.123k.org 'rm -f /usr/local/www/123k.work/*'
scp -P1023 ./dist/* fw@pluskwa.123k.org:/usr/local/www/123k.work
