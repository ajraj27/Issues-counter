//import axios from '../node_modules/axios/index.js';

const submitBtn=document.querySelector('.submitBtn');
const dataValue1=document.querySelector('.data-1');
const dataValue2=document.querySelector('.data-2');
const dataValue3=document.querySelector('.data-3');
const dataValue4=document.querySelector('.data-4');

submitBtn.addEventListener('click',async (e) => {
    e.preventDefault();
    const url=document.querySelector('input[type=text]').value;

    if(url){
        const res=await axios({
            method:'post',
            url:'/getIssuesInfo',
            data:{url}
        });

        dataValue1.innerHTML=res.data["TotalOpenIssuesCount"];
        dataValue2.innerHTML=res.data["LastOneDayOpenedIssuesCount"];
        dataValue3.innerHTML=res.data[ "LastSevenDaysButMoreThanOneDayCount"];
        dataValue4.innerHTML=res.data["BeforeSevenDaysIssuesCount"];
    }
    
    else{
        console.log("Enter something");
    }
});





