var d = ['Art','Bleed','Trim','Crop'];
var o;
function n() { return this.numPages; }
function a() { return this; }

app.addMenuItem({cName:"Crop for Biochem. J.",cParent:"Crop and Print", cExec:"for(var p=0;p<n();p++){o=a().getPageBox(d[3],p);o[0]+=38;o[1]-=60;o[2]-=41;o[3]+=36.5;for(b=0;b<4;b++){a().setPageBoxes(d[b],p,p,o)}};this.print();"});
