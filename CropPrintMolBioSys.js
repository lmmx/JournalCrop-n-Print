var d = ['Art','Bleed','Trim','Crop'];
var o;
function n() { return this.numPages; }
function a() { return this; }

app.addMenuItem({cName:"Crop for Mol. Biosys.",cParent:"Crop and Print", cExec:"for(var p=0;p<n();p++){o=a().getPageBox(d[3],p);o[0]+=47;o[1]-=56;o[2]-=46;o[3]+=46;for(b=0;b<4;b++){a().setPageBoxes(d[b],p,p,o)}};this.print();"});
