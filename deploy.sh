#!/usr/bin/env bash
git diff --quiet || (echo 'please commit' && exit 1)
ssh fw@wazka.123k.pl 'rm /usr/local/www/wazka.123k.pl/*'
scp -P1023 ./dist/* fw@wazka.123k.pl:/usr/local/www/wazka.123k.pl
