#!/usr/bin/env bash
set -e

echo "========================================"
echo "  Karibu Academy — Netlify Deploy Script"
echo "========================================"
echo ""

# Check for Netlify CLI
if ! command -v netlify &> /dev/null; then
    echo "❌ Netlify CLI not found."
    echo ""
    echo "Install it with:"
    echo "  npm install -g netlify-cli"
    echo ""
    echo "Then login:"
    echo "  netlify login"
    echo ""
    exit 1
fi

# Check login status
echo "🔍 Checking Netlify login status..."
if ! netlify status 2>&1 | grep -q "Logged in"; then
    echo "❌ Not logged in to Netlify."
    echo ""
    echo "Run: netlify login"
    echo ""
    exit 1
fi

echo "✅ Logged in to Netlify"
echo ""

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf out .next

# Install dependencies (if needed)
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    bun install
fi

# Build
echo "🔨 Building static site (this may take a minute)..."
bun run build

# Check build output
if [ ! -d "out" ]; then
    echo "❌ Build failed — 'out' directory not found."
    echo ""
    echo "Check the error above and try again."
    exit 1
fi

echo "✅ Build complete — $(find out -type f | wc -l) files generated"
echo ""

# Deploy
echo "🚀 Deploying to Netlify..."
echo ""
netlify deploy --prod --dir=out

echo ""
echo "========================================"
echo "  ✅ Deploy complete!"
echo "========================================"
