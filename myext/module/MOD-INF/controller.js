var html = "text/html";
var encoding = "UTF-8";
var ClientSideResourceManager = Packages.com.google.refine.ClientSideResourceManager;


/*
 * Function invoked to initialize the extension.
 */
function init() {
	// Write to console Initializing myext extension
	Packages.java.lang.System.err.println("Initializing myext extension");
	Packages.java.lang.System.err.println(module.getMountPoint());
	
	// Script files to inject into /project page
	ClientSideResourceManager.addPaths(
		"project/scripts",
		module,
		[
			"scripts/project-injection.js",
			"scripts/menu.js"
		]
	);
	
	// Style files to inject into /project page
	ClientSideResourceManager.addPaths(
    "project/styles",
		module,
		[
			"styles/project-injection.less"
		]
	);
	
	// Sample func. reg.
	//Packages.com.google.refine.grel.ControlFunctionRegistry.registerFunction("AddTest", new Packages.io.mehmet.AddTest());
}



/*
 * Function invoked to handle each request in a custom way.
 */
function process(path, request, response) {
  // Analyze path and handle this request yourself.

  if (path == "/" || path == "") {
    var context = {};
    send(request, response, "index.vt", context);
  }
}

function send(request, response, template, context) {
  butterfly.sendTextFromTemplate(request, response, context, template, encoding, html);
}
