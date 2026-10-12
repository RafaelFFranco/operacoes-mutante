# -*- coding: utf-8 -*-
"""Gera o PDF do relatorio a partir de docs/relatorio/relatorio.html.

Uso:  python docs/relatorio/gerar-pdf.py
Requisito: Google Chrome ou Microsoft Edge instalado.
Os dados da capa (disciplina, nome, matricula) ficam no proprio relatorio.html.
"""
import os
import subprocess
import sys
import tempfile

AQUI = os.path.dirname(os.path.abspath(__file__))
HTML = os.path.join(AQUI, "relatorio.html")
PDF = os.path.join(AQUI, "relatorio-teste-mutacao.pdf")

NAVEGADORES = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
]


def navegador():
    for caminho in NAVEGADORES:
        if os.path.exists(caminho):
            return caminho
    sys.exit("Chrome/Edge nao encontrado. Ajuste a lista NAVEGADORES.")


def main():
    if not os.path.exists(HTML):
        sys.exit("relatorio.html nao encontrado em " + AQUI)
    with tempfile.TemporaryDirectory() as perfil:
        cmd = [
            navegador(), "--headless=new", "--disable-gpu", "--no-first-run",
            "--no-default-browser-check", "--no-pdf-header-footer",
            "--user-data-dir=" + perfil,
            "--print-to-pdf=" + PDF,
            "--virtual-time-budget=10000",
            "file:///" + HTML.replace("\\", "/"),
        ]
        r = subprocess.run(cmd, capture_output=True, text=True)
        if not os.path.exists(PDF):
            sys.exit("Falha ao gerar o PDF:\n" + (r.stderr or r.stdout))
    print("PDF gerado: %s (%.1f KB)" % (PDF, os.path.getsize(PDF) / 1024))


if __name__ == "__main__":
    main()
