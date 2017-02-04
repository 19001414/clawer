var iLoc=require('./clawer/clawer.js').get({data:{type:'iLoc'}});

var obj={data:{buffer:'this is test 12345, testing!'},defLoc:{s:'is',e:',',ei:true},callback:
	function($$)
	{
		console.log($$);
	}
};

iLoc.read(obj);

