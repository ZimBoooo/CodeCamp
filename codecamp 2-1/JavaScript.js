// output
var myList=document.getElementsByTagName("LI");
function myFunction(){
    var text_input=document.getElementById("nhap").value;
    var node=document.createElement("LI");
    var textnode=document.createTextNode(text_input);
    node.appendChild(textnode);
    node.innerHTML+='<span class = "x" >X</span>';
    document.getElementById("list").appendChild(node);
}
// delete line
var i;
var close = document.getElementsByClassName("complete");
for(i=0; i<close.length; i++)
{
    close[i].onclick = function (i) {
        close[i].className="complete";
    }
}


