function arroz()
{
var n1= parseFloat(document.getElementById("primeiro").value);
var n2= parseFloat (document.getElementById("segundo").value);
var r=(n1+n2);
if(isNaN(n1)||(n1 ===""))
{
window.alert("Digite um valor")
}
else if(isNaN(n2)||(n2 ===""))
{
window.alert("Digite o segundo valor")
 }
 else{
document.getElementById("resp").value=r;
 }
}