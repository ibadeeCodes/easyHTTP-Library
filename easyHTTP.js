function easyHTTP() {
    this.http = new XMLHttpRequest()
}

easyHTTP.prototype.get = function(url,callback) {
    
    this.http.open('GET', url, true)

    let self = this //for lexical scoping else we can also use arrow function for prevention.

    this.http.onload = function() {
        if(self.http.status == 200) {
            callback(null, self.http.responseText)
            // console.log(self.http.status)
        } else {
            callback('error', self.http.status);
        }
    }

    this.http.send()
}

easyHTTP.prototype.post = function(url, data, callback) {
    
    this.http.open('POST', url, true)

    this.http.setRequestHeader('content-type','application/json')

    let self = this //for lexical scoping

    this.http.onload = function() {
        callback(null, self.http.responseText)
    }

    this.http.send(JSON.stringify(data))
}

easyHTTP.prototype.put = function(url, data, callback) {
    
    this.http.open('PUT', url, true)

    this.http.setRequestHeader('content-type','application/json')

    let self = this //for lexical scoping

    this.http.onload = function() {
        callback(null, self.http.responseText)
    }

    this.http.send(JSON.stringify(data))
}

easyHTTP.prototype.delete = function(url,callback) {
    
    this.http.open('DELETE', url, true)

    let self = this //for lexical scoping

    this.http.onload = function() {
        if(self.http.status == 200) {
            callback(null, 'post deleted successfully!')
            // console.log(self.http.status)
        } else {
            callback('error', self.http.status);
        }
    }

    this.http.send()
}

