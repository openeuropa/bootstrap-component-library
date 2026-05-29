#!/usr/bin/env bash

set -euo pipefail

expected_files=(
  "src/components/bcl-twig-templates/templates/bcl-accordion/accordion.html.twig"
  "src/components/bcl-twig-templates/templates/bcl-card/card.html.twig"
  "src/themes/default/templates/bcl-accordion/accordion.html.twig"
  "src/themes/default/templates/bcl-card/card.html.twig"
  "src/themes/joinup/templates/bcl-accordion/accordion.html.twig"
  "src/themes/joinup/templates/bcl-card/card.html.twig"
  "assets/index.html"
  "assets/oe-bcl-default.min.css"
  "assets/oe-bcl-default.bundle.min.js"
  "assets/oe-bcl-joinup.min.css"
  "assets/oe-bcl-joinup.bundle.min.js"
  "assets/slimselect.min.js"
  "assets/fonts/latin-400.css"
  "bootstrap/icons/twitter.svg"
  "bootstrap/js/src/alert.js"
  "bootstrap/js/dist/alert.js"
  "bootstrap/scss/bootstrap.scss"
  "bootstrap/scss/_variables.scss"
)

unexpected_paths=(
  "src/themes/default/templates/bcl-twig-templates"
  "src/themes/joinup/templates/bcl-twig-templates"
)

failed=0

for file in "${expected_files[@]}"; do
  if [[ ! -s "$file" ]]; then
    echo "Missing generated file: $file"
    echo "::error file=$file::Expected generated file is missing or empty"
    failed=1
  fi
done

for path in "${unexpected_paths[@]}"; do
  if [[ -e "$path" ]]; then
    echo "Unexpected generated path: $path"
    echo "::error file=$path::Generated templates were copied into a nested package path"
    failed=1
  fi
done

if [[ "$failed" -ne 0 ]]; then
  exit 1
fi

echo "Generated files are in the expected paths."
