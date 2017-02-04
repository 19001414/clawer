var http = require('http');
var URL=require('url');
var qs=require('querystring');
var server = http.createServer(webServiceMaster);
var webapi=require('./webapi/api.js');
var PORT = 29900;//接受命令的输入


function webServiceMaster(req,res)
{
	var u=req.url.toLowerCase();
    var url_parts = null;
	
	if(req.method=='POST')
	{
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
		
        req.on('end', function () {		
            url_parts = JSON.parse(body);		
			webapi.functions({data:{url:u,query:url_parts,req:req,res:res}});
        });
	}
}

server.listen(PORT);