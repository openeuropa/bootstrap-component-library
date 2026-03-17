#!/bin/bash

set +e

# Fail CI on high/critical production vulnerabilities.
pnpm audit --prod --audit-level high
prod_status=$?

echo
echo "Running development dependency audit (informational)..."
pnpm audit --dev --audit-level high
dev_status=$?

if [ "$dev_status" -ne 0 ]; then
  echo
  echo "Development dependency vulnerabilities were found, but they do not fail CI."
fi

exit "$prod_status"
