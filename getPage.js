module.exports = {
    "main": function(Page, req) {
        const fs = require('fs');
        var readOut = fs.readFileSync('./' + Page + '.html', {encoding: 'utf-8'});
        //Filter logged into users here
        return readOut;
    }
}