rm -rf dist
yarn build
cd dist
git init
git add .
git commit -m 'update'
git branch -M master
git remote add origin git@github.com:wen599/wheel-dist.git
git push -f -u origin master
cd ..
