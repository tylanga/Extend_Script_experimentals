var w = new Window ("dialog", 'properties');
w.orientation = "column";
var gp = w.add('group',[0,0,80,30]);

var bt0 = gp.add ("button", [0,0,15,15], "close", {name: "ok"});
var gx0 = bt0.graphics;
bt0.onClick= function(){alert("colour0");w.close();}
bt0.onDraw = function(){	
	gx0.newPath();
	gx0.rectPath(0,0,15,15);
	gx0.fillPath(gx0.newBrush(gx0.BrushType.SOLID_COLOR, [0,0.5,0, 1], 1));
	}

var bt1 = gp.add ("button", [15,0,15,15], "close", {name: "ok"});
var gx1 = bt1.graphics;
bt1.onClick= function(){alert("colour1");w.close();}
bt1.onDraw = function(){	
	gx1.newPath();
	gx1.rectPath(0,0,15,15);
	gx1.fillPath(gx1.newBrush(gx1.BrushType.SOLID_COLOR, [0,0.2,0.5, 1], 1));
	}

var bt2 = gp.add ("button", [30,0,15,15], "close", {name: "ok"});
var gx2 = bt2.graphics;
bt2.onClick= function(){alert("colour2");w.close();}
bt2.onDraw = function(){	
	gx2.newPath();
	gx2.rectPath(0,0,15,15);
	gx2.fillPath(gx2.newBrush(gx2.BrushType.SOLID_COLOR, [0,0.2,0.8, 1], 1));
	}

var bt3 = gp.add ("button", [45,0,15,15], "close", {name: "ok"});
var gx3 = bt3.graphics;
bt3.onClick= function(){alert("colour3");w.close();}
bt3.onDraw = function(){	
	gx3.newPath();
	gx3.rectPath(0,0,15,15);
	gx3.fillPath(gx3.newBrush(gx3.BrushType.SOLID_COLOR, [1,0.6,0, 1], 1));
	}

var bt4 = gp.add ("button", [60,0,15,15], "close", {name: "ok"});
var gx4 = bt4.graphics;
bt4.onClick= function(){alert("colour4");w.close();}
bt4.onDraw = function(){	
	gx4.newPath();
	gx4.rectPath(0,0,15,15);
	gx4.fillPath(gx4.newBrush(gx4.BrushType.SOLID_COLOR, [0,0,0, 1], 1));
	}

var bt5 = gp.add ("button", [0,15,15,15], "close", {name: "ok"});
var gx5 = bt5.graphics;
bt5.onClick= function(){alert("colour5");w.close();}
bt5.onDraw = function(){	
	gx5.newPath();
	gx5.rectPath(0,0,15,15);
	gx5.fillPath(gx5.newBrush(gx5.BrushType.SOLID_COLOR, [1,1,0, 1], 1));
	}

var bt6 = gp.add ("button", [15,15,15,15], "close", {name: "ok"});
var gx6 = bt6.graphics;
bt6.onClick= function(){alert("colour6");w.close();}
bt6.onDraw = function(){	
	gx6.newPath();
	gx6.rectPath(0,0,15,15);
	gx6.fillPath(gx6.newBrush(gx6.BrushType.SOLID_COLOR, [1,0,0.75, 1], 1));
	}

var bt7 = gp.add ("button", [30,15,15,15], "close", {name: "ok"});
var gx7 = bt7.graphics;
bt7.onClick= function(){alert("colour7");w.close();}
bt7.onDraw = function(){	
	gx7.newPath();
	gx7.rectPath(0,0,15,15);
	gx7.fillPath(gx7.newBrush(gx7.BrushType.SOLID_COLOR, [0,0.8,0.8, 1], 1));
	}

var bt8 = gp.add ("button", [45,15,15,15], "close", {name: "ok"});
var gx8 = bt8.graphics;
bt8.onClick= function(){alert("colour8");w.close();}
bt8.onDraw = function(){	
	gx8.newPath();
	gx8.rectPath(0,0,15,15);
	gx8.fillPath(gx8.newBrush(gx8.BrushType.SOLID_COLOR, [0.5,0.8,0.4, 1], 1));
	}

var bt9 = gp.add ("button", [60,15,15,15], "close", {name: "ok"});
var gx9 = bt9.graphics;
bt9.onClick= function(){alert("colour9");w.close();}
bt9.onDraw = function(){	
	gx9.newPath();
	gx9.rectPath(0,0,15,15);
	gx9.fillPath(gx9.newBrush(gx9.BrushType.SOLID_COLOR, [1,1,1, 1], 1));
	}

w.show();
