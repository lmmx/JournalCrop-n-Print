var d = ['Art','Bleed','Trim','Crop'];
var o;
function n() { return this.numPages; }
function a() { return this; }

app.addMenuItem({cName:"Crop for PNAS",cParent:"Crop and Print", cExec:"for(var p=0;p<n();p++){o=a().getPageBox(d[3],p);o[0]+=35.6;o[1]-=64;o[2]-=27.5;o[3]+=34;if(p%2==1){o[0]-=7.3;o[2]-=11};for(b=0;b<4;b++){a().setPageBoxes(d[b],p,p,o)}};this.print();"});
