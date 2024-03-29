<script>
    fetch('vopros/1.html')
    .then(response => response.text())
    .then(html => document.getElementById('content').innerHTML = html);
</script>