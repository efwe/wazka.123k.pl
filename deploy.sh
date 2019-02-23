#!/usr/bin/env bash
git diff --quiet || (echo 'please commit' && exit 1)
npm run build
ssh fw@tontu.123k.org 'rm -f /usr/local/www/123k.work/*'
scp ./dist/* fw@tontu.123k.org:/usr/local/www/123k.work
