
@echo off
set "NODE_DIR=%~dp0tools\node"

if not exist "%NODE_DIR%\node.exe" (
    echo ERRO: node.exe nao encontrado em "%NODE_DIR%"
    exit /b 1
)

if not exist "%NODE_DIR%\npm.cmd" (
    echo ERRO: npm.cmd nao encontrado em "%NODE_DIR%"
    exit /b 1
)

set "PATH=%NODE_DIR%;%PATH%"

echo Node.js portatil ativado!
node --version
call npm --version

echo.
echo Para manter o ambiente ativo, execute:
echo call "%~dp0ativar-node.cmd"
