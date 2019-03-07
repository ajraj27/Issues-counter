const axios=require('axios');
const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.json());

app.post('/getIssuesInfo',async(req,res) => {
  const curTime=new Date().getTime();
  const oneDayTime=1*24*60*60*1000;
  const last1DayTimeISO=new Date(curTime-oneDayTime).toISOString();
  const last7DaysTimeISO=new Date(curTime-7*oneDayTime).toISOString();

  const url=req.body.url;
  const arrUrl=url.split("/");

  const apiUrl=`https://api.github.com/repos/${arrUrl[3]}/${arrUrl[4]}`;
  const openIssuesCount=(await axios.get(apiUrl)).data.open_issues_count;

  let flag=true,ctr=1,last1DayCount=0;

  while(flag){
    const res=await axios.get(apiUrl+`/issues?page=${ctr}&per_page=100&since=${last1DayTimeISO}`);
    const len=res.data.length;

    if(!len)
      break;

    last1DayCount+=len;
    ctr++;
  }

  ctr=1,last7DaysCount=0;

  while(flag){
    const res=await axios.get(apiUrl+`/issues?page=${ctr}&per_page=100&since=${last7DaysTimeISO}`);
    console.log(res.data);
    const len=res.data.length;

    if(!len)
      break;

    last7DaysCount+=len;
    ctr++;
  }

  res.send({
    "TotalOpenIssuesCount":openIssuesCount,
    "LastOneDayOpenedIssuesCount":last1DayCount,
    "LastSevenDaysButMoreThanOneDayCount":last7DaysCount-last1DayCount,
    "BeforeSevenDaysIssuesCount":openIssuesCount-last7DaysCount
  });
});

app.listen(3000,() => {
  console.log("Server started!");
});
