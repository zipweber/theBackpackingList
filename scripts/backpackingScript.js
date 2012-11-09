		function add() {
		
		var el, i=0;
		var weight = 0;
		var tw = document.getElementById('totalWeight');
		while (el = document.getElementsByName("chk2")[i++]) {
		if (el.checked){weight = weight + Number(el.value);}
		}
		tw.value = weight + " pounds";
		}
		
		function changeValue(){
		var dw = document.getElementById('itemWeight');
		
			alert("I have not hooked this up to a database yet. Unable to change values at this time")
			}
		
        function addRow(itemTable) {
 
            var table = document.getElementById(itemTable);
 
            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);
 
 			var cell1 = row.insertCell(0);
            var element1 = document.createElement("input");
            element1.type = "checkbox";
			cell1.align = "center";
            cell1.appendChild(element1);
 
            var cell2 = row.insertCell(1);
            cell2.innerHTML = rowCount;
			
			var cell3 = row.insertCell(2);
            var element3 = document.createElement("input");
            element3.type = "text";
			element3.size = "48";
            cell3.appendChild(element3);
			
			var cell4 = row.insertCell(3);
            var element4 = document.createElement("input");
            element4.type = "text";
			element4.size = "10";
            cell4.appendChild(element4);
			
			var cell5 = row.insertCell(4);
            var element5 = document.createElement("input");
            element5.type = "text";
			element5.size = "7";
            cell5.appendChild(element5);			
			
			var cell6 = row.insertCell(5);
            var element6 = document.createElement("input");
            element6.type = "checkbox";
			cell6.align = "center";
            cell6.appendChild(element6);
			

 
        }
		function deleteRow(tableID) {
            try {
            var table = document.getElementById(tableID);
            var rowCount = table.rows.length;
 
            for(var i=0; i<rowCount; i++) {
                var row = table.rows[i];
                var chkbox = row.cells[0].childNodes[0];
                if(null != chkbox && true == chkbox.checked) {
                    table.deleteRow(i);
                    rowCount--;
                    i--;
                }
 
            }
            }catch(e) {
                alert(e);
            }
        }