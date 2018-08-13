#!/bin/bash

ENVIRONMENT=${1:-"dev"}

aws s3 cp "s3://oph-koski-omadata-artifacts-$ENVIRONMENT/sovitinpalvelu/latest.zip" "s3://oph-koski-omadata-artifacts-$ENVIRONMENT/sovitinpalvelu/$(date "+%Y-%m-%d-%H-%M-%S").zip"
aws s3 cp dist.zip "s3://oph-koski-omadata-artifacts-$ENVIRONMENT/sovitinpalvelu/latest.zip"
aws lambda update-function-code --function-name get-opinto-oikeudet-$ENVIRONMENT --s3-bucket oph-koski-omadata-artifacts-$ENVIRONMENT --s3-key sovitinpalvelu/latest.zip