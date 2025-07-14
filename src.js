<script type="text/javascript">
$.get('https://ipapi.co/country/', function(country){
console.log(country)
})

if (country = "ID") {
  window.location.replace("https://www.google.com");
}
else if (country = ["FR","IT","DE","CH"]) {
  window.location.replace("EU.html");
}
else {
  window.location.replace("US.html");
}

</script>
