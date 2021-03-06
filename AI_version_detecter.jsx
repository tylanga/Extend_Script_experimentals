//Illustrator version detecter.

var fileNm = File.openDialog("select base file");
var flObj = new File (fileNm);
var f = flObj.open ("r");
var tgtStr = /Creator/;
var re1 = /%%Creator:\sAdobe\sIllustrator.*\s+(\d+\.?\d*)/;
var re2 = /%%AI8_CreatorVersion:\s(\d+\.\d+\.\d+)/;
var rslt = [];
var f1 = false; f2 = false;

if (f) {
	var st = "\n";
	while(!flObj.eof){
        tmp = flObj.readln();
        if (tgtStr.test(tmp)){
			if (!f1) {
				if (tmp.match(re1)!=null) {
					tmp.match(re1);
					rslt.unshift(RegExp.$1);
					f1 = true;
					}
				}
			if (!f2) {
				if (tmp.match(re2)!=null) {
					tmp.match(re2);
					rslt.push(RegExp.$1);
					f2 = true;
					}
				}
			if (f1 && f2) break
            }
        }
	flObj.close();
	if (f1 && f2) {
		st += "File Version: " + rslt[0] + "\n";
		st += "Creator Version: " + rslt[1];
	}
	else if(!f1 && !f2){
		st = "Detection Error.\nCould not read file informations."
		}
	else if(f1 && !f2){
		st += "File Version: " + rslt[0];
		}
 	else if(!f1 && f2){
		st += "Creator Version: " + rslt[0];
		}
	alert (st);
	}
