/*Adobe Illustrators Javascript.
   Convert Rectangles to lines Sample code.
*/

(function (){
	var tg = app.selection;
	for (var i=0;i<tg.length;i++){
		if (tg[i].typename!="PathItem") continue;
		var ln = app.activeDocument.pathItems.add();
		ln.filled = false;
		ln.strokeColor = tg[i].fillColor;
		if (tg[i].width>tg[i].height){
			addPoint(ln, [tg[i].geometricBounds[0],
					tg[i].geometricBounds[1] - tg[i].height / 2]);
			addPoint(ln, [tg[i].geometricBounds[2],
					tg[i].geometricBounds[1] - tg[i].height / 2]);
			ln.strokeWidth = tg[i].height;
			}
		else{
			addPoint(ln, [tg[i].geometricBounds[0] + tg[i].width / 2,
					tg[i].geometricBounds[1]]);
			addPoint(ln, [tg[i].geometricBounds[0] + tg[i].width / 2,
					tg[i].geometricBounds[3]]);
			ln.strokeWidth = tg[i].width;
			}
		tg[i].remove();
		}
	function addPoint(tgt, pos){
		var pt = tgt.pathPoints.add();
		pt.anchor = pos;
		pt.leftDirection = pos;
		pt.rightDirection = pos;
		}
	}
)();
