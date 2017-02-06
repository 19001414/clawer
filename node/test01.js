var clawer=require('./clawer/fetch.js');
var iLoc=clawer.get({data:{type:'iLoc'}});

//var test_data={data:{buffer:'ABcdefg',buffer_l:'abcdefg'},defLoc:{s:'a',e:'b',bw:false}}
var test_data={data:[{buffer:'ABcdefg',buffer_l:'abcdefg'},{buffer:'1234567',buffer_l:'1234567'}],defLoc:[{s:'a',e:'g',bw:false},{s:'7',e:'3',bw:true}]}

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