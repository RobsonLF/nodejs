from pathlib import Path
import json
import shutil

#Localização do scritp
pasta_script = Path(__file__).resolve().parent
#Pasta principal do projeto
pasta_projeto = pasta_script.parent
#Arquivos e pastas
arquivo_json = pasta_projeto / "data" / "notes.json"
pasta_pages = pasta_projeto / "pages"
arquivo_template = pasta_projeto / "templetes" / "templateCategoria.html"

#Ler JSON
with open(arquivo_json, "r", encoding="utf-8") as arquivo:
    notas = json.load(arquivo)

#pegar categorias unicas
categorias = set()
for nota in notas:
    categoria = nota.get("categoria")
    if categoria:
        categorias.add(categoria)
#Criar páginas
for categoria in sorted(categorias):
    #nome do arquivo
    arquivo_categoria = pasta_pages / f"{categoria}.html"
    #verificar se já existe
    if arquivo_categoria.exists():
        print(f"Arquivo já existente: {arquivo_categoria.name}")
        continue
    #Copiar template
    shutil.copy2(
        arquivo_template,
        arquivo_categoria
    )
    print(f"Criado: {arquivo_categoria.name}")

print("\nProcesso concluído!")