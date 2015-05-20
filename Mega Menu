 $.ajax({

        url: "http://preview.globalshare.habitat.org/_api/lists/getbytitle('Mega Menu')/items",
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
        },
        success: function(data) {
            $.each(data.d.results, function(index, item) {
                var Section = item.Section
                var Region = item.Region

                //US Check//
                if (window.location.href.indexOf("US") >= 0) {
				if (Region == "US"){
				
                if (Section == "InSite"){
				$("#NavInSite").append("<li><a href='"+item.URL+"'>"+item.Title+"</a></li>")
				}
				if (Section == "Collaboration"){
				$("#NavCollab").append("<li><a href='"+item.URL+"'>"+item.Title+"</a></li>")
				}
				if (Section == "Other"){
				$("#NavOther").append("<li><a href='"+item.URL+"'>"+item.Title+"</a></li>")
				}
                }
                }
                //End US Check//

                //EMEA Check//
                if (window.location.href.indexOf("EMEA") >= 0) {
 				if (Region == "EMEA"){
				
                if (Section == "InSite"){
				$("#NavInSite").append("<li><a href='"+item.URL+"'>"+item.Title+"</a></li>")
				}
				if (Section == "Collaboration"){
				$("#NavCollab").append("<li><a href='"+item.URL+"'>"+item.Title+"</a></li>")
				}
				if (Section == "Other"){
				$("#NavOther").append("<li><a href='"+item.URL+"'>"+item.Title+"</a></li>")
				}
                }                

                }
                //End EMEA Check//
                
				//AP Check//
                if (window.location.href.indexOf("AP") >= 0) {
				if (Region == "AP"){
				
                if (Section == "InSite"){
				$("#NavInSite").append("<li><a href='"+item.URL+"'>"+item.Title+"</a></li>")
				}
				if (Section == "Collaboration"){
				$("#NavCollab").append("<li><a href='"+item.URL+"'>"+item.Title+"</a></li>")
				}
				if (Section == "Other"){
				$("#NavOther").append("<li><a href='"+item.URL+"'>"+item.Title+"</a></li>")
				}
                }

                }
                //End AP Check//
                //LAC Check//
                if (window.location.href.indexOf("LAC") >= 0) {
				if (Region == "LAC"){
				
                if (Section == "InSite"){
				$("#NavInSite").append("<li><a href='"+item.URL+"'>"+item.Title+"</a></li>")
				}
				if (Section == "Collaboration"){
				$("#NavCollab").append("<li><a href='"+item.URL+"'>"+item.Title+"</a></li>")
				}
				if (Section == "Other"){
				$("#NavOther").append("<li><a href='"+item.URL+"'>"+item.Title+"</a></li>")
				}
                }

                }
                //End LAC Check//

            });
        },
        error: function(error) {

        }

    });
});
