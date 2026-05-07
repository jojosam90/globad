@echo off
echo.
echo =============================
echo   Deploying to globad.net...
echo =============================
echo.

cd /d "c:\Users\user\OneDrive\Desktop\Yeahmobi"

git add .
git commit -m "Update site"
git push origin main

echo.
echo =============================
echo   Done! Live at globad.net
echo =============================
echo.
pause
