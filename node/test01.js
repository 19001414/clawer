var clawer=require('./clawer/clawer.js');
var iLoc=clawer.get({data:{type:'iLoc'}});

var test_data={data:{buffer:'ABcdefg',buffer_l:'abcdefg'},defLoc:{s:'d',e:'a',bw:false}}

test_data.callback=function(result)
{
    // if(!result.data.succeed){
    //     console.log(result.data.buffer = {})
    // }else{
    //     console.log(result);
    // }
    console.log(result)
}

iLoc.read(test_data);