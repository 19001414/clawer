function ObjectFactory()
{
    this.get=function($$)
    {
        var data=$$.data,result=null;
        switch(data.type)
        {
            case 'iLoc':
                result=new iLoc();
                break;
        }

        return result;
    }

    return this;
}

function iLocs()
{
    this.read=function($$)
    {

    }

    function read($$)
    {

    }
}


function iLoc()
{
    this.read=function($$)
    {
        read($$);
    }

    function read($$)
    {
        var data = $$.data;
        if(!Array.isArray(data)){
            data = [data]
        }
        for(var j=0;j<data.length;j++){
            var buffer = data[j].buffer,buffer_l = buffer.toLowerCase()
            var nstart=!!data[j].start?parseInt(data[j].start):0;//nstart存在就取整不存在则为0
            data[j].succeed = false,data[j].ignore=false;
            var defLoc=$$.defLoc;
            if(!Array.isArray(defLoc)){
                defLoc=[defLoc];
            }
            for(var i=0;i<defLoc.length;i++){
                var start=!!defLoc[i].s?defLoc[i].s:'',sForward=!!defLoc[i].sf?defLoc[i].sf:null,end=!!defLoc[i].e?defLoc[i].e:'',eForward=!!defLoc[i].ef?defLoc[i].ef:null,sIncluded=!!defLoc[i].si?defLoc[i].si:false,eIncluded=!!defLoc[i].ei?defLoc[i].ei:false,bw=!!defLoc[i].bw?defLoc[i].bw:false;
                var br=true,nextN=nstart;
                if(!!bw){
                    var ni=!!start?buffer_l.lastIndexOf(start):nstart,nj=-1,result=null;
                }else{
                    var ni=!!start?buffer_l.indexOf(start,nstart):nstart,nj=-1,result=null;
                }
                //data[i].succeed=false
                if(!start&&!end)//没有开始结束字符就直接返回
                {
                    //data[i].succeed=false;
                    if(!!$$.callback)
                        setImmediate($$.callback)
                    return;
                }
                if(ni!=-1)
                {
                    if(!!sForward)
                    {
                        if((ni=buffer_l.indexOf(sForward,ni+start.length))==-1)
                            br=false;
                        else
                            ni+=!sIncluded?sForward.length:0;
                    }
                    else
                        ni+=!sIncluded?start.length:0;


                    if(br)
                    {
                        if(!end){
                            nj=buffer_l.length;
                        }
                        else if(!!bw){
                            if((nj=buffer_l.lastIndexOf(end))!=-1){
                                if(!!eForward){
                                    if((nj = buffer_l.lastIndexOf(eForward,nj))!=-1){
                                        nextN = nj+eForward.length
                                        nj+=!eIncluded?0:eForward.length
                                    }else{
                                        br= false
                                    }
                                }else{
                                    nextN = nj+end.length;
                                    nj+=!eIncluded?0:end.length;
                                }
                            }
                        }
                        else
                        {
                            if((nj=buffer_l.indexOf(end,ni))!=-1){
                                if(!!eForward)
                                {
                                    if((nj=buffer_l.indexOf(eForward,nj))!=-1)
                                    {
                                        nextN=nj+eForward.length;
                                        nj+=!eIncluded?0:eForward.length;
                                    }
                                    else{
                                        br=false;
                                    }
                                }
                                else {
                                    nextN=nj+end.length;
                                    nj+=!eIncluded?0:end.length;
                                }
                            }else{
                                br =false
                            }
                        }
                    }

                    if(br)
                    {
                        data[j].succeed=true;
                        if(!!bw){
                            if(eIncluded&&sIncluded){
                                data[j].result=buffer_l.substring(nj-1,ni+1);
                            }else if(sIncluded||eIncluded){
                                data[j].result=buffer_l.substring(nj,ni);
                            }else{
                                data[j].result=buffer_l.substring(nj+1,ni-1);
                            }
                        }else{
                            data[j].result=buffer_l.substring(ni,nj);
                        }
                        data[j].start=nextN;

                    }
                    else{
                        data[j].start=nstart
                    }
                }

            }
        }



        if(!!$$.callback){
            setTimeout(function() {
                $$.callback($$)
            },100)
        }
    }

    return this;
}

function iTask($$)
{//
    this.read=function($$)
    {
        read($$);
    }

    function read($$)
    {

    }

}

module.exports=new ObjectFactory();