const userleft = false
const userWatchingCatMeme = false

function WatchRipperEsportsPromise() {
    return new Promise((resolve , reject) => {
        if(userleft){
            reject({
                name: 'User Left ' ,
                message: ":("
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme: ' ,
                message: 'Nobody Loves You, they love Cat :('
            })
        } else {
            resolve('Join Our Community and leave a like :) ')
        }
    })
}

WatchRipperEsportsPromise().then((message) => {
    console.log('Success: '+ message)
}).catch((error) => {
    console.log(error.name + error.message)
})