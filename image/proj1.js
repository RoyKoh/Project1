
function MyReason(){
    var reason = prompt("Reason");
    document.getElementById("reason").value = reason;
    document.getElementById("form").submit();
}

function Retry(){
prompt("Do you want to retry? Y(es) to refresh and N(o) to send result to your parent by selected media (Y/N)")
}
<button onclick="getElementById('demo').innerHTML=Date()">What is the time?</button>


// Button click before show date time on html page //
<p>Click the button to display the time.</p>
<button onclick="getElementById('demo').innerHTML=Date()">What is the time?</button>
<p id="demo"></p>


// To get input from text box and assign to a variable //
<script type = "text/javascript">
function doIt(val) {
document.getElementById("theResult").innerHTML = val;
}
</script>

<input type = "text" id = "txt" onblur = "doIt(this.value)">
<br><br>
<span id = "theResult"></span>

onkeyup="res(this,'abcd');"

<p id="demo" onclick="myFunction()">Click me to change my HTML content (innerHTML).</p>

<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed!";
}
</script>
