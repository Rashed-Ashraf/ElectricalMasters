@echo off
title Electrical Masters Switchgear - Launcher
cd /d "%~dp0"

echo ========================================================
echo   Electrical Masters Switchgear Website Launcher
echo ========================================================
echo.
echo   1. Start Development Server (npm run dev)
echo   2. Build and Start Production Server (npm run build ^& npm start)
echo   3. Exit
echo.
set /p choice="Enter your choice (1, 2, or 3): "

if "%choice%"=="1" goto start_dev
if "%choice%"=="2" goto start_prod
if "%choice%"=="3" exit
echo Invalid choice, defaulting to Development Mode...
echo.

:start_dev
echo Starting Next.js Development Server...
echo Opening http://localhost:3000 in your browser...
start "" cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:3000"
call npm run dev
pause
exit

:start_prod
echo Building production bundle...
call npm run build
if %errorlevel% neq 0 (
    echo.
    echo Build failed! Please check errors above.
    pause
    exit /b %errorlevel%
)
echo Starting Next.js Production Server...
echo Opening http://localhost:3000 in your browser...
start "" cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:3000"
call npm start
pause
exit
