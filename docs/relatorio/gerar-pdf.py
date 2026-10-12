# -*- coding: utf-8 -*-
"""Gera o PDF do relatorio a partir de docs/relatorio/relatorio.html.

Uso:  python docs/relatorio/gerar-pdf.py

Requisitos:
  - Google Chrome ou Microsoft Edge instalado (conversao HTML -> PDF);
  - opcionalmente pymupdf (pip install pymupdf), apenas para numerar as paginas.
"""
import os
import subprocess
import sys
import tempfile

AQUI = os.path.dirname(os.path.abspath(__file__))
HTML = os.path.join(AQUI, "relatorio.html")
PDF = os.path.join(AQUI, "relatorio-teste-mutacao.pdf")

# Helvetica (fonte base do PDF) usa Latin-1: evite caracteres fora dessa tabela,
# como travessao (\u2014). O ponto medio (\u00b7) e as vogais acentuadas estao em Latin-1.
RODAPE = "Teste de Software \u00b7 An\u00e1lise de Efic\u00e1cia de Testes com Teste de Muta\u00e7\u00e3o"
MM = 2.834645  # milimetros -> pontos PostScript

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


def converter():
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


def numerar():
    """Insere rodape discreto com numero de pagina (a capa nao recebe rodape)."""
    try:
        import pymupdf
    except ImportError:
        print("Aviso: pymupdf nao instalado; PDF gerado sem numeracao de paginas.")
        return 0
    doc = pymupdf.open(PDF)
    cinza = (0.42, 0.45, 0.50)
    for i, pagina in enumerate(doc):
        if i == 0:
            continue
        y = pagina.rect.height - 7 * MM
        pagina.insert_text((16 * MM, y), RODAPE, fontname="helv", fontsize=7.2, color=cinza)
        rotulo = "p. %d" % (i + 1)
        largura = pymupdf.get_text_length(rotulo, fontname="helv", fontsize=7.2)
        pagina.insert_text((pagina.rect.width - 16 * MM - largura, y), rotulo,
                           fontname="helv", fontsize=7.2, color=cinza)
    total = doc.page_count
    temporario = PDF + ".tmp"
    doc.save(temporario, garbage=3, deflate=True)
    doc.close()
    os.replace(temporario, PDF)
    return total


def main():
    if not os.path.exists(HTML):
        sys.exit("relatorio.html nao encontrado em " + AQUI)
    converter()
    paginas = numerar()
    print("PDF gerado: %s (%.1f KB%s)" % (
        PDF, os.path.getsize(PDF) / 1024,
        ", %d paginas" % paginas if paginas else ""))


if __name__ == "__main__":
    main()
