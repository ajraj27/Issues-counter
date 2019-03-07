const axios=require('axios');
const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.json());

app.post('/getIssuesInfo',async(req,res) => {
  //console.log(req.body);
  const url=req.body.url;
  const arrUrl=url.split("/");
  const apiUrl=`https://api.github.com/repos/${arrUrl[3]}/${arrUrl[4]}`;
   console.log(apiUrl);
  let openIssuesCount=await axios.get(apiUrl);
  openIssuesCount=openIssuesCount.data.open_issues_count;
  res.send({openIssuesCount})
});

app.listen(3000,() => {
  console.log("Server started!");
});


// // fetch('https://api.github.com/repos/octocat/Hello-World').then((res) => {
// //   return res.json();
// // }).then((res) => {
// //   console.log(`Open Issues Count: ${res.open_issues_count}`);
// // }).catch((err) => console.log(err));
//
// async function getTotalOpenIssuesCount(){
//   const res=await axios.get('https://api.github.com/repos/octocat/Hello-World');
//   return res;
//
// }
//
// const count= await getTotalOpenIssuesCount();
// console.log(count);
//
//
//
// const curTime=new Date().getTime();
// const oneDayTime=1*24*60*60*1000;
// const last1DayTimeISO=new Date(curTime-oneDayTime).toISOString();
// const last7DaysTimeISO=new Date(curTime-7*oneDayTime).toISOString();
//
//  console.log(last1DayTimeISO);
//  console.log(last7DaysTimeISO);
//
//  var flag=true,ctr=1,sum=0;
//
//  // while(flag){
//  //   console.log(flag,ctr,sum);
//  //   fetch(`https://api.github.com/repos/octocat/Hello-World/issues?page=${ctr}`)
//  //   .then((res) => res.json())
//  //   .then((res) => {
//  //     console.log("Hello");
//  //     if(res.length===0){
//  //       flag=false;
//  //     }
//  //     sum+=res.length;
//  //   })
//  //   .catch((err) => console.log(err));
//  //   ctr++;
//  // }
//
// // fetch('https://api.github.com/repos/octocat/Hello-World/issues')
// // .then((res) => res.json())
// // .then((res) => console.log(res))
// // .catch((err) => console.log(err));
