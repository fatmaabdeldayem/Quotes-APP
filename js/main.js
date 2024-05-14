var output1=document.getElementById("Quota");
var output2=document.getElementById("Quota-owner");



var quotas=[
    {pharse: '"Be yourself; everyone else is already taken." ',own:"-Oscar Wilde"},
    {pharse:'"So many books, so little time."',own:"-Frank Zappa"},
    {pharse:'"Two things are infinite: the universe and human stupidity; and I am not sure about the universe."',own:"-Albert Einstein"},
    {pharse:'"Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind."',own:"-Bernard M. Baruch"},
    {pharse:'"You have gotta dance like there is nobody watching,Love like you wil never be hurt,Sing like there is nobody listening,And live like it is heaven on earth."',own:"-William W. Purkey"},
    {pharse:'"If you tell the truth, you do not have to remember anything."',own:"― Mark Twain"},
    {pharse:'" a sand castle, you must first teach the wave to be gentle, because art cannot be born from rudeness!"',own:"-Mehmet Murat ildan"},
    {pharse:'"the wave to build a sand castle, you must first teach the wave to be gentle, because art cannot be born from rudeness!"',own:"-Mehmet Murat ildan"},
    {pharse:'" teach the wave to build a sand castle, you must first teach the wave to be gentle, because art cannot be born from rudeness!"',own:"-Mehmet Murat ildan"},
    {pharse:'"you must first teach the wave to be gentle, because art cannot be born from rudeness!"',own:"-Mehmet Murat ildan"}
    

]



var checkNum=[]
var randomnum

function randomfunc(){
         randomnum=Math.floor(Math.random(1)*10);
         
     }
   




function thequota(){

    randomfunc()
   
  if(checkNum.length==0){
    console.log("random="+randomnum)
checkNum.push(randomnum)
output1.innerHTML=quotas[randomnum].pharse;
output2.innerHTML=quotas[randomnum].own;
  }
  else{
    while(checkNum[checkNum.length-1]==randomnum){
        randomfunc()
        
    }
   checkNum.push(randomnum)
   if(checkNum[0]!=randomnum){
    console.log("random="+randomnum)
             output1.innerHTML=quotas[randomnum].pharse;
             output2.innerHTML=quotas[randomnum].own;
             checkNum.splice(0,(checkNum.length-1))
         }
   
            
  }
    
    

    
}