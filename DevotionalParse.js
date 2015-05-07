
    $(document).ready(function() {
    
    
        $('<li class="ms-core-suiteLink"><a class="ms-core-suiteLink-a" href="http://mail.habitat.org" target="_blank"><img style="width:40px;" src="http://preview.globalshare.habitat.org/SPDev1/Publishing/SiteAssets/images/owa2.png"></a></li>').appendTo('.ms-core-suiteLinkList');
        $('#ctl00_ctl55_ctl03_ShellDocuments').appendTo('#cd-primary-na');
        $('#ctl00_ctl55_ctl03_ShellDocuments').html('<img style="width:40px;"src="http://preview.globalshare.habitat.org/SPDev1/Publishing/SiteAssets/images/OneDrive2.gif" />')
        $('#suiteBar').hide(0);
        $("#DeltaSuiteLinks")
            .appendTo(".cd-header-buttons");
        $("#DeltaSuiteBarRight").prependTo("#s4-ribbonrow");
        $("#RibbonContainer-TabRowRight").prependTo("#s4-ribbonrow");
        $("#DeltaPageStatusBar").prependTo("#s4-workspace");
    });

    setTimeout(function() {
        $.ajax({

            url: "http://preview.globalshare.habitat.org/SPDev1/Publishing/_api/lists/getbytitle('Devotionals Rotator')/items",
            type: "GET",
            headers: {
                "accept": "application/json;odata=verbose",
            },
            success: function(data) {
                $.each(data.d.results, function(index, item) {
                    var Region = item.Region

                    //US Check//
                    if (window.location.href.indexOf("US") >= 0) {
                        if (Region == "All") {
                            $('#Devotionals').prepend("<div><strong>" + item.Date + ": " + item.Title + "</strong> <p>" + item.Description + "<a href='" + item.URL + "'> Read More</></p></div>")
                        }
                        if (Region == "US") {
                            $('#Devotionals').prepend("<div><strong>" + item.Date + ": " + item.Title + "</strong> <p>" + item.Description + "<a href='" + item.URL + "'> Read More</></p></div>")
                        }
                    }
                    //End US Check//
                    //AP Check//
                    if (window.location.href.indexOf("AP") >= 0) {
                        if (Region == "All") {
                            $('#Devotionals').prepend("<div><strong>" + item.Date + ": " + item.Title + "</strong> <p>" + item.Description + "<a href='" + item.URL + "'> Read More</></p></div>")
                        }
                        if (Region == "AP") {
                            $('#Devotionals').prepend("<div><strong>" + item.Date + ": " + item.Title + "</strong> <p>" + item.Description + "<a href='" + item.URL + "'> Read More</></p></div>")
                        }
                    }
                    //End AP Check//
                    //EMEA Check//
                    if (window.location.href.indexOf("EMEA") >= 0) {
                        if (Region == "All") {
                            $('#Devotionals').prepend("<div><strong>" + item.Date + ": " + item.Title + "</strong> <p>" + item.Description + "<a href='" + item.URL + "'> Read More</></p></div>")
                        }
                        if (Region == "EMEA") {
                            $('#Devotionals').prepend("<div><strong>" + item.Date + ": " + item.Title + "</strong> <p>" + item.Description + "<a href='" + item.URL + "'> Read More</></p></div>")
                        }
                    }
                    //End EMEA Check//
                    //LAC Check//
                    if (window.location.href.indexOf("LAC") >= 0) {
                        if (Region == "All") {
                            $('#Devotionals').prepend("<div><strong>" + item.Date + ": " + item.Title + "</strong> <p>" + item.Description + "<a href='" + item.URL + "'> Read More</></p></div>")
                        }
                        if (Region == "LAC") {
                            $('#Devotionals').prepend("<div><strong>" + item.Date + ": " + item.Title + "</strong> <p>" + item.Description + "<a href='" + item.URL + "'> Read More</></p></div>")
                        }
                    }
                    //End LAC Check//

                });
            },
            error: function(error) {

            }

        });
    }, 1000);

