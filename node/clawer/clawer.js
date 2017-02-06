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
		var data=$$.data,buffer=data.buffer,buffer_l=buffer.toLowerCase();
		var nstart=!!data.start?parseInt(data.start):0;//nstart存在就取整不存在则为0
		var defLoc=$$.defLoc;
		// if(!Array.isArray(defLoc)){
         //    defLoc=[defLoc];
		// }
		// for(var i=0;i<defLoc.length;i++){
		//
		// }
		var start=!!defLoc.s?defLoc.s:'',sForward=!!defLoc.sf?defLoc.sf:null,end=!!defLoc.e?defLoc.e:'',eForward=!!defLoc.ef?defLoc.ef:null,sIncluded=!!defLoc.si?defLoc.si:false,eIncluded=!!defLoc.ei?defLoc.ei:false,bw=!!defLoc.bw?defLoc.bw:false;
		var br=true,nextN=nstart;
		//var ni=!!start?buffer_l.indexOf(start,nstart):nstart,nj=-1,result=null;
		if(!!bw){
            var ni=!!start?buffer_l.lastIndexOf(start):nstart,nj=-1,result=null;
		}else{
            var ni=!!start?buffer_l.indexOf(start,nstart):nstart,nj=-1,result=null;
		}
		data.succeed=false
		if(!start&&!end)
		{
			data.succeed=false;

			if(!!$$.callback)
				setImmediate($$.callback)
			return;
		}
	
		if(ni!=-1)
		{
			if(!!sForward)
            {//���������ǰ��λ
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
                            else
                                br=false;
                        }
                        else
                        {
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
				data.succeed=true;
				//data.result=buffer_l.substring(ni,nj);
                if(!!bw){
                    //data.result=buffer_l.substring(nj+1,ni-1);
					if(eIncluded&&sIncluded){
                        data.result=buffer_l.substring(nj-1,ni+1);
					}else if(sIncluded||eIncluded){
                        data.result=buffer_l.substring(nj,ni);
					}else{
                        data.result=buffer_l.substring(nj+1,ni-1);
					}
                }else{
                    data.result=buffer_l.substring(ni,nj);
                }
				data.start=nextN;
			}
			else
				data.start=nstart;
		}
		
		if(!!$$.callback)
			setTimeout(
				function()
				{
					$$.callback($$)
				},100
			)
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