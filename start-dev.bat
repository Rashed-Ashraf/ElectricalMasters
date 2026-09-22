@echo off
title Electrical Masters Switchgear - Dev Server
cd /d "%~dp0"

echo ========================================================
echo   Starting Development Server (npm run dev)
echo ========================================================
echo.
echo Opening http://localhost:3000 in your browser...
start "" cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:3000"
call npm run dev

pause
