# 最新のNode.js LTSバージョンをベースイメージとして使用
FROM node:18

# 作業ディレクトリを設定
WORKDIR /usr/src/app

# package.json と package-lock.json をコピー
COPY app/package*.json ./

# プロジェクトの依存関係をインストール
# npm installまでインストールしておいたほうが良い
RUN npm install

# プロジェクトのファイルをコンテナにコピー
# COPY ./hyliq-app .

# アプリケーションの起動
# CMD ["npm", "start"]
