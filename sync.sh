#!/bin/bash
set -e
VERSION=$1
LIBRARY="../finity-design-system"
if [ -z "$VERSION" ]; then
  echo "❌ Please provide a version number: npm run sync 0.2.0"
  exit 1
fi
echo "🔄 Syncing to v$VERSION..."
npm install "github:VezMaxwell-Finity/finity-design-system#v$VERSION"
if [ -d "$LIBRARY/src/components" ]; then
  for dir in "$LIBRARY"/src/components/*/; do
    component=$(basename "$dir")
    cp -r "$dir" "src/components/$component"
    echo "  ✓ $component"
  done
fi
if [ -d "$LIBRARY/src/tokens" ]; then
  cp -r "$LIBRARY/src/tokens" src/
  echo "  ✓ tokens"
fi
echo "🔨 Checking build..."
npm run build
git add .
git commit -m "update to v$VERSION"
git push
echo "✅ Docs synced to v$VERSION!"
