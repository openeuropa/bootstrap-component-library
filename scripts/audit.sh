#!/bin/bash

set +e

pnpm audit --prod --audit-level high
