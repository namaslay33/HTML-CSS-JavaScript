document.getElementById('myForm').addEventListener('submit', saveBookmark);
// submit is the event I'm listening for, next parameter is the function I want to call

//Save bookmark
function saveBookmark(e){

    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;
    console.log(siteName + " " + siteUrl);

    //Created bookmark object which has 2 keys: name and url
    var bookmark = {
        name: siteName,
        url: siteUrl
    }
    console.log(bookmark);

    // LocalStorage.setItem('test', 'Hellol World');
    // console.log("Before: " + LocalStorage.getItem('test'));
    // LocalStorage.removeItem('test');
    // console.log("After removal: " + LocalStorage.getItem('test'));

    // Seeing if bookmarks is null
    if(localStorage.getItem('bookmarks') === null){
        //Creating array
        var bookmarks = [];
        //Adding value to array
        bookmarks.push(bookmark);
        //
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    e.preventDefault();
    //prevents the form's default behavior; without this the form is actually submitting and will erase your console
}
