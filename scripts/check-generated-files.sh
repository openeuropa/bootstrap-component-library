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

check_twig_templates() {
  local templates_path="$1"
  local label="$2"
  local templates=(
    "bcl-accordion/accordion.html.twig"
    "bcl-alert/alert.html.twig"
    "bcl-badge/badge.html.twig"
    "bcl-banner/banner.html.twig"
    "bcl-base-templates/content-type.html.twig"
    "bcl-base-templates/listing-page.html.twig"
    "bcl-base-templates/sidebar-search.html.twig"
    "bcl-blockquote/blockquote.html.twig"
    "bcl-breadcrumb/breadcrumb.html.twig"
    "bcl-button-group/button-group.html.twig"
    "bcl-button/button.html.twig"
    "bcl-card-layout/card-layout.html.twig"
    "bcl-card/card.html.twig"
    "bcl-carousel/carousel.html.twig"
    "bcl-contact-form/contact-form.html.twig"
    "bcl-content-banner/content-banner.html.twig"
    "bcl-date-block/date-block.html.twig"
    "bcl-description-list/description-list-details.html.twig"
    "bcl-description-list/description-list-title.html.twig"
    "bcl-description-list/description-list.html.twig"
    "bcl-dropdown/dropdown.html.twig"
    "bcl-event/event.html.twig"
    "bcl-fact-figures/fact-figures.html.twig"
    "bcl-featured-media/featured-media.html.twig"
    "bcl-file/file-translations.html.twig"
    "bcl-file/file.html.twig"
    "bcl-footer/footer.html.twig"
    "bcl-form-input/form-input.html.twig"
    "bcl-form/form.html.twig"
    "bcl-gallery/gallery-item.html.twig"
    "bcl-gallery/gallery.html.twig"
    "bcl-glossary/glossary-detail.html.twig"
    "bcl-glossary/glossary-listing.html.twig"
    "bcl-group/group-landing.html.twig"
    "bcl-group/group.html.twig"
    "bcl-header/header.html.twig"
    "bcl-heading/heading.html.twig"
    "bcl-icon/icon.html.twig"
    "bcl-inpage-navigation/inpage-navigation.html.twig"
    "bcl-landing-page/landing-page.html.twig"
    "bcl-language-list/language-list-grid.html.twig"
    "bcl-language-list/language-list-modal.html.twig"
    "bcl-language-list/language-list.html.twig"
    "bcl-language-switcher/language-switcher.html.twig"
    "bcl-link/link.html.twig"
    "bcl-links-block/links-block.html.twig"
    "bcl-list-group/list-group.html.twig"
    "bcl-listing/listing.html.twig"
    "bcl-mega-menu/mega-menu-items.html.twig"
    "bcl-mega-menu/mega-menu-submenu.html.twig"
    "bcl-mega-menu/mega-menu.html.twig"
    "bcl-modal/modal.html.twig"
    "bcl-navbar/navbar.html.twig"
    "bcl-navigation/navigation.html.twig"
    "bcl-offcanvas/offcanvas.html.twig"
    "bcl-page/page.html.twig"
    "bcl-pagination-v2/pagination-item.html.twig"
    "bcl-pagination-v2/pagination.html.twig"
    "bcl-pagination/pagination-item.html.twig"
    "bcl-pagination/pagination.html.twig"
    "bcl-person/person.html.twig"
    "bcl-placeholder/placeholder.html.twig"
    "bcl-progress/progress.html.twig"
    "bcl-project-status/project-contributions.html.twig"
    "bcl-project-status/project-status.html.twig"
    "bcl-project/project-lists.html.twig"
    "bcl-project/project.html.twig"
    "bcl-recent-activities/recent-activities.html.twig"
    "bcl-search-form/search-form.html.twig"
    "bcl-search/search.html.twig"
    "bcl-select/select.html.twig"
    "bcl-spinner/spinner.html.twig"
    "bcl-subscription-block/subscription-block.html.twig"
    "bcl-subscription/subscription-modal.html.twig"
    "bcl-subscription/subscription.html.twig"
    "bcl-table/table.html.twig"
    "bcl-textarea/textarea.html.twig"
    "bcl-timeline/timeline-item.html.twig"
    "bcl-timeline/timeline.html.twig"
    "bcl-toasts/toasts.html.twig"
    "bcl-user/user-compact.html.twig"
    "bcl-user/user-terms.html.twig"
    "bcl-user/user.html.twig"
  )

  for template in "${templates[@]}"; do
    check_file "$templates_path/$template"
  done

  check_min_count "$label" 80 "$(find "$templates_path" -type f -name '*.twig' 2>/dev/null | wc -l | tr -d ' ')"
}

check_bootstrap_js() {
  local modules=(
    "alert"
    "base-component"
    "button"
    "carousel"
    "collapse"
    "dropdown"
    "modal"
    "offcanvas"
    "popover"
    "scrollspy"
    "scrollspy-legacy"
    "tab"
    "toast"
    "tooltip"
    "dom/data"
    "dom/event-handler"
    "dom/manipulator"
    "dom/selector-engine"
    "util/backdrop"
    "util/component-functions"
    "util/config"
    "util/focustrap"
    "util/index"
    "util/sanitizer"
    "util/scrollbar"
    "util/swipe"
    "util/template-factory"
    "dependency/manipulator"
    "dependency/util/index"
  )

  check_file "bootstrap/js/index.esm.js"
  check_file "bootstrap/js/index.umd.js"

  for module in "${modules[@]}"; do
    check_file "bootstrap/js/src/${module}.js"
    check_file "bootstrap/js/dist/${module}.js"
    check_file "bootstrap/js/dist/${module}.js.map"
  done

  check_min_count "Bootstrap source JS" 25 "$(find bootstrap/js/src -type f -name '*.js' 2>/dev/null | wc -l | tr -d ' ')"
  check_min_count "Bootstrap dist JS" 25 "$(find bootstrap/js/dist -type f -name '*.js' 2>/dev/null | wc -l | tr -d ' ')"
  check_min_count "Bootstrap dist JS maps" 25 "$(find bootstrap/js/dist -type f -name '*.js.map' 2>/dev/null | wc -l | tr -d ' ')"
}

