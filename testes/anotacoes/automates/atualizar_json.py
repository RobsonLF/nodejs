from pathlib import Path
import json

# Pasta onde está este arquivo Python
PASTA_SCRIPT = Path(__file__).resolve().parent

# Pasta principal do projeto
PASTA_PROJETO = PASTA_SCRIPT.parent

# Caminhos
PASTA_MARKDOWN = PASTA_PROJETO / "notes_md"
ARQUIVO_JSON = PASTA_PROJETO / "data" / "notes.json"

# Procura todos os arquivos .md
arquivos = sorted(
    arquivo.name
    for arquivo in PASTA_MARKDOWN.glob("*.md")
)

# Cria a pasta data caso ela não exista
ARQUIVO_JSON.parent.mkdir(parents=True, exist_ok=True)

# Atualiza o JSON
with open(ARQUIVO_JSON, "w", encoding="utf-8") as arquivo:
    json.dump(arquivos, arquivo, ensure_ascii=False, indent=2)

print(f"{len(arquivos)} arquivos encontrados.")
print(f"JSON atualizado: {ARQUIVO_JSON}")
