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
  "assets/fonts/files/roboto-latin-400-normal.woff2"
  "bootstrap/bootstrap-icons.svg"
  "bootstrap/icons/alarm.svg"
  "bootstrap/icons/twitter.svg"
  "bootstrap/js/src/alert.js"
  "bootstrap/js/src/util/index.js"
  "bootstrap/js/dist/alert.js"
  "bootstrap/scss/bootstrap.scss"
  "bootstrap/scss/_variables.scss"
  "src/components/bcl-twig-templates/templates/bcl-glossary/glossary-detail.html.twig"
  "src/components/bcl-twig-templates/templates/bcl-table/table.html.twig"
  "src/themes/joinup/fonts/latin-400.css"
  "src/themes/joinup/fonts/files/roboto-latin-400-normal.woff2"
)

unexpected_paths=(
  "src/components/bcl-twig-templates/templates/@openeuropa"
  "src/components/bcl-twig-templates/templates/node_modules"
  "src/themes/default/templates/bcl-twig-templates"
  "src/themes/joinup/templates/bcl-twig-templates"
)

failed=0

check_file() {
  local file="$1"

  if [[ ! -s "$file" ]]; then
    echo "Missing generated file: $file"
    echo "::error file=$file::Expected generated file is missing or empty"
    failed=1
  fi
}

for file in "${expected_files[@]}"; do
  check_file "$file"
done

for path in "${unexpected_paths[@]}"; do
  if [[ -e "$path" ]]; then
    echo "Unexpected generated path: $path"
    echo "::error file=$path::Generated files were copied into a nested package path"
    failed=1
  fi
done

check_min_count() {
  local label="$1"
  local min_count="$2"
  local count="$3"

  if (( count < min_count )); then
    echo "Too few generated files for $label: expected at least $min_count, found $count"
    echo "::error::$label generated too few files"
    failed=1
  fi
}

check_roboto_fonts() {
  local fonts_path="$1"
  local label="$2"
  local css_subsets=(
    "cyrillic"
    "cyrillic-ext"
    "greek"
    "greek-ext"
    "latin"
    "latin-ext"
  )
  local font_subsets=(
    "cyrillic"
    "greek"
    "latin"
    "latin-ext"
  )
  local weights=("400" "500" "700")
  local css_styles=("" "-italic")
  local font_styles=("normal" "italic")
  local extensions=("woff" "woff2")

  for subset in "${css_subsets[@]}"; do
    for weight in "${weights[@]}"; do
      for style in "${css_styles[@]}"; do
        check_file "$fonts_path/${subset}-${weight}${style}.css"
      done
    done
  done

  for subset in "${font_subsets[@]}"; do
    for weight in "${weights[@]}"; do
      for style in "${font_styles[@]}"; do
        for extension in "${extensions[@]}"; do
          check_file "$fonts_path/files/roboto-${subset}-${weight}-${style}.${extension}"
        done
      done
    done
  done

  check_min_count "$label" 80 "$(find "$fonts_path" -type f 2>/dev/null | wc -l | tr -d ' ')"
}

check_min_count "Bootstrap icons" 1000 "$(find bootstrap/icons -maxdepth 1 -type f -name '*.svg' 2>/dev/null | wc -l | tr -d ' ')"
check_min_count "Twig templates" 80 "$(find src/components/bcl-twig-templates/templates -type f -name '*.twig' 2>/dev/null | wc -l | tr -d ' ')"
check_roboto_fonts "src/themes/joinup/fonts" "Joinup fonts"
check_roboto_fonts "assets/fonts" "Published asset fonts"

if [[ "$failed" -ne 0 ]]; then
  exit 1
fi

echo "Generated files are in the expected paths."
