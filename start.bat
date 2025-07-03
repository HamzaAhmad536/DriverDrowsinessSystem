@echo off
echo Starting Driver Drowsiness Detection System...
echo.

echo Installing Python dependencies...
pip install -r requirements.txt

echo.
echo Starting backend server...
start "Backend Server" python server.py

echo.
echo Waiting for backend to start...
timeout /t 3 /nobreak > nul

echo.
echo Starting frontend development server...
npm run dev

pause 