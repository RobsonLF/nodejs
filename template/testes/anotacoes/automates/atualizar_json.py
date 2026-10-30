from pathlib import Path
from datetime import datetime
import json
import re

# ============================================================
# LOCALIZAÇÃO DAS PASTAS
# ============================================================

pasta_script = Path(__file__).resolve().parent
pasta_projeto = pasta_script.parent

pasta_markdown = pasta_projeto / "notes_md"
arquivo_json = pasta_projeto / "data" / "notes.json"

# ============================================================
# FUNÇÃO PARA LER INFORMAÇÕES DO MARKDOWN
# ============================================================

def obter_informacoes(arquivo):
    conteudo = arquivo.read_text(encoding="utf-8")
    # --------------------------------------------
    # Título
    # Procura a primeira linha começando com "# "
    # --------------------------------------------
    
    titulo = arquivo.stem
    for linha in conteudo.splitlines():
        if linha.startswith("# "):
            titulo = linha[2:].strip()
            break
    # --------------------------------------------
    # Categoria
    # Procura:
    #
    # Categoria: Programação
    # --------------------------------------------
    
    categoria = "Sem Categoria"
    resultado = re.search(
        r"^Categoria:\s*(.+)$",
        conteudo,
        re.MULTILINE | re.IGNORECASE
    )
    if resultado:
        categoria = resultado.group(1).strip()

    # --------------------------------------------
    # Texto Breve
    # --------------------------------------------
        texto_breve = "Sem Texto"
        resultado1 = re.search(
            r"^Texto Breve:\s*(.+$)",
            conteudo,
            re.MULTILINE | re.IGNORECASE            
        )
        if resultado1:
            texto_breve = resultado1.group(1).strip()
    # --------------------------------------------
    # Plataforma
    # --------------------------------------------
        plataforma = "Sem Plataforma"
        resultado2 = re.search(
            r"^Plataforma:\s*(.+$)",
            conteudo,
            re.MULTILINE | re.IGNORECASE            
        )
        if resultado2:
            plataforma = resultado2.group(1).strip()

    # --------------------------------------------
    # Data de modificação
    # --------------------------------------------

    data_modificacao = datetime.fromtimestamp(
        arquivo.stat().st_mtime
    ).strftime("%Y-%m-%d")

    # --------------------------------------------
    # Retorna os dados
    # --------------------------------------------

    return{
        "arquivo": arquivo.name,
        "titulo": titulo,
        "categoria": categoria,
        "data_modificacao": data_modificacao,
        "texto_breve": texto_breve,
        "plataforma":plataforma
    }

# ============================================================
# ENCONTRA OS ARQUIVOS MARKDOWN
# ============================================================

arquivos = sorted(
    pasta_markdown.glob("*.md"),
    key=lambda arquivo: arquivo.name.lower()
)

# ============================================================
# CRIA OS DADOS DO JSON
# ============================================================

notas = []

for arquivo in arquivos:
    informacoes = obter_informacoes(arquivo)
    notas.append(informacoes)

# ============================================================
# CRIA A PASTA DATA de notas
# ============================================================

arquivo_json.parent.mkdir(
    parents=True,
    exist_ok=True
)

# ============================================================
# SALVA O JSON de notas
# ============================================================

with open(
    arquivo_json,
    "w",
    encoding="utf-8"
) as arquivo:
    json.dump(
        notas,
        arquivo,
        ensure_ascii=False,
        indent=4
    )

# ============================================================
# RESULTADO
# ============================================================

print()
print("=======================================================")
print("            BANCO DE ANOTAÇÕES ATUALIZADO              ")
print("=======================================================")
print()
print(f"Arquivos encontrados: {len(notas)}")
print(f"Arquivo JSON: {arquivo_json}")
print()

for nota in notas:
    print(
        f"- {nota['titulo']} "
        f"({nota['categoria']})"
    )
    
print()