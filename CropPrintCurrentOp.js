app.addMenuItem({cName:"Crop for BBA",cParent:"Crop and Print", cExec:"for(var p=0;p<n();p++){o=a().getPageBox('BBox',p);o[1]-=10;o[2]-=5;if (p==0){o[1]-=65};for(b=0;b<4;b++){a().setPageBoxes(d[b],p,p,o)}};this.print();"});
