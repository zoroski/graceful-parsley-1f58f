#!/usr/bin/env bash

set -e
set -o pipefail
set -v

curl -s -X POST https://api.stackbit.com/project/5f61f58f1b13cd001c708e74/webhook/build/pull > /dev/null
if [[ -z "${STACKBIT_API_KEY}" ]]; then
    echo "WARNING: No STACKBIT_API_KEY environment variable set, skipping stackbit-pull"
else
    npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://api.stackbit.com/pull/5f61f58f1b13cd001c708e74
fi
curl -s -X POST https://api.stackbit.com/project/5f61f58f1b13cd001c708e74/webhook/build/ssgbuild > /dev/null
MODE=editor gatsby build
curl -s -X POST https://api.stackbit.com/project/5f61f58f1b13cd001c708e74/webhook/build/publish > /dev/null
