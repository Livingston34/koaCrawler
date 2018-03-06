const superagent = require('superagent');
const cheerio = require('cheerio');

const getData = async () => {
	return new Promise((resolve, reject) => {
		var items = [];
		superagent
			.get('http://ny.gold600.com/')
			.end(function(err, res) {
				if (err) reject(err);
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
				resolve(items);			
			})
	})
}

module.exports = {
    getData
}