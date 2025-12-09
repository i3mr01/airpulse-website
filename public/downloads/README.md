# Downloads Folder

Place your build files here:

- **Windows**: Put your `.exe` installer file here (e.g., `AirPulse-Installer.exe`)
- **Android**: Put your `.apk` file here (e.g., `AirPulse.apk`)

The download API will automatically find and serve the latest files from this folder.

## Alternative: GitHub Releases

If you prefer not to include large files in the repository, you can:
1. Upload releases to GitHub Releases
2. Update the download links in `src/components/home-client.tsx` to point directly to GitHub Releases URLs

Example GitHub Release URL format:
- Windows: `https://github.com/i3mr01/airpulse-website/releases/download/v1.0.0/AirPulse-Installer.exe`
- Android: `https://github.com/i3mr01/airpulse-website/releases/download/v1.0.0/AirPulse.apk`

