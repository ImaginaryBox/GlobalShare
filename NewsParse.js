
    setTimeout(function() {
        $.ajax({

            url: "http://preview.globalshare.habitat.org/SPDev1/Publishing/_api/lists/getbytitle('Global Share News')/items",
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
                            $('.sp-slides').append("<div class='sp-slide'><img class='sp-image' src='" + item.Image + "'/><h3 class='sp-layer sp-black' style='width:100%;padding-top:10px;padding-bottom:10px;padding-left:5px;padding-right:5px; font-size:20pt;'data-position='bottomLeft' data-horizontal='0%'data-show-transition='left' data-show-delay='300' data-hide-transition='right'>" + item.Byline + "<a target='_blank' href='" + item.URL + "'> Read More</a></h3></div>")

                            $('.sp-thumbnails').append("<div class='sp-thumbnail'><div class='sp-thumbnail-image-container'><img class='sp-thumbnail-image' src='" + item.Image + "'/></div><div class='sp-thumbnail-text'><div class='sp-thumbnail-title'>" + item.Title + "</div><div class='sp-thumbnail-description'>" + item.Description + "</div></div></div>")

                        }
                        if (Region == "US") {
                            $('.sp-slides').append("<div class='sp-slide'><img class='sp-image' src='" + item.Image + "'/><h3 class='sp-layer sp-black' style='width:100%;padding-top:10px;padding-bottom:10px;padding-left:5px;padding-right:5px; font-size:20pt;'data-position='bottomLeft' data-horizontal='0%'data-show-transition='left' data-show-delay='300' data-hide-transition='right'>" + item.Byline + "<a target='_blank' href='" + item.URL + "'> Read More</a></h3></div>")

                            $('.sp-thumbnails').append("<div class='sp-thumbnail'><div class='sp-thumbnail-image-container'><img class='sp-thumbnail-image' src='" + item.Image + "'/></div><div class='sp-thumbnail-text'><div class='sp-thumbnail-title'>" + item.Title + "</div><div class='sp-thumbnail-description'>" + item.Description + "</div></div></div>")
                        }
                    }
                    //End US Check//
                    //AP Check//
                    if (window.location.href.indexOf("AP") >= 0) {
                        if (Region == "All") {
                            $('.sp-slides').append("<div class='sp-slide'><img class='sp-image' src='" + item.Image + "'/><h3 class='sp-layer sp-black' style='width:100%;padding-top:10px;padding-bottom:10px;padding-left:5px;padding-right:5px; font-size:20pt;'data-position='bottomLeft' data-horizontal='0%'data-show-transition='left' data-show-delay='300' data-hide-transition='right'>" + item.Byline + "<a target='_blank' href='" + item.URL + "'> Read More</a></h3></div>")

                            $('.sp-thumbnails').append("<div class='sp-thumbnail'><div class='sp-thumbnail-image-container'><img class='sp-thumbnail-image' src='" + item.Image + "'/></div><div class='sp-thumbnail-text'><div class='sp-thumbnail-title'>" + item.Title + "</div><div class='sp-thumbnail-description'>" + item.Description + "</div></div></div>")

                        }
                        if (Region == "AP") {
                            $('.sp-slides').append("<div class='sp-slide'><img class='sp-image' src='" + item.Image + "'/><h3 class='sp-layer sp-black' style='width:100%;padding-top:10px;padding-bottom:10px;padding-left:5px;padding-right:5px; font-size:20pt;'data-position='bottomLeft' data-horizontal='0%'data-show-transition='left' data-show-delay='300' data-hide-transition='right'>" + item.Byline + "<a target='_blank' href='" + item.URL + "'> Read More</a></h3></div>")

                            $('.sp-thumbnails').append("<div class='sp-thumbnail'><div class='sp-thumbnail-image-container'><img class='sp-thumbnail-image' src='" + item.Image + "'/></div><div class='sp-thumbnail-text'><div class='sp-thumbnail-title'>" + item.Title + "</div><div class='sp-thumbnail-description'>" + item.Description + "</div></div></div>")
                        }
                    }
                    //End AP Check//
                    //EMEA Check//
                    if (window.location.href.indexOf("EMEA") >= 0) {
                        if (Region == "All") {
                            $('.sp-slides').append("<div class='sp-slide'><img class='sp-image' src='" + item.Image + "'/><h3 class='sp-layer sp-black' style='width:100%;padding-top:10px;padding-bottom:10px;padding-left:5px;padding-right:5px; font-size:20pt;'data-position='bottomLeft' data-horizontal='0%'data-show-transition='left' data-show-delay='300' data-hide-transition='right'>" + item.Byline + "<a target='_blank' href='" + item.URL + "'> Read More</a></h3></div>")

                            $('.sp-thumbnails').append("<div class='sp-thumbnail'><div class='sp-thumbnail-image-container'><img class='sp-thumbnail-image' src='" + item.Image + "'/></div><div class='sp-thumbnail-text'><div class='sp-thumbnail-title'>" + item.Title + "</div><div class='sp-thumbnail-description'>" + item.Description + "</div></div></div>")

                        }
                        if (Region == "EMEA") {
                            $('.sp-slides').append("<div class='sp-slide'><img class='sp-image' src='" + item.Image + "'/><h3 class='sp-layer sp-black' style='width:100%;padding-top:10px;padding-bottom:10px;padding-left:5px;padding-right:5px; font-size:20pt;'data-position='bottomLeft' data-horizontal='0%'data-show-transition='left' data-show-delay='300' data-hide-transition='right'>" + item.Byline + "<a target='_blank' href='" + item.URL + "'> Read More</a></h3></div>")

                            $('.sp-thumbnails').append("<div class='sp-thumbnail'><div class='sp-thumbnail-image-container'><img class='sp-thumbnail-image' src='" + item.Image + "'/></div><div class='sp-thumbnail-text'><div class='sp-thumbnail-title'>" + item.Title + "</div><div class='sp-thumbnail-description'>" + item.Description + "</div></div></div>")
                        }
                    }
                    //End EMEA Check//
                    //LAC Check//
                    if (window.location.href.indexOf("LAC") >= 0) {
                        if (Region == "All") {
                            $('.sp-slides').append("<div class='sp-slide'><img class='sp-image' src='" + item.Image + "'/><h3 class='sp-layer sp-black' style='width:100%;padding-top:10px;padding-bottom:10px;padding-left:5px;padding-right:5px; font-size:20pt;'data-position='bottomLeft' data-horizontal='0%'data-show-transition='left' data-show-delay='300' data-hide-transition='right'>" + item.Byline + "<a target='_blank' href='" + item.URL + "'> Read More</a></h3></div>")

                            $('.sp-thumbnails').append("<div class='sp-thumbnail'><div class='sp-thumbnail-image-container'><img class='sp-thumbnail-image' src='" + item.Image + "'/></div><div class='sp-thumbnail-text'><div class='sp-thumbnail-title'>" + item.Title + "</div><div class='sp-thumbnail-description'>" + item.Description + "</div></div></div>")

                        }
                        if (Region == "LAC") {
                            $('.sp-slides').append("<div class='sp-slide'><img class='sp-image' src='" + item.Image + "'/><h3 class='sp-layer sp-black' style='width:100%;padding-top:10px;padding-bottom:10px;padding-left:5px;padding-right:5px; font-size:20pt;'data-position='bottomLeft' data-horizontal='0%'data-show-transition='left' data-show-delay='300' data-hide-transition='right'>" + item.Byline + "<a target='_blank' href='" + item.URL + "'> Read More</a></h3></div>")

                            $('.sp-thumbnails').append("<div class='sp-thumbnail'><div class='sp-thumbnail-image-container'><img class='sp-thumbnail-image' src='" + item.Image + "'/></div><div class='sp-thumbnail-text'><div class='sp-thumbnail-title'>" + item.Title + "</div><div class='sp-thumbnail-description'>" + item.Description + "</div></div></div>")
                        }
                    }
                    //End LAC Check//
                });
            },
            error: function(error) {

            }
        });
    }, 1000);

    console.log("1 is done");
