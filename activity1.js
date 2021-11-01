score=0;

function Update()
{
    score=score+1;
    document.getElementById("points").innerHTML="Score: "+score;

}

function savescore()
{
    localStorage.setItem("points" , score);

}

function nextpage()
{
    window.location="activity_2.html"
}