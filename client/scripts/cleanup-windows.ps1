# Run as Administrator (right-click PowerShell → Run as Administrator) if you get permission errors.

# stop node processes (may be required if a background process holds .next files)
Stop-Process -Name node -ErrorAction SilentlyContinue

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Join-Path $scriptDir ".." | Resolve-Path
$nextDir = Join-Path $projectRoot ".next"
$traceFile = Join-Path $nextDir "trace"
$pnpmLock = Join-Path $projectRoot "pnpm-lock.yaml"

if (Test-Path $traceFile) {
    Remove-Item $traceFile -Force -ErrorAction SilentlyContinue
    Write-Host "Removed trace file."
} else {
    Write-Host "trace file not found."
}

if (Test-Path $nextDir) {
    Remove-Item $nextDir -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "Removed .next directory."
} else {
    Write-Host ".next directory not found."
}

if (Test-Path $pnpmLock) {
    Remove-Item $pnpmLock -Force -ErrorAction SilentlyContinue
    Write-Host "Removed pnpm-lock.yaml (optional)."
}

Write-Host "Cleanup complete. Restart your terminal and run npm run dev / npm run build."
