//import axios from '../node_modules/axios/index.js';

const submitBtn=document.querySelector('.submitBtn');
const dataValue1=document.querySelector('.data-1');
const dataValue2=document.querySelector('.data-2');
const dataValue3=document.querySelector('.data-3');
const dataValue4=document.querySelector('.data-4');
const backdrop=document.querySelector('.Backdrop');

submitBtn.addEventListener('click',async (e) => {
    e.preventDefault();
    const url=document.querySelector('input[type=text]').value;

    if(url){
        console.log(backdrop.style);
        backdrop.style.display="block";
        console.log("hey");
        
        const res=await axios({
            method:'post',
            url:'/getIssuesInfo',
            data:{url}
        });

        dataValue1.innerHTML=res.data["TotalOpenIssuesCount"];
        dataValue2.innerHTML=res.data["LastOneDayOpenedIssuesCount"];
        dataValue3.innerHTML=res.data[ "LastSevenDaysButMoreThanOneDayCount"];
        dataValue4.innerHTML=res.data["BeforeSevenDaysIssuesCount"];

        backdrop.style.display="none";
    }
    
    else{
        alert("Enter url exactly of the form : https://github.com/{username}/{repo_name}");
    }
});





