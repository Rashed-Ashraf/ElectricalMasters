@echo off
title Electrical Masters Switchgear - Production Server
cd /d "%~dp0"

echo ========================================================
echo   Building & Starting Production Server
echo ========================================================
echo.
echo Step 1: Building Next.js application...
call npm run build
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Build failed! Please check errors above.
    pause
    exit /b %errorlevel%
)

echo.
echo Step 2: Starting Production Server...
echo Opening http://localhost:3000 in your browser...
start "" cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:3000"
call npm start

pause
