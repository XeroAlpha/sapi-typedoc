@echo off
copy %~dp0\..\original\node_modules\@minecraft\server\index.d.ts %~dp0\server.d.ts
copy %~dp0\..\original\node_modules\@minecraft\server-admin\index.d.ts %~dp0\server-admin.d.ts
copy %~dp0\..\original\node_modules\@minecraft\server-gametest\index.d.ts %~dp0\server-gametest.d.ts
copy %~dp0\..\original\node_modules\@minecraft\server-net\index.d.ts %~dp0\server-net.d.ts
copy %~dp0\..\original\node_modules\@minecraft\server-ui\index.d.ts %~dp0\server-ui.d.ts