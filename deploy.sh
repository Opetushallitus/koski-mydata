#!/usr/bin/env bash
set -o errexit -o nounset -o pipefail

function main {

    export ADBLOCK=1

    npm run clean
    npm install
    npm run build

    scripts/deploy.sh "${ENV}"
}

function check_env {
  FILE_NAME=$(basename "$0")
  if echo "${FILE_NAME}" | grep -E -q 'deploy-.{2,4}\.sh'; then
    ENV=$(echo "${FILE_NAME}" | sed -E -e 's|deploy-(.{2,4})\.sh|\1|g')
    export ENV
    echo "Deploying to [${ENV}]"
  else
    echo >&2 "Don't call this script directly"
    exit 1
  fi
}

function error {
  echo >&2 "$@"
}

check_env
main "$@"
