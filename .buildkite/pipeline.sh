#!/bin/bash

set -euo pipefail

PIPELINE=${PIPELINE:-build}

function build(){
  cat <<EQF
steps:
  - name: ":desktop_computer: Automation"
  command: "./scripts/buildkite-automation.sh"
EQF
}

$PIPELINE