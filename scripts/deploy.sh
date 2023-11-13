#!/bin/bash
set -o nounset
set -o errexit

ENVIRONMENT=${1:-"dev"}

aws --profile oph-utility s3 cp "s3://oph-koski-omadata-sovitinpalvelu/latest.zip" "s3://oph-koski-omadata-sovitinpalvelu/$(date "+%Y-%m-%d-%H-%M-%S").zip"
aws --profile oph-utility s3 cp dist.zip "s3://oph-koski-omadata-sovitinpalvelu/latest.zip"
aws lambda update-function-code --function-name get-opinto-oikeudet-$ENVIRONMENT-new --s3-bucket oph-koski-omadata-sovitinpalvelu --s3-key latest.zip --profile oph-koski-$ENVIRONMENT
