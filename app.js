var http = new easyHTTP

http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {

    if(err) {
        console.log(err)
    } else {
        console.log(posts)
    }
})

var data = {
    title: 'hello new post',
    body: 'hello post request'
}

http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
    if(err) {
        console.log(err)
    } else {
        console.log(post)
    }
})

var update = {
    title: 'hello new put',
    body: 'hello update'
}

// We just have to define a number at the end of our route..that tells us which
// post we have to put(update)
http.put('https://jsonplaceholder.typicode.com/posts/100', update, function(err, post) {
    if(err) {
        console.log(err)
    } else {
        console.log(post)
    }
})

http.delete('https://jsonplaceholder.typicode.com/posts/10', function(err, post) {
    if(err) {
        console.log(err)
    } else {
        console.log(post)
    }
})