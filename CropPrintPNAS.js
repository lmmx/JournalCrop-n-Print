var d = ['Art','Bleed','Trim','Crop'];

var o;

function n() { return this.numPages; }

function a() { return this; }



app.addMenuItem({cName:"Crop and Print PNAS",cParent:"Help", cExec:"for(var p=0;p<n();p++){o=a().getPageBox(d[3],p);o[0]+=36;o[1]-=45;o[2]-=40;o[3]+=50;if(p%2==1){o[2]+=5;};for(b=0;b<4;b++){a().setPageBoxes(d[b],p,p,o)}};this.print();"});
