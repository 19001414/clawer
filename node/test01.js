var clawer=require('./clawer/clawer.js');
var iLoc=clawer.get({data:{type:'iLoc'}});

var test_data={data:{buffer:'ABcdefg',buffer_l:'abcdefg'},defLoc:{s:'a',e:'g',bw:false}}

test_data.callback=function(result)
{
    console.log(result);
}

iLoc.read(test_data);