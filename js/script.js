/* #6 start the #external #action and say hello */
console.log("App is alive");
var currentChannel;
var currentLocation = "kicks.pasta.steer";

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channelName) {
    //Log the channel switch
    console.log("Tuning in to channel", '#'+channelName.name);
    currentChannel = channelName;

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = '#'+ channelName.name;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/upgrading.never.helps" target="_blank"><strong>'+channelName.createdBy+'</strong></a>';

    /* #6 #liking channels on #click */
    /* $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png'); */
    /* $('#channel-star').html('<i class="far fa-star" onclick="star()"></i>'); */
    $('#channel-star').html('<i class='+(channelName.starred?"\"fas fa-star\"" : "\"far fa-star\"")+' onclick="star()"></i>');

    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName.name + ')').addClass('selected');

}

/* #6 #liking a channel on #click */
function star() {
    /* $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png'); */
    $('#channel-star').find('i').toggleClass('far fa-star fas fa-star');
    currentChannel.starred = !currentChannel.starred;
}

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}
