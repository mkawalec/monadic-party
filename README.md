# Monadic Party website

Feel free to PR

# Dev process

Run these in parallel terminals
```
npm run dev
python2 -m SimpleHTTPServer 8080
while inotifywait -e close_write src/index.html; do cp -r src/* dist; done
```

If you're on OSX, instead of that last command do
```
fswatch -o src/index.html | xargs -n1 cp -r src/* dist
```
