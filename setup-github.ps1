# AirPulse Website - GitHub Setup Script
# This script will help you push to GitHub

Write-Host "=== AirPulse Website GitHub Setup ===" -ForegroundColor Cyan
Write-Host ""

$repoName = "airpulse-website"
Write-Host "Repository name: $repoName" -ForegroundColor Yellow
Write-Host ""

# Check if remote already exists
$remoteExists = git remote get-url origin 2>$null
if ($remoteExists) {
    Write-Host "Remote 'origin' already exists: $remoteExists" -ForegroundColor Yellow
    $overwrite = Read-Host "Do you want to update it? (y/n)"
    if ($overwrite -eq "y") {
        git remote remove origin
    } else {
        Write-Host "Skipping remote setup." -ForegroundColor Yellow
        exit
    }
}

Write-Host "Step 1: Create the repository on GitHub" -ForegroundColor Green
Write-Host "   Go to: https://github.com/new" -ForegroundColor White
Write-Host "   Repository name: $repoName" -ForegroundColor White
Write-Host "   Visibility: Public or Private (your choice)" -ForegroundColor White
Write-Host "   DO NOT initialize with README, .gitignore, or license" -ForegroundColor Yellow
Write-Host ""
$continue = Read-Host "Have you created the repository? (y/n)"

if ($continue -ne "y") {
    Write-Host "Please create the repository first, then run this script again." -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "Step 2: Enter your GitHub username" -ForegroundColor Green
$username = Read-Host "GitHub username"

if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Host "Username cannot be empty!" -ForegroundColor Red
    exit
}

$repoUrl = "https://github.com/$username/$repoName.git"
Write-Host ""
Write-Host "Adding remote: $repoUrl" -ForegroundColor Cyan
git remote add origin $repoUrl

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Remote added successfully" -ForegroundColor Green
    Write-Host ""
    Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
    git push -u origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✓ Successfully pushed to GitHub!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Next steps:" -ForegroundColor Cyan
        Write-Host "1. Go to https://vercel.com" -ForegroundColor White
        Write-Host "2. Click 'Add New Project'" -ForegroundColor White
        Write-Host "3. Import your repository: $username/$repoName" -ForegroundColor White
        Write-Host "4. Vercel will auto-detect Next.js and deploy!" -ForegroundColor White
    } else {
        Write-Host "✗ Failed to push. Make sure the repository exists and you have access." -ForegroundColor Red
    }
} else {
    Write-Host "✗ Failed to add remote. It may already exist." -ForegroundColor Red
}

