$(document).ready(function(){
	var quotationData;
	var companyData;
	var terms;
	
	$.ajax({
        type: "GET",
        url: "../../../GetCompanyInfo",
        success: function(data)
        {
        	companyData=data;
        	$("#cname").text(companyData.data[0].companyName+" ,");
        	$("#caddr").text(companyData.data[0].location+" ,");
        	$("#ccity").text(companyData.data[0].city+" ,");
        	var altCont=companyData.data[0].altContactNumber;
        	$("#ccontact").text(companyData.data[0].landlineNo+" ," +altCont);
        	$("#cemail").text(companyData.data[0].emailid+"");
        	$("#clogo").html(companyData.data[0].logo);
        }
	});
	
    $('#revise').on('click', function () {
    	window.location.href = 'quotation.jsp?qid='+$('#qid').val();
    });

    $('#order').on('click', function () {
    	window.location.href = '../Order/order.jsp?qid='+$('#qid').val()+'&cid='+$('#cid').val();
    });
	
	$.ajax({
        type: "GET",
        url: "../../../GetQuotationDetails?selectedQuotationId="+$("#qid").val(),
        success: function(data)
        {
        	$('#cid').val(data.data[0].clientId);
        	var serviceTax = data.data[0].serviceTax;
        	var totalAmt=0;
        	var totalDiscount=0;
        	var serTax = 0;
        	var taxApplicableAmt=[];
        	var totalTaxPayableForSame = 0;
        	var totalTaxPayableForDiff = 0;
        	var taxDetailsArr=[];
        	var taxArr = [];
        	var objAmount=[];
        	var ArrayAmount=[];
        	var totalchrg = 0;
        	quotationData = data;
        	var totalAmountPTax = 0;
        	var serviceTaxTotal =0;
        	var cgst=0;
        	var cgstTotal=0;
        	var igst=0;
        	var igstTotal=0;
        	var sgst=0;
        	var sgstTotal=0;
        	var igst=0;
        	var tfootData="";
        	$("#clientName").text(quotationData.data[0].clientName+" ,");
        	$("#projectName").text(quotationData.data[0].projectName);
        	var date_create=quotationData.data[0].createdDate;
        	$("#qDate").text(date_create);
        	for(var i=0; i<quotationData.data.length;i++){
        		var tbodyData=	"<tr>"+
				        		"<td style='text-align: center'>"+(i+1)+"</td>";
				        		if(quotationData.data[i].additionalInfo == "")
				        		{
				        			tbodyData += "<td class='left'>"+quotationData.data[i].description +"</td>";
				        		}
				        		else
				        		{
				        			tbodyData += "<td class='left'>"+quotationData.data[i].description +" ("+quotationData.data[i].additionalInfo+")"+"</td>";
				        		}
        		if(quotationData.data[i].imgName!="")
        		{
        			tbodyData +="<td><center><img src='../../../files/"+quotationData.data[i].imgName+"' alt='No Image' style='max-width: 60px;max-height: 60px;' ></td>";
        		}
        		else
        		{
        			tbodyData +="<td><center><img src='../../../Images/upload.png' alt='No Image' style='max-width: 60px;max-height: 60px;' ></td>";
        		}
        			tbodyData +="<td class='left'>"+quotationData.data[i].HsnName+"</td>"+
				                "<td class='right'>"+quotationData.data[i].quantity+"</td>"+
				                "<td class='right'>"+quotationData.data[i].rate+"</td>"+
				                "<td class='right'>"+quotationData.data[i].tax+"%</td>"+
				                "<td class='right'>"+quotationData.data[i].discount+"%</td>"+
				                "<td class='right'>"+quotationData.data[i].amount.toFixed(2)+"</td>"+
				                "</tr>";
				                $("#sameState").val(quotationData.data[i].isSameState);
				taxDetailsArr.push({tax:quotationData.data[i].tax, name:quotationData.data[i].HsnName,cgst:quotationData.data[i].Cgst, sgst:quotationData.data[i].Sgst,igst:quotationData.data[i].Igst,isSameState:quotationData.data[0].isSameState});
				taxDetailsArr.push({tax:quotationData.data[i].serviceTax, name:"serviceTax"});
				taxArr.push(quotationData.data[i].tax,quotationData.data[i].serviceTax);
				
        		totalAmt+=parseFloat(quotationData.data[i].amount);
//        		totalAmountPTax+=parseFloat(quotationData.data[i].totalAmount);
        		totalAmountPTax+=parseFloat(quotationData.data[i].amount-(parseInt(quotationData.data[i].amount)*parseInt(quotationData.data[i].discount)/100));
        		totalDiscount +=(parseInt(quotationData.data[i].amount)*parseInt(quotationData.data[i].discount)/100);
        		$("#totalamt").html(totalAmt.toFixed(2));
        		$("#totaldscnt").html(totalDiscount.toFixed(2));
        		$("#totalamtaftrdsnct").html((totalAmt-totalDiscount).toFixed(2));
        		document.querySelector('#quotationbody').insertAdjacentHTML('beforeend', tbodyData);
        	}
			//for finding unique tax from taxDetailsArr on basis of tax of taxArr
        	var uniqueTax = taxDetailsArr.filter(function(itm, i, a) {
        	    return i == taxArr.indexOf(itm.tax);
        	});
        	
//        	var objAmount=[];
        	//finding the total amount according to the unique tax & storing it in associative array objamount
    		for(var i=0; i<uniqueTax.length;i++){
    			for(var j=0; j<quotationData.data.length;j++){
    				if(uniqueTax[i].tax==quotationData.data[j].tax){
    					if (objAmount[uniqueTax[i].tax]){
    						objAmount[uniqueTax[i].tax] = parseFloat(objAmount[uniqueTax[i].tax])+parseFloat(quotationData.data[j].amount)-(parseInt(quotationData.data[j].amount)*parseInt(quotationData.data[j].discount)/100); 
    					}
    					else{
    						objAmount[uniqueTax[i].tax] = parseFloat(quotationData.data[j].amount)-(parseInt(quotationData.data[j].amount)*parseInt(quotationData.data[j].discount)/100); 
    					}
    				}
    			}
    		}
    		
    		//for cleaning objAmount array and pushing valid values in arrayAmount
    		objAmount.forEach(function(element, index) {
    		    if(element != undefined || index  != undefined){
        		    ArrayAmount.push({index,element});
    		    }
    		});
    		
    		for(var k=0;k<=ArrayAmount.length;k++){
    			if(ArrayAmount[k]!=undefined){
    				if(quotationData.data[0].serviceTax==ArrayAmount[k].index){
    	    			ArrayAmount[k].element=ArrayAmount[k].element+parseFloat(quotationData.data[0].installationChrg)+parseFloat(quotationData.data[0].transportationChrg)+parseFloat(quotationData.data[0].packagingChrg);
    	    			break;
    				}
    			}else{
    				ArrayAmount.push({index:quotationData.data[0].serviceTax,element:parseFloat(quotationData.data[0].installationChrg)+parseFloat(quotationData.data[0].transportationChrg)+parseFloat(quotationData.data[0].packagingChrg)});
    				break;
	    		}
    		}
    		totalchrg = parseFloat(quotationData.data[0].installationChrg)+parseFloat(quotationData.data[0].transportationChrg)+parseFloat(quotationData.data[0].packagingChrg);
    		totalAmountPTax+=parseFloat(totalchrg);
    		var charges=	"<tr>"+
				                "<td colspan='8' class='right'>"+"Installation Charges (GST @ "+serviceTax+"%)</td>"+
				                "<td class='right'>"+parseInt(quotationData.data[0].installationChrg).toFixed(2)+"</td>"+
			                "</tr>"+
			                "<tr>"+
				                "<td colspan='8' class='right'>"+"Transportation Charges (GST @ "+serviceTax+"%)</td>"+
				                "<td class='right'>"+parseInt(quotationData.data[0].transportationChrg).toFixed(2)+"</td>"+
			                "</tr>"+
			                "<tr>"+
				                "<td colspan='8' class='right'>"+"Packaging Charges (GST @ "+serviceTax+"%)</td>"+
				                "<td class='right'>"+parseInt(quotationData.data[0].packagingChrg).toFixed(2)+"</td>"+
			                "</tr>";
			document.querySelector('#quotationfoot').insertAdjacentHTML('beforeend', charges);  
			
			for(var i=0;i<ArrayAmount.length;i++){
				var taxCalc=0;
				taxCalc=parseFloat(ArrayAmount[i].element)*parseFloat(ArrayAmount[i].index)/100;
				tfootData="<tr>"+
							"<td colspan='8' class='right'>"+"GST @ "+ArrayAmount[i].index+"%</td>"+
			                "<td class='right'>"+taxCalc.toFixed(2)+"</td>"+
			               "</tr>";
				serviceTaxTotal= serviceTaxTotal+taxCalc;
				document.querySelector('#quotationfoot').insertAdjacentHTML('beforeend', tfootData);   
			}
        	var tfootDataPayableAmt="<tr>"+
						    		"<td colspan='8' style='text-align: right'><b>Total Payable Amount</b></td>"+
						    		"<td id='totalamt' class='right'>"+Math.round((totalAmountPTax)+parseFloat(serviceTaxTotal)).toFixed(2)+"</td>"+
						    		"</tr>";
        	var tfootbankDFetails="<tr>"+
						    		"<td colspan='4' style='text-align: left'><b><u>Terms & Conditions :</b></u>" +
						    		"<label id='tmvalue'></label>"+
						    		"</td>"+
						    		"<td  colspan='5' class='left'>" +
						    		"<b>Name :</b>"+companyData.data[0].companyName+"<br>"+
						    		"<b>Bank : </b>"+companyData.data[0].Bank+"<br>"+
									"<b>Address : </b>"+companyData.data[0].BankAddress+"<br>"+
									"<b>A/C no :</b>"+companyData.data[0].AccountNo+"<br>"+
									"<b>IFSC Code :</b>"+companyData.data[0].IFSCCode+"<br>"+
									"<b>MIRC Code : </b>"+companyData.data[0].MIRCCode+"<br>"+
						    		"</td>"+
						    		"</tr>";
        	var signature=	"<tr>"+
				    		"<td colspan='4' style='text-align: right'><b>Signature</b></td>"+
				    		"<td colspan='4' rowspan='2' class='right'></td>"+
				    		"</tr>";
        	
        	 document.querySelector('#quotationfoot').insertAdjacentHTML('beforeend', tfootDataPayableAmt);
        	 document.querySelector('#quotationfoot').insertAdjacentHTML('beforeend', tfootbankDFetails);
        	 document.querySelector('#quotationfoot').insertAdjacentHTML('beforeend', signature);
        	 
        	 $.ajax({
        	        type: "GET",
        	        url: "../../../GetTermsAndConditions",
        	        success: function(data)
        	        {
        	        	terms=data;
        	        	$("#tmvalue").html(terms.data[0].value);
        	        	
        	        }
        		});
        }
    });
	
});