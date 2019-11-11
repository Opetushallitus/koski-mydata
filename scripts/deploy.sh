#!/bin/bash
set -o nounset
set -o errexit

AWS_PROFILE=oph-utility
ENVIRONMENT=${1:-"dev"}

aws s3 cp "s3://oph-koski-omadata-sovitinpalvelu/latest.zip" "s3://oph-koski-omadata-sovitinpalvelu/$(date "+%Y-%m-%d-%H-%M-%S").zip"
aws s3 cp dist.zip "s3://oph-koski-omadata-sovitinpalvelu/latest.zip"
aws lambda update-function-code --function-name get-opinto-oikeudet-$ENVIRONMENT --s3-bucket oph-koski-omadata-sovitinpalvelu --s3-key latest.zip --profile oph-koski-$ENVIRONMENT