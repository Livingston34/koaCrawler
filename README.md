# 项目建立 

## 安装脚手架

> npm install -g koa-generator

## 创建项目

> koa2 koaCrawler 

## 运行项目

> cd koaCrawler
> npm install
> npm start

# superagent应用

## 安装

> npm install superagent

## 使用

```
const superagent = require('superagent');
const getData = async () => {
	return new Promise((resolve, reject) => {
		var items = [];
		superagent
			.get('http://ny.gold600.com/')
			.end(function(err, res) {
				if (err) reject(err);
				resolve(res.text);			
			})
	})
}
```

# cheerio应用

> 具体使用Google一下

## 安装

> npm install cheerio

## 使用

```
const $ = cheerio.load(res.text);
$('.oilTable tbody tr:nth-child(odd)').each(function(i, elem) {
    let _this = $(elem);
	let s = {
		city: _this.find('a').text().replace(/\s/g,''),
		price90: $(_this.find('td')[1]).text().replace(/\s/g,''),
		price93: $(_this.find('td')[2]).text().replace(/\s/g,''),
		price97: $(_this.find('td')[3]).text().replace(/\s/g,'')
	}
	items.push(s);
});	
```