check_bootstrap_scss() {
  local files=(
    "bootstrap.scss"
    "bootstrap-grid.scss"
    "bootstrap-reboot.scss"
    "bootstrap-utilities.scss"
    "_functions.scss"
    "_variables.scss"
    "_variables-dark.scss"
    "_maps.scss"
    "_mixins.scss"
    "_utilities.scss"
    "forms/_form-control.scss"
    "forms/_form-select.scss"
    "helpers/_visually-hidden.scss"
    "mixins/_breakpoints.scss"
    "mixins/_color-scheme.scss"
    "utilities/_api.scss"
    "vendor/_rfs.scss"
  )

  for file in "${files[@]}"; do
    check_file "bootstrap/scss/$file"
  done

  check_min_count "Bootstrap SCSS" 90 "$(find bootstrap/scss -type f -name '*.scss' 2>/dev/null | wc -l | tr -d ' ')"
}

check_theme_assets() {
  local theme="$1"
  local theme_path="$2"

  check_file "$theme_path/css/oe-bcl-${theme}.css"
  check_file "$theme_path/css/oe-bcl-${theme}.css.map"
  check_file "$theme_path/css/oe-bcl-${theme}.min.css"
  check_file "$theme_path/css/oe-bcl-${theme}.min.css.map"

  local formats=("bundle" "esm" "umd")
  local suffixes=(".js" ".js.map" ".min.js" ".min.js.map")

  for format in "${formats[@]}"; do
    for suffix in "${suffixes[@]}"; do
      check_file "$theme_path/js/oe-bcl-${theme}.${format}${suffix}"
    done
  done

  check_min_count "$theme CSS" 4 "$(find "$theme_path/css" -maxdepth 1 -type f \( -name '*.css' -o -name '*.css.map' \) 2>/dev/null | wc -l | tr -d ' ')"
  check_min_count "$theme JS" 12 "$(find "$theme_path/js" -maxdepth 1 -type f \( -name '*.js' -o -name '*.js.map' \) 2>/dev/null | wc -l | tr -d ' ')"
}

check_default_theme_assets() {
  check_theme_assets "default" "src/themes/default"
  check_file "src/themes/default/css/color-scheme.min.css"
  check_file "src/themes/default/css/color-scheme.min.css.map"
  check_file "src/themes/default/css/oe-bcl-ckeditor5.min.css"
  check_file "src/themes/default/css/oe-bcl-ckeditor5.min.css.map"
  check_file "src/themes/default/js/slimselect.js"
}

check_published_assets() {
  local files=(
    "assets/color-scheme.min.css"
    "assets/color-scheme.min.css.map"
    "assets/example.html"
    "assets/favicon.ico"
    "assets/index.html"
    "assets/oe-bcl-ckeditor5.min.css"
    "assets/oe-bcl-ckeditor5.min.css.map"
    "assets/oe-bcl-default.bundle.min.js"
    "assets/oe-bcl-default.bundle.min.js.map"
    "assets/oe-bcl-default.esm.min.js"
    "assets/oe-bcl-default.esm.min.js.map"
    "assets/oe-bcl-default.min.css"
    "assets/oe-bcl-default.min.css.map"
    "assets/oe-bcl-default.umd.min.js"
    "assets/oe-bcl-default.umd.min.js.map"
    "assets/oe-bcl-joinup.bundle.min.js"
    "assets/oe-bcl-joinup.bundle.min.js.map"
    "assets/oe-bcl-joinup.esm.min.js"
    "assets/oe-bcl-joinup.esm.min.js.map"
    "assets/oe-bcl-joinup.min.css"
    "assets/oe-bcl-joinup.min.css.map"
    "assets/oe-bcl-joinup.umd.min.js"
    "assets/oe-bcl-joinup.umd.min.js.map"
    "assets/slimselect.min.js"
  )

  for file in "${files[@]}"; do
    check_file "$file"
  done

  check_min_count "Published root assets" 20 "$(find assets -maxdepth 1 -type f 2>/dev/null | wc -l | tr -d ' ')"
}

check_min_count "Bootstrap icons" 1000 "$(find bootstrap/icons -maxdepth 1 -type f -name '*.svg' 2>/dev/null | wc -l | tr -d ' ')"
check_bootstrap_js
check_bootstrap_scss
check_twig_templates "src/components/bcl-twig-templates/templates" "Twig templates"
check_twig_templates "src/themes/default/templates" "Default theme templates"
check_twig_templates "src/themes/joinup/templates" "Joinup theme templates"
check_roboto_fonts "src/themes/joinup/fonts" "Joinup fonts"
check_roboto_fonts "assets/fonts" "Published asset fonts"
check_default_theme_assets
check_theme_assets "joinup" "src/themes/joinup"
check_published_assets

if [[ "$failed" -ne 0 ]]; then
  exit 1
fi

echo "Generated files are in the expected paths."
