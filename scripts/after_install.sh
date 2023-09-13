#!/bin/bash
#####################################
###
### files処理後の後処理用
###
#####################################
echo 'before install'
cd /var/www/html/rentals
echo { \"type\":\"module\" } > ./package.json # デプロイサーバに設置するpackage.jsonを生成（or上書き）
