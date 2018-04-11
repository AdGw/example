console.log(process);
let output = `<h3>App Versions</h3>
	<br><br><h3 class = "page-header" style="text-align:center;></h3>
	<ul class = "list-group">
		<li class = "list-group-item">Node: ${process.versions.node}</li>
		<li class = "list-group-item">Chrome: ${process.versions.chrome}</li>
		<li class = "list-group-item">Electron: ${process.versions.electron}</li>
	</ul>
	<br>
	<h3>System Specs</h3>
	<br><br><h3 class = "page-header" style="text-align:center;></h3>
	<ul class = "list-group">
		<li class = "list-group-item">System Architecture: ${process.arch}</li>
		<li class = "list-group-item">Processor Identifier: ${process.env.PROCESSOR_IDENTIFIER}</li>
		<li class = "list-group-item">Printer: ${process.env.PRINTER}</li>
	</ul>
	<br>
	<h3>System Memory</h3>
	<br><br><h3 class = "page-header" style="text-align:center;></h3>
	<ul class = "list-group">
		<li class = "list-group-item">Total: ${process.getSystemMemoryInfo().total}</li>
		<li class = "list-group-item">Free: ${process.getSystemMemoryInfo().free}</li>
	</ul>
	<br>
	<h3>Computer Info</h3>
	<br><br><h3 class = "page-header" style="text-align:center;></h3>
	<ul class = "list-group">
		<li class = "list-group-item">Computer Name: ${process.env.USERDOMAIN}</li>
		<li class = "list-group-item">Username: ${process.env.USERNAME}</li>
		<li class = "list-group-item">User Home Path: ${process.env.HOME}</li>
		<li class = "list-group-item">System Drive: ${process.env.SYSTEMDRIVE}</li>
		<li class = "list-group-item">System Root: ${process.env.SYSTEMROOT}</li>
	</ul>`;

document.getElementById('output').innerHTML = output;