#!/bin/bash

cd $(dirname "$0")
google-chrome-stable --headless --no-pdf-header-footer --print-to-pdf="$(pwd)/assets/carbon/en/Carbon - Character Sheet.pdf"        "http://127.0.0.1:5501/en/carbon/character_sheet.html"
google-chrome-stable --headless --no-pdf-header-footer --print-to-pdf="$(pwd)/assets/carbon/fr/Carbone - Fiche de personnage.pdf"   "http://127.0.0.1:5501/fr/carbon/character_sheet.html"
google-chrome-stable --headless --no-pdf-header-footer --print-to-pdf="$(pwd)/assets/carbon/en/Carbon - Manual.pdf"                 "http://127.0.0.1:5501/en/carbon/manual.html"
google-chrome-stable --headless --no-pdf-header-footer --print-to-pdf="$(pwd)/assets/carbon/fr/Carbone - Manuel.pdf"                "http://127.0.0.1:5501/fr/carbon/manual.html"
