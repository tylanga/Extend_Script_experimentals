var w = app.dialogs.add();
w.name = "Parameters";
w.canCancel = true;
var tg = w.dialogColumns.add();
var xg = tg.dialogRows.add();
xg.staticTexts.add({staticLabel:"x1:"});
var x = xg.textEditboxes.add();
x.editContents = "0";

var yg = tg.dialogRows.add();
yg.staticTexts.add({staticLabel:"y1:"});
var y = yg.textEditboxes.add();
y.editContents = "0";

var wdg = tg.dialogRows.add();
wdg.staticTexts.add({staticLabel:"x2:"});
var wd = wdg.textEditboxes.add();
wd.editContents = "210";

var hg = tg.dialogRows.add();
hg.staticTexts.add({staticLabel:"y2:"});
var h = hg.textEditboxes.add();
h.editContents = "297";

var lst = ["cropMedia","cropTrim","cropArt","cropBleed","cropPdf"];
var dd = tg.dropdowns.add();
dd.stringList = lst 
dd.selectedIndex = 0;


if(w.show()){
	var bds = [
		Number(y.editContents),
		Number(x.editContents),
		Number(h.editContents),
		Number(wd.editContents)];
	var crop = lst[dd.selectedIndex];
	w.destroy();
	main(bds,crop);
	}
else {
	w.destroy();
	}


function main(bds,crop){
	var tgt = app.activeDocument;
	fNm = File.openDialog("select PDF file");
	var f = new File (fNm);
	var pgLen = pg;

	var num = 1;
	var pNum = 1;
	var flg = false;
	var i = 0;
	var pg = tgt.pages[i];
	eval("app.pdfPlacePreferences.pdfCrop = PDFCrop."+crop);
	while(!flg){
		app.pdfPlacePreferences.pageNumber = pNum++;
		rect = pg.rectangles.add();
		rect.strokeColor = tgt.swatches.item(0);
		rect.fillColor = tgt.swatches.item(0);
		rect.place(f);
		rect.geometricBounds = bds;
		rect.fit(FitOptions.PROPORTIONALLY);
		rect.fit(FitOptions.CENTER_CONTENT);
		if(i>1&&rect.graphics[0].itemLink.parent.pdfAttributes.pageNumber == num) {
			pg.remove();
			break;
			}
		i++;
		pg = tgt.pages.add();
		}
	}
