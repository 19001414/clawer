var clawer=require('../clawer/fetch.js');
var iLoc=clawer.get({data:{type:'iLoc'}});

function WebAPI()
{//代表一个page对象
	this.functions=function($$)
	{
		functions($$);
	}
	
	function functions($$)
	{
		var data=$$.data,url=data.url.toLowerCase(),res=data.res;
		var query=data.query;

		if(url.indexOf('/iloc')!=-1)
		{//需要执行iLoc
			query.callback=
				function($$)
				{
					res.writeHead(200,{'Access-Control-Allow-Origin':'*','content-type': 'application/json; charset=utf-8'});
					res.end(JSON.stringify($$.data));
				}
			
			iLoc.read(query);
		}
	}
}	

module.exports=new WebAPI();