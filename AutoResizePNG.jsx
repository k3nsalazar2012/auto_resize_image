#target photoshop
app.preferences.rulerUnits = Units.PIXELS;

var length = app.documents.length;
var index;
for(index=0; index<length; ++index)
{
	var document = app.activeDocument;
	var width = document.width;
	var height = document.height;
	
	if(width%4!=0)
	{		
		var newWidth = Math.ceil(width/4) * 4;
		width = newWidth;
	}
	if(height%4!=0)
	{
		var newHeight = Math.ceil(height/4) * 4;
		height = newHeight;
	}
	
	document.resizeCanvas(width, height);
	
	var file = new File(document.path);
	var saveOptions = new PNGSaveOptions();
	document.saveAs(file, saveOptions, false, Extension.LOWERCASE);
	document.close();
	//alert(document.name + " | width: " + width + " | height: " + height);
}