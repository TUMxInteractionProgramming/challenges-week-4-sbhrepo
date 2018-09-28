/* #6 start the #external #action and say hello */
console.log("App is alive");
var currentChannel;

/* currentLocation = [longitude, latitude, what3words]; */
var currentLocation = [40.704235, -73.917929, "kicks.pasta.steer"];

var currentLocation1 = {
    longitude:40.704235,
    latitude:-73.917929,
    what3words:"kicks.pasta.steer"
};

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

function Message(text) {
    this.createdBy = currentLocation[2];
    this.longitude = currentLocation[0];
    this.latitude = currentLocation[1];
    this.createdOn = new Date();
    this.expiresOn = 15;
    this.text = text;
    this.own = true;
}

function sendMessage(textMessage) {
    console.log("new message created");
    if (textMessage == '') return;
    var message = new Message(textMessage);
    createMessageElement(message);
    document.getElementById('message-input').value = ''
}

function dayOfTheWeek(date) {
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    return weekday[date.getDay()];
}

function month(date) {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    return month[date.getMonth()];
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function createMessageElement(messageObject) {
    var outputDate = dayOfTheWeek(messageObject.createdOn) + ', ' + month(messageObject.createdOn) + ' ' + messageObject.createdOn.getDate() + 'th, ' + addZero(messageObject.createdOn.getHours()) +':'+ addZero(messageObject.createdOn.getMinutes());
    var message_string = '<div class="message"><h3><a href=":createdBy:" target="_blank"><strong>'+messageObject.createdBy+'</strong></a>'+outputDate+' <em>'+messageObject.expiresOn+' min. left</em></h3><p>'+messageObject.text+'</p><button>+5 min.</button></div>';
    $('<div>').html(message_string).addClass('text-white').appendTo('#messages');
}